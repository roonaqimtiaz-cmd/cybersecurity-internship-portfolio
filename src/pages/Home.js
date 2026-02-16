import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/page.css';

const Home = () => {
    return (
        <div className="page">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title glow-text">
                        Cybersecurity Internship Portfolio
                    </h1>
                    <p className="hero-subtitle">
                        Welcome to my 6-week cybersecurity learning journey. Explore my structured learning
                        experiences, hands-on practice with Linux and SQL, and reflections as I developed
                        foundational skills in cybersecurity and system administration.
                    </p>
                    <div className="hero-cta">
                        <Link to="/about" className="btn btn-primary">
                            About Me
                        </Link>
                        <Link to="/practical-work" className="btn">
                            View Practice Work
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container">
                <section className="content-section">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        What I Learned
                    </h2>
                    <div className="grid grid-3">
                        <Link to="/learning/operating-systems" className="card" style={{ textDecoration: 'none' }}>
                            <h3>🖥️ Operating Systems</h3>
                            <p>Understanding OS functions, GUI vs CLI, and the relationship between hardware and software.</p>
                        </Link>
                        <Link to="/learning/linux-basics" className="card" style={{ textDecoration: 'none' }}>
                            <h3>🐧 Linux & Bash</h3>
                            <p>Command line practice, file management, and shell scripting on Ubuntu VM.</p>
                        </Link>
                        <Link to="/learning/sql-basics" className="card" style={{ textDecoration: 'none' }}>
                            <h3>🗄️ SQL Fundamentals</h3>
                            <p>Database structure, queries, filtering, and joins for security analysis.</p>
                        </Link>
                        <Link to="/learning/threats-vulnerabilities" className="card" style={{ textDecoration: 'none' }}>
                            <h3>🛡️ Assets, Threats & Vulnerabilities</h3>
                            <p>Identifying organizational assets and understanding security risks.</p>
                        </Link>
                        <Link to="/learning/cisco-intro" className="card" style={{ textDecoration: 'none' }}>
                            <h3>🌐 Cisco Cybersecurity</h3>
                            <p>Cybersecurity principles, threats, attack methods, and professional roles.</p>
                        </Link>
                        <Link to="/practical-work" className="card" style={{ textDecoration: 'none' }}>
                            <h3>⚡ Practical Work</h3>
                            <p>Hands-on practice through TryHackMe, coursework, and Linux exercises.</p>
                        </Link>
                    </div>
                </section>

                <section className="content-section">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <span className="stat-number">6</span>
                            <span className="stat-label">Weeks of Learning</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">4</span>
                            <span className="stat-label">Courses Completed</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">5</span>
                            <span className="stat-label">Core Topics Covered</span>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 136, 0.1))', textAlign: 'center' }}>
                        <h2>About This Portfolio</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                            This portfolio documents my structured learning journey through a 6-week cybersecurity
                            internship. I completed courses on Coursera and Cisco Networking Academy, practiced
                            Linux commands on Ubuntu VM, learned SQL fundamentals, and explored cybersecurity
                            concepts through TryHackMe and supervisor-provided materials.
                        </p>
                        <div style={{ marginTop: 'var(--spacing-lg)' }}>
                            <Link to="/reflection" className="btn btn-primary">
                                Read My Reflection
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
