import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Badge } from '@/components/ui/badge';
import PropertyCarousel from '@/components/PropertyCarousel';

export default function NewlyAddedPropertiesSection({ properties }) {
  const newProperties = properties.slice(-4); // Last 4 properties

  const [activeFilter, setActiveFilter] = useState('Buy'); // Default active: Buy

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground leading-tight">
            Explore Newly Added<br />
            <span>Properties</span>
          </h2>
          <p>Fresh listings to check out</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {['Rent', 'Buy', 'Lease'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-md border border-gray-300 transition ${
                activeFilter === filter
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Property Cards Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProperties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div> */}
            <div>
      <PropertyCarousel properties={properties} />
    </div>
      </div>
    </section>
  );
}
