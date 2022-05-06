// import {Link} from "gatsby"
// import PropTypes from "prop-types"
import React, {useEffect, useState} from "react"
import {StaticImage} from "gatsby-plugin-image"
import {links} from "../../utils/utils";
import {ButtonText} from "../common/buttons/ButtonText";
import {ButtonPrimary} from "../common/buttons/ButtonPrimary";
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
} from "framer-motion";

const navbarVariants = {
    hidden: {
        y: 30,
    },
    visible: {
        y: 0,
    }
}

const CompanyLogo = () => {
    return (
        <StaticImage
            src={'../../images/logo.png'}
            alt="Logo"
            placeholder="blurred"
            width={158}
            height={24.72}
        />
    )
}

const WhitePaperButton = () => {
    return (
        <ButtonPrimary>
            Whitepaper
        </ButtonPrimary>
    )
}

function Header({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    const [isGreaterThan3,setIsGreaterThan3] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const controlNavbar = (e) => {

        const winScroll = document.getElementById("drawer-content").scrollTop;
        const height = document.getElementById("drawer-content").scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        // console.log(scrolled,'scrolled')

        if ( Math.round(scrolled) > 5) {
            setIsGreaterThan3(true)

        } else {
            setIsGreaterThan3(false)

        }


        if ( Math.round(scrolled) > 9) {
            setIsNavbarFixed(true)

        } else {
            setIsNavbarFixed(false)

        }
    }

    useEffect(() => {
        document.getElementById("drawer-content").addEventListener('scroll',controlNavbar)

        return () => {
            document.getElementById("drawer-content").removeEventListener('scroll',controlNavbar)
        }
    },[])

    return (
        <>
            {/*     Sidebar Drawer    */}

            <div className="drawer">
                <input checked={isSidebarOpen} id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
                <div id={'drawer-content'} className="drawer-content relative flex flex-col">
                    {/*Navbar  */}

                    <div
                        className={`bg-[#000] transition-all z-[999] backdrop-blur-lg ${isNavbarFixed ? "c-navbar" : "absolute"} ${isGreaterThan3 && !isNavbarFixed ? "top-[30px] opacity-0" : ''} top-0 left-0 w-full`}

                    >

                        <nav
                            className={`flex flex-wrap items-center justify-between container bg-transparent `}
                        >

                            {/*    LEFT SIDE   */}
                            <div className={'flex items-center space-x-12'}>

                                {/*    Logo      */}
                                <CompanyLogo/>

                                <div className={`hidden lg:flex space-x-6 items-center`}>
                                    {
                                        links.map(({id, text, href}) => (
                                            <ButtonText key={id}>
                                                {text}
                                            </ButtonText>
                                        ))
                                    }

                                </div>

                            </div>

                            {/*     RIGHT SIDE    */}
                            <div className={'hidden lg:block'}>
                                <WhitePaperButton/>
                            </div>

                            {/*     Mobile Icon For Toggle the Sidebar    */}

                            <label onClick={toggleSidebar} className={`btn btn-circle swap swap-rotate lg:hidden`}>

                                {/*      this hidden checkbox controls the state   */}
                                {/*<input type="checkbox"/>*/}

                                {/*      hamburger icon     */}
                                <svg className={`${!isSidebarOpen ? `swap-off` : `swap-on`} fill-current`}
                                     xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     viewBox="0 0 512 512">
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                                </svg>

                                {/*      close icon     */}
                                <svg className={`${!isSidebarOpen ? `swap-on` : `swap-off`} fill-current`}
                                     xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     viewBox="0 0 512 512">
                                    <polygon
                                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
                                </svg>

                            </label>

                        </nav>
                    </div>

                    {/*Page content here  */}
                    <div
                        className={`mt-24`}
                    >
                        {children}
                    </div>

                </div>
                <div className="drawer-side">
                    <label onClick={toggleSidebar} htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-black">

                        <div className={`flex justify-center py-6`}>
                            <CompanyLogo/>
                        </div>

                        {/*Sidebar content here */}
                        {
                            links.map(({id, text, href}) => (
                                <li key={id}>
                                    <a>{text}</a>
                                </li>
                            ))
                        }
                        <li>
                            <a className={`flex justify-center`}>
                                <WhitePaperButton/>
                            </a>
                        </li>


                    </ul>

                </div>
            </div>

        </>
    )
}

export default Header
