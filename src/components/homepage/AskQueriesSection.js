'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function AskQueriesSection() {
  return (
    <section className="py-24 bg-transparent flex justify-center">
      <div className="max-w-7xl w-full px-6 bg-transparent rounded-lg ">
        {/* Heading and Subheading */}
        <div className="text-left space-y-4">
          <h1 className="text-4xl font-bold">Ask Queries</h1>
          <p className="text-xs opacity-90">
            Get Your Queries Answered By Eproperty Team & Community
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-[#808000] text-white hover:bg-white hover:text-[#808000]"
          >
            Explore Eproperty Community
          </Button>
        </div>

        {/* Swiper Carousel */}
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={6} // Show 6 cards at once
            autoplay={{ delay: 3000 }}
            loop={true}
            speed={1000}
            className="swiper-container"
            breakpoints={{
              320: { slidesPerView: 1 },    // 1 card for mobile
              640: { slidesPerView: 2 },    // 2 cards for tablet
              1024: { slidesPerView: 3 },   // 3 cards for small desktop
              1280: { slidesPerView: 6 },   // 6 cards for large desktop
            }}
          >
            {/* Swiper Slide 1 */}
            <SwiperSlide>
              <Card className="bg-transparent p-8 rounded-lg border-0">
                <div className="w-full h-38 bg-gray-200 rounded-lg">
                  <img
                    src="/assets/images/home-loan 1.png" 
                    alt="Home Loan Query"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-left">Home Loan Queries</h3>
                <p className="text-xs mt-2 opacity-80 text-left">
                  Get Your Home Loan Queries Answered By Eproperty Team & Community
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-[#808000] text-white mt-4 text-left hover:bg-white hover:text-[#808000]"
                >
                  Get Started
                </Button>
              </Card>
            </SwiperSlide>

            {/* Swiper Slide 2 */}
            <SwiperSlide>
              <Card className="bg-transparent p-8 rounded-lg border-0">
                <div className="w-full h-38 bg-gray-200 rounded-lg">
                  <img
                    src="/assets/images/home-loan 1.png" 
                    alt="Home Loan Query"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-left">Home Loan Queries</h3>
                <p className="text-xs mt-2 opacity-80 text-left">
                  Get Your Home Loan Queries Answered By Eproperty Team & Community
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-[#808000] text-white mt-4 text-left hover:bg-white hover:text-[#808000]"
                >
                  Get Started
                </Button>
              </Card>
            </SwiperSlide>

            {/* Swiper Slide 3 */}
            <SwiperSlide>
              <Card className="bg-transparent p-8 rounded-lg border-0">
                <div className="w-full h-38 bg-gray-200 rounded-lg">
                  <img
                    src="/assets/images/home-loan 1.png" 
                    alt="Home Loan Query"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-left">Home Loan Queries</h3>
                <p className="text-xs mt-2 opacity-80 text-left">
                  Get Your Home Loan Queries Answered By Eproperty Team & Community
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-[#808000] text-white mt-4 text-left hover:bg-white hover:text-[#808000]"
                >
                  Get Started
                </Button>
              </Card>
            </SwiperSlide>

            {/* Swiper Slide 4 */}
            <SwiperSlide>
              <Card className="bg-transparent p-8 rounded-lg border-0">
                <div className="w-full h-38 bg-gray-200 rounded-lg">
                  <img
                    src="/assets/images/home-loan 1.png" 
                    alt="Home Loan Query"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-left">Home Loan Queries</h3>
                <p className="text-xs mt-2 opacity-80 text-left">
                  Get Your Home Loan Queries Answered By Eproperty Team & Community
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-[#808000] text-white mt-4 text-left hover:bg-white hover:text-[#808000]"
                >
                  Get Started
                </Button>
              </Card>
            </SwiperSlide>

            {/* Swiper Slide 5 */}
            <SwiperSlide>
              <Card className="bg-transparent p-8 rounded-lg border-0">
                <div className="w-full h-38 bg-gray-200 rounded-lg">
                  <img
                    src="/assets/images/home-loan 1.png" 
                    alt="Home Loan Query"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-left">Home Loan Queries</h3>
                <p className="text-xs mt-2 opacity-80 text-left">
                  Get Your Home Loan Queries Answered By Eproperty Team & Community
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-[#808000] text-white mt-4 text-left hover:bg-white hover:text-[#808000]"
                >
                  Get Started
                </Button>
              </Card>
            </SwiperSlide>

            {/* Swiper Slide 6 */}
            <SwiperSlide>
              <Card className="bg-transparent p-8 rounded-lg border-0">
                <div className="w-full h-38 bg-gray-200 rounded-lg">
                  <img
                    src="/assets/images/home-loan 1.png" 
                    alt="Home Loan Query"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-left">Home Loan Queries</h3>
                <p className="text-xs mt-2 opacity-80 text-left">
                  Get Your Home Loan Queries Answered By Eproperty Team & Community
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-[#808000] text-white mt-4 text-left hover:bg-white hover:text-[#808000]"
                >
                  Get Started
                </Button>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
