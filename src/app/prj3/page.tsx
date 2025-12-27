import React from 'react';
import Link from "next/link";
import Image from "next/image";

function Prj2Page() {
    return (
        <div>
            {/*Main container*/}
            <div className={'flex items-center justify-center min-h-screen bg-zinc-500/50'}>
                {/*Card*/}
                <div className={'flex md:p-10 md:space-x-10 pr-12 shadow-2xl rounded-lg bg-white '}>
                    <div className={'flex md:flex-col gap-6 flex-col m-4'}>
                        {/*headphone*/}
                        <div
                            className={'justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'}>
                            <Image
                                src={'/images3/headphone.png'}
                                width={252}
                                height={214}
                                alt={'Headphones'}
                                style={{width: 'auto', height: 'auto'}} />
                        </div>
                    </div>
                    <div className={'flex flex-col space-x-3'}>
                        <div className={''}>
                            {/*text*/}
                            <div className={'inline-block'}>
                                <div
                                    className={' bg-black text-tiny text-white font-light text-xs rounded-full pl-2 py-1 pr-3'}>
                                    Free shipping
                                </div>
                            </div>
                            {/*Title*/}
                            <div className={'mt-3 text-2xl'}>
                                Razer Наушники проводные с микрофоном, USB, розовый
                            </div>
                            <div className={'text-xs mt-5 line-through'}>$799</div>
                            <div className={'font-bold mt-2 text-4xl'}>$599</div>
                            <div className={'text-sm font-extralight mt-2  text-tiny text-zinc-400'}>
                                This offer is valid until April 3rd or as long as stock lasts!
                            </div>
                            <button className={'mt-3 w-full bg-blue-800 pb-2 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-102'}>
                                <div className={'bg-sky-600 rounded-lg items-center justify-center text-white p-5'}>
                                    Add to cart
                                </div>
                            </button>
                            <div className={'flex gap-3 items-center mt-3'}>
                                <div className={'w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping'}></div>
                                <div className={'text-xs'}>
                                    50+ pcs. in stock
                                </div>
                            </div>
                            <div className={'flex  mt-5 gap-3'}>
                                <button className={'flex w-full items-center justify-center rounded-lg border-2 space-x-5 p-5 transition delay-100 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-102'}>
                                    <Image
                                        src={'/images3/weight.png'}
                                        alt={'weight'}
                                        width={32}
                                        height={32}
                                        style={{width: 'auto', height: 'auto'}}
                                    />
                                    <div>Add to cart</div>
                                </button>
                                <button className={'flex w-full items-center justify-center rounded-lg border-2 space-x-5 p-5 transition delay-100 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-102'}>
                                    <Image
                                        src={'/images3/heart.png'}
                                        alt={'weight'}
                                        width={32}
                                        height={32}
                                        style={{width: 'auto', height: 'auto'}}
                                    />
                                    <div>Add to wishlist</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prj2Page;