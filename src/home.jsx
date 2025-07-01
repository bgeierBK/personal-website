import Projects from "./Projects";
function Home() {
  return (
    <div className="home">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1>Ben Geier</h1>
          <h2>Developer, Writer, Technologist</h2>
          <p>
            I'm a software developer, a writer and a believer in technology
            changing the world.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>
            <a href="/contact" className="btn secondary">
              Get In Touch
            </a>
          </div>
        </section>

        {/* Quick Intro */}
        <section className="intro">
          <div className="intro-content">
            <h2>Welcome to My Portfolio</h2>
            <p>
              I'm a developer who loves building things for the web. I work with
              modern technologies like React, Node.js, and more to create
              applications that are both functional and beautiful.
            </p>
            <p>
              In addition to my development work, I'm a professional writer.
              I've written about finance, politics, technology and everything in
              between. My combination of technical skills and storytelling
              prowess is what sets me apart.
            </p>
            <p>
              Below you'll find some of my recent projects. Each one represents
              a different challenge I've tackled and solution I've crafted.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <Projects />
        </section>

        {/* Tech Stack */}
        <section
          className="tech-stack"
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
            My Tech Stack
          </h2>
          <div
            className="tech-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {[
              {
                name: "HTML",
                logo: "/src/assets/html.png",
                website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
              },
              {
                name: "CSS",
                logo: "/src/assets/css.png",
                website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
              },
              {
                name: "JavaScript",
                logo: "/src/assets/javascript.png",
                website:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
              {
                name: "TypeScript",
                logo: "/src/assets/typescript.png",
                website: "https://www.typescriptlang.org",
              },
              {
                name: "React",
                logo: "/src/assets/react.png",
                website: "https://react.dev",
              },
              {
                name: "Python",
                logo: "/src/assets/python.png",
                website: "https://www.python.org",
              },
              {
                name: "Flask",
                logo: "/src/assets/flask.png",
                website: "https://flask.palletsprojects.com",
              },
              {
                name: "Vite",
                logo: "/src/assets/vite.png",
                website: "https://vite.dev",
              },
              {
                name: "GitHub",
                logo: "/src/assets/github.png",
                website: "https://github.com",
              },
            ].map((tech) => (
              <a
                key={tech.name}
                href={tech.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  background: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  minHeight: "280px",
                  width: "100%",
                  maxWidth: "240px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.background = "#f8f9fa";
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.background = "#fff";
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                }}
                title={tech.name}
              >
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                    marginBottom: "1rem",
                    transition: "transform 0.3s ease",
                  }}
                />
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  {tech.name}
                </span>
              </a>
            ))}
          </div>

          {/* Responsive styles */}
          <style jsx>{`
            @media (max-width: 768px) {
              .tech-grid {
                grid-template-columns: repeat(
                  auto-fit,
                  minmax(180px, 1fr)
                ) !important;
                gap: 1.5rem !important;
              }
              .tech-grid a {
                padding: 1rem !important;
                min-height: 240px !important;
              }
              .tech-grid img {
                width: 160px !important;
                height: 160px !important;
              }
              .tech-grid span {
                font-size: 1rem !important;
              }
            }

            @media (max-width: 480px) {
              .tech-grid {
                grid-template-columns: repeat(
                  auto-fit,
                  minmax(150px, 1fr)
                ) !important;
                gap: 1rem !important;
              }
              .tech-grid a {
                padding: 0.8rem !important;
                min-height: 200px !important;
              }
              .tech-grid img {
                width: 120px !important;
                height: 120px !important;
              }
              .tech-grid span {
                font-size: 0.9rem !important;
              }
            }
          `}</style>
        </section>
      </div>
    </div>
  );
}

export default Home;
