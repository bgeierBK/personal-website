function Home() {
  return (
    <div className="home">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1>Hi, I'm Your Name</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I create modern, responsive web applications using the latest
            technologies. Passionate about clean code and great user
            experiences.
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
              Below you'll find some of my recent projects. Each one represents
              a different challenge I've tackled and solution I've crafted.
            </p>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="skills-preview">
          <h2>What I Work With</h2>
          <div className="tech-stack">
            <span className="tech-item">React</span>
            <span className="tech-item">JavaScript</span>
            <span className="tech-item">Node.js</span>
            <span className="tech-item">CSS3</span>
            <span className="tech-item">Git</span>
            <span className="tech-item">Vite</span>
          </div>
        </section>

        {/* Projects Section Placeholder */}
        <section id="projects" className="projects-section">
          <h2>Featured Projects</h2>
          <p>Projects component will go here...</p>
        </section>
      </div>
    </div>
  );
}

export default Home;
