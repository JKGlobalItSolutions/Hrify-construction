import Electricalbanner from "../assets/Electrical-Engineering/Electrical-banner.png";
import ElectricalSite from "../assets/Electrical-Engineering/Electrical-site.png";

export default function Electrical() {
  return (
    <div style={styles.page}>

      {/* ===== BANNER IMAGE ===== */}
      <img
        src={Electricalbanner}
        alt="Electrical Engineering"
        style={styles.banner}
      />

      {/* ===== CONTENT SECTION ===== */}
      <div style={styles.content}>
        <h2 style={styles.title}>Electrical Engineering</h2>

        <p style={styles.paragraph}>
          We provide comprehensive electrical and power infrastructure solutions
          covering high and low voltage distribution systems, captive and
          standby power generation, HT and LT power networks, and power
          distribution within buildings. Our expertise includes uninterruptible
          power systems (UPS), demand and power control systems, energy
          monitoring, rolling systems, and advanced lighting solutions with load
          management and protection.
        </p>

        <p style={styles.paragraph}>
          We also deliver reliable external
          low-voltage distribution, emergency lighting, and robust earthing
          systems. In addition, our services extend to integrated communication
          and automation solutions such as telephone systems, structured
          cabling, voice and wireless data networks, and building automation
          systems, ensuring safe, efficient, and smart power management across
          all facilities.
        </p>
      </div>

      {/* ===== BOTTOM IMAGE ===== */}
      <div style={styles.imageSection}>
        <img
          src={ElectricalSite}
          alt="Electrical Work"
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
  },

  paragraph: {
    fontSize: "18.5px",
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "16px",
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