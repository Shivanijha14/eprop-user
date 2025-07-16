
'use client';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { CheckCircle } from 'lucide-react';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: 'John Doe',
    image: '/assets/images/user1.jpg',
    text: 'This platform made rent payments so simple. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    image: '/assets/images/user2.jpg',
    text: 'Super easy to use and the reminders are a lifesaver!',
  },
  {
    name: 'Emily Johnson',
    image: '/assets/images/user3.jpg',
    text: 'Best rental payment experience I’ve ever had. Very smooth!',
  },
];

export default function PayYourRentSection() {
  const [current, setCurrent] = useState(0);

  // Optional: Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Container (Text + Testimonial) */}
          <div className="col-span-1 flex flex-col justify-center items-center text-center space-y-12">
            {/* Heading and Description */}
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-foreground">
                Pay Your Rent,
                <span className="block text-orange-600">Effortlessly!</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                Streamline your rental payments with our secure and convenient payment system.
                Never miss a payment again with automated reminders and multiple payment options.
              </p>
            </div>

            {/* CTA Button */}
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Learn More
            </Button>

            {/* Testimonial Section */}
            {/* Testimonial Section */}
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
                {/* Image (col-md-2 equivalent) */}
                <div className="flex-shrink-0 md:w-1/5 flex justify-center">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-orange-600"
                  />
                </div>

                {/* Text (col-md-8 equivalent) */}
                <div className="md:w-4/5 text-left">
                  <h4 className="text-lg font-semibold text-center md:text-left">{testimonials[current].name}</h4>
                  <p className="text-gray-600 text-sm text-center md:text-left mt-1">{testimonials[current].text}</p>
                </div>
              </div>

              {/* Dot Navigation */}
              <div className="flex justify-center space-x-2 pt-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition ${current === index ? 'bg-orange-600' : 'bg-gray-300'
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Container (Image Grid) */}
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
