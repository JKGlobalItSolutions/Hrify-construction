export default function Contact() {
  return (
    <main style={styles.wrapper}>
      <section style={styles.container}>
        <span style={styles.smallText}>Connect with us</span>

        <h1 style={styles.heading} className="contact-heading">Contact us</h1>

        <p style={styles.subText}>
          We're here to help – Reach out anytime
        </p>

        {/* FORM */}
        <form style={styles.form}>
          <div style={styles.row} className="contact-form-row">
            <input
              type="text"
              placeholder="Your name*"
              style={styles.input}
            />
            <input
              type="email"
              placeholder="Your email*"
              style={styles.input}
            />
          </div>

          <input
            type="tel"
            placeholder="Phone number*"
            style={{ ...styles.input, width: "100%" }}
          />

          <textarea
            placeholder="I'd love to learn more about your services here"
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit
          </button>

          <div style={styles.checkboxRow}>
            <input type="checkbox" defaultChecked />
            <span style={styles.checkboxText}>
              I agree to the Terms and Condition
            </span>
          </div>
        </form>
      </section>
    </main>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0f3342",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "20px",
  },

  container: {
    width: "100%",
    maxWidth: "900px",
    padding: "80px 20px",
    textAlign: "center",
    color: "#ffffff",
    boxSizing: "border-box",
  },

  smallText: {
    fontSize: "18px",
    opacity: 0.8,
    display: "block",
    marginBottom: "6px",
  },

  heading: {
    fontSize: "50px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  subText: {
    fontSize: "15px",
    opacity: 0.85,
    marginBottom: "40px",
  },

  form: {
    maxWidth: "650px",
    margin: "0 auto",
    width: "100%",
  },

  row: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  input: {
    flex: 1,
    padding: "14px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.15)",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    minWidth: "200px",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    height: "120px",
    padding: "14px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.15)",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    marginBottom: "25px",
    resize: "none",
    boxSizing: "border-box",
  },

  button: {
    width: "200px",
    padding: "14px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#4fa3c7",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    maxWidth: "100%",
  },

  checkboxRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  checkboxText: {
    fontSize: "13px",
    opacity: 0.85,
  },
};