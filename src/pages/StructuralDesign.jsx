import structuralTop from "../assets/Designbuild/Structural-banner.png";
import structuralBottom from "../assets/Designbuild/structural-side.png";

export default function StructuralDesign() {
  return (
    <main style={{ width: "100%", backgroundColor: "#ffffff" }}>
      {/* ================= TOP IMAGE ================= */}
      <section>
        <img
          src={structuralTop}
          alt="Structural Design Coordination"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </section>

      {/* ================= TITLE & TEXT ================= */}
      <section
        style={{
          padding: "50px 80px 30px",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "18px",
            color: "#000",
          }}
        >
          Structural Design Coordination
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.9",
            color: "#333",
            maxWidth: "1600px",
            margin: "0 auto",
            textAlign: "justify",
          }}
        >
          We provide comprehensive structural design coordination to ensure
          safety, stability, and efficiency across every project. Our team
          works closely with architects, consultants, and site engineers to
          align structural plans with design intent and construction
          requirements. By integrating technical accuracy with practical
          execution, we ensure compliance with standards, optimize material
          usage, and deliver structurally sound solutions that support long-term
          durability and performance.
        </p>
      </section>

      {/* ================= BOTTOM IMAGE ================= */}
      <section
        style={{
          padding: "30px 80px 70px",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <img
          src={structuralBottom}
          alt="Structural Coordination Model"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </section>
    </main>
  );
}
