import './Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="container">
            <header className="header">
                <div className="header__left">
                    <div className="header__logo">
                        <Link to="/">
                            <svg
                                id="logo"
                                width="208"
                                height="64"
                                viewBox="0 0 208 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M102.336 10.31H98.943C97.071 10.31 96.564 10.349 95.823 11.714L90.87 20.801L85.995 11.714C85.293 10.349 84.786 10.31 82.914 10.31H79.287C78.117 10.31 77.961 11.012 78.468 11.909L87.633 27.158V36.401C87.633 37.61 88.023 38 89.232 38H92.391C93.561 38 93.99 37.61 93.99 36.401V27.236L103.155 11.909C103.662 11.012 103.506 10.31 102.336 10.31ZM125.595 36.44L116.274 11.558C115.923 10.544 115.416 10.31 114.324 10.31H111.321C110.229 10.31 109.761 10.544 109.371 11.636L100.05 36.44C99.6599 37.493 99.9329 38 101.103 38H103.794C105.744 38 106.251 37.688 106.641 36.557L107.889 32.891H117.522L118.731 36.557C119.082 37.688 119.667 38 121.617 38H124.542C125.673 38 125.985 37.493 125.595 36.44ZM113.856 21.698L115.884 27.743H109.566L111.594 21.659C112.53 18.89 112.491 16.121 112.491 16.121H112.881C112.881 16.121 112.959 18.89 113.856 21.698ZM146.992 10.31H136.033C134.863 10.31 134.434 10.7 134.434 11.909V36.401C134.434 37.61 134.863 38 136.033 38H147.148C152.452 38 156.352 35.27 156.352 30.317C156.352 26.885 154.987 24.623 152.608 23.609V23.453C154.519 22.127 155.299 20.333 155.299 17.681C155.299 12.962 152.179 10.31 146.992 10.31ZM148.864 18.578C148.864 20.411 147.85 21.23 146.017 21.23H140.791V15.926H146.017C147.85 15.926 148.864 16.784 148.864 18.578ZM149.683 29.576C149.683 31.487 148.708 32.384 146.758 32.384H140.791V26.729H146.758C148.708 26.729 149.683 27.704 149.683 29.576ZM182.506 36.44L173.185 11.558C172.834 10.544 172.327 10.31 171.235 10.31H168.232C167.14 10.31 166.672 10.544 166.282 11.636L156.961 36.44C156.571 37.493 156.844 38 158.014 38H160.705C162.655 38 163.162 37.688 163.552 36.557L164.8 32.891H174.433L175.642 36.557C175.993 37.688 176.578 38 178.528 38H181.453C182.584 38 182.896 37.493 182.506 36.44ZM170.767 21.698L172.795 27.743H166.477L168.505 21.659C169.441 18.89 169.402 16.121 169.402 16.121H169.792C169.792 16.121 169.87 18.89 170.767 21.698ZM183.262 20.216V28.094C183.262 34.568 187.396 38.585 194.767 38.585C202.177 38.585 206.311 34.568 206.311 28.094V20.216C206.311 13.742 202.177 9.725 194.767 9.725C187.396 9.725 183.262 13.742 183.262 20.216ZM199.954 20.099V28.211C199.954 31.253 198.082 32.774 194.767 32.774C191.491 32.774 189.619 31.253 189.619 28.211V20.099C189.619 17.057 191.491 15.536 194.767 15.536C198.082 15.536 199.954 17.057 199.954 20.099Z"
                                    fill="#231F20"
                                />
                                <path
                                    d="M83.2359 54.442V49.513H80.6877L80.6412 50.6662C80.6226 51.1002 80.5947 51.5125 80.5575 51.9031C80.5265 52.2875 80.4738 52.6378 80.3994 52.954C80.3312 53.2702 80.2351 53.5337 80.1111 53.7445C79.9871 53.9553 79.8352 54.0948 79.6554 54.163L78.3534 53.977C78.589 53.9894 78.7812 53.9088 78.93 53.7352C79.085 53.5616 79.2059 53.3198 79.2927 53.0098C79.3795 52.6998 79.4446 52.3371 79.488 51.9217C79.5314 51.5001 79.5624 51.0444 79.581 50.5546L79.6554 48.49H84.4263V54.442H83.2359ZM78.1302 56.3857L78.1395 53.977H85.3656V56.3857H84.2496V55H79.2555V56.3857H78.1302ZM86.4575 53.977C86.7985 54.0948 87.0992 54.1258 87.3596 54.07C87.62 54.0142 87.8525 53.8251 88.0571 53.5027L88.3733 53.0098L88.4942 52.8796L90.7634 48.49H91.9538L89.1266 53.7445C88.8972 54.1847 88.6244 54.5195 88.3082 54.7489C87.992 54.9783 87.651 55.1054 87.2852 55.1302C86.9256 55.1612 86.5505 55.093 86.1599 54.9256L86.4575 53.977ZM88.4663 53.9212L85.5647 48.49H86.8574L89.1266 52.9912L88.4663 53.9212ZM91.9225 48.49H93.3175L94.852 50.6662L96.3865 48.49H97.8001L95.6146 51.6148L97.9768 55H96.5446L94.852 52.6285L93.1687 55H91.7737L94.1266 51.6613L91.9225 48.49ZM105.601 55L103.396 51.8287L104.373 51.2242L106.968 55H105.601ZM101.295 55V48.49H102.485V55H101.295ZM102.122 52.2565V51.2149H104.317V52.2565H102.122ZM104.485 51.8845L103.378 51.7357L105.601 48.49H106.884L104.485 51.8845ZM107.658 55V48.49H108.848V53.1121L112.345 48.49H113.471V55H112.28V50.3872L108.783 55H107.658ZM116.523 55V49.2154L116.812 49.513H114.375V48.49H119.881V49.513H117.444L117.723 49.2154V55H116.523ZM119.629 55L122.559 48.49H123.749L126.688 55H125.423L122.903 49.1317H123.386L120.875 55H119.629ZM120.978 53.4934L121.303 52.5448H124.819L125.144 53.4934H120.978ZM127.556 55V48.49H128.746V53.1121L132.243 48.49H133.369V55H132.178V50.3872L128.681 55H127.556ZM130.448 48.0529C129.89 48.0529 129.469 47.9351 129.184 47.6995C128.905 47.4639 128.762 47.1322 128.756 46.7044H129.602C129.608 46.9338 129.683 47.1105 129.825 47.2345C129.974 47.3585 130.182 47.4205 130.448 47.4205C130.715 47.4205 130.923 47.3585 131.071 47.2345C131.226 47.1105 131.307 46.9338 131.313 46.7044H132.15C132.144 47.1322 131.998 47.4639 131.713 47.6995C131.428 47.9351 131.006 48.0529 130.448 48.0529ZM138.049 55.093C137.553 55.093 137.091 55.0124 136.663 54.8512C136.242 54.6838 135.873 54.4513 135.557 54.1537C135.247 53.8499 135.005 53.4934 134.831 53.0842C134.658 52.675 134.571 52.2286 134.571 51.745C134.571 51.2614 134.658 50.815 134.831 50.4058C135.005 49.9966 135.25 49.6432 135.566 49.3456C135.882 49.0418 136.251 48.8093 136.673 48.6481C137.094 48.4807 137.556 48.397 138.058 48.397C138.591 48.397 139.078 48.49 139.518 48.676C139.959 48.8558 140.331 49.1255 140.634 49.4851L139.853 50.2198C139.618 49.9656 139.354 49.7765 139.063 49.6525C138.771 49.5223 138.455 49.4572 138.114 49.4572C137.773 49.4572 137.46 49.513 137.175 49.6246C136.896 49.7362 136.651 49.8943 136.44 50.0989C136.235 50.3035 136.074 50.5453 135.956 50.8243C135.845 51.1033 135.789 51.4102 135.789 51.745C135.789 52.0798 135.845 52.3867 135.956 52.6657C136.074 52.9447 136.235 53.1865 136.44 53.3911C136.651 53.5957 136.896 53.7538 137.175 53.8654C137.46 53.977 137.773 54.0328 138.114 54.0328C138.455 54.0328 138.771 53.9708 139.063 53.8468C139.354 53.7166 139.618 53.5213 139.853 53.2609L140.634 54.0049C140.331 54.3583 139.959 54.628 139.518 54.814C139.078 55 138.588 55.093 138.049 55.093ZM144.621 50.6941C145.396 50.6941 145.995 50.8677 146.416 51.2149C146.838 51.5621 147.049 52.0829 147.049 52.7773C147.049 53.5089 146.816 54.0638 146.351 54.442C145.892 54.814 145.251 55 144.426 55H141.627V48.49H142.817V50.6941H144.621ZM144.37 54.07C144.835 54.07 145.195 53.9615 145.449 53.7445C145.709 53.5275 145.84 53.2113 145.84 52.7959C145.84 52.3867 145.712 52.0891 145.458 51.9031C145.204 51.7109 144.841 51.6148 144.37 51.6148H142.817V54.07H144.37ZM152.45 55L150.246 51.8287L151.222 51.2242L153.817 55H152.45ZM148.144 55V48.49H149.334V55H148.144ZM148.972 52.2565V51.2149H151.167V52.2565H148.972ZM151.334 51.8845L150.227 51.7357L152.45 48.49H153.733L151.334 51.8845ZM157.503 55.093C156.994 55.093 156.526 55.0093 156.098 54.8419C155.67 54.6745 155.298 54.442 154.982 54.1444C154.666 53.8406 154.421 53.4872 154.248 53.0842C154.074 52.675 153.987 52.2286 153.987 51.745C153.987 51.2614 154.074 50.8181 154.248 50.4151C154.421 50.0059 154.666 49.6525 154.982 49.3549C155.298 49.0511 155.67 48.8155 156.098 48.6481C156.526 48.4807 156.991 48.397 157.493 48.397C158.002 48.397 158.467 48.4807 158.888 48.6481C159.316 48.8155 159.688 49.0511 160.004 49.3549C160.32 49.6525 160.565 50.0059 160.739 50.4151C160.913 50.8181 160.999 51.2614 160.999 51.745C160.999 52.2286 160.913 52.675 160.739 53.0842C160.565 53.4934 160.32 53.8468 160.004 54.1444C159.688 54.442 159.316 54.6745 158.888 54.8419C158.467 55.0093 158.005 55.093 157.503 55.093ZM157.493 54.0328C157.822 54.0328 158.126 53.977 158.405 53.8654C158.684 53.7538 158.925 53.5957 159.13 53.3911C159.335 53.1803 159.493 52.9385 159.604 52.6657C159.722 52.3867 159.781 52.0798 159.781 51.745C159.781 51.4102 159.722 51.1064 159.604 50.8336C159.493 50.5546 159.335 50.3128 159.13 50.1082C158.925 49.8974 158.684 49.7362 158.405 49.6246C158.126 49.513 157.822 49.4572 157.493 49.4572C157.165 49.4572 156.861 49.513 156.582 49.6246C156.309 49.7362 156.067 49.8974 155.856 50.1082C155.652 50.3128 155.491 50.5546 155.373 50.8336C155.261 51.1064 155.205 51.4102 155.205 51.745C155.205 52.0736 155.261 52.3774 155.373 52.6564C155.491 52.9354 155.652 53.1803 155.856 53.3911C156.061 53.5957 156.303 53.7538 156.582 53.8654C156.861 53.977 157.165 54.0328 157.493 54.0328ZM162.159 55V48.49H163.368V55H162.159ZM163.666 47.8576C163.511 47.8576 163.378 47.808 163.266 47.7088C163.161 47.6034 163.108 47.467 163.108 47.2996C163.108 47.1322 163.161 46.9958 163.266 46.8904C163.378 46.785 163.511 46.7323 163.666 46.7323C163.821 46.7323 163.954 46.785 164.066 46.8904C164.177 46.9958 164.233 47.1322 164.233 47.2996C164.233 47.467 164.177 47.6034 164.066 47.7088C163.954 47.808 163.821 47.8576 163.666 47.8576ZM161.862 47.8576C161.707 47.8576 161.573 47.808 161.462 47.7088C161.356 47.6034 161.304 47.467 161.304 47.2996C161.304 47.1322 161.356 46.9958 161.462 46.8904C161.573 46.785 161.707 46.7323 161.862 46.7323C162.017 46.7323 162.15 46.785 162.262 46.8904C162.373 46.9958 162.429 47.1322 162.429 47.2996C162.429 47.467 162.373 47.6034 162.262 47.7088C162.15 47.808 162.017 47.8576 161.862 47.8576ZM167.42 55V48.49H168.629V55H167.42ZM168.927 47.8576C168.772 47.8576 168.639 47.808 168.527 47.7088C168.422 47.6034 168.369 47.467 168.369 47.2996C168.369 47.1322 168.422 46.9958 168.527 46.8904C168.639 46.785 168.772 46.7323 168.927 46.7323C169.082 46.7323 169.215 46.785 169.327 46.8904C169.438 46.9958 169.494 47.1322 169.494 47.2996C169.494 47.467 169.438 47.6034 169.327 47.7088C169.215 47.808 169.082 47.8576 168.927 47.8576ZM167.123 47.8576C166.968 47.8576 166.834 47.808 166.723 47.7088C166.617 47.6034 166.565 47.467 166.565 47.2996C166.565 47.1322 166.617 46.9958 166.723 46.8904C166.834 46.785 166.968 46.7323 167.123 46.7323C167.278 46.7323 167.411 46.785 167.523 46.8904C167.634 46.9958 167.69 47.1322 167.69 47.2996C167.69 47.467 167.634 47.6034 167.523 47.7088C167.411 47.808 167.278 47.8576 167.123 47.8576ZM177.616 55L175.719 51.8287L176.742 51.2242L179.011 55H177.616ZM174.51 52.2565V51.2149H176.472V52.2565H174.51ZM176.807 51.8845L175.682 51.7357L177.588 48.49H178.872L176.807 51.8845ZM170.92 55H169.525L171.794 51.2242L172.827 51.8287L170.92 55ZM174.863 55H173.682V48.49H174.863V55ZM174.036 52.2565H172.064V51.2149H174.036V52.2565ZM171.739 51.8845L169.665 48.49H170.948L172.845 51.7357L171.739 51.8845ZM179.721 55V48.49H180.911V55H179.721Z"
                                    fill="#231F20"
                                />
                                <rect
                                    x="6.48633"
                                    y="6.4856"
                                    width="51.0286"
                                    height="51.0286"
                                    rx="2"
                                    stroke="#FF2E65"
                                    strokeWidth="2"
                                />
                                <rect
                                    x="1.5"
                                    y="1.5"
                                    width="61"
                                    height="61"
                                    rx="6.5"
                                    stroke="#FF2E65"
                                    strokeWidth="3"
                                />
                                <rect x="14.6289" y="39.188" width="34.5417" height="3.16632" rx="1" fill="#FF2E65" />
                                <rect
                                    x="33.8789"
                                    y="33.999"
                                    width="17.0492"
                                    height="3.16632"
                                    rx="1"
                                    transform="rotate(-45 33.8789 33.999)"
                                    fill="#FF2E65"
                                />
                                <rect
                                    x="27.8379"
                                    y="36.3022"
                                    width="17.0505"
                                    height="3.16632"
                                    rx="1"
                                    transform="rotate(-135 27.8379 36.3022)"
                                    fill="#FF2E65"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div className="header__left-text">
                        <div className="header__left-wrapper">
                            <h1 className="header__left-title">Доставка піци</h1>
                            <span>Київ</span>
                        </div>
                        <div className="header__left-descr">
                            <p>
                                Термін доставки <span className="dot"></span> від 30 хв
                            </p>
                        </div>
                    </div>
                </div>

                <div className="header__right">
                    <button className="right-btn">Замовити дзвінок</button>
                    <a href="tel:+380939009090" className="right-tel">
                        +38 093-900-90-90
                    </a>
                </div>
            </header>
        </div>
    )
}
