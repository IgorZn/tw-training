import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Prj5Page() {
  return (
    <div className={''}>
      <div
        className={
          'flex min-h-screen flex-col items-center justify-center bg-[url(/images6/bg-header-desktop.png)] bg-cover'
        }
      >
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

        {/*snippets section*/}
        <section id={'snippets'}>
          <div className={'mx-auto my-20 max-w-6xl px-10 text-center'}>
            <h3 className={'text-4xl font-bold text-gray-600 md:text-5xl'}>Keep track of your snippets</h3>
            <p className={'mx-auto mt-10 mb-10 max-w-3xl text-xl font-thin text-gray-500/60'}>
              Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets
              immediately on all your devices. Our Mac and iOS apps will help you organize everything.
            </p>
          </div>
        </section>

        {/*features*/}
        <section id={'features'}>
          <div className={'section-container my-20'}>
            <div className={'relative my-20 flex flex-col space-y-5 space-x-20 md:flex-row'}>
              <div className={'md:w-1/2 mx-auto'}>
                <Image
                  className={'md:absolute top-0 right-[50%]'}
                  src={'/images6/image-computer.png'}
                  alt={'image-computer'}
                  width={752}
                  height={752}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>

              {/*Items*/}
              <div className={'mt-16 mb-24 flex flex-col md:text-left space-y-12 md:ml-70 md:pl-30'}>
                <div className={'flex flex-col space-y-3 md:mb-10'}>
                  <p className={'text-2xl font-bold text-gray-950/70'}>Quick Search</p>
                  <p className={'text-lg font-thin text-gray-500/60'}>
                    Easily search your snippets by content, category, web address, application, and more.
                  </p>
                </div>

                <div className={'flex flex-col space-y-3 md:mb-10'}>
                  <p className={'text-2xl font-bold text-gray-950/70'}>iCloud Sync</p>
                  <p className={'text-lg font-thin text-gray-500/60'}>
                    Instantly saves and syncs snippets across all your devices.
                  </p>
                </div>

                <div className={'flex flex-col space-y-3 md:mb-10'}>
                  <p className={'text-2xl font-bold text-gray-950/70'}>Completely History</p>
                  <p className={'text-lg font-thin text-gray-500/60'}>
                    Retrieve any snippets from the first moment you started using the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Prj5Page;
