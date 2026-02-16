import React from 'react';
import '../../styles/page.css';

const LinuxBasics = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">Linux Fundamentals & Bash</h1>
                    <p className="page-subtitle">
                        Command line proficiency and system administration
                    </p>
                </div>

                <section className="content-section">
                    <div className="learning-card">
                        <h3><span className="learning-card-icon">🐧</span> What I Learned</h3>
                        <p>
                            I studied Linux as an open-source operating system widely used in cybersecurity.
                            I learned about Linux architecture, common distributions, and the role of the shell.
                            I practiced essential Linux commands for navigating and managing the file system on
                            an Ubuntu virtual machine.
                        </p>
                        <ul>
                            <li>Introduction to Linux and its importance in cybersecurity</li>
                            <li>Linux architecture basics</li>
                            <li>Common Linux distributions</li>
                            <li>Role of the Linux shell</li>
                            <li>File system navigation and management</li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Essential Commands I Practiced</h2>
                    <div className="grid grid-2">
                        <div className="card">
                            <h3>📁 File System Navigation</h3>
                            <div style={{ marginTop: 'var(--spacing-sm)' }}>
                                <p><code>cd</code> - Change directory</p>
                                <p><code>pwd</code> - Print working directory</p>
                                <p><code>ls</code> - List directory contents</p>
                                <p><code>cat</code> - View file contents</p>
                            </div>
                        </div>
                        <div className="card">
                            <h3>🔍 System Monitoring</h3>
                            <div style={{ marginTop: 'var(--spacing-sm)' }}>
                                <p><code>ps</code> - View running processes</p>
                                <p><code>df -h</code> - Check disk usage</p>
                                <p><code>free -h</code> - Check memory usage</p>
                                <p><code>who</code> / <code>whoami</code> - View logged-in users</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Bash Scripting & System Administration</h2>
                    <div className="learning-card">
                        <h3><span className="learning-card-icon">📝</span> Shell Scripting</h3>
                        <p>I learned to create simple shell scripts to automate command execution:</p>
                        <ul>
                            <li>Turning commands into scripts</li>
                            <li>Creating executable Bash scripts</li>
                            <li>Basic script structure and syntax</li>
                            <li>Automating repetitive tasks</li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <h2>User & Permission Management</h2>
                    <div className="grid grid-2">
                        <div className="card">
                            <h3>👥 User Management</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    User authentication & authorization
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Using sudo for elevated privileges
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Creating and managing user groups
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3>🔒 File Permissions</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Understanding file permissions basics
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Managing file ownership
                                </li>
                                <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                    Special directories and files
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 136, 0.1))' }}>
                        <h3>💡 Key Takeaways</h3>
                        <p>
                            Linux command line proficiency is a fundamental skill in cybersecurity. Practicing
                            on Ubuntu VM helped me gain confidence in navigating the file system, monitoring
                            system resources, and managing users and permissions.
                        </p>
                        <p style={{ marginTop: 'var(--spacing-sm)' }}>
                            Understanding why Linux is preferred in professional security environments—due to
                            its flexibility, control, and transparency—was an important insight.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LinuxBasics;
