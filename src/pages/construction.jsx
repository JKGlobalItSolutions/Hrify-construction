import Constructionbanner from "../assets/construction/Construction-banner.png";
import constructionSide from "../assets/construction/Construction-side.png";

export default function Construction() {
  return (
    <div>
      {/* ================= BANNER ================= */}
      <img
        src={Constructionbanner}
        alt="construction Banner"
        style={styles.banner}
      />

      {/* ================= CONTENT ================= */}
      <div style={styles.container}>
        {/* LEFT CONTENT */}
        <div style={styles.left}>
          <p style={styles.paragraph}>
            <span style={styles.brand}>
              Construction at HRIFY Construction is driven by quality, safety,
              and precision. We manage every stage of the construction process
              with careful planning, skilled execution, and strict quality
              control. From residential and commercial projects to
              infrastructure works, our focus is on delivering durable,
              functional, and timely solutions that meet client expectations and
              industry standards.
            </span>
          </p>

          <h2 style={styles.heading}>What We Offer</h2>

          <ul style={styles.list}>
            <li>Residential Construction – Independent houses, villas, and apartments</li>
            <li>Commercial Construction – Offices, shops, and commercial buildings </li>
            <li>Turnkey Projects – Complete project execution from planning to handover</li>
            <li>Renovation & Remodeling – Structural and interior upgrades</li>
            <li>Project Management – Planning, supervision, and quality control</li> 
               <li>Structural & Civil Works – Strong foundations and durable structures</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div style={styles.right}>
          <img
            src={constructionSide}
            alt="construction Planning"
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
    display: "block",
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
    marginBottom: "16px",
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
