import React, { useRef, useState } from 'react';
import { useIsVisible } from './useIsVisible';
import { FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';

const Member = () => {

    const memberRef = useRef();
    const memberVisible = useIsVisible(memberRef);
    const firstRef = useRef();
    const firstVisible = useIsVisible(firstRef);
    const step1Ref = useRef();
    const step1Visible = useIsVisible(step1Ref);
    const step2Ref = useRef();
    const step2Visible = useIsVisible(step2Ref);

    return (
        <div id="member" className="lg:h-[1000px] h-auto lg:pb-0 pb-10 w-full bg-black">
            <div ref={memberRef} className={`
            ${"mt-0 flex justify-center transition transition-opacity ease-in duration-700 delay-300"} 
            ${memberVisible ? "opacity-100" : "opacity-0"}
            `}>
            </div>
            <div ref={firstRef} className={`
            ${"flex justify-center transition transition-opacity ease-in duration-700 delay-500"} 
            ${firstVisible ? "opacity-100" : "opacity-0"}
            `}>
                <div className="py-5 md:px-16 sm:px-8 px-2 md:mx-0 mx-6 text-center flex-col lg:h-[150px] md:h-[140px] sm:h-[125px] h-[100px] lg:w-[1000px] md:w-[800px] w-auto ">
                    <p className="lg:text-[32px] md:text-[28px] text-[24px] font-bold subpixel-antialiased text-white">
                        CELESTIAL ERA
                    </p>
                    <p className="text-slate-400 lg:px-32 md:px-24 sm:px-14 px-0 antialiased">
                        1
                        <a className='absolute -translate-y-1 text-[12px]'>st</a>
                        <a className='ml-4'>
                            Number One
                        </a>
                    </p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center">
                <div ref={step1Ref} className={`
                ${"h-[500px] w-[350px] bg-rose-900 mx-4 rounded-about overflow-hidden lg:my-0 my-4 transition ease-in duration-300"}
                ${step1Visible ? "scale-100" : "scale-0"}
                `}>
                    <div className="transition duration-300 ease-in translate-y-0 hover:-translate-y-[490px]">
                        <div className={`
                    ${"w-full h-[490px] relative "}
                    `}>
                            <div className="flex image-wrapper-loretta h-4/6 w-full text-white overflow-hidden p-4">
                                <div className='flex justify-center'>
                                    <Image
                                        src="/images/loretta/loretta_01.png"
                                        className={`object-contain`}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 h-2/6">
                                <p className="ml-10 text-4xl text-white subpixel-antialiased">
                                    Loretta José
                                </p>
                                <p className="text-slate-400 ml-10 mt-4 mr-10">
                                    The Cutest Wolpertinger
                                </p>
                            </div>
                        </div>
                        <div className={`
                    ${"w-full h-[500px] relative text-white content-center bg-gradient-to-r from-rose-600 to-rose-300"}
                    `}>
                            <p className="ml-10 text-4xl text-white subpixel-antialiased cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5 hover:text-rose-900">
                                <a href="/members/Loretta_Jose">
                                    Loretta José
                                </a>
                            </p>
                            <div className="ml-10 text-white mt-10 mr-10">
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://www.youtube.com/@Loretzslowly" target="_blank">
                                        <FaYoutube className="mr-2" />Youtube
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://x.com/Loretzslowly" target="_blank">
                                        <FaXTwitter className="mr-2" />Twitter
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5">
                                    <a className='flex items-center' href="https://www.twitch.tv/loretzslowly" target="_blank">
                                        <FaTwitch className="mr-2" />Twitch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={step2Ref} className={`
                ${"h-[500px] w-[350px] bg-gray-900 mx-4 rounded-about overflow-hidden lg:my-0 my-4 transition ease-in duration-300 lg:delay-150"}
                ${step2Visible ? "scale-100" : "scale-0"}
                `}>
                    <div className="transition duration-300 ease-in translate-y-0 hover:-translate-y-[490px]">
                        <div className={`
                    ${"w-full h-[490px] relative "}
                    `}>
                            <div className="flex-1 h-4/6 content-center text-center justify-center items-center text-white">
                                IMAGE
                            </div>
                            <div className="flex-1 h-2/6">
                                <p className="ml-10 text-4xl text-white subpixel-antialiased">
                                    Delta Alizella
                                </p>
                                <p className="text-slate-400 ml-10 mt-4 mr-10">
                                    The Greatest Whale eat Galaxy
                                </p>
                            </div>
                        </div>
                        <div className={`
                    ${"w-full h-[500px] relative text-white content-center bg-gradient-to-r from-indigo-700 to-pink-500"}
                    `}>
                            <p className="ml-10 text-4xl text-white subpixel-antialiased cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5 hover:text-pink-700">
                                <a href="/members/Delta_Alizella">
                                Delta Alizella
                                </a>
                            </p>
                            <div className="ml-10 text-white mt-10 mr-10">
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://www.youtube.com/@DELTA_ALIZELLA" target="_blank">
                                        <FaYoutube className="mr-2" />Youtube
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://x.com/Delta_Alizella" target="_blank">
                                        <FaXTwitter className="mr-2" />Twitter
                                    </a>
                                </div>
                                {/* <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5">
                                    <a className='flex items-center' href="https://www.twitch.tv/milynitivona" target="_blank">
                                        <FaTwitch className="mr-2" />Twitch
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;