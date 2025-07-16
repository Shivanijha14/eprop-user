'use client';

export default function TopCities() {
  const cities = [
    {
      name: 'Delhi NCR',
      propertiesCount: '1,50,000+',
      image: '/assets/images/236961707D-1594715125517.png',
    },
    {
      name: 'Mumbai',
      propertiesCount: '1,20,000+',
      image: '/assets/images/236961707D-1594715125517.png',
    },
    {
      name: 'Bangalore',
      propertiesCount: '80,000+',
      image: '/assets/images/236961707D-1594715125517.png',
    },
    {
      name: 'Chennai',
      propertiesCount: '70,000+',
      image: '/assets/images/236961707D-1594715125517.png',
    },
    {
      name: 'Hyderabad',
      propertiesCount: '60,000+',
      image: '/assets/images/236961707D-1594715125517.png',
    },
    {
      name: 'Pune',
      propertiesCount: '50,000+',
      image: '/assets/images/236961707D-1594715125517.png',
    },
    {
      name: 'Kolkata',
      propertiesCount: '40,000+',
      image: '/assets/images/236961707D-1594715125517.png',
    },
    {
      name: 'Ahmedabad',
      propertiesCount: '30,000+',
      image: '/assets/images/236961707D-1594715125517.png',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-4">Top Cities</h1>
      <p className="text-xl text-gray-600 mb-12">
        Explore Real Estate in Popular Indian Cities
      </p>

      {/* Row 1: First 4 cities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {cities.slice(0, 4).map((city, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Inner grid for image and text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              {/* Column 1: Image */}
              <div className="flex justify-center items-center">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Column 2: City Name and Properties Count */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold">{city.name}</h3>
                <p className="text-sm text-gray-500">{city.propertiesCount} Properties</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: Next 4 cities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cities.slice(4).map((city, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Inner grid for image and text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              {/* Column 1: Image */}
              <div className="flex justify-center items-center">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Column 2: City Name and Properties Count */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold">{city.name}</h3>
                <p className="text-sm text-gray-500">{city.propertiesCount} Properties</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
