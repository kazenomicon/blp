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
                </div>
            </div>
            <div className='flex w-auto h-auto mx-4'>
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