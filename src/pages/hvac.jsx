import HvacBanner from "../assets/Hvac/Hvac-banner.png";

export default function HVAC() {
  return (
    <div style={styles.page}>
      {/* ===== BANNER IMAGE ===== */}
      <img
        src={HvacBanner}
        alt="HVAC & Mechanical Engineering"
        style={styles.banner}
      />

      {/* ===== CONTENT SECTION ===== */}
      <div style={styles.content}>
        <h2 style={styles.title}>HVAC & Mechanical Engineering</h2>

        <p style={styles.paragraph}>
          We provide comprehensive electrical and power infrastructure solutions
          covering high and low voltage distribution systems, captive and
          standby power generation, HT and LT power networks, and power
          distribution within buildings. Our expertise includes uninteWe provide
          comprehensive mechanical and building systems solutions, including air
          conditioning and refrigeration, heating and ventilation, fuel storage
          and distribution, steam and condensate systems, medical and industrial
          gas networks, vacuum and compressed air systems, and industrial piping
          installations. Our expertise also extends to advanced Building
          Management Systems (BMS), tenant billing and metering for electrical
          and HVAC services, and centralized control and monitoring of buildings
          and mechanical/electrical equipment. Through intelligent BMS
          integration, we ensure optimal energy efficiency, enhanced operational
          control, and sustainable performance across all facilities.rruptible
          power systems (UPS), demand and power control systems, energy
          monitoring, rolling systems, and advanced lighting solutions with load
          management and protection. We also deliver reliable external
          low-voltage distribution, emergency lighting, and robust earthing
          systems. In addition, our services extend to integrated communication
          and automation solutions such as telephone systems, structured
          cabling, voice and wireless data networks, and building automation
          systems, ensuring safe, efficient, and smart power management across
          all facilities.
        </p>
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
};
