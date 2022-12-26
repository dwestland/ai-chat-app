import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// create a new component that inputs a textarea message then performs a fetch request to localhost:3000/api/hello gets back response as a data.message and displays that message below

export default function Home() {
  const year = new Date().getFullYear()
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/ai-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.name))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>AI Chat App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to AI Chat App!</h1>
        <p className={styles.description}>Get started</p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className={styles.bnt}>
            Submit
          </button>
        </form>
        <p>{response}</p>
      </main>

      <footer className={styles.footer}>
        <p>Copyright &copy; {year}</p>
      </footer>
    </div>
  )
}
