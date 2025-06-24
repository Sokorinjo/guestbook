import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { useMessagesQuery } from '../features/useGetMessages'

type Message = {
  id: number
  message: string
  name: string
  created_at: string
}

const Welcome = () => {
  const { data, isLoading, error } = useMessagesQuery()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <header>
        <h1>Guestbook</h1>
      </header>
      <main>
        <p>See what people wrote about us and feel free to leave a message.</p>
        <section>
          <ul>
            {data.map((message: Message) => (
              <li key={message.id}>{message.message}, {message.name}, {message.created_at}</li>
            ))}
          </ul>
          
        </section>
        <Link to='/add-message'>
          <button>Leave a message</button>
        </Link>
      </main>
    </>
  )
}

export default Welcome