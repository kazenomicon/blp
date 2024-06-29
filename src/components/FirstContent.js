import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";

const FirstContent = () => {
    return (
        <>
            <div id="home" className='w-full flex justify-center'>
                <div className="md:mt-20 mt-24 flex-col lg:h-[400px] md:h-[350px] h-[200px] w-[1000px] text-center content-center px-10">
                    <p className='-translate-y-10 lg:text-[72px] md:text-[48px] text-[36px] font-bold subpixel-antialiased'>Blinding Lights Project</p>
                    <p className='-translate-y-10 text-slate-500 md:text-[16px] text-[12px] antialiased'>
                        Blinding Lights Project Vtuber
                    </p>
                    {/* <div className='md:mt-10 mt-6 md:flex w-auto content-center'>
                        <div className='lg:text-xl md:text-lg text-sm text-center text-white md:w-4/6 md:h-12 h-10 md:mr-5 mr-0 rounded-full shadow-lg content-center bg-gradient-to-r from-teal-500 to-lime-400 cursor-pointer transition duration-300 hover:-translate-y-0.5'>
                            <p>
                                Purchase a Checker Node License (NFT)
                            </p>
                        </div>
                        <div className='md:w-2/6 md:mt-0 mt-2 md:h-12 h-10 content-center cursor-pointer transition duration-300 hover:-translate-y-0.5'>
                            <p className='flex lg:text-xl md:text-lg text-sm justify-center'>
                                What is a checker node
                                <MdArrowOutward className='ml-2 translate-y-1' />
                            </p>

                        </div>
                    </div> */}
                </div>
            </div>
            <div className='flex w-auto xl:h-[650px] lg:h-[600px] md:h-[500px] sm:h-[400px] h-[300px] lg:px-[200px] mx-4'>
                <div className='w-full content-center justify-center text-center rounded-about text-white'>
                    <Image
                        src='/images/christmas_blp.jpg'
                        alt='blp-main-image'
                        width={0}
                        height={0}
                        loading="lazy"
                        sizes="200vw"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
            </div>
        </>
    );
}

export default FirstContent;