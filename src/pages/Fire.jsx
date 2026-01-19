import FireBanner from "../assets/Fire/Fire-banner.png";
import Fireside from "../assets/Fire/Fire-site.png";

export default function Fire() {
  return (
    <div style={styles.page}>

      {/* ===== BANNER IMAGE ===== */}
      <img
        src={FireBanner}
        alt="Fire & Life Safety System"
        style={styles.banner}
      />

      {/* ===== CONTENT SECTION ===== */}
      <div style={styles.content}>
        <h2 style={styles.title}>Fire & Life Safety System</h2>

        <p style={styles.paragraph}>
          We provide comprehensive fire protection and safety solutions in
          compliance with FM Global, NFPA, and other international standards.
          Our services include the design, installation, and maintenance of
          hydrant and sprinkler systems, water mist fire suppression, wet and
          dry risers, fire alarm and voice evacuation systems, and gas-based
          suppression systems.
        </p>

        <p style={styles.paragraph}>
          In addition, we offer public address systems and
          integrated CCTV & access control solutions, ensuring complete safety,
          monitoring, and emergency response readiness for residential,
          commercial, and industrial facilities.
        </p>
      </div>

      {/* ===== BOTTOM IMAGE ===== */}
      <div style={styles.imageSection}>
        <img
          src={Fireside}
          alt="Fire & Life Safety System Work"
          style={styles.siteImage}
        />
      </div>

    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    backgroundColor: "#ffffff",
  },

  banner: {
    width: "100%",
    height: "650px",
    objectFit: "cover",
    display: "block",
  },

  content: {
    maxWidth: "1400px",
    margin: "40px auto 30px",
    padding: "0 20px",
    textAlign: "center",
  },

  title: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#000",
    textAlign: "center",
  },

  paragraph: {
    fontSize: "18.5px",
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  },

  imageSection: {
    maxWidth: "1600px",
    margin: "0 auto 60px",
    padding: "0 20px",
  },

  siteImage: {
    width: "100%",
    height: "360px",
    objectFit: "cover",
    borderRadius: "2px",
  },
};