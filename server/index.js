const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');
const querystring = require('querystring');

const port = 5000;

global.access_token = '';

dotenv.config();

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const spotify_redirect_uri = 'http://localhost:3000/auth/callback';

const generateRandomString = function (length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const app = express();

app.get('/auth/login', (req, res) => {
    const scope = "streaming user-read-email user-read-private user-top-read playlist-read-private user-read-currently-playing user-read-playback-state user-modify-playback-state";
    const state = generateRandomString(16);

    const auth_query_parameters = new URLSearchParams({
        response_type: "code",
        client_id: spotify_client_id,
        scope: scope,
        redirect_uri: spotify_redirect_uri,
        state: state
    });

    res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
});

app.get('/auth/callback', async (req, res) => {
    const code = req.query.code || null;
    const state = req.query.state || null;

    if (state === null) {
        res.redirect('/#' + querystring.stringify({ error: 'state_mismatch' }));
    } else {
        const authOptions = {
            method: 'POST',
            url: 'https://accounts.spotify.com/api/token',
            data: new URLSearchParams({
                code: code,
                redirect_uri: spotify_redirect_uri,
                grant_type: 'authorization_code'
            }),
            headers: {
                'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        try {
            const response = await axios(authOptions);
            access_token = response.data.access_token;
            res.redirect('/');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            res.status(500).send('Authentication failed');
        }
    }
});

app.get('/auth/token', (req, res) => {
    console.log('Access Token:', access_token);
    res.setHeader('Content-Type', 'application/json');
    res.json({ access_token: access_token });
});

app.get('/auth/refresh_token', (req, res) => {
    const refresh_token = req.query.refresh_token;
    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64'))
        },
        data: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        })
    };

    axios.post(authOptions.url, authOptions.data, { headers: authOptions.headers })
        .then(response => {
            const access_token = response.data.access_token;
            res.send({
                'access_token': access_token,
                'refresh_token': response.data.refresh_token
            });
        })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
            res.status(500).send('Failed to refresh token');
        });
});

app.use(express.static(path.join(__dirname, '../build')));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});
