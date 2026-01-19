import interiorbanner from "../assets/Designbuild/Interior-banner.png";
import interiorside from "../assets/Designbuild/Interior-side.png";

export default function Interior() {
  return (
    <div style={styles.page}>
      {/* ===== BANNER IMAGE ===== */}
      <img src={interiorbanner} alt="Interior layouts" style={styles.banner} />

      {/* ===== CONTENT SECTION ===== */}
      <div style={styles.content}>
        <h2 style={styles.title}>Interior layouts</h2>

        <p style={styles.paragraph}>
          We design interior layouts that optimize space, enhance functionality,
          and reflect modern aesthetics. Our layouts are carefully planned to
          ensure smooth movement, efficient use of areas, and a balanced blend
          of comfort and style. By understanding client requirements and
          lifestyle needs, we create practical and visually appealing layouts
          that improve usability while maintaining a clean and organized
          interior flow.
        </p>
      </div>

      {/* ===== BOTTOM IMAGE ===== */}
      <div style={styles.imageSection}>
        <img
          src={interiorside}
          alt="Interior layouts"
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
