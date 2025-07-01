import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load projects from JSON file
    import(
      "/Users/ben/Development/code/personal_projects/personal-website/src/data/projects.json"
    )
      .then((data) => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p>Loading projects...</p>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: "4rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "3rem",
          color: "#333",
        }}
      >
        Featured Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transition: "all 0.3s ease",
              maxWidth: "400px",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Project Image */}
            <div
              style={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>

            {/* Project Content */}
            <div
              style={{
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#333",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  marginBottom: "1rem",
                  lineHeight: "1.6",
                }}
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div
                style={{
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        background: "#f1f3f4",
                        color: "#333",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.75rem 1.5rem",
                    background: "#333",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#555";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#333";
                  }}
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "0.75rem 1.5rem",
                      background: "#007bff",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      transition: "background 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#0056b3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#007bff";
                    }}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .projects-content {
            padding: 1rem !important;
          }
          .projects-links {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .projects-links a {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
