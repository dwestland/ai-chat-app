import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const year = new Date().getFullYear()
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    fetch('/api/ai-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.name))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
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
        <title>AI Inspire Me</title>
      </Head>

      <main className={styles.main}>
        <Image src="/lightbulb.png" width={200} height={200} alt="lightbulb" />
        <h2>Welcome to</h2>
        <h1 className={styles.title}>Ai Inspire Me.com</h1>
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
        {isLoading ? (
          <div className={styles.loading}>
            <Image src="/loading.gif" width={100} height={100} alt="loading" />
          </div>
        ) : (
          // <h1>Loading...</h1>
          <p className={styles.response}>{response}</p>
        )}
      </main>

      <footer className={styles.footer}>
        <p>Ai Inspire Me.com &nbsp;&nbsp; &copy; {year}</p>
      </footer>
    </div>
  )
}
