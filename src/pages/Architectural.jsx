import Architecturalbanner from "../assets/Designbuild/Architectural-banner.png";
import ArchitecturalSite from "../assets/Designbuild/Architectural-side.png";

export default function architectural() {
  return (
    <div style={styles.page}>

      {/* ===== BANNER IMAGE ===== */}
      <img
        src={Architecturalbanner}
        alt="Architectural planning"
        style={styles.banner}
      />

      {/* ===== CONTENT SECTION ===== */}
      <div style={styles.content}>

        <h2 style={styles.title}>Civil & Structural Engineering</h2>

        <p style={styles.paragraph}>
          We provide comprehensive engineering and technical services including
          geotechnical inputs, foundation engineering, and advanced
          waterproofing methodologies to ensure structural safety and
          durability. Our expertise extends to the evaluation of structural
          systems with value engineering approaches that optimize cost without
          compromising quality. Through accurate analytical modeling, detailed quantity surveying,
          and tendering support, we ensure efficient project planning and
          execution, supported by strict quality assurance and quality control
          practices at every stage of the project.
        </p>

      

      </div>

      {/* ===== BOTTOM IMAGE ===== */}
      <div style={styles.imageSection}>
        <img
          src={ArchitecturalSite}
          alt="Architectural Site"
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
    height: "420px",
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