import { useSuperHeroesData } from "../hooks/useSuperHeroesData"

const onSuccess = (data) => {
  console.log("Side effect after on sucess !", data)
}
const onError = (error) => {
  console.log("Side effect after on error !", error.message)
}
export const RQSuperHeroesPage = () => {
  let { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)
  console.log({ isLoading, isFetching, data })
  if (isLoading || isFetching) {
    return <h2>Loading....</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return <><h2>React Query Super Heroes Page</h2>
    <button onClick={refetch}>Fecth the heroes</button>
    {data.map((heroName) => {
      return <div key={heroName}>{heroName}</div>
    })}
  </>
}
