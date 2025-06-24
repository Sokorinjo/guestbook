import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type Message = {
    message: string
    name: string
}

const addMessage = async (newMessage: Message) => {
    const { data } = await axios.post('api/messages', newMessage)
    return data
}

export const useAddMessage = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addMessage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['messages'] })
        }
    })
}
