import React from 'react'

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
              <link type='button'>Leave a message</link >
            </section>
            
        </main>
    </>
  )
}

export default Welcome