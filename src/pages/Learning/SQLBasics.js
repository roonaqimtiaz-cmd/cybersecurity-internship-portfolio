import React from 'react';
import '../../styles/page.css';

const SQLBasics = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">SQL Fundamentals</h1>
                    <p className="page-subtitle">
                        Database management and security analysis
                    </p>
                </div>

                <section className="content-section">
                    <div className="learning-card">
                        <h3><span className="learning-card-icon">🗄️</span> What I Learned</h3>
                        <p>
                            I learned how relational databases are structured and how SQL is used to retrieve
                            and filter information. Understanding SQL helped me see how databases support
                            security analysis and how to query data effectively.
                        </p>
                        <ul>
                            <li>What SQL is and its role in cybersecurity</li>
                            <li>Relational database structure</li>
                            <li>Basic SQL queries (SELECT)</li>
                            <li>Filtering results (WHERE clause)</li>
                            <li>SQL joins to combine data from multiple tables</li>
                            <li>Retrieving information from databases</li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <h2>SQL Concepts I Practiced</h2>
                    <div className="grid grid-2">
                        <div className="card">
                            <h3>📊 Basic Queries</h3>
                            <div style={{ marginTop: 'var(--spacing-sm)' }}>
                                <p><code>SELECT * FROM table</code></p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Retrieve all records from a table</p>

                                <p style={{ marginTop: 'var(--spacing-sm)' }}><code>SELECT column1, column2</code></p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Select specific columns</p>
                            </div>
                        </div>
                        <div className="card">
                            <h3>🔍 Filtering Data</h3>
                            <div style={{ marginTop: 'var(--spacing-sm)' }}>
                                <p><code>WHERE condition</code></p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Filter results based on conditions</p>

                                <p style={{ marginTop: 'var(--spacing-sm)' }}><code>AND / OR operators</code></p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Combine multiple conditions</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card">
                        <h3>🔗 SQL Joins</h3>
                        <p>
                            I learned how to use JOIN operations to combine data from multiple tables:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-md)' }}>
                            <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                <strong>INNER JOIN:</strong> Returns matching records from both tables
                            </li>
                            <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                <strong>LEFT JOIN:</strong> Returns all records from left table and matching from right
                            </li>
                            <li style={{ padding: '0.4rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>▹</span>
                                <strong>RIGHT JOIN:</strong> Returns all records from right table and matching from left
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <h2>SQL in Cybersecurity</h2>
                    <div className="learning-card">
                        <h3><span className="learning-card-icon">🛡️</span> Security Applications</h3>
                        <p>Understanding how SQL supports cybersecurity work:</p>
                        <ul>
                            <li>Querying security logs and audit trails</li>
                            <li>Analyzing user access patterns</li>
                            <li>Retrieving incident data for investigation</li>
                            <li>Understanding database structure for security assessments</li>
                            <li>Identifying potential SQL injection vulnerabilities</li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 136, 0.1))' }}>
                        <h3>💡 Key Takeaways</h3>
                        <p>
                            SQL is a powerful tool for retrieving and analyzing data. Understanding how to
                            write queries, filter results, and join tables is essential for security analysis
                            and incident investigation.
                        </p>
                        <p style={{ marginTop: 'var(--spacing-sm)' }}>
                            Learning the structure of relational databases helped me understand how data is
                            organized and how to extract meaningful information for security purposes.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SQLBasics;
