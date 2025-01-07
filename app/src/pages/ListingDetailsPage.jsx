import { useParams } from 'react-router-dom';

import api from '@/api';
import ListingDetailsCard from '@/components/ListingDetailsCard';
import { Spinner } from '@/components/ui';
import useFetch from '@/hooks/useFatch';
import DataRenderer from '@/components/DataRenderer';

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const {
    data: listing,
    error,
    isLoading,
  } = useFetch(`/api/listings/${listingId}`);

  return (
    <div className='container py-4'>
      <DataRenderer error={error} isLoading={isLoading}>
        <ListingDetailsCard listing={listing} />
      </DataRenderer>
    </div>
  );
};

export default ListingDetailsPage;
