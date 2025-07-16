'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function MiscellaneousContentPage() {
  return (
    <section className="py-24 bg-transparent flex justify-center">
      <div className="max-w-7xl w-full px-6 bg-transparent space-y-16">
        {/* Heading and Subheading for Apartments, Villas & More */}
        <div className="text-left space-y-4">
          <h2 className="text-4xl font-bold">Apartments, Villas & More</h2>
          <p className="text-lg opacity-90">In Noida</p>
        </div>

        {/* Image Grid for Apartments, Villas & More */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Image 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Residential Apartments</h3>
            <p className="text-sm opacity-80">338 Properties</p>
            <img
              src="/assets/images/appartmentimage.png" 
              alt="Residential Apartment"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Image 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Residential Apartments</h3>
            <p className="text-sm opacity-80">338 Properties</p>
            <img
             src="/assets/images/appartmentimage.png" 
              alt="Residential Apartment"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Image 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Residential Apartments</h3>
            <p className="text-sm opacity-80">338 Properties</p>
            <img
              src="/assets/images/appartmentimage.png" 
              alt="Residential Apartment"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Image 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Residential Apartments</h3>
            <p className="text-sm opacity-80">338 Properties</p>
            <img
              src="/assets/images/appartmentimage.png" 
              alt="Residential Apartment"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Image 5 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Residential Apartments</h3>
            <p className="text-sm opacity-80">338 Properties</p>
            <img
             src="/assets/images/appartmentimage.png" 
              alt="Residential Apartment"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* New Section for BHK Choice */}
        <div className="text-left space-y-4">
          <h2 className="text-4xl font-bold">BHK Choice in Mind?</h2>
          <p className="text-lg opacity-90">Browse by number of bedrooms in the house</p>
        </div>

        {/* Image Grid for BHK Choices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* 2 BHK */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">2 BHK</h3>
            <p className="text-sm opacity-80">120 Properties</p>
            <img
             src="/assets/images/bhkchoiceinnoida.png" 
              alt="2 BHK"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* 3 BHK */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">3 BHK</h3>
            <p className="text-sm opacity-80">250 Properties</p>
            <img
        src="/assets/images/bhkchoiceinnoida.png" 
              alt="3 BHK"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* 4 BHK */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">4 BHK</h3>
            <p className="text-sm opacity-80">150 Properties</p>
            <img
         src="/assets/images/bhkchoiceinnoida.png" 
              alt="4 BHK"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* 1 BHK */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">1 BHK</h3>
            <p className="text-sm opacity-80">80 Properties</p>
            <img
            src="/assets/images/bhkchoiceinnoida.png" 
              alt="1 BHK"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Studio */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Studio</h3>
            <p className="text-sm opacity-80">45 Properties</p>
            <img
             src="/assets/images/bhkchoiceinnoida.png" 
              alt="Studio"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
