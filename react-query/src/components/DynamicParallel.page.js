import { useQueries } from "react-query";
import axios from 'axios';


const fetchSuperHeroes = (id) => {
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}
export const DynamicParallelPage = ({ heroIds }) => {
    const queryResults = useQueries(
        heroIds.map(id => {
            return {
                queryKey: ['supr-hero', id],
                queryFn: () => fetchSuperHeroes(id)
            }
        })

    )
    console.log("Queries Result ===>", queryResults);
    return <><h2>Dynamic parralel page </h2> 
    {queryResults?.map(data=>{
        return <div key={data?.data?.data?.id}>{data?.data?.data?.name}</div>
    })}
    
    
    </>
}