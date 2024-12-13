import { RiEyeLine, RiInstagramFill, RiShareForwardBoxLine, RiTwitterXFill, RiWhatsappFill } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Detail() {
  return (
    <section className='-mt-10'>
      <div className='container-fluid'>
        <Image src='/article-thumbnail.png' className='w-full' width={1440} height={644} alt='Article Thumbnail' />
      </div>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6 mt-8'>
          <div className='col-span-8 flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
              <h2 className='w-[85%]'>Increased Cost Of Living Is Causing Me To Have More And More Credit Card Debt</h2>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-8'>
                  <p>23 Sept 2024</p>
                  <div className='flex items-center gap-1'>
                    <RiEyeLine size={24} />
                    <p>2.1k</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <p>Share</p>
                  <div className='flex items-center gap-6'>
                    <Link href='#'>
                      <RiInstagramFill size={24} />
                    </Link>
                    <Link href='#'>
                      <RiWhatsappFill size={24} />
                    </Link>
                    <Link href='#'>
                      <RiTwitterXFill size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <p>
              When we think of cost of living, we think about the cost of food, clothing, transport fees, rental or mortgages and also our salaries. I noticed many videos recently interviewing the man on the street on cost of living, asking them what&apos;s their ideal salaries. <br />I think money
              is never enough. It is true that if I have more money, I will be more comfortable, but will that really be enough? When I started earning more as I worked longer in my career, I fell under the lifestyle trap. Then it led to me spending more to enjoy the luxuries of life. <b></b>
              Now that everyone is grappling with inflation, our wallets are squeezed, and I feel like I don&apos;t have enough money to sustain the lifestyle I have. So, I turn to borrowing money from banks via credit cards.
            </p>
            <Link href='#'>
              <Image src='/detail-ads.png' width={845} height={78} alt='Article Detail Ads' />
            </Link>
            <div className='space-y-4'>
              <h4>Budget cut on my daily expenses</h4>
              <p>
                It was not helpful that I was incentivised to sign up for credit cards in this period as well. <br />
                Slowly, with the buy now pay later and 0% instalment benefits, it made me think that I could purchase a new fan to replace the one that broke down and many other purchases that felt urgent at that point. <br />
                Only recently then I realise that I was unknowingly taking a larger sum from my monthly salary to repay my credit card bills (even with 0% instalment repayment). This caused me to feel the budget cut on my daily expenses and I had to cut down on food to not fall deep into debt.{' '}
                <br /> I have since tried to wait it out whenever there is a need to purchase a new item or from going shopping. Although I know that this cost of living problem should be temporary, there is no way I want to end the year with a huge debt knocking on my door. <br /> This article is
                part of TSS Confessions, a weekly column where we delve into personal finance topics that are unscripted and genuine real accounts from people.
              </p>
            </div>
            <div className='space-y-4'>
              <h5>LATEST PERSONAL LOAN RATES 2024</h5>
              <p>Explore the latest personal loan rates. Apply to view personalised loan offers, unique to you.</p>
              <Image src='/loan-screenshot.png' alt='Loan Screenshot' width={845} height={848} />
            </div>
          </div>
          <div className='col-span-4 flex flex-col gap-8'>
            <h3>Related Topics</h3>

            {/* Article Item */}
            <Link href='#' className='flex flex-col gap-8 group'>
              <div className='overflow-hidden rounded-2xl'>
                <Image src='/thumbnail1.png' alt='Article Thumbnail' width={411} height={224} className='aspect-video rounded-2xl group-hover:scale-110 transition-all duration-300 ease' />
              </div>
              <div className='space-y-4'>
                <h4 className='group-hover:underline'>Are You Spending More On Dating Apps Than On</h4>
                <div className='flex items-center gap-8'>
                  <p>23 Sept 2024</p>
                  <div className='flex items-center gap-1'>
                    <RiEyeLine size={24} />
                    <p>2.1k</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <RiShareForwardBoxLine size={24} />
                    <p>2.1k</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Item */}
            <Link href='#' className='flex flex-col gap-8 group'>
              <div className='overflow-hidden rounded-2xl'>
                <Image src='/thumbnail1.png' alt='Article Thumbnail' width={411} height={224} className='aspect-video rounded-2xl group-hover:scale-110 transition-all duration-300 ease' />
              </div>
              <div className='space-y-4'>
                <h4 className='group-hover:underline'>Are You Spending More On Dating Apps Than On</h4>
                <div className='flex items-center gap-8'>
                  <p>23 Sept 2024</p>
                  <div className='flex items-center gap-1'>
                    <RiEyeLine size={24} />
                    <p>2.1k</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <RiShareForwardBoxLine size={24} />
                    <p>2.1k</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='my-20 space-y-8'>
          <div className='flex items-center justify-between '>
            <h2>Recommendation Article</h2>
            <Link href='#' className='py-3 px-14 inline-flex rounded-full bg-tersier'>
              See All
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-8'>
            {/* Article Item */}
            <Link href='#' className='grid grid-cols-5 gap-4 group'>
              <div className='overflow-hidden rounded-2xl col-span-2'>
                <Image src='/thumbnail2.png' className='rounded-2xl aspect-video group-hover:scale-110 transition-all duration-300 ease' alt='Article Thumbnail' width={231} height={141} />
              </div>
              <div className='p-2 space-y-4 col-span-3'>
                <h4 className='group-hover:underline'>Are You Spending More On Dating Apps Than On..</h4>
                <div className='flex items-center gap-8'>
                  <p>23 Sept 2024</p>
                  <div className='flex items-center gap-1'>
                    <RiEyeLine size={24} />
                    <p>2.1k</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <RiShareForwardBoxLine size={24} />
                    <p>2.1k</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Item */}
            <Link href='#' className='grid grid-cols-5 gap-4 group'>
              <div className='overflow-hidden rounded-2xl col-span-2'>
                <Image src='/thumbnail1.png' className='rounded-2xl aspect-video group-hover:scale-110 transition-all duration-300 ease' alt='Article Thumbnail' width={231} height={141} />
              </div>
              <div className='p-2 space-y-4 col-span-3'>
                <h4 className='group-hover:underline'>Are You Spending More On Dating Apps Than On..</h4>
                <div className='flex items-center gap-8'>
                  <p>23 Sept 2024</p>
                  <div className='flex items-center gap-1'>
                    <RiEyeLine size={24} />
                    <p>2.1k</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <RiShareForwardBoxLine size={24} />
                    <p>2.1k</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Item */}
            <Link href='#' className='grid grid-cols-5 gap-4 group'>
              <div className='overflow-hidden rounded-2xl col-span-2'>
                <Image src='/thumbnail1.png' className='rounded-2xl aspect-video group-hover:scale-110 transition-all duration-300 ease' alt='Article Thumbnail' width={231} height={141} />
              </div>
              <div className='p-2 space-y-4 col-span-3'>
                <h4 className='group-hover:underline'>Are You Spending More On Dating Apps Than On..</h4>
                <div className='flex items-center gap-8'>
                  <p>23 Sept 2024</p>
                  <div className='flex items-center gap-1'>
                    <RiEyeLine size={24} />
                    <p>2.1k</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <RiShareForwardBoxLine size={24} />
                    <p>2.1k</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Item */}
            <Link href='#' className='grid grid-cols-5 gap-4 group'>
              <div className='overflow-hidden rounded-2xl col-span-2'>
                <Image src='/thumbnail2.png' className='rounded-2xl aspect-video group-hover:scale-110 transition-all duration-300 ease' alt='Article Thumbnail' width={231} height={141} />
              </div>
              <div className='p-2 space-y-4 col-span-3'>
                <h4 className='group-hover:underline'>Are You Spending More On Dating Apps Than On..</h4>
                <div className='flex items-center gap-8'>
                  <p>23 Sept 2024</p>
                  <div className='flex items-center gap-1'>
                    <RiEyeLine size={24} />
                    <p>2.1k</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <RiShareForwardBoxLine size={24} />
                    <p>2.1k</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Item */}
            <Link href='#' className='grid grid-cols-5 gap-4 group'>
              <div className='overflow-hidden rounded-2xl col-span-2'>
                <Image src='/thumbnail2.png' className='rounded-2xl aspect-video group-hover:scale-110 transition-all duration-300 ease' alt='Article Thumbnail' width={231} height={141} />
              </div>
              <div className='p-2 space-y-4 col-span-3'>
                <h4 className='group-hover:underline'>Are You Spending More On Dating Apps Than On..</h4>
                <div className='flex items-center gap-8'>
                  <p>23 Sept 2024</p>
                  <div className='flex items-center gap-1'>
                    <RiEyeLine size={24} />
                    <p>2.1k</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <RiShareForwardBoxLine size={24} />
                    <p>2.1k</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Item */}
            <Link href='#' className='grid grid-cols-5 gap-4 group'>
              <div className='overflow-hidden rounded-2xl col-span-2'>
                <Image src='/thumbnail1.png' className='rounded-2xl aspect-video group-hover:scale-110 transition-all duration-300 ease' alt='Article Thumbnail' width={231} height={141} />
              </div>
              <div className='p-2 space-y-4 col-span-3'>
                <h4 className='group-hover:underline'>Are You Spending More On Dating Apps Than On..</h4>
                <div className='flex items-center gap-8'>
                  <p>23 Sept 2024</p>
                  <div className='flex items-center gap-1'>
                    <RiEyeLine size={24} />
                    <p>2.1k</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <RiShareForwardBoxLine size={24} />
                    <p>2.1k</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
