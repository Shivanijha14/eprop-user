'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ExploreUsedItems() {
  // Sample data for used items including address
  const originalItems = [
    {
      id: 1,
   image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',      name: 'Fridge For Sale In Noida',
      address: 'Sector 132, Noida',
      details: 'Single Owner, Less Used',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',
      name: 'Washing Machine For Sale',
      address: 'Sector 45, Noida',
      details: 'Good Condition, Working Perfectly',
    },
    {
      id: 3,
   image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',      name: 'Used Sofa Set',
      address: 'Sector 90, Noida',
      details: 'Almost New, Comfortable',
    },
    {
      id: 4,
   image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',      name: 'Dining Table',
      address: 'Sector 21, Noida',
      details: 'Wooden, Minor Scratches',
    },
  ];

  // Repeat the items array to ensure enough slides for 4 visible at once
  const items = [...originalItems, ...originalItems];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-4">Explore Used Items For Sale</h1>
      <p className="text-xl text-gray-600 mb-12">
        Explore used items for sale in your city
      </p>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true }}
        navigation
        className="pb-16"
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{item.address}</p> {/* Address here */}
                <p className="text-sm text-gray-500">{item.details}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
