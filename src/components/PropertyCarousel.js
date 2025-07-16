'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import PropertyCard from './PropertyCard';
import './PropertyCarousel.css'; // Custom styles for spacing

export default function PropertyCarousel({ properties }) {
  return (
    <div className="property-carousel-wrapper">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="property-swiper"
      >
        {properties.map((property) => (
          <SwiperSlide key={property._id}>
            <PropertyCard property={property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
