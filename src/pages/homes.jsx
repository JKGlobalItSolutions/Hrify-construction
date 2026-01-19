import servicesImg from "../assets/service.png";
import qualityImg from "../assets/Quality.png";
import projectsImg from "../assets/projects.png";
import awardsImg from "../assets/awards.png";
import workerImg from "../assets/worker.png";

export default function Home() {
  return (
    <main style={{ width: "100%", backgroundColor: "#ffffff" }}>
      {/* ================= HERO GRADIENT (NO IMAGE) ================= */}
      <section
        style={{
          width: "100%",
          height: "300px",
          background:
            "linear-gradient(135deg, #0f2f3a 0%, #1f4d5c 40%, #3b8fa8 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 60%)",
          }}
        />
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section
        style={{
          padding: "60px 80px",
          display: "grid",
          gridTemplateColumns: "1.3fr 0.7fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.9",
              color: "#2b2b2b",
              textAlign: "justify",
              marginBottom: "22px",
            }}
          >
            Construction at{" "}
            <span style={{ color: "#1f7bbd", fontWeight: "600" }}>
              HRIFY Construction
            </span>{" "}
            is driven by quality, safety, and precision. We manage every stage of
            the construction process with careful planning, skilled execution,
            and strict quality control. From residential and commercial projects
            to infrastructure works, our focus is on delivering durable,
            functional, and timely solutions that meet client expectations and
            industry standards.
          </p>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "14px",
              color: "#000",
            }}
          >
            What We Offer
          </h3>

          <ul
            style={{
              paddingLeft: "18px",
              fontSize: "15px",
              lineHeight: "1.9",
              color: "#333",
            }}
          >
            <li>Residential Construction – Independent houses, villas, and apartments</li>
            <li>Commercial Construction – Offices, shops, and commercial buildings</li>
            <li>Turnkey Projects – Complete execution from planning to handover</li>
            <li>Renovation & Remodeling – Structural and interior upgrades</li>
            <li>Project Management – Planning, supervision, and quality control</li>
            <li>Structural & Civil Works – Strong foundations and durable structures</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={workerImg}
            alt="Construction Work"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "2px",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ================= FEATURE CARDS ================= */}
      <section
        style={{
          padding: "60px 80px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            { title: "SERVICES", img: servicesImg },
            { title: "QUALITY", img: qualityImg },
            { title: "PROJECTS", img: projectsImg },
            { title: "AWARDS & CITATION", img: awardsImg },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                border: "3px solid #4aa3df",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* TITLE BAR */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  padding: "10px 14px",
                  background:
                    "linear-gradient(to right, rgba(120,170,200,0.95), rgba(160,200,220,0.95))",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  zIndex: 2,
                }}
              >
                {item.title}
              </div>

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "360px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
