import React from 'react';
import ReactPlayer from "react-player";

export const HeroSection = () => {

    return (
        <div className={'w-full relative'}>
            <div className='player-wrapper'>
                <ReactPlayer
                    // onReady={(reactPlayer) => {
                    //     console.log(reactPlayer,'player is here bro')
                    //     setIsPlaying(true);
                    // }}
                    autoPlay
                    muted
                    loop={true}
                    controls={false}
                    playing={true}
                    className='react-player'
                    url='https://res.cloudinary.com/afzaal1721/video/upload/v1638188675/Roughneck_Origin_hc4amh.mp4'
                    width='100%'
                    height='100%'
                />
            </div>

        {/*    Gradient on video    */}
            <div className={'gradient-1 absolute top-0 left-0 w-full h-full'}/>

        </div>
    );
};
