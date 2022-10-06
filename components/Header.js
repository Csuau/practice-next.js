import React, {useCallback, useState} from "react";
import Link from "next/link"
import Menu from "./Menu"

const Media = React.lazy(() => /*webpackChunkName: "component---src-Media-js" */ import('./Media'));


const Header = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = useCallback(() => {

        //document.body.classList.toggle('no-scroll')
        setMenu((menu) => !menu)
    }, [menu])

    return (
        <header className="header">
            <div className="container d-flex justify-content-between align-items-start">
                <div>
                    <Link href="/">
                        <a title="logo">
                            <Media
                                extraClass="img--contain"
                                loading="eager"
                                relativePath="/images/logo.png"
                                alt="logo"
                                title="logo centro médico"
                                name="logo centro médico"
                                height="150px"
                                width="150px"
                            />
                        </a>
                    </Link>
                </div>
                <nav className="menu  bg-neutral100 ">
                    <Menu extraclass="d-flex justify-content-end"/>
                </nav>
                <div className="d-flex justify-content-end align-items-center menu-burger">
                    <div id="toggle-menu" className="d-flex py-xxxs ">
                        <span className={`burger-icon  ${menu ? '' : 'active'}`} onClick={handleMenu}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H13C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17C14 16.7348 13.8946 16.4804 13.7071 16.2929C13.5196 16.1054 13.2652 16 13 16ZM3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                                    fill="black"></path>
                            </svg>
                        </span>

                    </div>
                </div>
            </div>
            <div className={`header--mobile bg-neutral100  ${menu ? 'active' : ''}`}>
                                        <span className={`close-icon  ${menu ? 'active' : ''}`} onClick={handleMenu}>
                            <svg width="30" height="30"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5.15164 5.1515C5.37667 4.92654 5.68184 4.80016 6.00004 4.80016C6.31823 4.80016 6.6234 4.92654 6.84844 5.1515L12 10.3031L17.1516 5.1515C17.2623 5.03689 17.3947 4.94547 17.5412 4.88258C17.6876 4.81969 17.845 4.78659 18.0044 4.7852C18.1637 4.78382 18.3217 4.81418 18.4692 4.87452C18.6167 4.93485 18.7506 5.02396 18.8633 5.13663C18.976 5.2493 19.0651 5.38328 19.1254 5.53076C19.1858 5.67823 19.2161 5.83625 19.2147 5.99558C19.2134 6.15492 19.1802 6.31238 19.1174 6.45879C19.0545 6.60519 18.963 6.73761 18.8484 6.8483L13.6968 11.9999L18.8484 17.1515C19.067 17.3778 19.188 17.6809 19.1852 17.9956C19.1825 18.3102 19.0563 18.6112 18.8338 18.8337C18.6113 19.0562 18.3104 19.1824 17.9957 19.1851C17.6811 19.1878 17.378 19.0669 17.1516 18.8483L12 13.6967L6.84844 18.8483C6.62211 19.0669 6.31899 19.1878 6.00435 19.1851C5.68972 19.1824 5.38874 19.0562 5.16625 18.8337C4.94376 18.6112 4.81756 18.3102 4.81483 17.9956C4.81209 17.6809 4.93305 17.3778 5.15164 17.1515L10.3032 11.9999L5.15164 6.8483C4.92667 6.62327 4.80029 6.3181 4.80029 5.9999C4.80029 5.68171 4.92667 5.37654 5.15164 5.1515Z"
                                      fill="#fffff">

                            </path>
                            </svg>
                        </span>
                <Menu extraClass="d-flex f-direction-column"/>
            </div>
        </header>
    )
}


export default Header