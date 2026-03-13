import logo from "../assets/logo2.png";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#0f3b46",
        padding: "40px 60px 25px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* LOGO */}
        <div>
          <img
            src={logo}
            alt="Hrify Construction"
            style={{
              height: "110px",
              maxWidth: "100%",
            }}
          />
        </div>

        {/* MENU */}
        <div style={{ color: "#fff", minWidth: "200px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "6px" }}>
            Hrify Construction
          </h2>

          <div
            style={{
              width: "70px",
              height: "2px",
              backgroundColor: "#fff",
              marginBottom: "18px",
            }}
          />

          {[
            "Home",
            "About us",
            "Services",
            "Projects",
            "Infrastructure",
            "Clients",
            "Contacts",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                marginBottom: "12px",
                cursor: "pointer",
              }}
            >
              <span style={{ marginRight: "10px" }}>»</span>
              {item}
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <div style={{ color: "#fff", maxWidth: "280px" }}>
          <h3 style={{ fontSize: "22px", marginBottom: "6px" }}>
            Contact Us
          </h3>

          <div
            style={{
              width: "70px",
              height: "2px",
              backgroundColor: "#fff",
              marginBottom: "18px",
            }}
          />

          <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
            Annai Parvathi Nagar, Opp. Collector Office,
            <br />
            Vengikkal, Tiruvannamalai – 606604
          </p>

          <p style={{ fontSize: "15px" }}>
            📞 +91 98765 43210
          </p>

          <p style={{ fontSize: "15px" }}>
            ✉ info@hrifyconstruction.com
          </p>

          {/* SOCIAL ICONS */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "15px",
              fontSize: "22px",
            }}
          >
            <i className="bi bi-facebook" style={{ cursor: "pointer" }}></i>
            <i className="bi bi-instagram" style={{ cursor: "pointer" }}></i>
            <i className="bi bi-youtube" style={{ cursor: "pointer" }}></i>
            <i className="bi bi-linkedin" style={{ cursor: "pointer" }}></i>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.5)",
          margin: "28px 0 18px",
        }}
      />

      {/* COPYRIGHT */}
      <div
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "#fff",
        }}
      >
        Copyright 2025 | www.hrifyconstruction.com | All rights reserved.
      </div>
    </footer>
  );
}