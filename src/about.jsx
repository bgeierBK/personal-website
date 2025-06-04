function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>About Me</h1>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm a passionate full-stack developer with a love for creating
              beautiful and functional web applications. I enjoy turning complex
              problems into simple, elegant solutions.
            </p>

            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or enjoying a good cup of
              coffee while reading about the latest developments in web
              development.
            </p>

            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                  <li>Tailwind CSS</li>
                  <li>Vite</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>REST APIs</li>
                  <li>GraphQL</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Tools & Others</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>

            <h2>Background</h2>
            <p>
              I started my journey in web development 3 years ago and have been
              constantly learning and growing ever since. I believe in writing
              clean, maintainable code and creating user experiences that
              delight and engage.
            </p>

            <p>
              I'm always excited to take on new challenges and collaborate with
              other developers and designers to bring innovative ideas to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
