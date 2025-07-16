'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '@/components/ClientLayout';
import { API_URLS } from '@/config/api';

// Import homepage components
import HeroSection from '@/components/homepage/HeroSection';
import PayYourRentSection from '@/components/homepage/PayYourRentSection';
import NewlyAddedPropertiesSection from '@/components/homepage/NewlyAddedPropertiesSection';
import QuickPickSection from '@/components/homepage/QuickPickSection';
import FeaturedPropertiesSection from '@/components/homepage/FeaturedPropertiesSection';
import ListPropertySection from '@/components/homepage/ListPropertySection';
import TopOffersSection from '@/components/homepage/TopOffersSection';
import MobileAppSection from '@/components/homepage/MobileAppSection';
import AskQuotesSection from '@/components/homepage/AskQuotesSection';
import SearchResultsSection from '@/components/homepage/SearchResultsSection';
import ExploreUsedItems from '@/components/homepage/ExploreUsedItems';
import TopCities from '@/components/homepage/TopCities';
import AskQueriesSection from '@/components/homepage/AskQueriesSection';
import MiscellaneousContentPage from '@/components/homepage/MiscellaneousContentPage';

export default function Home() {
  const { user, searchTerm, filterType, loading } = useAppContext();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (user) {
      fetchProperties();
    }
  }, [user]);

  const fetchProperties = async () => {
    try {
      const response = await axios.get(API_URLS.PROPERTIES);
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || property.propertyType === filterType;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return null; // Loading handled by ClientLayout
  }

  if (!user) {
    return null; // Authentication handled by ClientLayout
  }

  return (
    <main className="bg-background">
      {/* Hero Section */}
      {/* <HeroSection /> */}

      {/* Pay Your Rent Section */}
      <PayYourRentSection />

      {/* Explore Newly Added Properties */}
      <NewlyAddedPropertiesSection properties={properties} />

      {/* Quick Pick Your Choice */}
      <QuickPickSection />

      {/* Featured Properties */}
      <FeaturedPropertiesSection properties={properties} />


      {/* Quick Pick Your Choice */}
      <ExploreUsedItems />

      {/* List Your Property Section */}
      <ListPropertySection />

      {/* List Your Property Section */}
      <TopCities />

      {/* Mobile App Section */}
      <MobileAppSection />

      {/* Mobile App Section */}
      <AskQueriesSection />

      {/* Mobile App Section */}
      <MiscellaneousContentPage />


      {/* Top Offers */}
      {/* <TopOffersSection properties={properties} /> */}



      {/* Ask Quotes Section */}
      {/* <AskQuotesSection /> */}

      {/* Search Results (when searching) */}
      <SearchResultsSection
        searchTerm={searchTerm}
        filteredProperties={filteredProperties}
      />
    </main>
  );
} 