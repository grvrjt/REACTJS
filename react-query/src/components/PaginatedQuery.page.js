import { useQuery } from "react-query";
import axios from 'axios';

const fetchColors = () => {
    return axios.get('http://localhost:4000/colors');
}

export const PaginatedQueryPage = () => {
    let { isLoading, data, isError, error, isFetching } = useQuery('colors', fetchColors, {getNextPageParam: true});
    if (isLoading) {
        return <>Loading</>
    }
    if (isError) {
        return <>{error.message}</>
    }

    return (
        <>
            {data?.data.map((color) => {
                return (
                    <div key={color.id}>
                        <h2>
                            {color.id} - {color.label}
                        </h2>
                    </div>
                )
            })}
        </>
    )



}