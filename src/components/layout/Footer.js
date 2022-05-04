import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import img from '../../images/cloud_icon_white.svg'
import {ResponsiveBody1, ResponsiveH1} from "../common/typography";
import {ButtonPrimary} from "../common/buttons/ButtonPrimary";

const Footer = () => {
    return (
        <div className={` bg-black grid`}>
            {/* You can use a GatsbyImage component if the image is dynamic */}
            <StaticImage
                style={{
                    gridArea: "1/1",
                    // You can set a maximum height for the image, if you wish.
                    maxHeight: 810,
                }}
                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                // aspectRatio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt="background stars"
                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                src={
                    "../../images/footer-bg.png"
                }
                formats={["auto", "webp", "avif"]}
            />
            <div className={`py-24 container`}
                 style={{
                     // By using the same grid area for both, they are stacked on top of each other
                     gridArea: "1/1",
                     position: "relative",
                     // This centers the other elements inside the hero component
                     // placeItems: "center",
                     display: "grid",
                 }}
            >
                {/* Any content here will be centered in the component */}
                <div className={`flex items-center justify-between`}>

                    <div className={`flex flex-col xl:flex-row w-full gap-32 justify-between`}>


                        {/*     LOGO    */}
                        <div className={`flex justify-center items-start`}>
                            <StaticImage
                                src={'../../images/cloud_icon_white.svg'}
                                alt={'LOGO'}
                                width={132}
                            />
                        </div>

                        {/*     FOOTER RIGHT SIDE     */}
                        <div
                            className={`flex gap-12 justify-between flex-1 flex-wrap flex-col lg:flex-row items-center lg:items-start`}>

                            <div className={`flex flex-1 gap-12 justify-around flex-wrap`}>
                                {/*     EXPLORE     */}
                                <div className={`max-w-xs`}>
                                    <ResponsiveH1>
                                        EXPLORE
                                    </ResponsiveH1>

                                    <div className={`flex items-center justify-between `}>
                                        <div className={`space-y-2 mt-4`}>
                                            <ResponsiveBody1>
                                                Home
                                            </ResponsiveBody1>
                                            <ResponsiveBody1>
                                                Explore
                                            </ResponsiveBody1>
                                            <ResponsiveBody1>
                                                Sign In
                                            </ResponsiveBody1>

                                        </div>
                                        <div className={`space-y-2 mt-4`}>
                                            <ResponsiveBody1>
                                                Home
                                            </ResponsiveBody1>
                                            <ResponsiveBody1>
                                                Explore
                                            </ResponsiveBody1>
                                            <ResponsiveBody1>
                                                Sign In
                                            </ResponsiveBody1>

                                        </div>
                                    </div>

                                </div>

                                {/*     SOCIAL     */}
                                <div className={`max-w-sm`}>
                                    <ResponsiveH1>
                                        social
                                    </ResponsiveH1>

                                    <div className={`flex items-center justify-between gap-12`}>
                                        <div className={`space-y-2 mt-4 flex flex-col justify-start`}>
                                            <div className={`flex justify-between flex-wrap`}>
                                                <div className={`flex items-center space-x-3`}>
                                                    <StaticImage src={'../../images/icons/twitter.svg'} alt={''}/>
                                                    <ResponsiveBody1>
                                                        TWITTER
                                                    </ResponsiveBody1>
                                                </div>

                                            </div>

                                            <div className={`flex items-center space-x-3`}>
                                                <StaticImage src={'../../images/icons/facebook.svg'} alt={''}/>
                                                <ResponsiveBody1>
                                                    FACEBOOK
                                                </ResponsiveBody1>
                                            </div>

                                        </div>
                                        <div className={`space-y-2 mt-4 flex flex-col items-start`}>
                                            <div className={`flex items-center justify-center space-x-3`}>
                                                <StaticImage src={'../../images/icons/instagram.svg'} alt={''}/>
                                                <ResponsiveBody1>
                                                    INSTAGRAM
                                                </ResponsiveBody1>
                                            </div>
                                            <div className={`flex justify-center items-center space-x-3`}>
                                                <StaticImage src={'../../images/icons/tiktok.svg'} alt={''}/>
                                                <ResponsiveBody1>
                                                    TIKTOK
                                                </ResponsiveBody1>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/*     SUBSCRIBE US    */}
                            <div className={`max-w-sm`}>
                                <ResponsiveH1>
                                    subscribe us
                                </ResponsiveH1>

                                <div className={`mt-4`}>

                                    <div className={`relative`}>
                                        <input
                                            placeholder={'Enter Email Address'}
                                            className={`w-full bg-transparent focus:outline-none border-[1px] border-white rounded-lg pl-4 py-4 pr-32`}
                                            type="text"
                                        />

                                        {/* Join button for email submitting  */}
                                        <div className={`absolute top-1/2 right-2 -translate-y-1/2 inline-block`}>
                                            <ButtonPrimary className={`h-[2.5rem] min-h-[2.5rem]`}>
                                                Subscribe
                                            </ButtonPrimary>
                                        </div>
                                    </div>

                                    <ResponsiveBody1 className={`mt-4`}>
                                        By submitting your email you agree to our Terms of Use and Sale and Privacy
                                        Policy.
                                        You will receive email communications from us for marketing, informational, and
                                        promotional purposes and can opt-out at any time.
                                    </ResponsiveBody1>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Footer;