import React from 'react';
import '../../styles/page.css';

const ThreatsAndVulnerabilities = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">Assets, Threats & Vulnerabilities</h1>
                    <p className="page-subtitle">
                        Understanding security risks and their impact
                    </p>
                </div>

                <section className="content-section">
                    <div className="learning-card">
                        <h3><span className="learning-card-icon">🛡️</span> What I Learned</h3>
                        <p>
                            I studied how organizations identify and protect assets, and learned the difference
                            between threats and vulnerabilities. Understanding how they can impact systems and
                            operations helped me grasp the importance of risk assessment in cybersecurity.
                        </p>
                        <ul>
                            <li>Identifying organizational assets</li>
                            <li>Understanding threats</li>
                            <li>Understanding vulnerabilities</li>
                            <li>Risk identification basics</li>
                            <li>Impact of threats on systems and organizations</li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Key Concepts</h2>
                    <div className="grid grid-2">
                        <div className="card">
                            <h3>💎 Assets</h3>
                            <p>
                                Organizational resources that need protection:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-sm)' }}>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Data and information
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Hardware and infrastructure
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Software and applications
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    People and expertise
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3>⚠️ Threats vs Vulnerabilities</h3>
                            <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                                <strong style={{ color: 'var(--accent-cyan)' }}>Threat:</strong> Potential danger
                                that could exploit a vulnerability
                            </p>
                            <p>
                                <strong style={{ color: 'var(--accent-cyan)' }}>Vulnerability:</strong> Weakness
                                that could be exploited by a threat
                            </p>
                            <p style={{ marginTop: 'var(--spacing-sm)', fontSize: '0.95rem' }}>
                                Understanding this distinction is crucial for effective risk management.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card">
                        <h3>🎯 Risk Identification</h3>
                        <p>
                            I learned the basics of identifying and assessing security risks:
                        </p>
                        <div className="grid grid-2" style={{ marginTop: 'var(--spacing-md)' }}>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Asset Identification</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Determining what needs to be protected
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Threat Analysis</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Identifying potential sources of harm
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Vulnerability Assessment</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Finding weaknesses in systems
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Impact Evaluation</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Understanding consequences of security incidents
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Impact on Organizations</h2>
                    <div className="learning-card">
                        <h3><span className="learning-card-icon">📊</span> Understanding Impact</h3>
                        <p>Security incidents can impact organizations in multiple ways:</p>
                        <ul>
                            <li><strong>Financial Impact:</strong> Direct costs from incidents and recovery</li>
                            <li><strong>Operational Impact:</strong> Disruption to business operations</li>
                            <li><strong>Reputational Impact:</strong> Loss of customer trust and brand damage</li>
                            <li><strong>Legal Impact:</strong> Regulatory fines and compliance issues</li>
                            <li><strong>Data Loss:</strong> Permanent loss of critical information</li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 136, 0.1))' }}>
                        <h3>💡 Key Takeaways</h3>
                        <p>
                            Understanding the relationship between assets, threats, and vulnerabilities is
                            fundamental to cybersecurity. Organizations must identify what they need to protect,
                            what threats they face, and where their weaknesses lie.
                        </p>
                        <p style={{ marginTop: 'var(--spacing-sm)' }}>
                            Risk assessment is not just about technical vulnerabilities—it's about understanding
                            the potential impact on the entire organization and prioritizing protection efforts
                            accordingly.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ThreatsAndVulnerabilities;
