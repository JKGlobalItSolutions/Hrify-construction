import clientBanner from "../assets/client/hero-client.png";

export default function Clients() {
  return (
    <div style={{ width: "100%" }}>

      {/* ===== BANNER ===== */}
      <img
        src={clientBanner}
        alt="Clients Banner"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* ===== CONTENT TEXT ===== */}
      <section
        style={{
          padding: "40px 80px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#2b6f8f",
            fontWeight: "600",
          }}
        >
          Our clients are at the heart of everything we build. From individual
          homeowners to corporate partners, we collaborate closely to deliver
          construction solutions that meet the highest standards of quality and
          trust.
        </p>
      </section>

      {/* ===== WHITE SPACE (AS PER REFERENCE) ===== */}
      <section
        style={{
          height: "320px",
          backgroundColor: "#ffffff",
        }}
      />
    </div>
  );
}
