import { useQuery } from "react-query";
import axios from "axios";

const fetchSuerHeroes = () => {
    return axios.get('http://localhost:4000/superheroes');
  }

export const useSuperHeroesData = (onSuccess, onError ) => {
    return useQuery(
        'super-heroes',
        fetchSuerHeroes,
        {
            onSuccess: onSuccess,
            onError: onError,
            select: (data) => {
                const superHeroesNames = data?.data.map((hero) => hero.name);
                return superHeroesNames
            }
        }
    );
}