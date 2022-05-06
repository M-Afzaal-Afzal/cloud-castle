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
                <div className={`block container xl:hidden pt-16 flex flex-wrap items-center justify-center gap-8`}>

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


                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                            date={<ResponsiveH1 className={`-pt-[4px]`}>{roadmapData.first.status}</ResponsiveH1>}
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff',marginTop: '.5rem'}}
                        >
                            <h3 className="vertical-timeline-element-title">{roadmapData.first.heading}</h3>
                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <p>
                                {roadmapData.first.desc}
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                            date={<ResponsiveH1 className={`-pt-[4px]`}>{roadmapData.second.status}</ResponsiveH1>}
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff',marginTop: '.5rem'}}
                        >
                            <h3 className="vertical-timeline-element-title">{roadmapData.second.heading}</h3>
                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <p>
                                {roadmapData.second.desc}
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                            date={<ResponsiveH1 className={`-pt-[4px]`}>{roadmapData.third.status}</ResponsiveH1>}
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff',marginTop: '.5rem'}}
                        >
                            <h3 className="vertical-timeline-element-title">{roadmapData.third.heading}</h3>
                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <p>
                                {roadmapData.third.desc}
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                            date={<ResponsiveH1 className={`-pt-[4px]`}>{roadmapData.fourth.status}</ResponsiveH1>}
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff',marginTop: '.5rem'}}
                        >
                            <h3 className="vertical-timeline-element-title">{roadmapData.fourth.heading}</h3>
                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <p>
                                {roadmapData.fourth.desc}
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                            date={<ResponsiveH1 className={`-pt-[4px]`}>{roadmapData.fifth.status}</ResponsiveH1>}
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff',marginTop: '.5rem'}}
                        >
                            <h3 className="vertical-timeline-element-title">{roadmapData.fifth.heading}</h3>
                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <p>
                                {roadmapData.fifth.desc}
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                            date={<ResponsiveH1 className={`-pt-[4px]`}>{roadmapData.sixth.status}</ResponsiveH1>}
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff',marginTop: '.5rem'}}
                        >
                            <h3 className="vertical-timeline-element-title">{roadmapData.sixth.heading}</h3>
                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <p>
                                {roadmapData.sixth.desc}
                            </p>
                        </VerticalTimelineElement>






                        {/*<VerticalTimelineElement*/}
                        {/*    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}*/}
                        {/*    // icon={<StarIcon />}*/}
                        {/*/>*/}
                    </VerticalTimeline>


                </div>

            </div>

        </div>
    );
};