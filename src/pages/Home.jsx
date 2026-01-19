import heroImg from "../assets/hero.png";
import servicesImg from "../assets/service.png";
import qualityImg from "../assets/Quality.png";
import projectsImg from "../assets/projects.png";
import awardsImg from "../assets/awards.png";

export default function Home() {
  return (
    <main style={{ width: "100%" }}>

      {/* HERO SECTION */}
      <section>
        <img
          src={heroImg}
          alt="Hrify Construction"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{
          background: "linear-gradient(90deg, #1e5d78, #3b8fa8)",
          color: "#ffffff",
          padding: "50px 80px",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "15px",
          }}
        >
          Designing Smarter Caring Deeper
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "1600px",
          }}
        >
          HRIFY CONSTRUCTION is an engineering consultancy firm established by a
          team of dynamic and innovative professionals. We were founded with a
          clear vision to bridge the gap between the evolving demands of the
          construction industry and traditional consultancy practices. Hrify Construction delivers a client-focused, agile, and hands-on
          approach, offering responsive, innovative, and practical engineering
          solutions tailored to modern project needs.  
        </p>
      </section>

      {/* FEATURE CARDS */}
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
              {/* TITLE STRIP */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  padding: "10px 14px",
                  background:
                    "linear-gradient(to right, rgba(120,170,200,0.9), rgba(160,200,220,0.9))",
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
