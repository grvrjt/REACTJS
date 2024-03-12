import { useQuery } from "react-query";
import axios from "axios";

const fetchSuerHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
}

export const RQSuperHeroesPage = () => {
  let { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchSuerHeroes,
    {
      // cacheTime: 5000 
      // staleTime: 30000
      // refetchOnMount: false true, 'always'
      // refetchOnWindowFocus: true
      refetchInterval: 2000,
      refetchIntervalInBackground: true
    }
  );
  console.log({ isLoading, isFetching, data })
  if (isLoading) {
    return <h2>Loading....</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return <><h2>React Query Super Heroes Page</h2>
    {data?.data.map((hero) => {
      return <div key={hero.name}>{hero.name}</div>
    })}
  </>
}
