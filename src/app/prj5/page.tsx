import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Prj5Page() {
  return (
    <div className={'flex min-h-screen items-center justify-center bg-rose-50'}>
      {/*main container*/}
      <div
        className={'relative flex flex-col space-y-10 rounded-2xl bg-white shadow-lg md:m-0 md:flex-row md:space-y-0'}
      >
        {/*left*/}
        <div className={'p-6 md:p-20'}>
          <div className={'items-center justify-center md:pt-18'}>
            <h1 className={'mb-6 text-4xl font-bold'}>Log in</h1>
            <div className={'text-sm font-thin text-gray-400'}>
              Log in to your account to upload or download pictures, videos or music.
            </div>
            <input
              type="text"
              placeholder={'Enter your email address'}
              className={'mt-12 w-full rounded border p-6 text-lg text-gray-600 placeholder:font-light'}
            />
            {/*Forgot and Next*/}
            <div className={'mt-16 flex items-center justify-end'}>
              <div className={'text-cyan-700 flex-1'}>
                <Link href={'#'}>Forgot password</Link>
              </div>

              <div
                className={
                  'flex w-1/2 justify-center rounded bg-cyan-700 p-6 px-3 transition delay-100 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-102 hover:shadow-lg'
                }
              >
                <button className={'rounded px-3 font-bold'}>
                  <span className={'text-lg font-thin text-white'}>Next</span>
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <line x1="13" y1="18" x2="19" y2="12"></line>
                  <line x1="13" y1="6" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>

            {/*Line*/}
            <div className={'mt-20 border-b border-gray-200'}></div>

            {/*or*/}
            <div className={'mt-6 flex items-center justify-center text-sm font-thin text-gray-400'}>
              <span>or log in with</span>
            </div>

            {/*G or F*/}
            <div className={'mt-18 flex justify-between space-x-6 px-6'}>
              <button
                className={
                  'flex w-1/2 items-center justify-center space-x-2 rounded border border-gray-300 p-3 px-6 font-bold transition delay-100 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-102 hover:shadow-lg'
                }
              >
                <Image
                  src={'/images5/facebook.png'}
                  alt={'f'}
                  width={36}
                  height={36}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <span className={'text-lg font-thin text-black'}>Facebook</span>
              </button>
              <button
                className={
                  'flex w-1/2 items-center justify-center space-x-2 rounded border border-gray-300 p-3 px-6 font-bold transition delay-100 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-102 hover:shadow-lg'
                }
              >
                <Image
                  src={'/images5/google.png'}
                  alt={'f'}
                  width={36}
                  height={36}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <span className={'text-lg font-thin text-black'}>Google</span>
              </button>
            </div>
          </div>
        </div>

        {/*right*/}
        <div className={'w-430px h-678px hidden md:block'}>
          <Image
            src={'/images5/image.jpg'}
            alt={'image'}
            width={430}
            height={678}
            style={{ width: 'auto', height: 'auto' }}
          />
          <div
            className={
              'absolute top-2 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white text-4xl font-thin transition delay-100 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-102 hover:shadow-lg'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black group-hover:text-gray-600"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prj5Page;
