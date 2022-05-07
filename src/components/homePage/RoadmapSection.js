import React from 'react';
import { ResponsiveH1} from "../common/typography";
import {StaticImage} from "gatsby-plugin-image"

const roadmapData = {
    first: {
        id: 1,
        heading: 'Phase 1',
        status: '0%',
        desc: "Identify the property with machine learning",
    },
    second: {
        id: 2,
        heading: 'Phase 2',
        status: '20%',
        desc: "Close on castle",
    },
    third: {
        id: 3,
        heading: 'Phase 3',
        status: '40%',
        desc: "Complete renovations",
    },
    fourth: {
        id: 4,
        heading: 'Phase 4',
        status: '60%',
        desc: "List on Short term rental sites (Airbnb, VRBO, etc..)",
    },
    fifth: {
        id: 5,
        heading: 'Phase 5',
        status: '80%',
        desc: "Cloud Castles liquidity is initiated",
    },
    sixth: {
        id: 6,
        heading: 'Phase 6',
        status: '100%',
        desc: "Cloud Castles members only party",
    },
}


export const RoadmapSection = () => {
    return (
        <div className={`bg-black py-24 grid relative`}>

            <StaticImage
                className={`block xl:hidden  -ml-[30rem] md:-ml-[15rem]`}
                style={{
                    gridArea: "1/1",
                    // You can set a maximum height for the image, if you wish.
                    // maxHeight: 1000,
                }}
                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                // aspectRatio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt="black-hole-space-planet"
                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                src={
                    "../../images/roadmap-bg.png"
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
                {/*     Roadmap Content     */}
                <div className={``}>
                    <ResponsiveH1 className={`text-left xl:text-center container pl-8 sm:pl-20`}>
                        roadmap
                    </ResponsiveH1>

                    {/*     Roadmap for Desktop     */}
                    <div className={`hidden xl:block pt-16`}>
                        <StaticImage
                            src={'../../images/roadmap-desktop.svg'}
                            alt={'roadmap for desktop'}
                        />
                    </div>

                    {/*    Roadmap for mobile   */}
                    <div className={`block container xl:hidden pt-16 flex flex-wrap items-center justify-start xl:justify-center gap-8`}>

                        {/*    Timeline     */}

                        <div className="timeline-container">
                            <div className="event">
                                <div className="event-date">{roadmapData.first.status}</div>

                                <div className="timeline-content">
                                    <p className={`font-Axiforma-Regular`}>
                                        {roadmapData.first.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="event">
                                <div className="event-date">{roadmapData.second.status}</div>

                                <div className="timeline-content">
                                    <p className={`font-Axiforma-Regular`}>
                                        {roadmapData.second.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="event">
                                <div className="event-date">{roadmapData.third.status}</div>

                                <div className="timeline-content">
                                    <p className={`font-Axiforma-Regular`}>
                                        {roadmapData.third.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="event">
                                <div className="event-date">{roadmapData.fourth.status}</div>

                                <div className="timeline-content">
                                    <p className={`font-Axiforma-Regular`}>
                                        {roadmapData.fourth.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="event">
                                <div className="event-date">{roadmapData.fifth.status}</div>

                                <div className="timeline-content">
                                    <p className={`font-Axiforma-Regular`}>
                                        {roadmapData.fifth.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="event">
                                <div className="event-date">{roadmapData.sixth.status}</div>

                                <div className="timeline-content">
                                    <p className={`font-Axiforma-Regular`}>
                                        {roadmapData.sixth.desc}
                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
};