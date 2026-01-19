import logo from "../assets/logo2.png";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background:
          "linear-gradient(90deg, #ffffff 0%, #d3dde0 40%, #6e8b94 65%, #0f3b46 100%)",
        padding: "40px 60px 25px",
        boxSizing: "border-box",
      }}
    >
      {/* TOP SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT LOGO */}
        <div>
          <img
            src={logo}
            alt="Hrify Construction"
            style={{
              height: "110px",
              display: "block",
              justifyContent:"center",
            }}
          />
        </div>

        {/* RIGHT MENU */}
        <div
          style={{
            color: "#ffffff",
            minWidth: "260px",
            paddingTop: "10px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "600",
              marginBottom: "6px",
            }}
          >
            Hrify Construction
          </h2>

          {/* DASH LINE */}
          <div
            style={{
              width: "70px",
              height: "2px",
              backgroundColor: "#ffffff",
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
                marginBottom: "14px",
                cursor: "pointer",
              }}
            >
              <span style={{ marginRight: "10px" }}>»</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* HORIZONTAL DIVIDER */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.6)",
          margin: "28px 0 18px",
        }}
      />

      {/* COPYRIGHT */}
      <div
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "#000",
        }}
      >
        Copyright 2025 | www.hrifyconstruction.com | All rights reserved.
      </div>
    </footer>
  );
}
