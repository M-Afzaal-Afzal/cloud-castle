import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {ResponsiveBody1, ResponsiveH1} from "../common/typography";

const teamMembers = [
    {
        id: 1,
        imgSrc: "../../images/members/Clark.png",
        name: "Maclaren",
        desc: <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
        </>,
    }, {
        id: 2,
        imgSrc: "../../images/members/Emily.png",
        name: "Emily",
        desc: <>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        </>,
    }, {
        id: 3,
        imgSrc: "../../images/members/Loran.png",
        name: "Loran",
        desc: <>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.

            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        </>,
    }, {
        id: 4,
        imgSrc: "../../images/members/Clark.png",
        name: "Maclaren",
        desc: <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
        </>,
    },
]

export const CloudCastleMembersSection = () => {
    return (
        <div className={`pb-24 bg-black grid`}>
            {/* You can use a GatsbyImage component if the image is dynamic */}
            <StaticImage
                style={{
                    gridArea: "1/1",
                    // You can set a maximum height for the image, if you wish.
                    maxHeight: 600,
                }}
                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                // aspectRatio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt="background stars"
                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                src={
                    "../../images/cloud-castle-members-bg.svg"
                }
                formats={["auto", "webp", "avif"]}
            />
            <div
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
                <div className={`w-full container`}>
                    <ResponsiveH1 className={`text-center`}>
                        cloud castle Member
                    </ResponsiveH1>

                    <div className={'flex mt-12 gap-8 flex-wrap justify-center items-center'}>

                        {/*     First Team Member       */}
                        <div className={`grid grid grid-cols-3 max-w-xl gap-4 w-full`}>
                            {/*     image section    */}
                            <div className={'col-span-1'}>
                                <StaticImage
                                    src={'../../images/members/Clark.png'}
                                    alt={'Clark'}
                                    objectFit={'cover'}
                                />
                            </div>

                            {/*     right text section      */}
                            <div className={'col-span-2'}>
                                <ResponsiveH1>
                                    Maclaren
                                </ResponsiveH1>

                                <ResponsiveBody1>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.

                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </ResponsiveBody1>
                            </div>

                        </div>

                        {/*     Second Team Member       */}
                        <div className={`grid grid grid-cols-3 max-w-xl gap-4 w-full`}>
                            {/*     image section    */}
                            <div className={'col-span-1'}>
                                <StaticImage
                                    src={'../../images/members/Emily.png'}
                                    alt={'Clark'}
                                    objectFit={'cover'}
                                />
                            </div>

                            {/*     right text section      */}
                            <div className={'col-span-2'}>
                                <ResponsiveH1>
                                    Emily
                                </ResponsiveH1>

                                <ResponsiveBody1>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                </ResponsiveBody1>
                            </div>

                        </div>

                        {/*     Third Team Member       */}
                        <div className={`grid grid grid-cols-3 max-w-xl gap-4 w-full`}>
                            {/*     image section    */}
                            <div className={'col-span-1'}>
                                <StaticImage
                                    src={'../../images/members/Loran.png'}
                                    alt={'Clark'}
                                    objectFit={'cover'}
                                />
                            </div>

                            {/*     right text section      */}
                            <div className={'col-span-2'}>
                                <ResponsiveH1>
                                    Loran
                                </ResponsiveH1>

                                <ResponsiveBody1>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                </ResponsiveBody1>
                            </div>

                        </div>

                        {/*     Fourth Team Member       */}
                        <div className={`grid grid grid-cols-3 max-w-xl gap-4 w-full`}>
                            {/*     image section    */}
                            <div className={'col-span-1'}>
                                <StaticImage
                                    src={'../../images/members/Clark.png'}
                                    alt={'Clark'}
                                    objectFit={'cover'}
                                />
                            </div>

                            {/*     right text section      */}
                            <div className={'col-span-2'}>
                                <ResponsiveH1>
                                    Maclaren
                                </ResponsiveH1>

                                <ResponsiveBody1>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.

                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </ResponsiveBody1>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};