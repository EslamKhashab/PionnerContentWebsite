import navStyles from './Layout.module.css'
import Link from 'next/link';

function Nav({ burgerVisability, setBurgerVisability, contact, navData, social, whatssApp, logo, lang, setLang, setFlag,changeLang }) {
    if (navData.length) {
        return (
            <div className={navStyles.navbarMain}>
                <div className={navStyles.up}>
                    <div className={navStyles.upCont}>

                        <div className={navStyles.other}>
                            <div className={` ${navStyles.lang} ${lang == 'en' ? navStyles.en : ''}`}>
                                <div className={`${navStyles.en} ${lang == 'en' ? navStyles.disable : ''}`} onClick={() => lang == 'ar' ? ( setFlag(true),changeLang(), document.cookie = "lang=en" ): ''}>
                                    <p>English</p>
                                </div>
                                <div className={`${navStyles.ar} ${lang == 'ar' ? navStyles.disable : ''}`} onClick={() => lang == 'en' ? ( setFlag(true),changeLang(), document.cookie = "lang=ar"): ''}>
                                    <p>العربيه</p>
                                </div>
                            </div>
                            <div className={navStyles.social}>
                                <ul>
                                    {
                                        social.map((item) => (
                                            item.name == "Facebook" && item.isActive ?
                                                <li key={item.id}>
                                                    <Link href={item.link}>
                                                        <a target="_blank">
                                                            <svg height="20" viewBox="0 0 11 20" fill="none">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.94475 20V11.1658H0V7.48482H2.94475V4.54007C2.94475 1.49741 4.87135 0 7.58567 0C8.88578 0 10.0033 0.0971768 10.3287 0.139876V3.3202L8.44628 3.32094C6.97022 3.32094 6.62568 4.02253 6.62568 5.05172V7.48482H10.3066L9.57043 11.1658H6.62568L6.68458 20" fill="white" />
                                                            </svg>
                                                        </a>
                                                    </Link>
                                                </li>
                                                : item.name == "Youtube" && item.isActive ?
                                                    <li key={item.id}>
                                                        <Link href={item.link}>
                                                            <a target="_blank">
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clipPath="url(#clip0)">
                                                                        <path d="M19.8013 6C19.8013 6 19.6063 4.62125 19.005 4.01625C18.2438 3.22 17.3913 3.215 17.0013 3.16875C14.205 2.965 10.005 2.965 10.005 2.965H9.99751C9.99751 2.965 5.79876 2.965 3.00126 3.16875C2.61001 3.21625 1.75876 3.22 0.997506 4.01625C0.396256 4.62125 0.205006 6 0.205006 6C0.205006 6 0.0062561 7.6175 0.0062561 9.23875V10.755C0.0062561 12.3725 0.205006 13.9937 0.205006 13.9937C0.205006 13.9937 0.400006 15.3725 0.997506 15.9788C1.75876 16.775 2.75876 16.7488 3.20501 16.8338C4.80626 16.9863 10.0063 17.0325 10.0063 17.0325C10.0063 17.0325 14.21 17.025 17.0063 16.825C17.3975 16.7788 18.2488 16.7737 19.01 15.9775C19.6113 15.3725 19.8063 13.9925 19.8063 13.9925C19.8063 13.9925 20.005 12.375 20.005 10.7537V9.2375C20.0013 7.62 19.8025 5.99875 19.8025 5.99875L19.8013 6ZM7.93376 12.5938V6.9725L13.3363 9.7925L7.93376 12.5938Z" fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0">
                                                                            <rect width="20" height="20" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    : item.name == "Twitter" && item.isActive ?
                                                        <li key={item.id}>
                                                            <Link href={item.link}>
                                                                <a target="_blank">
                                                                    <svg height="20" viewBox="0 0 25 20" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M24.8395 2.3676C23.9341 2.76955 22.9611 3.04025 21.9398 3.16227C22.9816 2.53781 23.7824 1.54832 24.1597 0.369136C23.1846 0.948475 22.1038 1.36785 20.9534 1.59549C20.0326 0.613176 18.7201 0 17.2682 0C14.4801 0 12.2192 2.26096 12.2192 5.04896C12.2192 5.44476 12.2643 5.8303 12.3504 6.19944C8.15459 5.98923 4.43349 3.97949 1.94388 0.923866C1.50912 1.67034 1.25995 2.53679 1.25995 3.4627C1.25995 5.21405 2.151 6.76032 3.50655 7.66573C2.67907 7.63804 1.89978 7.41143 1.21893 7.03409V7.09664C1.21893 9.54319 2.959 11.5837 5.26918 12.0472C4.8457 12.1641 4.39863 12.2246 3.93926 12.2246C3.61319 12.2246 3.29737 12.1928 2.98874 12.1343C3.63165 14.14 5.49579 15.6001 7.70548 15.6411C5.97669 16.9946 3.79981 17.8016 1.43529 17.8016C1.02719 17.8016 0.625239 17.778 0.230469 17.7319C2.46477 19.1633 5.11845 20 7.97002 20C17.2569 20 22.3345 12.3066 22.3345 5.63445C22.3345 5.41605 22.3294 5.19867 22.3202 4.98231C23.3066 4.26967 24.1628 3.38067 24.8395 2.3676Z" fill="white" />
                                                                    </svg>
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        : item.name == "Linkedin" && item.isActive ?
                                                            <li key={item.id}>
                                                                <Link href={item.link}>
                                                                    <a target="_blank">
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.364 18.3333H14.9041V12.9197C14.9041 11.6286 14.8822 9.96792 13.1063 9.96792C11.3064 9.96792 11.0316 11.3749 11.0316 12.8271V18.3333H7.57532V7.20059H10.8923V8.72277H10.9397C11.4012 7.84723 12.5297 6.9243 14.213 6.9243C17.7166 6.9243 18.364 9.22944 18.364 12.2279V18.3333ZM3.67438 5.67988C2.56263 5.67988 1.66668 4.781 1.66668 3.67291C1.66668 2.56554 2.56263 1.66667 3.67438 1.66667C4.78102 1.66667 5.67989 2.56554 5.67989 3.67291C5.67989 4.781 4.78102 5.67988 3.67438 5.67988ZM5.40505 18.3333H1.94152V7.20059H5.40505V18.3333Z" fill="white" />
                                                                        </svg>
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            : item.name == "Instagram" && item.isActive ?
                                                                <li key={item.id}>
                                                                    <Link href={item.link}>
                                                                        <a target="_blank">
                                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M10.0039 5.50781C7.51953 5.50781 5.51562 7.51172 5.51562 9.99609C5.51562 12.4805 7.51953 14.4844 10.0039 14.4844C12.4883 14.4844 14.4922 12.4805 14.4922 9.99609C14.4922 7.51172 12.4883 5.50781 10.0039 5.50781ZM10.0039 12.9141C8.39844 12.9141 7.08594 11.6055 7.08594 9.99609C7.08594 8.38672 8.39453 7.07812 10.0039 7.07812C11.6133 7.07812 12.9219 8.38672 12.9219 9.99609C12.9219 11.6055 11.6094 12.9141 10.0039 12.9141V12.9141ZM15.7227 5.32422C15.7227 5.90625 15.2539 6.37109 14.6758 6.37109C14.0938 6.37109 13.6289 5.90234 13.6289 5.32422C13.6289 4.74609 14.0977 4.27734 14.6758 4.27734C15.2539 4.27734 15.7227 4.74609 15.7227 5.32422ZM18.6953 6.38672C18.6289 4.98438 18.3086 3.74219 17.2813 2.71875C16.2578 1.69531 15.0156 1.375 13.6133 1.30469C12.168 1.22266 7.83594 1.22266 6.39063 1.30469C4.99219 1.37109 3.75 1.69141 2.72266 2.71484C1.69531 3.73828 1.37891 4.98047 1.30859 6.38281C1.22656 7.82812 1.22656 12.1602 1.30859 13.6055C1.375 15.0078 1.69531 16.25 2.72266 17.2734C3.75 18.2969 4.98828 18.6172 6.39063 18.6875C7.83594 18.7695 12.168 18.7695 13.6133 18.6875C15.0156 18.6211 16.2578 18.3008 17.2813 17.2734C18.3047 16.25 18.625 15.0078 18.6953 13.6055C18.7773 12.1602 18.7773 7.83203 18.6953 6.38672V6.38672ZM16.8281 15.1562C16.5234 15.9219 15.9336 16.5117 15.1641 16.8203C14.0117 17.2773 11.2773 17.1719 10.0039 17.1719C8.73047 17.1719 5.99219 17.2734 4.84375 16.8203C4.07812 16.5156 3.48828 15.9258 3.17969 15.1562C2.72266 14.0039 2.82813 11.2695 2.82813 9.99609C2.82813 8.72266 2.72656 5.98437 3.17969 4.83594C3.48438 4.07031 4.07422 3.48047 4.84375 3.17187C5.99609 2.71484 8.73047 2.82031 10.0039 2.82031C11.2773 2.82031 14.0156 2.71875 15.1641 3.17187C15.9297 3.47656 16.5195 4.06641 16.8281 4.83594C17.2852 5.98828 17.1797 8.72266 17.1797 9.99609C17.1797 11.2695 17.2852 14.0078 16.8281 15.1562Z" fill="white" />
                                                                            </svg>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                : <></>
                                        ))
                                    }
                                    <li onClick={whatssApp}>
                                        <svg height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M17.3281 2.90625C15.4569 1.03125 12.9681 0 10.3169 0C4.85562 0 0.410625 4.445 0.410625 9.91C0.410625 11.6562 0.868125 13.3637 1.73438 14.8637L0.328125 20L5.58187 18.6213C7.03062 19.41 8.66063 19.8288 10.3156 19.8288H10.3194C15.7806 19.8288 20.2294 15.3837 20.2294 9.91875C20.2294 7.27 19.1981 4.7825 17.3269 2.9075L17.3281 2.90625ZM10.3194 18.1562C8.83938 18.1562 7.38938 17.7575 6.12438 17.0075L5.82312 16.8275L2.70563 17.6437L3.53813 14.605L3.34313 14.2925C2.51438 12.9837 2.08187 11.4688 2.08187 9.91C2.08187 5.3675 5.77688 1.67125 10.3244 1.67125C12.5231 1.67125 14.5944 2.53125 16.1481 4.085C17.7031 5.64375 18.5581 7.71 18.5581 9.9125C18.5544 14.4587 14.8594 18.155 10.3194 18.155V18.1562ZM14.8356 11.985C14.5894 11.86 13.3706 11.2625 13.1444 11.18C12.9181 11.0975 12.7531 11.055 12.5856 11.305C12.4219 11.5512 11.9456 12.11 11.8006 12.2775C11.6556 12.4412 11.5119 12.465 11.2656 12.34C11.0194 12.215 10.2181 11.9537 9.27312 11.11C8.53813 10.4537 8.03937 9.64125 7.89437 9.395C7.74937 9.14875 7.87813 9.0125 8.00438 8.89125C8.11813 8.78125 8.25063 8.6025 8.37563 8.4575C8.50063 8.3125 8.53938 8.21125 8.62188 8.04375C8.70438 7.88 8.66438 7.735 8.60188 7.61C8.53938 7.485 8.04313 6.26625 7.84063 5.77C7.64188 5.285 7.43438 5.3525 7.28188 5.34375C7.13688 5.33625 6.97312 5.33625 6.80937 5.33625C6.64562 5.33625 6.37563 5.39875 6.14937 5.645C5.92312 5.89125 5.28188 6.4925 5.28188 7.71125C5.28188 8.93 6.16813 10.1063 6.29313 10.2738C6.41813 10.4375 8.03937 12.9412 10.5231 14.0125C11.1131 14.2662 11.5744 14.4187 11.9331 14.5362C12.5269 14.7237 13.0656 14.6962 13.4919 14.6337C13.9681 14.5638 14.9569 14.0362 15.1644 13.4575C15.3719 12.8787 15.3719 12.3837 15.3094 12.2812C15.2506 12.1713 15.0869 12.11 14.8369 11.9837L14.8356 11.985Z" fill="white" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={navStyles.contact}>
                            {
                                contact.hotline != "" ?

                                    <div className={`${navStyles.contactElem} ${lang == 'en' ? navStyles.en : ''}`}>
                                        <Link href={`tel:${contact.hotline}`}>
                                            <a>
                                                <p>{contact.hotline}</p>
                                                <div className={navStyles.icon}>
                                                    <svg height="21" viewBox="0 0 20 21" fill="none">
                                                        <path d="M14.9296 1C16.2067 1 18.0643 2.44698 18.5288 3.41164C19.1925 4.79033 19.083 5.33196 18.6449 6.78793C18.0643 8.71724 16.3623 12.1371 14.0007 14.5052C10.6338 17.8815 7.49897 19.3285 6.10574 19.8108C4.7125 20.2931 3.20316 19.8108 2.27434 18.8461C1.34551 17.8815 0.416687 16.9168 1.46161 15.4698C2.20207 14.4445 3.28073 13.2591 4.5964 12.5759C5.79271 11.9546 6.50566 12.1808 6.91846 13.0582C7.14666 13.5433 7.21753 14.4724 7.38287 14.9875C7.59146 15.6374 8.4278 15.4698 9.35662 14.9875C10.2459 14.5257 12.4914 12.5759 14.349 9.6819C15.5 7.88889 13.6603 7.87727 12.4914 7.27026C11.5626 6.78793 11.2746 5.67856 12.027 4.37629C13.4202 1.96466 13.8846 1 14.9296 1Z" fill="white" strokeWidth="0" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                    : <></>
                            }
                            {/* <div className={navStyles.contactElem}>
                                <p>01098000666</p>
                                <div className={navStyles.icon}>
                                    <svg height="22" viewBox="0 0 19 22" fill="none">
                                        <path d="M2.24082 0.564453H11.3943C11.9114 0.564453 12.3895 0.769386 12.7311 1.12069L12.7408 1.1304C13.0824 1.47199 13.2872 1.94023 13.2872 2.45752V19.6613C13.2872 20.1787 13.0726 20.6567 12.731 20.9983L12.7115 21.0276C12.3699 21.3594 11.9015 21.5645 11.3942 21.5645H2.24072C1.72353 21.5645 1.24548 21.3496 0.903891 20.9983C0.562302 20.6567 0.347656 20.1788 0.347656 19.6613V2.45752C0.347656 1.94033 0.562302 1.46228 0.903891 1.12069L0.913604 1.11088C1.25529 0.769388 1.72363 0.564453 2.24082 0.564453ZM16.7125 6.3805C16.5953 6.21461 16.6344 5.97053 16.81 5.8535C16.9759 5.73636 17.2199 5.77531 17.337 5.95101C17.8444 6.69266 18.2542 7.51239 18.5275 8.38098C18.7909 9.22986 18.9276 10.1276 18.9276 11.0644C18.9276 11.9913 18.7909 12.8893 18.5275 13.7381C18.2542 14.6064 17.8444 15.4264 17.337 16.1681C17.2199 16.3436 16.976 16.3826 16.81 16.2656C16.6343 16.1487 16.5953 15.9045 16.7125 15.7388C17.1808 15.0654 17.5419 14.3141 17.7957 13.5137C18.0396 12.7427 18.1665 11.9133 18.1665 11.0644C18.1665 10.2058 18.0396 9.38594 17.7957 8.60534C17.5419 7.80523 17.1808 7.05367 16.7125 6.3805ZM14.6242 8.62486C14.5071 8.44916 14.5462 8.215 14.7218 8.09786C14.8974 7.98073 15.1315 8.01987 15.2488 8.19547C15.5414 8.60524 15.766 9.06387 15.922 9.56154C16.0683 10.03 16.1466 10.5373 16.1466 11.0643C16.1466 11.5815 16.0684 12.0887 15.922 12.5672C15.766 13.0549 15.5414 13.5136 15.2488 13.9237C15.1315 14.0992 14.8975 14.148 14.7218 14.0212C14.5461 13.9042 14.5071 13.6699 14.6242 13.494C14.8682 13.1427 15.0634 12.7524 15.1901 12.3329C15.3171 11.9328 15.3854 11.5036 15.3854 11.0643C15.3854 10.6154 15.3171 10.1861 15.1901 9.7859C15.0634 9.36641 14.8682 8.97607 14.6242 8.62486ZM5.27578 18.2074H8.35941C8.65205 18.2074 8.91564 18.3247 9.11076 18.5197L9.13028 18.549C9.30598 18.7345 9.41341 18.9881 9.41341 19.2613C9.41341 19.5542 9.29627 19.8178 9.10115 20.0127C8.91574 20.208 8.65214 20.325 8.3595 20.325H5.27588C4.98304 20.325 4.71964 20.208 4.52452 20.0127L4.505 19.9834C4.3293 19.7982 4.22188 19.5443 4.22188 19.2612C4.22188 18.9782 4.33911 18.715 4.52442 18.5196C4.71955 18.3247 4.98295 18.2074 5.27578 18.2074ZM8.35941 18.9685H5.27578C5.19779 18.9685 5.11961 19.0074 5.07085 19.0566C5.01238 19.1151 4.98295 19.1833 4.98295 19.2612C4.98295 19.3393 5.01238 19.4079 5.05142 19.4566L5.07094 19.4761C5.1197 19.5248 5.19789 19.5638 5.27588 19.5638H8.3595C8.43749 19.5638 8.51558 19.5248 8.56434 19.4761C8.62291 19.4175 8.65205 19.3489 8.65205 19.2612C8.65205 19.193 8.62281 19.1248 8.58386 19.0662L8.56434 19.0565C8.51549 19.0074 8.4374 18.9685 8.35941 18.9685ZM5.59785 2.62351C5.3832 2.62351 5.2075 2.44781 5.2075 2.24297C5.2075 2.02832 5.3831 1.86243 5.59785 1.86243H6.45643C6.67118 1.86243 6.83716 2.02832 6.83716 2.24297C6.83716 2.4479 6.67128 2.62351 6.45643 2.62351H5.59785ZM2.67031 2.62351C2.45556 2.62351 2.28977 2.44781 2.28977 2.24297C2.28977 2.02832 2.45556 1.86243 2.67031 1.86243H4.39748C4.60241 1.86243 4.77802 2.02832 4.77802 2.24297C4.77802 2.4479 4.60232 2.62351 4.39748 2.62351H2.67031ZM2.04569 2.965H11.5894C11.7943 2.965 11.9699 3.13089 11.9699 3.34553V17.5636C11.9699 17.778 11.7942 17.9441 11.5894 17.9441H2.04569C1.84086 17.9441 1.66516 17.778 1.66516 17.5636V3.34553C1.66516 3.13089 1.84086 2.965 2.04569 2.965ZM11.2089 3.72617H2.42632V17.1827H11.2089V3.72617ZM11.3943 1.32562H2.24082C1.93847 1.32562 1.65535 1.45257 1.45051 1.64769L1.4407 1.6575C1.23577 1.86243 1.10883 2.14526 1.10883 2.45762V19.6614C1.10883 19.9737 1.23577 20.2568 1.4407 20.4615C1.64564 20.6665 1.92866 20.7933 2.24082 20.7933H11.3943C11.6966 20.7933 11.97 20.6763 12.1749 20.4813L12.1944 20.4615C12.3993 20.2568 12.5263 19.9737 12.5263 19.6614V2.45762C12.5263 2.14536 12.3993 1.87215 12.2042 1.66731L12.1944 1.6575C11.9895 1.45256 11.7064 1.32562 11.3943 1.32562Z" fill="white" />
                                    </svg>
                                </div>
                            </div> */}
                            {
                                contact.email ?
                                    <div className={`${navStyles.contactElem} ${lang == 'en' ? navStyles.en : ''}`}>
                                        <Link href={`mailto:${contact.email}`}>
                                            <a>
                                                <p>{contact.email}</p>
                                                <div className={navStyles.icon}>
                                                    <svg height="21" viewBox="0 0 27 21" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M26.125 19V2.375L13.0625 13.0625L0 2.375V19H26.125ZM13.0625 9.5L24.9375 0H1.1875L13.0625 9.5Z" fill="white" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                    </div>
                </div>
                <div className={navStyles.sticky}>
                    <div className={navStyles.logo}>
                        <Link href="/">
                            <a>
                                <img src={logo ? logo : ''} alt="" loading="lazy" />
                            </a>
                        </Link>
                    </div>
                    <ul className={`${navStyles.navElem} ${lang == 'en' ? navStyles.en : ''}`}>
                        {
                            navData.map((listItem) => (
                                <li key={listItem.id}>
                                    <p>{listItem.propertyName}</p>
                                    <div className={navStyles.NavList}>
                                        {
                                            listItem.cities.map(item => (
                                                <a href={`/projects/${listItem.propertyUrl}/${item.cityUrl}`} key={item.id}>
                                                    <div className={navStyles.NavListItem} key={item.id}>{item.name}</div>
                                                </a>
                                            ))
                                        }
                                    </div>
                                </li>
                            ))
                        }
                        <li>
                            <Link href="/blogs">
                                {
                                    lang === 'ar' ?
                                        <a>المدونة</a>
                                        :
                                        <a>Blogs</a>
                                }
                            </Link>
                        </li>
                    </ul>
                    <div className={navStyles.contactButton}>
                        <a href="#footer">
                            {
                                lang == 'ar' ?

                                    <button>
                                        إتصل بنا
                            </button>
                                    :
                                    <button>
                                        Contact Us
                            </button>
                            }
                        </a>
                    </div>
                    <div className={navStyles.burger} onClick={() => setBurgerVisability(!burgerVisability)}>
                        <svg width="22" height="19" viewBox="0 0 27 19" fill="none">
                            <rect y="16" width="27" height="3" rx="1.5" fill="#5C5C5C" />
                            <rect y="8" width="27" height="3" rx="1.5" fill="#5C5C5C" />
                            <rect width="27" height="3" rx="1.5" fill="#5C5C5C" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default Nav