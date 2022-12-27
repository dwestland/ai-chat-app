import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

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

  // const commentEnterSubmit = (e) => {
  //   if (e.key === 'Enter' && e.shiftKey === false) {
  //     // const data = { content: e.target.value }
  //     return handleSubmit(handleSubmit(e))
  //   }
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>AI Chat App</title>
      </Head>

      <main className={styles.main}>
        <h2>Welcome to Rochex.net!</h2>
        <h1 className={styles.title}>AI Inspiration App</h1>
        <p className={styles.description}>Tell me what you want to do today</p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            // onKeyPress={commentEnterSubmit}
          />
          <button type="submit" className={styles.bnt}>
            Get Inspired
          </button>
        </form>
        <p className={styles.response}>{response}</p>
      </main>

      <footer className={styles.footer}>
        <p>Copyright &copy; {year}</p>
      </footer>
    </div>
  )
}
