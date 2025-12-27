import React from 'react';
import Link from "next/link";

function Prj2Page() {
    return (
        <div>
            {/*Main container*/}
            <div className={'flex items-center justify-center min-h-screen bg-zinc-500'}>
                {/*Card*/}
                <div className={'flex flex-col my-6 space-y-6 md:space-y-0 md:gap-6 md:flex-row md:my-0'}>
                    {/*Col1*/}
                    <div className={'bg-slate-700 rounded-xl text-white'}>
                        <div className={'flex flex-col p-6 mx-3 mt-4 bg-slate-800 rounded-t-xl'}>
                            <div className={'text-center uppercase'}>
                                Basic
                            </div>
                            <h2 className={'text-center mt-10 font-serif text-5xl'}>
                                100Gb
                            </h2>
                            <h3 className={'text-center font-serif'}>$1.99 /month</h3>
                            <div className={'flex justify-center mt-6'}>
                                <Link href={'#'}
                                      className={'inline-block px-10 py-3 my-6 text-center border border-zinc-600 rounded-xl hover:bg-emerald-800/20 hover:border-violet-800'}>
                                    Purchase
                                </Link>
                            </div>
                        </div>
                        <div className={'border-t border-slate-800/30 mx-3'}></div>
                        <div className={'p-6 mx-3 mb-4 bg-slate-800 rounded-b-xl'}>
                            <div className={'flex flex-col gap-2'}>
                                <div className={'flex items-center justify-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                    <span className={'ml-1 text-xs'}>100Gb Storage</span>
                                </div>
                                <div className={'flex items-center justify-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                    <span className={'ml-1 text-xs'}>Options to add members</span>
                                </div>
                                <div className={'flex items-center justify-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                    <span className={'ml-1 text-xs'}>Extra Security and Backup</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Col2*/}
                    <div className={'bg-slate-700 rounded-xl text-white'}>
                        <div className={'flex flex-col p-6 mx-3 mt-4 bg-slate-800 rounded-t-xl'}>
                            <div className={'text-center uppercase'}>
                                Basic
                            </div>
                            <h2 className={'text-center mt-10 font-serif text-5xl'}>
                                100Gb
                            </h2>
                            <h3 className={'text-center font-serif'}>$1.99 /month</h3>
                            <div className={'flex justify-center mt-6'}>
                                <Link href={'#'}
                                      className={'inline-block px-10 py-3 my-6 text-center border border-zinc-600 rounded-xl hover:bg-emerald-800/20 hover:border-violet-800'}>
                                    Purchase
                                </Link>
                            </div>
                        </div>
                        <div className={'border-t border-slate-800/30 mx-3'}></div>
                        <div className={'p-6 mx-3 mb-4 bg-slate-800 rounded-b-xl'}>
                            <div className={'flex flex-col gap-2'}>
                                <div className={'flex items-center justify-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                    <span className={'ml-1 text-xs'}>100Gb Storage</span>
                                </div>
                                <div className={'flex items-center justify-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                    <span className={'ml-1 text-xs'}>Options to add members</span>
                                </div>
                                <div className={'flex items-center justify-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                    <span className={'ml-1 text-xs'}>Extra Security and Backup</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Col3*/}
                    <div className={'bg-slate-700 rounded-xl text-white'}>
                        <div className={'flex flex-col p-6 mx-3 mt-4 bg-slate-800 rounded-t-xl'}>
                            <div className={'text-center uppercase'}>
                                Basic
                            </div>
                            <h2 className={'text-center mt-10 font-serif text-5xl'}>
                                100Gb
                            </h2>
                            <h3 className={'text-center font-serif'}>$1.99 /month</h3>
                            <div className={'flex justify-center mt-6'}>
                                <Link href={'#'}
                                      className={'inline-block px-10 py-3 my-6 text-center border border-zinc-600 rounded-xl hover:bg-emerald-800/20 hover:border-violet-800'}>
                                    Purchase
                                </Link>
                            </div>
                        </div>
                        <div className={'border-t border-slate-800/30 mx-3'}></div>
                        <div className={'p-6 mx-3 mb-4 bg-slate-800 rounded-b-xl'}>
                            <div className={'flex flex-col gap-2'}>
                                <div className={'flex items-center justify-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                    <span className={'ml-1 text-xs'}>100Gb Storage</span>
                                </div>
                                <div className={'flex items-center justify-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                    <span className={'ml-1 text-xs'}>Options to add members</span>
                                </div>
                                <div className={'flex items-center justify-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
                                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                    <span className={'ml-1 text-xs'}>Extra Security and Backup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prj2Page;