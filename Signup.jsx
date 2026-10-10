// The form posts straight to Buttondown, which stores the address and sends a confirmation email.
// The confirmation page opens in a new tab so visitors keep their place on the site.
const FORM_ACTION = 'https://buttondown.com/api/emails/embed-subscribe/mcerrone95'

export default function Signup() {
  return (
    <section id="signup" className="section section-signup">
      <div className="signup-box">
        <h2 className="section-title">Take the oath early</h2>
        <p className="signup-copy">
          Launch news, sample chapters, and a note when the book is ready. Nothing else.
        </p>
        <form className="signup-form" action={FORM_ACTION} method="post" target="_blank">
          <label htmlFor="email" className="visually-hidden">Email address</label>
          <input
            id="email"
            className="field"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
          />
          <button className="btn btn-primary" type="submit">Join</button>
        </form>
        <p className="signup-note">You will get a confirmation email. Click it to finish signing up.</p>
      </div>
    </section>
  )
}
