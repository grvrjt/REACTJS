import { useParams } from "react-router-dom/cjs/react-router-dom"
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSuperHeroPage = () => {
    const { heroId } = useParams();
    let { isLoading, data, isError, error, isFetching } = useSuperHeroData(heroId);
    if (isLoading || isFetching) {
        return <h2>Loading....</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return <div>{`${data?.data.name} - ${data?.data.alterEgo}`}</div>
}

