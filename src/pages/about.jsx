import aboutBanner from "../assets/about/about-banner.png";
import whyChooseImg from "../assets/about/why-choose.png";
import directorImg from "../assets/about/director.png";
import logo from "../assets/logo.png";

export default function About() {
  return (
    <div style={styles.page}>

      {/* ===== TOP BANNER ===== */}
      <img
        src={aboutBanner}
        alt="About HRIFY Construction"
        style={styles.banner}
      />

      {/* ===== TEXT CONTENT ===== */}
      <div style={styles.textSection}>
        <p style={styles.paragraph}>
          <strong style={styles.brand}>HRIFY Construction</strong> is a trusted
          construction company committed to delivering high-quality, reliable,
          and cost-effective building solutions. With a strong focus on
          precision, safety, and innovation, we bring ideas to life through
          well-planned and expertly executed construction projects.
        </p>

        <p style={styles.paragraph}>
          We specialize in residential, commercial, and infrastructure works,
          handling every stage of the construction process—from planning and
          design coordination to execution and project completion. Our
          experienced team of engineers, supervisors, and skilled professionals
          ensures that every project meets the highest standards of quality and
          durability.
        </p>

        <p style={styles.paragraph}>
          At HRIFY Construction, we believe that strong foundations are built on
          transparency, integrity, and customer satisfaction. We work closely
          with our clients to understand their requirements and deliver
          solutions that are both functional and future-ready.
        </p>

        <p style={styles.paragraph}>
          Driven by modern construction practices and a commitment to
          excellence, HRIFY Construction continues to build spaces that stand
          the test of time.
        </p>
      </div>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <div style={styles.whyChoose}>
        <div style={styles.whyLeft}>
          <h2 style={styles.whyTitle}>Why Choose HRIFY Construction?</h2>

          <ul style={styles.whyList}>
            <li style={styles.listItem}>Quality-focused construction standards</li>
            <li style={styles.listItem}>Experienced & skilled workforce</li>
            <li style={styles.listItem}>On-time project delivery</li>
            <li style={styles.listItem}>Transparent costing & communication</li>
            <li style={styles.listItem}>Safety-first approach</li>
          </ul>
        </div>

        <div style={styles.whyRight}>
          <img
            src={whyChooseImg}
            alt="Why Choose Us"
            style={styles.whyImage}
          />
        </div>
      </div>

      {/* ===== VISION & MISSION ===== */}
      <div style={styles.vmSection}>
        <div style={styles.directorSection}>
          <div style={styles.directorCard}>
            <img
              src={directorImg}
              alt="Managing Director"
              style={styles.directorImg}
            />
            <p style={styles.directorName}>Jayakrishnan J</p>
            <p style={styles.directorRole}>Founder & CEO</p>
          </div>
          {/* <img
            src={logo}
            alt="HRIFY Logo"
            style={styles.logo}
          /> */}
        </div>

        <div style={styles.vmContent}>
          <div style={styles.vmBlock}>
            <h3 style={styles.vmTitle}>VISION</h3>
            <p style={styles.vmText}>
              "To become a leading construction company recognized for quality, innovation, and reliability,
              delivering sustainable and future-ready infrastructure that enhances communities and creates lasting
              value for our clients."
            </p>
          </div>

          <div style={styles.vmBlock}>
            <h3 style={styles.vmTitle}>MISSION</h3>
            <p style={styles.vmText}>
              Our Mission is to deliver quality construction with safety, integrity, and timely execution, using
              modern practices to create durable spaces while ensuring complete customer satisfaction.
            </p>
          </div>
        </div>
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

  textSection: {
    maxWidth: "1600px",
    margin: "40px auto",
    padding: "0 20px",
  },

  paragraph: {
    fontSize: "18.5px",
    lineHeight: "1.9",
    color: "#333",
    marginBottom: "18px",
    textAlign: "left",
  },

  brand: {
    color: "#2b6f8f",
  },

  whyChoose: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(135deg, #1a4d5e 0%, #2d6b7e 50%, #4a8da3 100%)",
    padding: "60px 100px",
    gap: "80px",
  },

  whyLeft: {
    flex: 1,
    maxWidth: "600px",
  },

  whyTitle: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#FFD700",
    marginBottom: "30px",
    letterSpacing: "0.5px",
  },

  whyList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  listItem: {
    fontSize: "18px",
    lineHeight: "2.2",
    color: "#ffffff",
    marginBottom: "8px",
    paddingLeft: "0",
    fontWeight: "500",
  },

  whyRight: {
    width: "450px",
    flexShrink: 0,
  },

  whyImage: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  vmSection: {
    display: "flex",
    alignItems: "flex-start",
    gap: "80px",
    maxWidth: "1200px",
    margin: "80px auto 60px",
    padding: "0 40px",
  },

  directorSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    minWidth: "280px",
  },

  directorCard: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  directorImg: {
    width: "180px",
    height: "180px",
    // borderRadius: "20px",
    objectFit: "cover",
    marginBottom: "16px",
    // border: "4px solid #e0e0e0",
  },

  directorName: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "4px",
    lineHeight: "1.4",
  },

  directorRole: {
    fontSize: "14px",
    color: "#666",
    fontWeight: "400",
  },

  logo: {
    width: "200px",
    height: "auto",
  },

  vmContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  vmBlock: {
    display: "flex",
    flexDirection: "column",
  },

  vmTitle: {
    fontSize: "28px",
    color: "#3a8da8",
    fontWeight: "700",
    marginBottom: "12px",
    letterSpacing: "1px",
    textAlign:"center",
  },

  vmText: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#333",
    textAlign: "justify",
  },
};