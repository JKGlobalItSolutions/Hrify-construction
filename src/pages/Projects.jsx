import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export default function Projects() {
  return (
    <main style={{ width: "100%" }}>

      <section
        style={{
          background: "linear-gradient(180deg, #0e3a4a, #4f9fbf)",
          padding: "60px 80px",
          color: "#fff",
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span
            style={{
              fontSize: "12px",
              padding: "4px 12px",
              borderRadius: "20px",
              background: "#1f6f85",
              display: "inline-block",
              marginBottom: "10px",
            }}
          >
            Case Studies
          </span>

          <h2 style={{ fontSize: "32px", margin: "10px 0" }}>
            Our Latest Project
          </h2>

          <p style={{ fontSize: "14px", opacity: 0.85 }}>
            Building projects that reflect quality, safety, and reliability
          </p>
        </div>

        {/* PROJECT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px",
          }}
        >
          {/* CARD 1 */}
          <ProjectCard image={project1} />

          {/* CARD 2 */}
          <ProjectCard image={project2} />

          {/* CARD 3 */}
          <ProjectCard image={project3} />

          {/* CARD 4 */}
          <ProjectCard image={project4} />
        </div>

        {/* VIEW MORE */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            style={{
              background: "#000",
              color: "#fff",
              border: "none",
              padding: "10px 26px",
              borderRadius: "25px",
              cursor: "pointer",
              fontSize: "13px",
            }}
          >
            View More →
          </button>
        </div>
      </section>

    </main>
  );
}

/* PROJECT CARD COMPONENT */
function ProjectCard({ image }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        color: "#000",
      }}
    >
      <img
        src={image}
        alt="Project"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "12px",
          padding: "10px 14px",
          fontSize: "12px",
          color: "#666",
        }}
      >
        <span>• 2025</span>
        <span>Company name</span>
      </div>
    </div>
  );
}
