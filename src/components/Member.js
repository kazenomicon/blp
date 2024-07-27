import React, { useRef, useState } from 'react';
import { useIsVisible } from './useIsVisible';
import { FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';

const Member = () => {
    const [mourseIn, setMouseIn] = useState(false);
    const [mourseIn2, setMouseIn2] = useState(false);
    const [mourseIn3, setMouseIn3] = useState(false);

    const memberRef = useRef();
    const memberVisible = useIsVisible(memberRef);
    const firstRef = useRef();
    const firstVisible = useIsVisible(firstRef);
    const step1Ref = useRef();
    const step1Visible = useIsVisible(step1Ref);
    const step2Ref = useRef();
    const step2Visible = useIsVisible(step2Ref);
    const step3Ref = useRef();
    const step3Visible = useIsVisible(step3Ref);

    return (
        <div id="member" className="lg:h-[1000px] h-auto lg:pb-0 pb-10 w-full bg-black">
            <div ref={memberRef} className={`
            ${"mt-10 flex justify-center transition transition-opacity ease-in duration-700 delay-300"} 
            ${memberVisible ? "opacity-100" : "opacity-0"}
            `}>
                <div className="md:mt-14 mt-10 py-5 md:px-16 sm:px-8 px-2 md:mx-0 mx-6 text-center flex-col lg:h-[150px] md:h-[140px] sm:h-[125px] h-[100px] lg:w-[1000px] md:w-[800px] w-auto ">
                    <p className="lg:text-[36px] md:text-[32px] text-[28px] font-bold subpixel-antialiased text-white">
                        MEMBERS
                    </p>
                    <p className="text-slate-500 lg:px-32 md:px-24 sm:px-14 px-0 antialiased">
                        Blinding Lights Project
                    </p>
                </div>
            </div>
            <div ref={firstRef} className={`
            ${"flex justify-center transition transition-opacity ease-in duration-700 delay-500"} 
            ${firstVisible ? "opacity-100" : "opacity-0"}
            `}>
                <div className="py-5 md:px-16 sm:px-8 px-2 md:mx-0 mx-6 text-center flex-col lg:h-[150px] md:h-[140px] sm:h-[125px] h-[100px] lg:w-[1000px] md:w-[800px] w-auto ">
                    <p className="lg:text-[32px] md:text-[28px] text-[24px] font-bold subpixel-antialiased text-white">
                        OCEAN BLUE
                    </p>
                    <p className="text-slate-500 lg:px-32 md:px-24 sm:px-14 px-0 antialiased">
                        0
                        <a className='absolute -translate-y-1 text-[12px]'>th</a>
                        <a className='ml-4'>
                            Absolute Zero
                        </a>
                    </p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center">
                <div ref={step1Ref} className={`
                ${"h-[500px] w-[350px] bg-blue-900 mx-4 rounded-about overflow-hidden lg:my-0 my-4 transition ease-in duration-300"}
                ${step1Visible ? "scale-100" : "scale-0"}
                `}>
                    <div className="transition duration-300 ease-in translate-y-0 hover:-translate-y-[490px]">
                        <div className={`
                    ${"w-full h-[490px] relative "}
                    `}>
                            <div className="flex image-wrapper-aqua h-4/6 w-full text-white overflow-hidden p-4">
                                <div className='flex justify-center'>
                                    <Image
                                        src="/images/aquamarinia/aquamarinia_01.png"
                                        className={`object-contain`}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 h-2/6">
                                <p className="ml-10 text-4xl text-white subpixel-antialiased">
                                    AquaMarinia
                                </p>
                                <p className="text-slate-500 ml-10 mt-4 mr-10">
                                    Spirit of the Ocean, Protector of the Sea
                                </p>
                            </div>
                        </div>
                        <div className={`
                    ${"w-full h-[500px] relative text-white content-center bg-gradient-to-r from-blue-700 to-sky-400"}
                    `}>
                            <p className="ml-10 text-4xl text-white subpixel-antialiased cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5 hover:text-blue-900">
                                <a href="/members/AquaMarinia">
                                    AquaMarinia
                                </a>
                            </p>
                            <div className="ml-10 text-white mt-10 mr-10">
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://www.youtube.com/@AquaMarinia_BLP" target="_blank">
                                        <FaYoutube className="mr-2" />Youtube
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://twitter.com/AquaMariniaVT" target="_blank">
                                        <FaXTwitter className="mr-2" />Twitter
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5">
                                    <a className='flex items-center' href="https://www.twitch.tv/aquamarinia" target="_blank">
                                        <FaTwitch className="mr-2" />Twitch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={step2Ref} className={`
                ${"h-[500px] w-[350px] bg-green-900 mx-4 rounded-about overflow-hidden lg:my-0 my-4 transition ease-in duration-300 lg:delay-150"}
                ${step2Visible ? "scale-100" : "scale-0"}
                `}>
                    <div className="transition duration-300 ease-in translate-y-0 hover:-translate-y-[490px]">
                        <div className={`
                    ${"w-full h-[490px] relative "}
                    `}>
                            <div className="flex image-wrapper-milyni h-4/6 w-full text-white overflow-hidden p-4">
                                <div className='flex justify-center'>
                                    <Image
                                        src="/images/milyni/milyni_01.png"
                                        className={``}
                                        alt="Picture of the author"
                                        width={250}
                                        height={250}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 h-2/6">
                                <p className="ml-10 text-4xl text-white subpixel-antialiased">
                                    Milyni Tivona
                                </p>
                                <p className="text-slate-500 ml-10 mt-4 mr-10">
                                    Mail girl from a magical world!!
                                </p>
                            </div>
                        </div>
                        <div className={`
                    ${"w-full h-[500px] relative text-white content-center bg-gradient-to-r from-lime-700 to-green-400 "}
                    `}>
                            <p className="ml-10 text-4xl text-white subpixel-antialiased cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5 hover:text-green-900">
                                <a href="/members/Milyni_Tivona">
                                    Milyni Tivona
                                </a>
                            </p>
                            <div className="ml-10 text-white mt-10 mr-10">
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://www.youtube.com/@MilyniTivona_BLP" target="_blank">
                                        <FaYoutube className="mr-2" />Youtube
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://twitter.com/Milyni_Tivona" target="_blank">
                                        <FaXTwitter className="mr-2" />Twitter
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5">
                                    <a className='flex items-center' href="https://www.twitch.tv/milynitivona" target="_blank">
                                        <FaTwitch className="mr-2" />Twitch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={step3Ref} className={`
                ${"h-[500px] w-[350px] bg-gray-900 mx-4 rounded-about overflow-hidden lg:my-0 my-4 transition ease-in duration-300 lg:delay-300"}
                ${step3Visible ? "scale-100" : "scale-0"}
                `} >
                    <div className="transition duration-300 ease-in translate-y-0 hover:-translate-y-[490px]">
                        <div className={`
                    ${"w-full h-[490px] relative "} 
                    `}>
                            <div className="flex-1 h-4/6 content-center text-center justify-center items-center text-white">
                                IMAGE
                            </div>
                            <div className="flex-1 h-2/6">
                                <p className="ml-10 text-4xl text-white subpixel-antialiased">
                                    Lafka Balea
                                </p>
                                <p className="text-slate-500 ml-10 mt-4 mr-10">
                                    A Pirate Captain who believe in freedom and kindness
                                </p>
                            </div>
                        </div>
                        <div className={`
                    ${"w-full h-[500px] relative text-white content-center bg-gradient-to-r from-violet-700 to-purple-400"}
                    `}>
                            <p className="ml-10 text-4xl text-white subpixel-antialiased cursor-pointer transition-all duration-300 ease hover:-translate-y-0.5 hover:text-purple-900">
                                <a href="/members/Lafka_Balea">
                                    Lafka Balea
                                </a>
                            </p>
                            <div className="ml-10 text-white mt-10 mr-10">
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://www.youtube.com/@lafkabalea_blp" target="_blank">
                                        <FaYoutube className="mr-2" />Youtube
                                    </a>
                                </div>
                                <div className="flex items-center mt-4 transition-all duration-300 ease hover:-translate-y-0.5" >
                                    <a className='flex items-center' href="https://x.com/LafkaBalea" target="_blank">
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