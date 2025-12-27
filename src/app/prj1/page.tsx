import React from 'react';
import Image from 'next/image'

function Prj1Page() {
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-zinc-500">
                {/*Card*/}
                <div className={'bg-zinc-800 p-2 mx-6 rounded-2xl'}>
                    <div className={'flex flex-col md:flex-row rounded-l-xl'}>
                        {/*Image*/}
                        <Image src="/images1/image.jpg" width={170} height={250} style={{width: 'auto', height: 'auto'}} alt=""
                             className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none" />

                        {/*Content*/}
                        <div className={'p-6 md:p-12'}>
                            <h2 className={'font-serif text-xl font-medium text-center text-white md:text-left'}>
                                Get diet and fitness plan in your inbox
                            </h2>
                            <p className={'max-w-xs my-4 text-xs leading-5 tracking-5 tracking-wide text-center text-white md:text-left'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            </p>
                            <div className={'flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0'}>
                                <input type="text" name="" id="" placeholder="Enter your email"
                                className={'focus:outline-none p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 rounded-xs placeholder:text-xs'}/>
                                <button className={'py-3 px-5 text-center text-white bg-zinc-600 rounded-md hover:bg-lime-400/50'}>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prj1Page;