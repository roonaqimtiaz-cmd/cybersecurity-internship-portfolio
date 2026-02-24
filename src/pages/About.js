import React from 'react';
import '../styles/page.css';

const About = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">About Me</h1>
                    <p className="page-subtitle">
                        My journey into the world of cybersecurity
                    </p>
                </div>

                <section className="content-section">
                    <div className="card">
                        <h2>Introduction</h2>
                        <p>
                            I am a BS Computer Science student with a growing interest in cybersecurity
                            and system administration. During my internship, I focused on building foundational
                            knowledge in operating systems, Linux, SQL, and cybersecurity principles. This
                            portfolio represents the structured documentation of my learning journey, practical
                            exploration, and skill development throughout the internship.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 136, 0.1))' }}>
                        <h2>🏢 About the Internship</h2>
                        <div style={{ marginTop: 'var(--spacing-md)' }}>
                            <p><strong>Duration:</strong> 6 Weeks</p>
                            <p><strong>Focus Area:</strong> Cybersecurity Fundamentals, Linux, and SQL</p>
                            <p style={{ marginTop: 'var(--spacing-sm)' }}>
                                During this internship, I engaged in structured online learning, practical Linux
                                command execution on a virtual machine, and conceptual understanding of cybersecurity
                                frameworks. The internship emphasized both theoretical understanding and hands-on
                                exposure to system tools and security concepts.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Learning Experience</h2>
                    <div className="grid grid-2">
                        <div className="card">
                            <h3>📚 Coursework Completed</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    3 Coursera courses on cybersecurity fundamentals
                                </li>
                                <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    1 Cisco Networking Academy course
                                </li>
                                <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    TryHackMe rooms for hands-on practice
                                </li>
                                <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Course videos from internship supervisor
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3>💻 Practical Experience</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Linux command-line practice on Ubuntu VM
                                </li>
                                <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Bash scripting exercises
                                </li>
                                <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    SQL query practice
                                </li>
                                <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    System administration basics
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>My Learning Journey</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-date">Week 1</div>
                            <h3>Operating Systems Fundamentals</h3>
                            <p>
                                Started with understanding how operating systems function as the bridge between
                                hardware and software. Learned about OS functions, GUI vs CLI, and common operating
                                systems used in professional environments.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">Week 2</div>
                            <h3>Linux Fundamentals & Command Line</h3>
                            <p>
                                Explored Linux architecture, distributions, and the role of the shell. Practiced
                                essential commands for file navigation, system monitoring, and user management on
                                Ubuntu virtual machine.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">Week 3</div>
                            <h3>Bash Scripting & System Administration</h3>
                            <p>
                                Learned to create simple shell scripts to automate tasks. Practiced managing file
                                permissions, user groups, and understanding special directories and system files.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">Week 4</div>
                            <h3>SQL & Database Fundamentals</h3>
                            <p>
                                Studied relational database structure and practiced writing SQL queries. Learned
                                SELECT statements, WHERE filters, and JOIN operations for retrieving information
                                from databases.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">Week 5</div>
                            <h3>Cybersecurity Principles</h3>
                            <p>
                                Completed Cisco course on cybersecurity basics. Learned about assets, threats,
                                vulnerabilities, attack methods, data protection, and the role of cybersecurity
                                professionals.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 136, 0.1))' }}>
                        <h2>Goals & Future Direction</h2>
                        <p>
                            This internship has strengthened my foundation in system operations and cybersecurity
                            fundamentals. Moving forward, I aim to:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-md)' }}>
                            <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>🎯</span>
                                Deepen my Linux system administration skills
                            </li>
                            <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>🎯</span>
                                Continue learning through practical labs and CTF challenges
                            </li>
                            <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>🎯</span>
                                Pursue industry certifications in cybersecurity
                            </li>
                            <li style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>🎯</span>
                                Build expertise in security operations and incident response
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
