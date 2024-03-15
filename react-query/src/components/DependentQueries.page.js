import { useQuery } from "react-query"
import axios from "axios"


const fetchUserByEmail = (emailId) => {
    return axios.get(`http://localhost:4000/users/${emailId}`);
}

const fetChannelDetails = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`);
}

export const DependentQueriesPage = ({ email }) => {
    console.log("Email Id ===>", email)
    const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email))
    const channelId = user?.data.channelId;

    const { data: channel } = useQuery(['channel', channelId], () => fetChannelDetails(channelId), {
        enabled: !!channelId
    })

    console.log("Details ====>", channel)
    return <>{channel?.data?.cources.map((course) => {
        return <div key={course}>{course}</div>
    })}</>
}