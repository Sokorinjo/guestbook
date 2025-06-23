import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMessages = async() => {
    const {data} = await axios.get('/api/messages')
    return data
}

export const useMessagesQuery = () => {
    return useQuery({
        queryKey: ['messages'],
        queryFn: fetchMessages
    })
}
