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
              <div className={'mx-auto md:w-1/2'}>
                <Image
                  className={'top-0 right-[50%] md:absolute'}
                  src={'/images6/image-computer.png'}
                  alt={'image-computer'}
                  width={752}
                  height={752}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>

              {/*Items*/}
              <div className={'mt-16 mb-24 flex flex-col space-y-12 md:ml-70 md:pl-30 md:text-left'}>
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

        {/*access*/}
        <section id={'access'}>
          <div className={'my-20 flex max-w-6xl flex-col items-center justify-center space-y-10'}>
            <p className={'text-4xl font-bold text-gray-600 md:text-5xl'}>Access Clipboard Anywhere</p>
            <p className={'text-center text-lg font-thin text-gray-500/60 md:mb-20 md:max-w-3/4'}>
              Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple
              clicks.
            </p>
            <Image
              src={'/images6/image-devices.png'}
              alt={'devices'}
              width={905}
              height={575}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </section>

        {/*supercharge*/}
        <section id={'supercharge'}>
          <div className={'mx-auto my-10 flex flex-col items-center justify-center space-y-10'}>
            <p className={'text-4xl font-bold text-gray-600 md:text-5xl'}>Supercharge your workflow</p>
            <p className={'text-center text-lg font-thin text-gray-500/60 md:mb-20 md:max-w-3/4'}>
              We&apos;ve got the tools to boost your productivity.
            </p>

            {/*Items Container*/}
            <div className={'flex max-w-6xl flex-col space-y-3 space-x-5 md:mb-10 md:flex-row'}>
              {/*item*/}
              <div className={'flex flex-col items-center justify-center space-y-5'}>
                <Image
                  className={'mb-8'}
                  src={'/images6/icon-blacklist.svg'}
                  alt={'blacklist'}
                  width={44}
                  height={40}
                />
                <p className={'text-lg font-bold text-gray-600 md:text-xl'}>Create Blacklists</p>
                <p className={'max-w-2/3 text-center text-sm font-thin text-gray-500/60 md:mb-20'}>
                  Easily search your snippets by content, category, web address, application, and more.
                </p>
              </div>

              {/*item*/}
              <div className={'flex flex-col items-center justify-center space-y-5'}>
                <Image
                  className={'mb-8'}
                  src={'/images6/icon-blacklist.svg'}
                  alt={'blacklist'}
                  width={44}
                  height={40}
                />
                <p className={'text-lg font-bold text-gray-600 md:text-xl'}>Create Blacklists</p>
                <p className={'max-w-2/3 text-center text-sm font-thin text-gray-500/60 md:mb-20'}>
                  Easily search your snippets by content, category, web address, application, and more.
                </p>
              </div>

              {/*item*/}
              <div className={'flex flex-col items-center justify-center space-y-5'}>
                <Image
                  className={'mb-8'}
                  src={'/images6/icon-blacklist.svg'}
                  alt={'blacklist'}
                  width={44}
                  height={40}
                />
                <p className={'text-lg font-bold text-gray-600 md:text-xl'}>Create Blacklists</p>
                <p className={'max-w-2/3 text-center text-sm font-thin text-gray-500/60 md:mb-20'}>
                  Easily search your snippets by content, category, web address, application, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*References Section*/}
        <section id={'references'}>
          <div
            className={
              'my-25 flex max-w-7xl flex-col items-center justify-between space-y-16 md:my-15 md:flex-row md:space-x-16'
            }
          >
            <Image src={'/images6/logo-google.png'} alt={'google'} width={145} height={49} />
            <Image src={'/images6/logo-ibm.png'} alt={'ibm'} width={139} height={35} />
            <Image src={'/images6/logo-microsoft.png'} alt={'microsoft'} width={161} height={35} />
            <Image src={'/images6/logo-hp.png'} alt={'hp'} width={135} height={56} />
            <Image src={'/images6/logo-vector-graphics.png'} alt={'vector-graphics'} width={125} height={30} />
          </div>
        </section>

        {/* bottom */}
        <section id={'bottom'}>
          <div className={'mx-auto mt-20 flex flex-col items-center space-y-10'}>
            <p className={'text-center text-4xl font-bold text-gray-600 md:text-5xl'}>Clipboard for iOS and MacOS</p>
            <p className={'text-center text-lg font-thin text-gray-500/60 md:mb-10 md:max-w-3/4'}>
              Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start
              adding to your clipboard.
            </p>
          </div>

          {/* buttons download */}
          <div
            className={
              'mx-auto my-5 flex max-w-3xl flex-col items-center justify-center space-y-6 md:mb-20 md:flex-row md:space-y-0 md:space-x-6'
            }
          >
            <button className={'rounded-2xl bg-cyan-700/80 p-4 px-8 text-xl text-white duration-200 hover:opacity-80'}>
              Download for iOS
            </button>
            <button className={'rounded-2xl bg-blue-600/80 p-4 px-8 text-xl text-white duration-200 hover:opacity-80'}>
              Download for Mac
            </button>
          </div>
        </section>
      </div>

      {/* footer */}
      <footer className={'bg-gray-50'}>
        <div className={'section-container'}>
          <div className={'flex flex-col items-center justify-between pt-10 md:flex-row mx-auto pb-8'}>
            <Image className={''} src={'/images6/logo.svg'} alt={'logo'} width={62} height={52} />

            <div className={'md:ml-10 my-4 flex flex-col items-center space-x-8 md:flex-row'}>
              <div className={'flex flex-col text-gray-700 md:flex-row space-y-5 md:space-x-5 md:space-y-3 font-thin text-xl'}>
                <Link href={'#'}>FAQs</Link>
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Install Guide</Link>
                <Link href={'#'}>Contact Us</Link>
                <Link href={'#'}>Press Kit</Link>
              </div>


            </div>

            <div className={'flex mt-5 md:mt-0 space-x-3 items-center justify-center'}>
              <Image className={''} src={'/images6/icon-facebook.svg'} alt={'logo'} width={24} height={24} />
              <Image className={''} src={'/images6/icon-twitter.svg'} alt={'logo'} width={24} height={24} />
              <Image className={''} src={'/images6/icon-instagram.svg'} alt={'logo'} width={24} height={24} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Prj5Page;
