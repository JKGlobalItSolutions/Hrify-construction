import Designbanner from "../assets/Designbuild/design-banner.png";
import DesignSide from "../assets/Designbuild/design-side.png";

export default function Infrastructure() {
  return (
    <div>
      {/* ================= BANNER ================= */}
      <img src={Designbanner} alt="Design Banner" style={styles.banner} />

      {/* ================= CONTENT ================= */}
      <div style={styles.container}>
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
        <div style={styles.right}>
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
  banner: {
    width: "100%",
    height: "650px",
    objectFit: "cover",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
    padding: "60px 80px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  brand: {
    color: "#1f7aa8", // HRIFY site blue
    fontWeight: "600",
  },

  left: {
    flex: 1,
    textAlign: "left",
  },

  right: {
    width: "360px",
  },

  sideImage: {
    width: "100%",
    borderRadius: "4px",
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
