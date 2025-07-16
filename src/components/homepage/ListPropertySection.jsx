'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ListPropertySection() {
  return (
    <section className="py-24 flex justify-center">
      {/* Container with light green background */}
      <div className="max-w-4xl w-full px-6 bg-green-100 rounded-lg shadow-lg text-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left column */}
          <div className="space-y-8 max-w-md mx-auto lg:mx-0">
            <h2 className="text-4xl font-bold">List Your Property Today!</h2>
            <p className="text-lg opacity-90">
             List your property for rent, sell or buy.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
           Get Started
            </Button>
          </div>
          
          {/* Right column */}
          <div className="col-span-1 flex justify-center items-center">
            <div className="grid gap-4" style={{ gridTemplateColumns: '2.5fr 1.5fr' }}>
              
              {/* Column 1 - Two stacked images */}
              <div className="grid gap-4">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <img
                    src="/assets/images/testing2.png"
                    alt="Interior 1"
                    className="w-full h-48 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <img
                    src="/assets/images/image2.png"
                    alt="Interior 2"
                    className="w-full h-48 object-cover"
                  />
                </Card>
              </div>

              {/* Column 2 - One tall image */}
              <Card className="overflow-hidden border-0 shadow-lg h-[24rem]">
                <img
                  src="/assets/images/testing.png"
                  alt="Interior tall"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
