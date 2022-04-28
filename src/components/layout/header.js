import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import {StaticImage} from "gatsby-plugin-image"


function Header({siteTitle}) {
    const [isExpanded, toggleExpansion] = useState(false)

    return (
        <nav
            className={`flex flex-wrap items-center justify-between container bg-transparent fixed top-0 center-fixed-horizontally`}>

            {/*    LEFT SIDE   */}
            <div className={'flex items-center space-x-12'}>

                {/*    Logo      */}
                <StaticImage
                    src="../images/logo.png"
                    alt="Logo"
                    placeholder="blurred"
                    width={150}
                    height={24.72}
                />

                <div className={`flex space-x-6 items-center`}>
                    <div>aa</div>
                    <div>aa</div>
                    <div>aa</div>
                </div>

            </div>

            {/*     RIGHT SIDE    */}
            <div>
                2
            </div>

        </nav>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
