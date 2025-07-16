'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa'; // Import icons for App Store and Google Play

export default function MobileAppSection() {
  return (
    <section className="py-24 flex justify-center bg-transparent">
      <div className="max-w-5xl w-full px-6 bg-[#FFE9E9] rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Download EProperty App Today!</h2>
            <p className="text-xl opacity-90">
              and never miss out any update.
            </p>
            
            <div className="space-y-4">
              {/* Features list */}
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">Get Rental Reminders</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">Get Latest Updates & News</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">Find Most Personalised Suggestions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">Operate Wallet & Add Your Property</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">Get Connected 24X7</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1: App Store Button */}
            <div className="flex justify-center items-end">
              <Card className="bg-transparent p-8 rounded-lg border-0">
                <Button variant="secondary" size="lg" className="bg-black hover:bg-gray-800 text-white flex items-center gap-3">
                  <FaApple className="text-white w-6 h-6" /> {/* Apple Icon */}
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Button>
              </Card>
            </div>

            {/* Column 2: Google Play Button */}
            <div className="flex justify-center items-end">
              <Card className="bg-transparent p-8 rounded-lg border-0">
                <Button variant="secondary" size="lg" className="bg-black hover:bg-gray-800 text-white flex items-center gap-3">
                  <FaGooglePlay className="text-white w-6 h-6" /> {/* Google Play Icon */}
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Button>
              </Card>
            </div>

            {/* Column 3: Phone image */}
            <div className="flex justify-center items-center">
              <Card className="bg-transparent p-8 rounded-lg border-0">
                <div className="w-48 h-96 bg-transparent rounded-3xl mx-auto flex items-center justify-center">
                  <img
                    src="/assets/images/apple-iphone13-blue-portrait 1.png"
                    alt="Phone"
                    className="w-full h-full object-cover rounded-3xl border-0"
                  />
                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
