import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
});

function Prj7Page() {
  return (
    <>
      <section id={'hero'} className={'bg-[url(/images7/desktop/image-hero.jpg)] bg-cover'}>
        <div className={`${josefinSans.variable} container mx-auto max-w-6xl px-6 py-12 md:px-0`}>
          <nav className={'flex items-center justify-between font-bold text-white'}>
            {/* logo */}
            <Image src={'/images7/logo.svg'} alt={'logo'} width={192} height={32} />

            {/* menu */}
            <div className={'hidden h-10 md:flex md:space-x-8'}>
              <div className={'group'}>
                <Link href={'#'}>About</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className={'group'}>
                <Link href={'#'}>Careers</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className={'group'}>
                <Link href={'#'}>Events</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className={'group'}>
                <Link href={'#'}>Products</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className={'group'}>
                <Link href={'#'}>Support</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>

            {/* Mobile menu. TODO */}
            <div></div>
          </nav>
          <div className={'mt-32 mb-32 max-w-lg border border-gray-200 p-4 text-5xl font-thin md:p-10'}>
            <div className={'font-sans text-white uppercase'}>Impressive Experiences That Deliver</div>
          </div>
        </div>
      </section>

      {/* feature */}
      <section id={'feature'}>
        <div className={'relative mx-auto my-32 flex max-w-6xl flex-col px-6 text-gray-900 md:flex-row md:px-0'}>
          <Image src={'/images7/desktop/image-interactive.jpg'} alt={'interactive'} width={731} height={500} />
          <div
            className={
              'right-0 bottom-0 flex max-w-full flex-col space-y-6 space-x-6 bg-white p-10 text-black md:absolute md:max-w-1/2'
            }
          >
            <div className={'font-sans text-6xl font-thin uppercase'}>The leader in interactive VR</div>
            <div className={'font-mono text-sm font-thin'}>
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best
              companies around the globe. Our award-winning creations have transformed businesses through digital
              experiences that bind to their brand.
            </div>
          </div>
        </div>
      </section>

      {/* creations */}
      <section id={'creations'}>
        <div className={'container mx-auto my-32 max-w-6xl text-gray-700'}>
          {/* header */}
          <div className={'flex justify-between'}>
            <span className={'font-sans text-6xl font-thin uppercase'}>Our Creations</span>
            <div className={'flex items-center justify-center text-center'}>
              <span
                className={
                  'border border-2 border-black px-8 py-2 font-mono text-lg uppercase hover:bg-black hover:text-white'
                }
              >
                see all
              </span>
            </div>
          </div>

          {/* images grid */}
          <div className={'my-24 grid gap-6 md:grid-cols-4'}>
            <div className={'group relative overflow-hidden'}>
              <Image
                className={'hidden w-full duration-200 group-hover:scale-105 md:block'}
                src={'/images7/desktop/image-deep-earth.jpg'}
                width={264}
                height={464}
                alt={'earth'}
              />
              <Image
                className={'w-full md:hidden'}
                src={'/images7/mobile/image-deep-earth.jpg'}
                width={654}
                height={240}
                alt={'earth'}
              />
              <div className={'item-gradient'}></div>

              <h5>
                <div className={'w-full bg-gray-100/50 px-10 py-2'}>deep earth</div>
              </h5>
            </div>
            <div className={'group relative overflow-hidden'}>
              <Image
                className={'hidden w-full duration-200 group-hover:scale-105 md:block'}
                src={'/images7/desktop/image-deep-earth.jpg'}
                width={264}
                height={464}
                alt={'earth'}
              />
              <Image
                className={'w-full md:hidden'}
                src={'/images7/mobile/image-deep-earth.jpg'}
                width={654}
                height={240}
                alt={'earth'}
              />
              <div className={'item-gradient'}></div>

              <h5>
                <div className={'w-full bg-gray-100/50 px-10 py-2'}>deep earth</div>
              </h5>
            </div>

            <div className={'group relative overflow-hidden'}>
              <Image
                className={'hidden w-full duration-200 group-hover:scale-105 md:block'}
                src={'/images7/desktop/image-night-arcade.jpg'}
                width={264}
                height={464}
                alt={'earth'}
              />
              <Image
                className={'w-full md:hidden'}
                src={'/images7/mobile/image-night-arcade.jpg'}
                width={654}
                height={240}
                alt={'earth'}
              />
              <div className={'item-gradient'}></div>
              <h5>
                <div className={'w-full bg-gray-100/50 px-10 py-2'}>Night Arcade</div>
              </h5>
            </div>
            <div className={'group relative overflow-hidden'}>
              <Image
                className={'hidden w-full duration-200 group-hover:scale-105 md:block'}
                src={'/images7/desktop/image-night-arcade.jpg'}
                width={264}
                height={464}
                alt={'earth'}
              />
              <Image
                className={'w-full md:hidden'}
                src={'/images7/mobile/image-night-arcade.jpg'}
                width={654}
                height={240}
                alt={'earth'}
              />
              <div className={'item-gradient'}></div>
              <h5>
                <div className={'w-full bg-gray-100/50 px-10 py-2'}>Night Arcade</div>
              </h5>
            </div>

            {/* next 4 */}
            <div className={'group relative overflow-hidden'}>
              <Image
                className={'hidden w-full duration-200 group-hover:scale-105 md:block'}
                src={'/images7/desktop/image-night-arcade.jpg'}
                width={264}
                height={464}
                alt={'earth'}
              />
              <Image
                className={'w-full md:hidden'}
                src={'/images7/mobile/image-night-arcade.jpg'}
                width={654}
                height={240}
                alt={'earth'}
              />
              <div className={'item-gradient'}></div>
              <h5>
                <div className={'w-full bg-gray-100/50 px-10 py-2'}>Night Arcade</div>
              </h5>
            </div>
            <div className={'group relative overflow-hidden'}>
              <Image
                className={'hidden w-full duration-200 group-hover:scale-105 md:block'}
                src={'/images7/desktop/image-night-arcade.jpg'}
                width={264}
                height={464}
                alt={'earth'}
              />
              <Image
                className={'w-full md:hidden'}
                src={'/images7/mobile/image-night-arcade.jpg'}
                width={654}
                height={240}
                alt={'earth'}
              />
              <div className={'item-gradient'}></div>
              <h5>
                <div className={'w-full bg-gray-100/50 px-10 py-2'}>Night Arcade</div>
              </h5>
            </div>

            <div className={'group relative overflow-hidden'}>
              <Image
                className={'hidden w-full duration-200 group-hover:scale-105 md:block'}
                src={'/images7/desktop/image-deep-earth.jpg'}
                width={264}
                height={464}
                alt={'earth'}
              />
              <Image
                className={'w-full md:hidden'}
                src={'/images7/mobile/image-deep-earth.jpg'}
                width={654}
                height={240}
                alt={'earth'}
              />
              <div className={'item-gradient'}></div>

              <h5>
                <div className={'w-full bg-gray-100/50 px-10 py-2'}>deep earth</div>
              </h5>
            </div>
            <div className={'group relative overflow-hidden'}>
              <Image
                className={'hidden w-full duration-200 group-hover:scale-105 md:block'}
                src={'/images7/desktop/image-deep-earth.jpg'}
                width={264}
                height={464}
                alt={'earth'}
              />
              <Image
                className={'w-full md:hidden'}
                src={'/images7/mobile/image-deep-earth.jpg'}
                width={654}
                height={240}
                alt={'earth'}
              />
              <div className={'item-gradient'}></div>

              <h5>
                <div className={'w-full bg-gray-100/50 px-10 py-2'}>deep earth</div>
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer id={'footer'} className={'w-full bg-black'}>
        <div className={'container max-w-6xl py-16 md:px-0 mx-auto'}>
          <div className={'flex flex-col md:flex-row items-center md:justify-between justify-center'}>
            {/* left */}
            <div>
              <div className={'grid grid-cols-1 gap-4 md:px-0'}>
                <div>
                  {/* logo */}
                  <Image src={'/images7/logo.svg'} alt={'logo'} width={192} height={32} />
                </div>

                {/* menu */}
                <div className={'flex items-center md:items-start flex-col md:flex-row md:space-x-6 space-y-4 my-5 md:my-0'}>
                  <div className={'footer-menu'}>About</div>
                  <div className={'footer-menu'}>Careers</div>
                  <div className={'footer-menu'}>Events</div>
                  <div className={'footer-menu'}>Products</div>
                  <div className={'footer-menu'}>Support</div>
                  <div></div>
                </div>
                

              </div>
            </div>

            {/* right */}
            <div className={'grid grid-cols-1 gap-4 md:px-0'}>
              {/* logos */}
              <div className={'flex flex-row items-center justify-center md:justify-start space-x-4'}>
                <Image src={'/images7/icon-facebook.svg'} alt={'facebook'} width={24} height={24}/>
                <Image src={'/images7/icon-twitter.svg'} alt={'twitter'} width={24} height={24}/>
                <Image src={'/images7/icon-instagram.svg'} alt={'instagram'} width={24} height={24}/>
                <Image src={'/images7/icon-pinterest.svg'} alt={'youtube'} width={24} height={24}/>
              </div>
              <div className={'font-thin text-gray-500 text-sm'}>© 2022 Loopstudios. All Rights Reserved</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Prj7Page;
