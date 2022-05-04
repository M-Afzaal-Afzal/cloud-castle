import React from 'react';
import {ResponsiveH1} from "../common/typography";
import {StaticImage} from "gatsby-plugin-image";

export const TeamSection = () => {
    return (
        <div className={`bg-black`}>
            <div className={`container`}>
                <ResponsiveH1 className={`text-center`}>
                    best team to serve you
                </ResponsiveH1>

                <div className={`flex items-center justify-center flex-wrap gap-8 py-16`}>

                    <div>
                        <StaticImage
                            src={'../../images/team/ryder.png'}
                            alt={'Eric'}
                            width={280}
                        />

                        <div className={`flex justify-between items-center`}>

                            <div>
                                <ResponsiveH1 className={`mt-4`}>
                                    Ryder
                                </ResponsiveH1>
                                <p className={`text-sm text-gray`}>
                                    CEO, Founder
                                </p>
                            </div>

                            {/*     Social Icons    */}
                            <div className={'flex items-center'}>
                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/linked-in-blue.png'} alt={'Linked In'}/>
                                </button>

                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/instagram-blue.png'} alt={'Linked In'}/>
                                </button>

                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/twitter-blue.png'} alt={'Linked In'}/>
                                </button>
                            </div>

                        </div>

                    </div>
                    <div>
                        <StaticImage
                            src={'../../images/team/logan.png'}
                            alt={'Eric'}
                            width={280}
                        />
                        <div className={`flex justify-between items-center`}>

                            <div>
                                <ResponsiveH1 className={`mt-4`}>
                                    Logan
                                </ResponsiveH1>
                                <p className={`text-sm text-gray`}>
                                    Co-Founder
                                </p>
                            </div>

                            {/*     Social Icons    */}
                            <div className={'flex items-center'}>
                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/linked-in-blue.png'} alt={'Linked In'}/>
                                </button>

                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/instagram-blue.png'} alt={'Linked In'}/>
                                </button>

                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/twitter-blue.png'} alt={'Linked In'}/>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <StaticImage
                            src={'../../images/team/muadin.png'}
                            alt={'Eric'}
                            width={280}
                        />
                        <div className={`flex justify-between items-center`}>

                            <div>
                                <ResponsiveH1 className={`mt-4`}>
                                    Muadin
                                </ResponsiveH1>
                                <p className={`text-sm text-gray`}>
                                    Director
                                </p>
                            </div>

                            {/*     Social Icons    */}
                            <div className={'flex items-center'}>
                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/linked-in-blue.png'} alt={'Linked In'}/>
                                </button>

                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/instagram-blue.png'} alt={'Linked In'}/>
                                </button>

                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/twitter-blue.png'} alt={'Linked In'}/>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <StaticImage
                            src={'../../images/team/eric.png'}
                            alt={'Eric'}
                            width={280}
                        />
                        <div className={`flex justify-between items-center`}>

                            <div>
                                <ResponsiveH1 className={`mt-4`}>
                                    Eric
                                </ResponsiveH1>
                                <p className={`text-sm text-gray`}>
                                    Director
                                </p>
                            </div>

                            {/*     Social Icons    */}
                            <div className={'flex items-center'}>
                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/linked-in-blue.png'} alt={'Linked In'}/>
                                </button>

                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/instagram-blue.png'} alt={'Linked In'}/>
                                </button>

                                <button className={'btn btn-circle p-0 border-none w-10'}>
                                    <StaticImage src={'../../images/icons/twitter-blue.png'} alt={'Linked In'}/>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};