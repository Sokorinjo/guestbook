import { useState } from "react"
import { useNavigate } from "react-router"

type Message = {
    message: string
    name: string
}

const NewMessagePage = () => {
    const [messageInput, setMessageInput] = useState<Message>({
        message: "",
        name: ""
    })

    let navigate = useNavigate()

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setMessageInput({
            ...messageInput,
            [e.target.name]: e.target.value
        })
        console.log(messageInput)
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('submited form')
        navigate("/")
    }

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
                        <input name="message" id="message" type="text" placeholder="Message:" onChange={(e) => onInputChange(e)} />

                    </div>
                    <div style={{
                        display: 'flex', flexDirection: "column",
                        width: ''
                    }}
                    >
                        <label htmlFor="name">Name</label>
                        <input name="name" id="name" type="text" placeholder="Name" onChange={(e) => onInputChange(e)} />

                    </div>
                    <button>Post</button>
                </form>
            </main>
        </>
    )
}

export default NewMessagePage