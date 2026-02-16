import React from 'react';
import '../../styles/page.css';

const CiscoIntro = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">Introduction to Cybersecurity</h1>
                    <p className="page-subtitle">
                        Cisco Networking Academy - Cybersecurity fundamentals
                    </p>
                </div>

                <section className="content-section">
                    <div className="learning-card">
                        <h3><span className="learning-card-icon">🌐</span> What I Learned</h3>
                        <p>
                            Through Cisco Networking Academy, I gained foundational knowledge of cybersecurity
                            principles. This course covered basic cybersecurity concepts, types of threats,
                            attack methods, and the role of cybersecurity professionals.
                        </p>
                        <ul>
                            <li>Basic cybersecurity principles</li>
                            <li>Types of cyber threats</li>
                            <li>Attack methods overview</li>
                            <li>Importance of data protection</li>
                            <li>Cyber ethics</li>
                            <li>Safe online practices</li>
                            <li>Role of cybersecurity professionals</li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Core Cybersecurity Principles</h2>
                    <div className="grid grid-2">
                        <div className="card">
                            <h3>🔐 CIA Triad</h3>
                            <p>
                                The foundation of information security:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-sm)' }}>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    <strong>Confidentiality:</strong> Protecting data from unauthorized access
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    <strong>Integrity:</strong> Ensuring data accuracy and trustworthiness
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    <strong>Availability:</strong> Ensuring authorized access when needed
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3>🎯 Data Protection</h3>
                            <p>
                                Why protecting data is critical:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-sm)' }}>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Personal information protection
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Business data security
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Compliance requirements
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card">
                        <h3>⚔️ Types of Cyber Threats</h3>
                        <p>Overview of common threats covered in the course:</p>
                        <div className="grid grid-2" style={{ marginTop: 'var(--spacing-md)' }}>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Malware</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Malicious software designed to harm systems
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Phishing</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Fraudulent attempts to obtain sensitive information
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Social Engineering</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Manipulating people to divulge confidential information
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>DDoS Attacks</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Overwhelming systems to deny service
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Cybersecurity Professionals</h2>
                    <div className="learning-card">
                        <h3><span className="learning-card-icon">👨‍💻</span> Role & Responsibilities</h3>
                        <p>I learned about the important role cybersecurity professionals play:</p>
                        <ul>
                            <li>Protecting organizational assets and data</li>
                            <li>Monitoring systems for security threats</li>
                            <li>Responding to security incidents</li>
                            <li>Implementing security policies and controls</li>
                            <li>Educating users about security best practices</li>
                            <li>Staying current with evolving threats</li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card">
                        <h3>⚖️ Cyber Ethics & Safe Practices</h3>
                        <div className="grid grid-2" style={{ marginTop: 'var(--spacing-md)' }}>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Ethical Behavior</h4>
                                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
                                    <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                        Respecting privacy
                                    </li>
                                    <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                        Responsible disclosure
                                    </li>
                                    <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                        Legal compliance
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Safe Online Practices</h4>
                                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
                                    <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                        Strong passwords
                                    </li>
                                    <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                        Multi-factor authentication
                                    </li>
                                    <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                        Regular software updates
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 136, 0.1))' }}>
                        <h3>💡 Key Takeaways</h3>
                        <p>
                            The Cisco Introduction to Cybersecurity course provided a comprehensive overview
                            of fundamental security concepts. Understanding the types of threats, attack methods,
                            and the role of cybersecurity professionals gave me valuable context for the field.
                        </p>
                        <p style={{ marginTop: 'var(--spacing-sm)' }}>
                            The emphasis on cyber ethics and safe online practices reinforced that cybersecurity
                            is not just about technical skills—it's also about responsibility and protecting people.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CiscoIntro;
