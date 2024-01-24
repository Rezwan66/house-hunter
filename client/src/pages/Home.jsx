import { useQuery } from '@tanstack/react-query';
import { getAllRooms } from '../api/houses';
import Container from '../components/Container/Container';
import HouseCard from '../components/Cards/HouseCard';
import Spinner from '../components/Spinner';

const Home = () => {
  const {
    data: houses = [],
    // error,
    // isPending,
    // refetch,
  } = useQuery({
    queryKey: ['houses'],
    queryFn: async () => await getAllRooms(),
  });
  // console.log(houses);
  return (
    <>
      <Container>
        {houses && houses.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {houses.map(house => (
              <HouseCard key={house._id} house={house} />
            ))}
          </div>
        ) : (
          <Spinner />
        )}
      </Container>
    </>
  );
};
export default Home;
