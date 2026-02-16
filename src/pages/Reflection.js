import React from 'react';
import '../styles/page.css';

const Reflection = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">Reflection</h1>
                    <p className="page-subtitle">
                        Looking back on my cybersecurity learning journey
                    </p>
                </div>

                <section className="content-section">
                    <div className="reflection-quote">
                        "During this internship, I strengthened my understanding of system operations and
                        cybersecurity fundamentals. The structured learning approach combined with hands-on
                        practice helped me build a solid foundation in this critical field."
                    </div>
                </section>

                <section className="content-section">
                    <div className="card">
                        <h2>What I Learned</h2>
                        <p>
                            This 6-week internship provided me with a structured introduction to cybersecurity
                            fundamentals. Through online courses, practical exercises, and hands-on work with
                            Linux systems, I gained both theoretical knowledge and practical skills.
                        </p>
                        <p style={{ marginTop: 'var(--spacing-sm)' }}>
                            The combination of Coursera courses, Cisco Networking Academy content, TryHackMe
                            challenges, and supervisor-provided materials gave me a well-rounded understanding
                            of operating systems, Linux, SQL, and cybersecurity principles.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Key Learning Areas</h2>
                    <div className="grid grid-2">
                        <div className="learning-card">
                            <h3><span className="learning-card-icon">🖥️</span> Operating Systems</h3>
                            <p>
                                Understanding how operating systems work as the bridge between hardware and
                                software gave me insight into system-level security. Learning the differences
                                between GUI and CLI helped me appreciate why command-line interfaces are
                                preferred in technical work.
                            </p>
                        </div>

                        <div className="learning-card">
                            <h3><span className="learning-card-icon">🐧</span> Linux & Bash</h3>
                            <p>
                                Practicing Linux commands on Ubuntu VM was challenging at first, but it
                                significantly improved my command-line confidence. Creating shell scripts
                                taught me how to automate tasks and think programmatically about system
                                administration.
                            </p>
                        </div>

                        <div className="learning-card">
                            <h3><span className="learning-card-icon">🗄️</span> SQL Fundamentals</h3>
                            <p>
                                Learning SQL helped me understand how data is structured and queried. The
                                ability to retrieve and filter information from databases is a valuable skill
                                for security analysis and incident investigation.
                            </p>
                        </div>

                        <div className="learning-card">
                            <h3><span className="learning-card-icon">🛡️</span> Cybersecurity Concepts</h3>
                            <p>
                                The Cisco course and learning about assets, threats, and vulnerabilities gave
                                me a framework for thinking about security. Understanding the role of
                                cybersecurity professionals helped me see where I fit in this field.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 136, 0.1))' }}>
                        <h2>Challenges & Growth</h2>
                        <p>
                            While working with Linux commands and scripting, I faced technical challenges
                            that improved my troubleshooting skills. Initially, remembering command syntax
                            and understanding file permissions was difficult, but consistent practice helped
                            me become more comfortable.
                        </p>
                        <p style={{ marginTop: 'var(--spacing-sm)' }}>
                            The breadth of cybersecurity topics felt overwhelming at times, but breaking down
                            complex concepts into manageable pieces through structured learning made it more
                            approachable. Each week built upon the previous one, creating a logical progression
                            of knowledge.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Key Insights</h2>
                    <div className="card">
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '0.6rem 0', paddingLeft: '2rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, fontSize: '1.5rem' }}>💡</span>
                                <strong>Hands-on practice is essential:</strong> Reading about commands is different
                                from actually using them. Working on Ubuntu VM made the concepts real.
                            </li>
                            <li style={{ padding: '0.6rem 0', paddingLeft: '2rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, fontSize: '1.5rem' }}>💡</span>
                                <strong>Fundamentals matter:</strong> Understanding operating systems and how they
                                manage resources is crucial for grasping security concepts.
                            </li>
                            <li style={{ padding: '0.6rem 0', paddingLeft: '2rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, fontSize: '1.5rem' }}>💡</span>
                                <strong>Security is multifaceted:</strong> It's not just about technical tools—it
                                involves understanding threats, vulnerabilities, ethics, and human factors.
                            </li>
                            <li style={{ padding: '0.6rem 0', paddingLeft: '2rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, fontSize: '1.5rem' }}>💡</span>
                                <strong>Continuous learning is necessary:</strong> Cybersecurity is a constantly
                                evolving field that requires ongoing education and skill development.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Looking Forward</h2>
                    <div className="card">
                        <p>
                            This internship has strengthened my foundation in system operations and cybersecurity
                            fundamentals. Overall, this experience enhanced my confidence in working with
                            command-line environments and understanding security concepts.
                        </p>
                        <div className="timeline" style={{ marginTop: 'var(--spacing-lg)' }}>
                            <div className="timeline-item">
                                <div className="timeline-date">Next Steps</div>
                                <h3>Deepen Technical Skills</h3>
                                <p>
                                    Continue practicing Linux system administration, expand Bash scripting
                                    abilities, and work through more TryHackMe rooms and CTF challenges.
                                </p>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">Short Term</div>
                                <h3>Build on Fundamentals</h3>
                                <p>
                                    Apply the knowledge gained during this internship to more advanced topics
                                    in network security, penetration testing, and security operations.
                                </p>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">Long Term</div>
                                <h3>Professional Development</h3>
                                <p>
                                    Pursue industry certifications (CompTIA Security+, CEH) and build a career
                                    as a cybersecurity professional focused on protecting digital systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="reflection-quote" style={{ borderLeft: '4px solid var(--accent-green)' }}>
                        "This internship was an important first step in my cybersecurity journey. The
                        structured learning, combined with hands-on practice, gave me the foundation I need
                        to continue growing in this field. I'm excited to build upon these fundamentals and
                        develop deeper expertise in protecting digital systems."
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Reflection;
