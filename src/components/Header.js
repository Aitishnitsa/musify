import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ logout }) => {
    const [showMenu, setShowMenu] = useState(true);
    const [showToggleBtn, setShowToggleBtn] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (window.innerWidth < 768) {
            setShowToggleBtn(true);
        } else {
            setShowToggleBtn(false);
            setShowMenu(true);
        }
    }, [])

    return (
        <header className="h-[7vh] bg-customBlack m-0 py-2 px-2 md:px-16 flex items-center justify-between">
            <a href="https://open.spotify.com/">
                <svg width="121" height="36" viewBox="0 0 121 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M118.109 17.6002C117.852 17.601 117.597 17.5508 117.359 17.4526C117.121 17.3544 116.905 17.2101 116.723 17.0281C116.541 16.846 116.397 16.6298 116.299 16.3918C116.202 16.1538 116.152 15.8988 116.153 15.6414C116.153 14.5664 117.019 13.6712 118.121 13.6712C118.378 13.6704 118.633 13.7206 118.871 13.8188C119.109 13.917 119.325 14.0613 119.507 14.2433C119.689 14.4254 119.833 14.6416 119.931 14.8796C120.029 15.1176 120.079 15.3726 120.078 15.63C120.078 16.1522 119.87 16.653 119.501 17.0225C119.132 17.3919 118.632 17.5997 118.109 17.6002ZM118.121 13.8663C117.888 13.8645 117.657 13.9093 117.441 13.998C117.226 14.0867 117.03 14.2176 116.866 14.3829C116.701 14.5483 116.572 14.7448 116.485 14.9609C116.397 15.177 116.354 15.4084 116.357 15.6414C116.357 16.617 117.111 17.4032 118.109 17.4032C118.342 17.4047 118.573 17.3598 118.788 17.2712C119.004 17.1825 119.199 17.0518 119.363 16.8867C119.528 16.7216 119.657 16.5254 119.745 16.3096C119.832 16.0939 119.876 15.8628 119.873 15.63C119.877 15.3983 119.834 15.1683 119.747 14.9535C119.661 14.7387 119.532 14.5433 119.369 14.379C119.205 14.2146 119.011 14.0846 118.797 13.9966C118.582 13.9085 118.353 13.8642 118.121 13.8663ZM118.553 15.8308L119.108 16.6074H118.641L118.144 15.8959H117.713V16.6074H117.323V14.5511H118.241C118.718 14.5511 119.031 14.796 119.031 15.2072C119.031 15.5439 118.836 15.7505 118.553 15.8308ZM118.224 14.9031H117.713V15.5535H118.224C118.479 15.5535 118.63 15.4291 118.63 15.2283C118.63 15.0179 118.477 14.9031 118.224 14.9031ZM93.732 8.16982C93.2029 8.16957 92.6953 8.37952 92.321 8.7535C91.9466 9.12747 91.7362 9.63484 91.7359 10.164C91.7357 10.6931 91.9456 11.2007 92.3196 11.575C92.6936 11.9493 93.2009 12.1598 93.7301 12.16C94.2595 12.16 94.7672 11.9497 95.1415 11.5754C95.5158 11.2011 95.7261 10.6934 95.7261 10.164C95.7261 9.63459 95.5158 9.12688 95.1415 8.75254C94.7672 8.37821 94.2595 8.16791 93.7301 8.16791M95.1073 13.6961H92.326C92.2721 13.6966 92.2205 13.7184 92.1825 13.7567C92.1446 13.795 92.1233 13.8468 92.1233 13.9007V26.0397C92.1233 26.1545 92.2132 26.2444 92.326 26.2444H95.1092C95.1635 26.2444 95.2156 26.2229 95.254 26.1845C95.2924 26.1461 95.3139 26.094 95.3139 26.0397V13.9007C95.3139 13.8465 95.2924 13.7944 95.254 13.756C95.2156 13.7176 95.1616 13.6961 95.1073 13.6961ZM101.294 13.7075V13.325C101.294 12.1926 101.728 11.6876 102.701 11.6876C103.281 11.6876 103.746 11.8023 104.27 11.9783C104.301 11.9887 104.333 11.9916 104.366 11.9867C104.398 11.9818 104.428 11.9693 104.454 11.9502C104.481 11.931 104.502 11.9059 104.516 11.8768C104.531 11.8478 104.538 11.8157 104.538 11.7832V9.43996C104.538 9.39616 104.523 9.35357 104.497 9.31845C104.471 9.28334 104.434 9.25753 104.392 9.24485C103.642 9.01576 102.862 8.9035 102.078 8.91201C99.5088 8.91201 98.1507 10.36 98.1507 13.0973V13.6865H96.8136C96.7597 13.6865 96.7079 13.7078 96.6695 13.7458C96.6312 13.7837 96.6094 13.8353 96.6089 13.8893V16.2937C96.6089 16.4066 96.7007 16.4984 96.8136 16.4984H98.1507V26.0436C98.1507 26.1545 98.2406 26.2463 98.3535 26.2463H101.137C101.191 26.2458 101.242 26.224 101.28 26.1857C101.318 26.1474 101.339 26.0956 101.339 26.0417V16.4965H103.937L107.918 26.0417C107.466 27.0421 107.023 27.2429 106.416 27.2429C105.925 27.2429 105.408 27.0956 104.88 26.8068C104.856 26.7937 104.829 26.7856 104.801 26.783C104.774 26.7803 104.746 26.7832 104.719 26.7915C104.693 26.8006 104.668 26.8152 104.647 26.8343C104.627 26.8534 104.61 26.8766 104.599 26.9024L103.656 28.9702C103.634 29.0169 103.631 29.0702 103.647 29.1193C103.663 29.1683 103.697 29.2094 103.742 29.2342C104.727 29.7679 105.617 29.9955 106.715 29.9955C108.769 29.9955 109.905 29.0391 110.906 26.4625L115.734 13.9868C115.746 13.9559 115.751 13.9224 115.748 13.8892C115.744 13.856 115.732 13.8241 115.714 13.7965C115.695 13.7689 115.67 13.7463 115.64 13.7308C115.611 13.7153 115.578 13.7073 115.544 13.7075H112.648C112.606 13.708 112.565 13.7215 112.531 13.7461C112.497 13.7708 112.471 13.8054 112.457 13.8453L109.488 22.3211L106.236 13.8395C106.222 13.8009 106.196 13.7675 106.162 13.744C106.128 13.7204 106.088 13.7077 106.047 13.7075H101.294ZM90.6255 13.6961H87.5649V10.5647C87.5649 10.5379 87.5596 10.5114 87.5493 10.4867C87.539 10.462 87.5239 10.4395 87.5049 10.4207C87.4858 10.4018 87.4633 10.3869 87.4384 10.3768C87.4136 10.3668 87.387 10.3617 87.3603 10.362H84.577C84.5234 10.3625 84.4721 10.384 84.4342 10.4219C84.3963 10.4598 84.3748 10.5111 84.3743 10.5647V13.6961H83.0353C83.0085 13.6961 82.982 13.7014 82.9572 13.7117C82.9325 13.722 82.9101 13.7371 82.8912 13.7561C82.8724 13.7752 82.8575 13.7977 82.8474 13.8226C82.8373 13.8474 82.8323 13.874 82.8325 13.9007V16.2918C82.8325 16.4047 82.9243 16.4965 83.0353 16.4965H84.3743V22.6827C84.3743 25.1847 85.6176 26.451 88.0738 26.451C89.0723 26.451 89.8986 26.2463 90.6791 25.8045C90.7106 25.7867 90.7368 25.7609 90.7549 25.7296C90.7731 25.6983 90.7826 25.6627 90.7824 25.6266V23.3503C90.7829 23.3154 90.7743 23.2809 90.7576 23.2503C90.7409 23.2196 90.7165 23.1938 90.6869 23.1753C90.6573 23.1569 90.6234 23.1464 90.5885 23.1448C90.5536 23.1433 90.5189 23.1508 90.4878 23.1666C89.9522 23.4363 89.4338 23.5607 88.8542 23.5607C87.9609 23.5607 87.563 23.1571 87.563 22.2485V16.4965H90.6236C90.6505 16.4967 90.6773 16.4916 90.7022 16.4814C90.7272 16.4712 90.7498 16.4562 90.7689 16.4371C90.7879 16.4181 90.803 16.3954 90.8132 16.3704C90.8234 16.3455 90.8285 16.3188 90.8283 16.2918V13.9007C90.8285 13.874 90.8235 13.8474 90.8134 13.8226C90.8033 13.7977 90.7884 13.7752 90.7696 13.7561C90.7507 13.7371 90.7283 13.722 90.7035 13.7117C90.6788 13.7014 90.6523 13.6961 90.6255 13.6961ZM75.952 13.4417C72.2028 13.4417 69.2627 16.3301 69.2627 20.0162C69.2627 23.664 72.1817 26.5199 75.9061 26.5199C79.6687 26.5199 82.6164 23.6429 82.6164 19.9702C82.6164 16.309 79.6897 13.4417 75.952 13.4417ZM75.952 23.6984C73.9569 23.6984 72.4514 22.0954 72.4514 19.9683C72.4514 17.8355 73.9052 16.288 75.9061 16.288C77.9146 16.288 79.4257 17.891 79.4257 20.0181C79.4257 22.1509 77.9662 23.6984 75.952 23.6984ZM62.5352 13.4417C60.9666 13.4417 59.6812 14.0595 58.6215 15.3239V13.9007C58.6215 13.8468 58.6002 13.795 58.5622 13.7567C58.5242 13.7184 58.4727 13.6966 58.4187 13.6961H55.6355C55.5815 13.6966 55.53 13.7184 55.492 13.7567C55.454 13.795 55.4327 13.8468 55.4327 13.9007V29.7201C55.4327 29.831 55.5245 29.9228 55.6355 29.9228H58.4187C58.4723 29.9223 58.5236 29.9008 58.5615 29.8629C58.5994 29.825 58.621 29.7737 58.6215 29.7201V24.7275C59.6831 25.9154 60.9685 26.4969 62.5352 26.4969C65.4466 26.4969 68.3943 24.255 68.3943 19.9702C68.3943 15.6854 65.4485 13.4417 62.5352 13.4417ZM65.1596 19.9702C65.1596 22.1509 63.8149 23.6755 61.8905 23.6755C59.9872 23.6755 58.5526 22.082 58.5526 19.9702C58.5526 17.8584 59.9872 16.265 61.8905 16.265C63.7843 16.265 65.1596 17.8221 65.1596 19.9702ZM49.0227 16.508C45.9163 15.7658 45.3634 15.2455 45.3634 14.1532C45.3634 13.1203 46.3352 12.4259 47.7813 12.4259C49.1815 12.4259 50.5722 12.952 52.0278 14.0385C52.0495 14.0545 52.0742 14.0661 52.1004 14.0725C52.1266 14.079 52.1538 14.0802 52.1805 14.0761C52.2071 14.072 52.2327 14.0627 52.2558 14.0487C52.2788 14.0347 52.2989 14.0163 52.3148 13.9945L53.8336 11.854C53.8631 11.8117 53.8755 11.7598 53.8684 11.7088C53.8613 11.6577 53.8352 11.6112 53.7953 11.5785C52.0623 10.186 50.1092 9.51073 47.8272 9.51073C44.4701 9.51073 42.1269 11.5231 42.1269 14.4057C42.1269 17.495 44.1488 18.5892 47.6436 19.4327C50.6162 20.1175 51.1192 20.6914 51.1192 21.7186C51.1192 22.8548 50.1054 23.5607 48.4699 23.5607C46.6565 23.5607 45.1779 22.9486 43.5214 21.5177C43.4799 21.4825 43.4265 21.4647 43.3722 21.468C43.3452 21.4701 43.3189 21.4776 43.2949 21.4901C43.2709 21.5026 43.2497 21.5198 43.2325 21.5407L41.5301 23.5645C41.4954 23.6049 41.4781 23.6573 41.482 23.7104C41.486 23.7635 41.5108 23.8128 41.5511 23.8476C43.4268 25.547 45.8701 26.4837 48.4011 26.474C52.0164 26.474 54.3539 24.498 54.3539 21.4412C54.3539 18.857 52.8102 17.4281 49.0227 16.5061M18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0ZM26.2559 25.9613C26.1792 26.0874 26.0784 26.197 25.9593 26.2841C25.8401 26.3711 25.7049 26.4337 25.5615 26.4683C25.4181 26.503 25.2692 26.509 25.1235 26.486C24.9778 26.463 24.838 26.4115 24.7122 26.3343C20.4848 23.752 15.1671 23.1685 8.90053 24.5994C8.75697 24.6321 8.60836 24.6363 8.46318 24.6117C8.318 24.587 8.1791 24.534 8.05441 24.4557C7.92972 24.3774 7.82167 24.2752 7.73645 24.1551C7.65122 24.0351 7.59049 23.8994 7.5577 23.7558C7.52492 23.6122 7.52074 23.4636 7.54539 23.3184C7.57004 23.1733 7.62305 23.0344 7.70138 22.9097C7.77971 22.785 7.88184 22.6769 8.00193 22.5917C8.12202 22.5065 8.25771 22.4457 8.40127 22.413C15.257 20.8444 21.139 21.5197 25.8829 24.4196C26.4108 24.7428 26.5773 25.4334 26.2559 25.9613ZM28.4557 21.0606C28.261 21.3773 27.9487 21.6038 27.5873 21.6906C27.2258 21.7774 26.8447 21.7173 26.5275 21.5235C21.6899 18.549 14.3139 17.6882 8.59065 19.4251C8.24243 19.5077 7.87582 19.4544 7.56553 19.2761C7.25525 19.0977 7.02465 18.8078 6.92074 18.4653C6.81683 18.1228 6.84743 17.7536 7.0063 17.433C7.16518 17.1123 7.44036 16.8642 7.77577 16.7394C14.3139 14.7558 22.4397 15.718 27.9947 19.1305C28.152 19.2269 28.2888 19.3533 28.3972 19.5026C28.5056 19.6519 28.5836 19.8211 28.6266 20.0005C28.6696 20.18 28.6768 20.3661 28.6478 20.5483C28.6188 20.7305 28.5542 20.9053 28.4576 21.0625M28.6489 15.9571C22.8453 12.512 13.2733 12.1945 7.7356 13.8778C7.52309 13.9456 7.29922 13.9705 7.07701 13.951C6.85479 13.9315 6.63867 13.868 6.44119 13.7643C6.24372 13.6606 6.06883 13.5186 5.92669 13.3467C5.78455 13.1748 5.678 12.9763 5.61323 12.7629C5.54846 12.5494 5.52676 12.3252 5.54939 12.1033C5.57202 11.8814 5.63854 11.6662 5.74506 11.4702C5.85159 11.2742 5.99601 11.1014 6.16992 10.9617C6.34384 10.822 6.54378 10.7183 6.75813 10.6565C13.1146 8.72455 23.685 9.09947 30.3628 13.0629C30.7468 13.2907 31.0247 13.6617 31.1352 14.0943C31.2457 14.527 31.1798 14.9858 30.952 15.3698C30.7242 15.7539 30.3532 16.0317 29.9205 16.1422C29.4879 16.2527 29.0291 16.1868 28.6451 15.959"
                        fill="white" />
                </svg>
            </a>
            <nav className='flex'>
                <div className={`${showMenu && showToggleBtn ? "hidden" : "block"} flex space-x-1 md:space-x-2`}>
                    <Link to="/">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="white" />
                            <path d="M14.7451 6.54367C15.6047 5.81878 16.8617 5.81878 17.7213 6.54368L24.6462 12.3833C25.1662 12.8219 25.4664 13.4676 25.4664 14.1479V24.2047C25.4664 25.1962 24.6626 26 23.6711 26H20.0804C19.0888 26 18.285 25.1962 18.285 24.2047V18.5621C18.285 18.4206 18.1702 18.3057 18.0286 18.3057H14.4379C14.2962 18.3057 14.1814 18.4206 14.1814 18.5621V24.2047C14.1814 25.1962 13.3776 26 12.386 26H8.79535C7.8038 26 7 25.1962 7 24.2047V14.1479C7 13.4676 7.30013 12.8219 7.82024 12.3833L14.7451 6.54367ZM16.7292 7.72009C16.4427 7.47846 16.0237 7.47846 15.7372 7.72009L8.81228 13.5597C8.63892 13.7059 8.53887 13.9211 8.53887 14.1479V24.2047C8.53887 24.3463 8.6537 24.4611 8.79535 24.4611H12.386C12.5277 24.4611 12.6425 24.3463 12.6425 24.2047V18.5621C12.6425 17.5706 13.4463 16.7668 14.4379 16.7668H18.0286C19.0201 16.7668 19.8239 17.5706 19.8239 18.5621V24.2047C19.8239 24.3463 19.9387 24.4611 20.0804 24.4611H23.6711C23.8128 24.4611 23.9276 24.3463 23.9276 24.2047V14.1479C23.9276 13.9211 23.8275 13.7059 23.6541 13.5597L16.7292 7.72009Z" fill="#191414" />
                        </svg>
                    </Link>
                    <Link to="/search">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="white" />
                            <path d="M15.1667 21.8333C18.8486 21.8333 21.8333 18.8486 21.8333 15.1667C21.8333 11.4848 18.8486 8.5 15.1667 8.5C11.4848 8.5 8.5 11.4848 8.5 15.1667C8.5 18.8486 11.4848 21.8333 15.1667 21.8333Z" stroke="#191414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M23.5 23.5L19.875 19.875" stroke="#191414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link to="/account">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="white" />
                            <g clipPath="url(#clip0_15_681)">
                                <path d="M16 25.4167C21.2007 25.4167 25.4167 21.2007 25.4167 16C25.4167 10.7993 21.2007 6.58334 16 6.58334C10.7993 6.58334 6.58333 10.7993 6.58333 16C6.58333 21.2007 10.7993 25.4167 16 25.4167Z" stroke="#191414" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 18.4167C13.0833 18.4167 10.5833 20.0834 9.33333 22.5834C11 24.3334 13.4167 25.3334 16 25.3334C18.5833 25.3334 21 24.25 22.6667 22.5834C21.4167 20.1667 18.9167 18.4167 16 18.4167Z" stroke="#191414" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 16.25C17.6569 16.25 19 14.9069 19 13.25C19 11.5931 17.6569 10.25 16 10.25C14.3431 10.25 13 11.5931 13 13.25C13 14.9069 14.3431 16.25 16 16.25Z" stroke="#191414" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_15_681">
                                    <rect width="20" height="20" fill="white" transform="translate(6 6)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <button className="text-white" onClick={logout}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 12L15 8M19 12L15 16M19 12H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <button className={showToggleBtn ? "block" : "hidden"} onClick={toggleMenu} >
                    {showMenu ?
                        <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z" fill="white" />
                            <path d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z" fill="white" />
                            <path d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z" fill="white" />
                        </svg>
                        :
                        <svg height="28" version="1.1" viewBox="0 0 32 32" width="28" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z" fill="#fff" /><g /><g /><g /><g /><g /><g />
                        </svg>
                    }
                </button>
            </nav>
        </header>
    );
};

export default Header;