import infraBanner from "../assets/infrastruture/infra-banner.png";
import infraSide from "../assets/infrastruture/infra-side.png";

export default function Infrastructure() {
  return (
    <div>

      {/* ================= BANNER ================= */}
      <img
        src={infraBanner}
        alt="Infrastructure Banner"
        style={styles.banner}
      />

      {/* ================= CONTENT ================= */}
      <div style={styles.container}>
        {/* LEFT CONTENT */}
        <div style={styles.left}>
          <p style={styles.paragraph}>
            <span style={styles.brand}>HRIFY CONSTRUCTION</span> delivers strong, reliable, and
            future-ready infrastructure solutions designed to support growth
            and long-term performance. We execute infrastructure projects with
            a focus on durability, safety, and engineering excellence,
            ensuring every structure meets industry standards and client
            requirements.
          </p>

          <p style={styles.paragraph}>
            Our infrastructure capabilities include planning, execution, and
            supervision of projects using modern construction techniques and
            quality materials. With a skilled team and systematic project
            management approach, we ensure timely delivery without
            compromising on quality.
          </p>

          <h2 style={styles.heading}>Our Infrastructure Services</h2>

          <ul style={styles.list}>
            <li>Roads & Drainage Works</li>
            <li>Foundations & Structural Works</li>
            <li>Industrial Infrastructure</li>
            <li>Utility & Service Structures</li>
            <li>Site Development & Earth Works</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div style={styles.right}>
          <img
            src={infraSide}
            alt="Infrastructure Planning"
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
    fontSize: "18px",
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
