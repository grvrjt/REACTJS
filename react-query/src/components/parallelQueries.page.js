import { useQuery } from "react-query";
import axios from 'axios';


const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const fetchfriends = () => {
    return axios.get('http://localhost:4000/friends')
}
export const ParallelQueriesPage = () => {
    const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes);
    const { data: friends } = useQuery('friends', fetchfriends);
    return <>
        <h2>Heroes List</h2>
        <div>{superHeroes?.data.map((hero) => {
            return <div key={hero.id}>{hero.name}</div>
        })}</div>

        <h2>Friends List </h2>
        <div>{friends?.data.map((friend) => {
            return <div key={friend.id}>{friend.name}</div>
        })}</div>


    </>
}