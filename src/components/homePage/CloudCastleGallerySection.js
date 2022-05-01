import React from 'react';
import {ResponsiveBody1, ResponsiveH1} from "../common/typography";
import {Swiper, SwiperSlide} from "swiper/react";
import {StaticImage} from "gatsby-plugin-image";

// import Slider from "react-slick";

const slidesData = [
    {
        id: 1,
        imgSrc: '../../images/slider/1.png',
        ownerShip: '25%',
        vacations: '36',
        location: 'Jupitar',
    }, {
        id: 2,
        imgSrc: '../../images/slider/1.png',
        ownerShip: '25%',
        vacations: '36',
        location: 'Jupitar',
    }, {
        id: 3,
        imgSrc: '../../images/slider/1.png',
        ownerShip: '25%',
        vacations: '36',
        location: 'Jupitar',
    },
]

export const CloudCastleGallerySection = () => {
    return (
        <div className={`bg-black pb-24`}>
            <div className={`container`}>
                <ResponsiveH1 className={`text-center`}>
                    cloud castle Gallery
                </ResponsiveH1>

                {/*     Carousel    */}
                <div className={`mt-12`}>

                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        modules={[]}
                        className="mySwiper"
                        loop={true}
                    >

                        {/*     First Slide     */}
                        <SwiperSlide
                            style={{
                                maxWidth: '400px',
                                // width: '100%',
                                position: 'relative',
                            }}
                        >
                            <StaticImage width={400} alt={'slider img'} src={'../../images/slider/1.png'}/>

                            {/*    top overlay  */}
                            <div
                                className={`absolute w-[375px] z-50 bg-[#04001680] bottom-8 left-1/2 -translate-x-1/2 p-4 flex flex-row justify-between rounded-lg gap-4`}>
                                {/*     OWNERSHIP*/}
                                <div>
                                    <ResponsiveBody1 className={`-mb-2 text-sm`}>
                                        Ownership
                                    </ResponsiveBody1>
                                    <ResponsiveH1
                                        hasCustomFontSize={true}
                                        className={`text-[16px] sm:text-[20px] tracking-normal lg:text-[22px]`}>
                                        25%
                                    </ResponsiveH1>
                                </div>

                                {/*     VACATION    */}
                                <div>
                                    <ResponsiveBody1 className={`-mb-2 text-sm`}>
                                        Vacations
                                    </ResponsiveBody1>
                                    <div className={`flex items-center gap-2`}>
                                        <ResponsiveH1
                                            hasCustomFontSize={true}
                                            className={`text-[16px] md:text-[20px] tracking-normal lg:text-[22px]`}>
                                            25%
                                        </ResponsiveH1>
                                        <ResponsiveBody1 className={`shrink-0 text-sm`}>
                                            per year
                                        </ResponsiveBody1>
                                    </div>
                                </div>

                                {/*     LOCATION    */}
                                <div>
                                    <ResponsiveBody1 className={`-mb-2 text-sm`}>
                                        Location
                                    </ResponsiveBody1>
                                    <ResponsiveH1
                                        hasCustomFontSize={true}
                                        className={`text-[16px] md:text-[20px] tracking-normal lg:text-[22px]`}>
                                        Jupitar
                                    </ResponsiveH1>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/*     First Slide     */}
                        <SwiperSlide
                            style={{
                                width: '400px',
                                // width: '100%',
                                position: 'relative',
                            }}
                        >
                            <StaticImage width={400} alt={'slider img'} src={'../../images/slider/1.png'}/>

                            {/*    top overlay  */}
                            <div
                                className={`absolute w-[90%] z-50 bg-[#04001680] bottom-8 left-1/2 -translate-x-1/2 p-4 flex flex-row justify-between rounded-lg gap-4`}>
                                {/*     OWNERSHIP*/}
                                <div>
                                    <ResponsiveBody1 className={`-mb-2 text-sm`}>
                                        Ownership
                                    </ResponsiveBody1>
                                    <ResponsiveH1
                                        hasCustomFontSize={true}
                                        className={`text-[16px] sm:text-[20px] tracking-normal lg:text-[22px]`}>
                                        25%
                                    </ResponsiveH1>
                                </div>

                                {/*     VACATION    */}
                                <div>
                                    <ResponsiveBody1 className={`-mb-2 text-sm`}>
                                        Vacations
                                    </ResponsiveBody1>
                                    <div className={`flex items-center gap-2`}>
                                        <ResponsiveH1
                                            hasCustomFontSize={true}
                                            className={`text-[16px] md:text-[20px] tracking-normal lg:text-[22px]`}>
                                            25%
                                        </ResponsiveH1>
                                        <ResponsiveBody1 className={`shrink-0 text-sm`}>
                                            per year
                                        </ResponsiveBody1>
                                    </div>
                                </div>

                                {/*     LOCATION    */}
                                <div>
                                    <ResponsiveBody1 className={`-mb-2 text-sm`}>
                                        Location
                                    </ResponsiveBody1>
                                    <ResponsiveH1
                                        hasCustomFontSize={true}
                                        className={`text-[16px] md:text-[20px] tracking-normal lg:text-[22px]`}>
                                        Jupitar
                                    </ResponsiveH1>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/*     First Slide     */}
                        <SwiperSlide
                            style={{
                                width: '400px',
                                // width: '100%',
                                position: 'relative',
                            }}
                        >
                            <StaticImage width={400} alt={'slider img'} src={'../../images/slider/1.png'}/>

                            {/*    top overlay  */}
                            <div
                                className={`absolute w-[90%] z-50 bg-[#04001680] bottom-8 left-1/2 -translate-x-1/2 p-4 flex flex-row justify-between rounded-lg gap-4`}>
                                {/*     OWNERSHIP*/}
                                <div>
                                    <ResponsiveBody1 className={`-mb-2 text-sm`}>
                                        Ownership
                                    </ResponsiveBody1>
                                    <ResponsiveH1
                                        hasCustomFontSize={true}
                                        className={`text-[16px] sm:text-[20px] tracking-normal lg:text-[22px]`}>
                                        25%
                                    </ResponsiveH1>
                                </div>

                                {/*     VACATION    */}
                                <div>
                                    <ResponsiveBody1 className={`-mb-2 text-sm`}>
                                        Vacations
                                    </ResponsiveBody1>
                                    <div className={`flex items-center gap-2`}>
                                        <ResponsiveH1
                                            hasCustomFontSize={true}
                                            className={`text-[16px] md:text-[20px] tracking-normal lg:text-[22px]`}>
                                            25%
                                        </ResponsiveH1>
                                        <ResponsiveBody1 className={`shrink-0 text-sm`}>
                                            per year
                                        </ResponsiveBody1>
                                    </div>
                                </div>

                                {/*     LOCATION    */}
                                <div>
                                    <ResponsiveBody1 className={`-mb-2 text-sm`}>
                                        Location
                                    </ResponsiveBody1>
                                    <ResponsiveH1
                                        hasCustomFontSize={true}
                                        className={`text-[16px] md:text-[20px] tracking-normal lg:text-[22px]`}>
                                        Jupitar
                                    </ResponsiveH1>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
        </div>
    );
};