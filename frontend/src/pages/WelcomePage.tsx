import React from 'react'
import { Link } from 'react-router'

type Props = {}

const Welcome = (props: Props) => {
  return (
    <>
      <header>
        <h1>Guestbook</h1>
      </header>
      <main>
        <p>See what people wrote about us and feel free to leave a message.</p>
        <section>
          <ul>
            <li>Sve odlicno, kakio sam lepo</li>
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