import React from 'react';
import {ResponsiveBody1, ResponsiveH1} from "../common/typography/index";
import {ButtonPrimary} from "../common/buttons/ButtonPrimary";
import {StaticImage} from "gatsby-plugin-image"

export const JoinWhitelistingListSection = () => {
    return (
        <div className={`bg-black py-24 grid -mt-32`}>

            <StaticImage
                style={{
                    gridArea: "1/1",
                    zIndex: 1,
                    // You can set a maximum height for the image, if you wish.
                    // maxHeight: 600,
                }}

                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                // aspectRatio={3}
                // This is a presentational image, so the alt should be an empty string
                alt="Background Starts"
                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                src={
                    "../../images/waitingListBackground.svg"
                }
                formats={["auto", "webp", "avif"]}
            />


            <div style={{
                gridArea: "1/1",
                position: "relative",
                // This centers the other elements inside the hero component
                placeItems: "center",
                zIndex: 5,
                display: 'grid',

            }} className={`container`}>
                <div>

                    <ResponsiveH1 className={`text-center`}>
                        Join Cloud Castles waiting list
                    </ResponsiveH1>

                    <ResponsiveBody1 className={`max-w-[650px] text-center mx-auto mt-4 mb-6`}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt
                        ut labore et dolore magna aliqua.
                    </ResponsiveBody1>

                    <div className={`max-w-[768px] w-full mx-auto bg-[#FFFFFF26] rounded-full relative`}>
                        {/*     Email input component   */}
                        <input
                            className={`w-full bg-transparent text-base focus:outline-0 py-4 pl-8 pr-24`}
                            placeholder={'Enter your email'}
                            type="text"
                        />

                        {/* Join button for email submitting  */}
                        <div className={`absolute top-1/2 right-2 -translate-y-1/2 inline-block`}>
                            <ButtonPrimary className={`h-[2.5rem] min-h-[2.5rem]`}>
                                Join
                            </ButtonPrimary>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};