import PublicBanner from "../assets/Public-Health-Engineering/Public-Health-banner.png";
import Publicside from "../assets/Public-Health-Engineering/Public-Health-side.png";

export default function PublicHealthEngineering() {
  return (
    <div style={styles.page}>
      {/* ===== BANNER IMAGE ===== */}
      <img
        src={PublicBanner}
        alt="Public Health Engineering"
        style={styles.banner}
      />

      {/* ===== CONTENT SECTION ===== */}
      <div style={styles.content}>
        <h2 style={styles.title}>Public Health Engineering</h2>

        <p style={styles.paragraph}>
          We offer comprehensive water and waste management solutions, including
          water supply, treatment, and distribution systems, plumbing works,
          sewage collection, treatment, disposal, and reuse solutions. Our
          expertise extends to storm water drainage, rainwater harvesting and
          groundwater recharging, swimming pool systems, irrigation solutions,
          and lake management. We also provide efficient solid waste management
          services and specialized industrial piping solutions, ensuring
          sustainable, reliable, and compliant infrastructure for residential,
          commercial, and industrial projects.
        </p>
      </div>

      {/* ===== BOTTOM IMAGE ===== */}
      <div style={styles.imageSection}>
        <img
          src={Publicside}
          alt="Public Health Engineering Work"
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
