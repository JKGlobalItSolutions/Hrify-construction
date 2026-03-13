import Designbanner from "../assets/Designbuild/design-banner.png";
import DesignSide from "../assets/Designbuild/design-side.png";

export default function Infrastructure() {
  return (
    <div style={styles.page}>
      {/* ================= BANNER ================= */}
      <img src={Designbanner} alt="Design Banner" style={styles.banner} className="page-banner" />

      {/* ================= CONTENT ================= */}
      <div style={styles.container} className="service-container">
        {/* LEFT CONTENT */}
        <div style={styles.left}>
          <p style={styles.paragraph}>
            <span style={styles.brand}>
              Our Design & Build approach integrates creative design with expert
              construction, providing a single point of responsibility for
              faster execution, better cost control, and superior quality.
            </span>
          </p>

          <p style={styles.paragraph}>
            <span style={styles.brand}>
              Design & Build at HRIFY Construction offers a seamless approach
              where design, planning, and construction are managed by a single
              experienced team. This integrated process ensures better
              coordination, cost control, faster project delivery, and
              consistent quality from start to finish.
            </span>
          </p>

          <h2 style={styles.heading}>What We Offer</h2>

          <ul style={styles.list}>
            <li>Architectural design & planning</li>
            <li>Structural design & engineering</li>
            <li>3D elevation & layout design</li>
            <li>Complete construction execution</li>
            <li>Material selection & cost estimation</li>
            <li>Project management & supervision</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div style={styles.right} className="service-right">
          <img
            src={DesignSide}
            alt="Design Planning"
            style={styles.sideImage}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    overflow: "hidden",
  },

  banner: {
    width: "100%",
    height: "650px",
    objectFit: "cover",
    display: "block",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
    padding: "60px 80px",
    maxWidth: "1500px",
    margin: "0 auto",
    boxSizing: "border-box",
    flexWrap: "wrap",
  },
  brand: {
    color: "#1f7aa8",
    fontWeight: "600",
  },

  left: {
    flex: 1,
    textAlign: "left",
    minWidth: "280px",
  },

  right: {
    width: "360px",
    flexShrink: 0,
    maxWidth: "100%",
  },

  sideImage: {
    width: "100%",
    borderRadius: "4px",
    height: "auto",
  },

  paragraph: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "20px",
  },

  heading: {
    marginTop: "30px",
    marginBottom: "15px",
    fontSize: "22px",
    color: "#000",
  },

  list: {
    paddingLeft: "20px",
    fontSize: "20px",
    lineHeight: "1.9",
    color: "#000",
  },
};