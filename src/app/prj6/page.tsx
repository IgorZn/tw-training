import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Prj5Page() {
  return (
    <div className={''}>
      <div className={'flex min-h-screen items-center justify-center bg-[url(/images6/bg-header-desktop.png)] bg-cover'}>
        {/*main container*/}
        <section id={'hero'}>
          <div className={'mx-auto mb-40 max-w-6xl px-10 pt-16 text-center'}>
            <Image
              className={'mx-auto my-16'}
              src={'/images6/logo.svg'}
              alt={'logo'}
              width={125}
              height={125}
              style={{ width: 'auto', height: 'auto' }}
            />

            <h3 className={'mb-8 text-4xl font-bold text-gray-600 md:text-5xl'}>A history of everything you copy</h3>

            <p className={'mx-auto mb-10 max-w-3xl text-2xl text-gray-500/80'}>
              Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all
              your devices.
            </p>

            <div className={'flex w-full flex-col justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-4'}>
              <button
                className={'mx-20 rounded-2xl bg-cyan-700/80 p-4 px-8 text-xl text-white duration-200 hover:opacity-80'}
              >
                Download for iOS
              </button>
              <button
                className={'mx-20 rounded-2xl bg-blue-600/80 p-4 px-8 text-xl text-white duration-200 hover:opacity-80'}
              >
                Download for Mac
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Prj5Page;
