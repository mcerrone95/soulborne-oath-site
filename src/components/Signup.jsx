import { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // TODO: connect this to an email service (for example a Buttondown or Mailchimp form endpoint).
    // Until then, tell the visitor honestly that signup is not live.
    setMessage('Signup is not connected yet. Please check back soon.')
  }

  return (
    <section id="signup" className="section section-signup">
      <div className="signup-box">
        <h2 className="section-title">Take the oath early</h2>
        <p className="signup-copy">
          Launch news, sample chapters, and a note when the book is ready. Nothing else.
        </p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="visually-hidden">Email address</label>
          <input
            id="email"
            className="field"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="btn btn-primary" type="submit">Join</button>
        </form>
        <p className="signup-message" role="status">{message}</p>
      </div>
    </section>
  )
}
