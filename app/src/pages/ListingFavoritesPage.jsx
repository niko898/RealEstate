import { useMemo } from "react";
import { useSelector } from 'react-redux';

import ListingsList from '@/components/ListingList';

const ListingFavoritesPage = () => {
  const { listings, favoriteListingIds } = useSelector(
    (state) => state.listings,
  );

  const favoriteListings = useMemo(
    () => listings.filter((listing) => favoriteListingIds.includes(listing.id)), [listings, favoriteListingIds],
  );

  return (
    <div className="container py-4">
      <ListingsList listings={favoriteListings} />
    </div>
  )

};

export default ListingFavoritesPage;