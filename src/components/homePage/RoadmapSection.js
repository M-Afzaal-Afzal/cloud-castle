import React from 'react';
import {ResponsiveBody1, ResponsiveH1} from "../common/typography";
import {StaticImage} from "gatsby-plugin-image"
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

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
        <div className={`bg-black py-24`}>

            <div className={``}>
                <ResponsiveH1 className={`text-center`}>
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

                    {/*{*/}
                    {/*    roadmapData.map(({id,heading,status,desc}) => (*/}
                    {/*        <div key={id} className={`relative max-w-[300px] h-[188px] w-full bg-[rgba(255,255,255,.1)] rounded-lg overflow-hidden p-4`}>*/}
                    {/*            <h3 className={`text-base text-primary font-Axiforma-SemiBold tracking-wide`}>*/}
                    {/*                {heading}*/}
                    {/*            </h3>*/}

                    {/*            <ResponsiveH1 className={`mt-4`}>*/}
                    {/*                {status}*/}
                    {/*            </ResponsiveH1>*/}

                    {/*            <ResponsiveBody1 className={`my-4`}>*/}
                    {/*                {desc}*/}
                    {/*            </ResponsiveBody1>*/}

                    {/*            /!*     roadmap bottom border   *!/*/}
                    {/*            <div className="absolute left-0 bottom-0 w-full roadmap-border"/>*/}

                    {/*        </div>*/}

                    {/*    ))*/}
                    {/*}*/}



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
    );
};