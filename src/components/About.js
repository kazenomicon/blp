import React, { useRef } from 'react';
import { useIsVisible } from './useIsVisible';

const About = () => {
    const aboutRef = useRef();
    const isIsVisible = useIsVisible(aboutRef);
    return (
        <>
            <div className={`${'w-full md:pt-20 pt-10 flex justify-center'}`} id="about">
                <div
                    ref={aboutRef}
                    className={`
                ${"md:mt-4 mt-2 py-5 md:px-20 sm:px-10 px-4 md:mx-0 mx-6 content-center flex-col border-b lg:h-[300px] md:h-[275px] sm:h-[225px] h-[180px] lg:w-[1000px] md:w-[800px] w-auto bg-slate-100 shadow-lg rounded-about transition ease-in duration-500"}
                ${isIsVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                `}>
                    <p className="lg:text-[28px] md:text-[20px] sm:text-[16px] text-[14px] subpixel-antialiased">
                        <span className="text-gray-400">About Blinding Lights Project </span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        <span className="text-gray-400"> Blinding Lights Project.</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;