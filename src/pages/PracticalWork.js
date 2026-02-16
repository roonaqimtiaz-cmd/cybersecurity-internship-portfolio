import React from 'react';
import '../styles/page.css';

const PracticalWork = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">Practical Work & Hands-On Learning</h1>
                    <p className="page-subtitle">
                        Real-world practice and skill development
                    </p>
                </div>

                <section className="content-section">
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>
                        Throughout my internship, I engaged in hands-on practice through various platforms
                        and exercises that helped me apply theoretical knowledge to practical scenarios.
                    </p>
                </section>

                <section className="content-section">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                        Learning Platforms & Practice
                    </h2>
                    <div className="grid grid-2">
                        <div className="project-card">
                            <div className="project-card-header">
                                <h3>🐧 Linux Practice on Ubuntu VM</h3>
                            </div>
                            <div className="project-card-body">
                                <p>
                                    Practiced essential Linux commands and system administration tasks on an Ubuntu
                                    virtual machine. Gained hands-on experience with file navigation, user management,
                                    and permission controls.
                                </p>
                                <div className="project-tags">
                                    <span className="tag">Linux</span>
                                    <span className="tag">Ubuntu</span>
                                    <span className="tag">Command Line</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-card-header">
                                <h3>📝 Bash Scripting Exercises</h3>
                            </div>
                            <div className="project-card-body">
                                <p>
                                    Created simple shell scripts to automate command execution. Learned script
                                    structure, syntax, and how to turn repetitive commands into reusable scripts.
                                </p>
                                <div className="project-tags">
                                    <span className="tag">Bash</span>
                                    <span className="tag">Scripting</span>
                                    <span className="tag">Automation</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-card-header">
                                <h3>🗄️ SQL Query Practice</h3>
                            </div>
                            <div className="project-card-body">
                                <p>
                                    Practiced writing SQL queries to retrieve and filter data from relational
                                    databases. Worked with SELECT statements, WHERE clauses, and JOIN operations.
                                </p>
                                <div className="project-tags">
                                    <span className="tag">SQL</span>
                                    <span className="tag">Databases</span>
                                    <span className="tag">Queries</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-card-header">
                                <h3>🎯 TryHackMe Rooms</h3>
                            </div>
                            <div className="project-card-body">
                                <p>
                                    Completed various TryHackMe rooms to practice cybersecurity concepts in
                                    interactive, hands-on scenarios. Applied learning from courses to practical
                                    challenges.
                                </p>
                                <div className="project-tags">
                                    <span className="tag">TryHackMe</span>
                                    <span className="tag">CTF</span>
                                    <span className="tag">Hands-On</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                        Coursework Completed
                    </h2>
                    <div className="grid grid-3">
                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3>📚 Coursera</h3>
                            <p style={{ fontSize: '0.95rem' }}>
                                Completed 3 Coursera courses part of the <b>Google Cybersecurity Professional Certificate</b> covering cybersecurity fundamentals,
                                operating systems, and security concepts
                            </p>
                        </div>
                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3>🌐 Cisco Networking Academy</h3>
                            <p style={{ fontSize: '0.95rem' }}>
                                Completed Introduction to Cybersecurity course covering threats,
                                attacks, and professional roles
                            </p>
                        </div>
                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3>🎥 Supervisor Videos</h3>
                            <p style={{ fontSize: '0.95rem' }}>
                                Watched and learned from course videos provided by internship
                                supervisor on various security topics
                            </p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 136, 0.1))' }}>
                        <h3>💻 Tools & Technologies Used</h3>
                        <div className="grid grid-2" style={{ marginTop: 'var(--spacing-md)' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>✓</span>
                                    Ubuntu Linux (Virtual Machine)
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>✓</span>
                                    Bash shell and scripting
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>✓</span>
                                    SQL databases and query tools
                                </li>
                            </ul>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>✓</span>
                                    TryHackMe platform
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>✓</span>
                                    Coursera learning platform
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>✓</span>
                                    Cisco Networking Academy
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card">
                        <h3>📊 Skills Developed</h3>
                        <p>Through hands-on practice and coursework, I developed:</p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-md)' }}>
                            <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                <strong>Linux Command Line Proficiency:</strong> Navigating file systems, managing users, and monitoring systems
                            </li>
                            <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                <strong>Bash Scripting:</strong> Automating tasks and creating executable scripts
                            </li>
                            <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                <strong>SQL Querying:</strong> Retrieving and filtering data from databases
                            </li>
                            <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                <strong>Cybersecurity Fundamentals:</strong> Understanding threats, vulnerabilities, and protection methods
                            </li>
                            <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                <strong>Problem-Solving:</strong> Troubleshooting technical issues and finding solutions
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PracticalWork;
