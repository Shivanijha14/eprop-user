import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function FeaturedPropertiesSection() {
  const bulletPoints = [
    'World-class amenities',
    'Prime locations',
    'Luxury interiors',
    'Modern architecture',
    '24/7 Security',
    'Eco-friendly designs',
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/assets/images/exploreimage.png"
              alt="Featured Property"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div>

            <h2 className="text-5xl font-bold text-foreground mb-6">
              Explore Ready To Move Office Spaces In Noida
            </h2>
            <p className="text-xl text-red-600 mb-8">
              Ready to move office space
            </p>


            <p className="text-xl text-muted-foreground mb-8">
              Find out totally managed office spaces in prime location in Noida. Explore options relevant for you.
            </p>

            {/* Bullet Points Grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {bulletPoints.map((point, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  {/* Custom badge with olive background and white tick */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#808000] text-white text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-base font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-6">
              <Button size="lg" className="bg-[#808000] text-white hover:bg-[#6b6b00] rounded-md">
                Search Property
              </Button>
              <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-600 rounded-md">
                Contact Us
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
