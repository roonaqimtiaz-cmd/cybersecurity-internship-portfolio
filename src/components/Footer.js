import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <div style={styles.content}>
                    <div style={styles.section}>
                        <h3 style={styles.heading}>Cybersecurity Portfolio</h3>
                        <p style={styles.text}>
                            Documenting my journey in cybersecurity and information security.
                        </p>
                    </div>

                    <div style={styles.section}>
                        <h4 style={styles.subheading}>Quick Links</h4>
                        <div style={styles.links}>
                            <a href="/" style={styles.link}>Home</a>
                            <a href="/about" style={styles.link}>About</a>
                            <a href="/practical-work" style={styles.link}>Projects</a>
                            <a href="/reflection" style={styles.link}>Reflection</a>
                        </div>
                    </div>

                    <div style={styles.section}>
                        <h4 style={styles.subheading}>Connect</h4>
                        <div style={styles.social}>
                            <a href="https://github.com/roonaqimtiaz-cmd" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/roonaqimtiaz/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div style={styles.bottom}>
                    <p style={styles.copyright}>
                        © {currentYear} Cybersecurity Portfolio. Built with React & Vite.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        background: 'rgba(17, 24, 39, 0.8)',
        borderTop: '1px solid var(--border-color)',
        marginTop: 'var(--spacing-2xl)',
        padding: 'var(--spacing-xl) 0 var(--spacing-md)',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 var(--spacing-md)',
    },
    content: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-lg)',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-sm)',
    },
    heading: {
        fontFamily: 'var(--font-heading)',
        fontSize: '1.2rem',
        color: 'var(--accent-cyan)',
        marginBottom: '0.5rem',
    },
    subheading: {
        fontFamily: 'var(--font-heading)',
        fontSize: '1rem',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem',
    },
    text: {
        color: 'var(--text-muted)',
        fontSize: '0.95rem',
        lineHeight: '1.6',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    link: {
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        fontSize: '0.95rem',
        transition: 'color var(--transition-fast)',
    },
    social: {
        display: 'flex',
        gap: 'var(--spacing-md)',
    },
    socialLink: {
        color: 'var(--accent-cyan)',
        textDecoration: 'none',
        fontSize: '0.95rem',
        padding: '0.5rem 1rem',
        border: '1px solid var(--accent-cyan)',
        borderRadius: 'var(--radius-sm)',
        transition: 'all var(--transition-fast)',
    },
    bottom: {
        borderTop: '1px solid var(--border-color)',
        paddingTop: 'var(--spacing-md)',
        textAlign: 'center',
    },
    copyright: {
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
    },
};

export default Footer;
