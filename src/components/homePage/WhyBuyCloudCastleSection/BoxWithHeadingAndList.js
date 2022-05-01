import React from 'react';
import {ResponsiveBody1, ResponsiveH2} from "../../common/typography";

export const BoxWithHeadingAndList = ({heading, listItems}) => {
    return (
        <div className={`max-w-[342px] w-full bg-[#00000040] rounded-lg p-8 backdrop-blur-xl`}>
            <ResponsiveH2>
                {heading}
            </ResponsiveH2>

            <div className={`mt-6 space-y-2`}>

                {/*     Right Text   */}
                {
                    listItems.map(({id,text}) => (
                        <div key={id}>
                            {/*     List-Item   */}
                            <div className={`flex space-x-4`}>
                                {/*     Side Dot    */}
                                <div className={`w-2 mt-2 h-2 bg-gray rounded-full shrink-0`}/>

                                {/*    List Text    */}
                                <ResponsiveBody1>
                                    {text}
                                </ResponsiveBody1>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};