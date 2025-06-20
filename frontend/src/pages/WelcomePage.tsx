import { Link } from 'react-router'

const Welcome = () => {
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