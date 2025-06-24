import { useState } from "react"
import { useNavigate } from "react-router"
import { useAddMessage } from "../features/useAddMessage" 

type Message = {
    message: string
    name: string
}

const NewMessagePage = () => {
    const [messageInput, setMessageInput] = useState<Message>({
        message: "",
        name: ""
    })

    //Invoke navigate
    let navigate = useNavigate()

    //Add message mutation
    let addMessage = useAddMessage()

    //Handle inputs
    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setMessageInput({
            ...messageInput,
            [e.target.name]: e.target.value
        })
    }

    //On form submit, call react query mytation to add message and set state to "". Navigate to previous page
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('submited form')
        addMessage.mutate({message: messageInput.message, name: messageInput.name})
        setMessageInput({
            message: '',
            name: ''
        })
        navigate("/")
    }

    //Control if button is disabled
    const disableButton = messageInput.name && messageInput.message ? false: true;

    return (
        <>
            <header>
                <h1> Add a message</h1>
            </header>
            <main>
                <form action="" onSubmit={(e) => onSubmit(e)}>
                    <div style={{
                        display: 'flex', flexDirection: "column",
                        width: ''
                    }}>
                        <label htmlFor="message">Message</label>
                        <input name="message" id="message" type="text" value={messageInput.message} placeholder="Message:" onChange={(e) => onInputChange(e)} />

                    </div>
                    <div style={{
                        display: 'flex', flexDirection: "column",
                        width: ''
                    }}
                    >
                        <label htmlFor="name">Name</label>
                        <input name="name" id="name" type="text" value={messageInput.name} placeholder="Name" onChange={(e) => onInputChange(e)} />

                    </div>
                    <button disabled={disableButton}>Post</button>
                </form>
            </main>
        </>
    )
}

export default NewMessagePage