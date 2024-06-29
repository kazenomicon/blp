import React, { useRef } from 'react';
import { useIsVisible } from './useIsVisible';
import Image from 'next/image';

const Product = () => {

    return (
        <div className='pt-20 justify-center text-center bg-black ' id="product" >
            <div className='md:h-[75px] h-[50px] justify-center text-center'>
                <p className='text-[36px] font-bold text-white'>
                    PRODUCTS
                </p>
                <p className="text-slate-500 lg:px-32 md:px-24 sm:px-14 px-0 antialiased">
                    BLP Goods
                </p>
            </div>
            <div className={`${'w-full pb-10 pt-10 flex justify-center'}`} >
                <div className='flex justify-center h-auto xl:mx-20 lg:mx-16 md:mx-12 sm:mx-8 mx-4'>
                    <div className='xl:w-[1200px] lg:w-[1000px] w-full content-center justify-center text-center rounded-about text-white'>
                        <Image
                            src='/images/product-01.jpeg'
                            alt='blp-main-image'
                            width={0}
                            height={0}
                            loading="lazy"
                            sizes="200vw"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-screen text-white'>

            </div>
        </div>
    );
}

export default Product;