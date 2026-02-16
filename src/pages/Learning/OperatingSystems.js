import React from 'react';
import '../../styles/page.css';

const OperatingSystems = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">Operating Systems Fundamentals</h1>
                    <p className="page-subtitle">
                        Understanding the bridge between hardware and software
                    </p>
                </div>

                <section className="content-section">
                    <div className="learning-card">
                        <h3><span className="learning-card-icon">🖥️</span> What I Learned</h3>
                        <p>
                            I learned how operating systems function as the bridge between hardware and software.
                            Understanding how an OS manages memory, processes, storage, and users was fundamental
                            to grasping system-level security concepts.
                        </p>
                        <ul>
                            <li>Functions of an operating system</li>
                            <li>Relationship between OS, hardware, and software</li>
                            <li>GUI vs CLI comparison and their use cases</li>
                            <li>Common operating systems in professional use</li>
                            <li>Why CLI is preferred in technical environments</li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Key Concepts Covered</h2>
                    <div className="grid grid-2">
                        <div className="card">
                            <h3>🔧 OS Functions</h3>
                            <p>
                                Operating systems perform critical functions:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-sm)' }}>
                                <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Memory management
                                </li>
                                <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Process management
                                </li>
                                <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Storage management
                                </li>
                                <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    User management and security
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3>💻 GUI vs CLI</h3>
                            <p>
                                Understanding the differences:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-sm)' }}>
                                <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    <strong>GUI:</strong> Visual, user-friendly interface
                                </li>
                                <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    <strong>CLI:</strong> Text-based, powerful control
                                </li>
                                <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    CLI preferred in security work
                                </li>
                                <li style={{ padding: '0.3rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Automation capabilities with CLI
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card">
                        <h3>🌐 Common Operating Systems</h3>
                        <p>Explored various operating systems used in different environments:</p>
                        <div className="grid grid-2" style={{ marginTop: 'var(--spacing-md)' }}>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Windows</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Widely used in enterprise and personal computing
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Linux</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Preferred for servers and cybersecurity work
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>macOS</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Unix-based system for Apple devices
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>Mobile OS</h4>
                                <p style={{ fontSize: '0.95rem' }}>
                                    Android and iOS for mobile devices
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 136, 0.1))' }}>
                        <h3>💡 Key Takeaways</h3>
                        <p>
                            Understanding operating systems is fundamental to cybersecurity. The OS manages
                            all system resources and provides the first line of defense against security threats.
                        </p>
                        <p style={{ marginTop: 'var(--spacing-sm)' }}>
                            Learning the relationship between hardware, software, and the OS helped me
                            understand how security controls are implemented at the system level.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OperatingSystems;
