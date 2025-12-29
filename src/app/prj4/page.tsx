import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Prj4Page() {
  return (
    <div>
      {/*Main container*/}
      <div className={'flex min-h-screen items-center justify-center bg-cyan-50'}>
        {/*Card*/}
        <div className={'m-3 rounded-3xl bg-white p-6 shadow-2xl md:p-40'}>
          {/*Menu*/}
          <div
            className={
              'flex flex-col items-center justify-center space-y-3 md:mb-24 md:flex-row md:justify-end md:space-y-0 md:space-x-8'
            }
          >
            {/*Items*/}
            <div className={'group'}>
              <Link href={'#'}>Vector</Link>
              <div className={'mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100'}></div>
            </div>
            <div className={'group'}>
              <Link href={'#'}>Illustrations</Link>
              <div className={'mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100'}></div>
            </div>
            <div className={'group'}>
              <Link href={'#'}>Images</Link>
              <div className={'mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100'}></div>
            </div>
            <div className={'group'}>
              <Link href={'#'}>Icons</Link>
              <div className={'mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100'}></div>
            </div>
            <div className={'group'}>
              <Link href={'#'}>Other</Link>
              <div className={'mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100'}></div>
            </div>
          </div>

          <div
            className={
              'flex flex-col items-center justify-center space-y-5 md:flex-row md:justify-between md:space-y-0'
            }
          >
            {/*Search box*/}
            <div className={'flex border-b border-gray-300 pb-2'}>
              <input
                className={'ml-6 border-none placeholder:font-thin focus:outline-none md:w-80'}
                type="text"
                name={'search'}
                placeholder={'Search'}
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 text-gray-300 duration-200 hover:scale-110"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="10" cy="10" r="7"></circle>
                  <line x1="21" y1="21" x2="15" y2="15"></line>
                </svg>
              </button>
            </div>

            {/*Upload*/}
            <button
              className={
                'rounded-lg border border-black bg-black px-14 py-3 text-white shadow-2xl duration-200 hover:bg-white hover:text-black'
              }
            >
              Upload
            </button>
          </div>

          {/*Gallery*/}
          <div className={'mt-5 grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'}>
            {/*img*/}
            <div className={'group relative'}>
              <Image src={'/images4/image1.jpg'} alt={'img1'} width={288} height={224} style={{ width: '100%' }} />
              <div
                className={
                  'bg-opacity-40 absolute right-0 bottom-0 left-0 bg-black p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-50'
                }
              >
                <div className={'flex w-full justify-between'}>
                  <div className={'font-normal'}>
                    <p className={'text-sm'}>Abstract Painting</p>
                    <p className={'text-sm'}>245 likes - 35 Shares</p>
                  </div>

                  <div className={'flex items-center'}>
                    <Image
                      src={'/images4/bookmark.svg'}
                      alt={'bookmark'}
                      width={28}
                      height={28}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*img*/}
            <div className={'group relative'}>
              <Image src={'/images4/image2.jpg'} alt={'img1'} width={288} height={224} style={{ width: '100%' }} />
              <div
                className={
                  'bg-opacity-40 absolute right-0 bottom-0 left-0 bg-black p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-50'
                }
              >
                <div className={'flex w-full justify-between'}>
                  <div className={'font-normal'}>
                    <p className={'text-sm'}>Abstract Painting</p>
                    <p className={'text-sm'}>245 likes - 35 Shares</p>
                  </div>

                  <div className={'flex items-center'}>
                    <Image
                      src={'/images4/bookmark.svg'}
                      alt={'bookmark'}
                      width={28}
                      height={28}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*img*/}
            <div className={'group relative'}>
              <Image src={'/images4/image3.jpg'} alt={'img1'} width={288} height={224} style={{ width: '100%' }} />
              <div
                className={
                  'bg-opacity-40 absolute right-0 bottom-0 left-0 bg-black p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-50'
                }
              >
                <div className={'flex w-full justify-between'}>
                  <div className={'font-normal'}>
                    <p className={'text-sm'}>Abstract Painting</p>
                    <p className={'text-sm'}>245 likes - 35 Shares</p>
                  </div>

                  <div className={'flex items-center'}>
                    <Image
                      src={'/images4/bookmark.svg'}
                      alt={'bookmark'}
                      width={28}
                      height={28}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*img*/}
            <div className={'group relative'}>
              <Image src={'/images4/image4.jpg'} alt={'img1'} width={288} height={224} style={{ width: '100%' }} />
              <div
                className={
                  'bg-opacity-40 absolute right-0 bottom-0 left-0 bg-black p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-50'
                }
              >
                <div className={'flex w-full justify-between'}>
                  <div className={'font-normal'}>
                    <p className={'text-sm'}>Abstract Painting</p>
                    <p className={'text-sm'}>245 likes - 35 Shares</p>
                  </div>

                  <div className={'flex items-center'}>
                    <Image
                      src={'/images4/bookmark.svg'}
                      alt={'bookmark'}
                      width={28}
                      height={28}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*img*/}
            <div className={'group relative'}>
              <Image src={'/images4/image5.jpg'} alt={'img1'} width={288} height={224} style={{ width: '100%' }} />
              <div
                className={
                  'bg-opacity-40 absolute right-0 bottom-0 left-0 bg-black p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-50'
                }
              >
                <div className={'flex w-full justify-between'}>
                  <div className={'font-normal'}>
                    <p className={'text-sm'}>Abstract Painting</p>
                    <p className={'text-sm'}>245 likes - 35 Shares</p>
                  </div>

                  <div className={'flex items-center'}>
                    <Image
                      src={'/images4/bookmark.svg'}
                      alt={'bookmark'}
                      width={28}
                      height={28}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*img*/}
            <div className={'group relative'}>
              <Image src={'/images4/image6.jpg'} alt={'img1'} width={288} height={224} style={{ width: '100%' }} />
              <div
                className={
                  'bg-opacity-40 absolute right-0 bottom-0 left-0 bg-black p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-50'
                }
              >
                <div className={'flex w-full justify-between'}>
                  <div className={'font-normal'}>
                    <p className={'text-sm'}>Abstract Painting</p>
                    <p className={'text-sm'}>245 likes - 35 Shares</p>
                  </div>

                  <div className={'flex items-center'}>
                    <Image
                      src={'/images4/bookmark.svg'}
                      alt={'bookmark'}
                      width={28}
                      height={28}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prj4Page;
