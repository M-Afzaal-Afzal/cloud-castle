import React from 'react';
import {StaticImage} from "gatsby-plugin-image"
import {ResponsiveBody1, ResponsiveH1, ResponsiveH2} from "../../common/typography";
import {BoxWithHeadingAndList} from "./BoxWithHeadingAndList";

export const WhyBuyCloudCastleSection = () => {
    return (
        <div className={`bg-black grid relative -mt-35 lg:-mt-40 xl:-mt-60`}>

            {/*     bg-Gradient     */}
            <div className={`gradient-black-hole-space-planet absolute w-full h-full pointer-events-none`}/>

            {/* You can use a GatsbyImage component if the image is dynamic */}
            <StaticImage
                style={{
                    gridArea: "1/1",
                    // You can set a maximum height for the image, if you wish.
                    // maxHeight: 600,
                }}
                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                // aspectRatio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt="black-hole-space-planet"
                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                src={
                    "../../../images/black-hole-space-planet.png"
                }
                formats={["auto", "webp", "avif"]}
            />

            <div
                style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: "1/1",
                    position: "relative",
                    // This centers the other elements inside the hero component
                    placeItems: "center",
                    display: "grid",
                }}
            >
                {/* Any content here will be centered in the component */}
                <div className={`grid grid-cols-10 container w-full`}>
                    {/*     left side with text     */}
                    <div className={`col-span-10 lg:col-span-6`}>
                        <ResponsiveH1 className={`text-left`}>
                            Why Buy Cloud Castles
                        </ResponsiveH1>

                        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 justify-center gap-8`}>

                            {/*     Left Side Heading With Lists        */}
                            <div className={`flex flex-col items-center justify-center`}>
                                <div>
                                    <BoxWithHeadingAndList
                                        heading={'Real utility in real estate ownership'}
                                        listItems={[
                                            {
                                                id: 1,
                                                text: "Your tokens are tied to actual vacation real estate.",
                                            }, {
                                                id: 2,
                                                text: "Discounted stays",
                                            }, {
                                                id: 3,
                                                text: "Earning passive income",
                                            }, {
                                                id: 4,
                                                text: "Your ownership determines your monthly payout.",
                                            },
                                        ]}
                                    />
                                </div>

                                <div className={`mt-8`}>
                                    <BoxWithHeadingAndList
                                        heading={'Built in liquidity'}
                                        listItems={[
                                            {
                                                id: 1,
                                                text: "Trade your shares on an open marketplace ",
                                            }
                                        ]}
                                    />
                                </div>
                            </div>

                            {/*        Right Side Heading With Lists     */}
                            <div className={``}>
                                <div className={`flex flex-col items-center justify-center`}>

                                    <BoxWithHeadingAndList
                                        heading={'Decentralized Real Estate'}
                                        listItems={[
                                            {
                                                id: 1,
                                                text: " Lower barriers to entry",
                                            }, {
                                                id: 2,
                                                text: "  Less capital",
                                            }, {
                                                id: 3,
                                                text: " Less risk",
                                            },
                                        ]}
                                    />
                                </div>

                                <div className={`mt-8 flex flex-col items-center justify-center`}>


                                    <BoxWithHeadingAndList
                                        heading={'Unlimited upside potential'}
                                        listItems={[
                                            {
                                                id: 1,
                                                text: "You can only rent to so many tenants",
                                            }, {
                                                id: 2,
                                                text: "Tokens appreciation",
                                            }
                                        ]}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    {/*  Right side with image  */}

                    <div className={`col-span-10 pt-8 lg:pt-0 lg:col-span-4 flex justify-center items-center`}>
                        <StaticImage
                            src="../../../images/space-man.png"
                            alt={'space-man'}
                            placeholder="blurred"
                            width={400}
                            height={400}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};