import Greenbanner from "../assets/Green-Building-Solutions/Green-Banner.png";
import GreenSide from "../assets/Green-Building-Solutions/Green-site.png";

export default function Green() {
  return (
    <div style={styles.page}>

      {/* ===== BANNER IMAGE ===== */}
      <img
        src={Greenbanner}
        alt="Green Building Solutions"
        style={styles.banner}
      />

      {/* ===== CONTENT SECTION ===== */}
      <div style={styles.content}>
        <h2 style={styles.title}>Green Building Solutions</h2>

        <p style={styles.paragraph}>
          We provide comprehensive sustainable design and construction solutions
          focused on energy efficiency, environmental responsibility, and
          occupant well-being. Our services include massing-level studies to
          optimize daylight, natural ventilation, and passive cooling, along
          with water efficiency strategies and net-zero water management for
          both new and existing projects. We conduct waste audits and implement
          reduction programs, perform detailed energy simulations and on-site
          studies for lighting, HVAC, and building systems, and carry out indoor
          air quality (IAQ) assessments for office environments. We also support
          projects in achieving recognized green building certifications such as
          GRIHA, IGBC, USGBC, and EDGE.
        </p>

        
      </div>

      {/* ===== BOTTOM IMAGE ===== */}
      <div style={styles.imageSection}>
        <img
          src={GreenSide}
          alt="Green Building Solutions"
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