import './Style6.css';

const Template6 = ({ colour, fontstyle }) => {
    const { theme, font, heading, infont } = colour;
    const { fontFamily, fontSize, fontWeight, fontStyle } = fontstyle;

    const customcss = {
        '--theme-color': theme,
        '--font-color': font,
        '--heading-color': heading,
        '--infont-color': infont,
        '--font-family': fontFamily,
        '--font-size': fontSize,
        '--font-weight': fontWeight,
        '--font-style': fontStyle
    };

    return (
        <div className="template6-wrapper" style={customcss}>
            <aside className="template6-sidebar">
                <div className="photo-block">
                    <img src="1.jpg" alt="Profile" />
                </div>
                <section className="side-section">
                    <h2>Contact</h2>
                    <p>📞 9087654312</p>
                    <p>✉️ abcd@gmail.com</p>
                    <p>📍 123 Anywhere St</p>
                    <p>🔗 linkedin.com/yourname</p>
                </section>
                <section className="side-section">
                    <h2>Education</h2>
                    <p><strong>Your Degree</strong><br />University Name<br />200X - 200X</p>
                </section>
                <section className="side-section">
                    <h2>Skills</h2>
                    <ul>
                        <li>UI/UX</li>
                        <li>Visual Design</li>
                        <li>Wireframes</li>
                    </ul>
                </section>
            </aside>

            <main className="template6-content">
                <header className="header-block">
                    <h1><span>Firstname</span> Lastname</h1>
                    <h3>Professional Title</h3>
                </header>

                <section className="section-block">
                    <h2>Summary Statement</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget...</p>
                </section>

                <section className="section-block">
                    <h2>Experience</h2>
                    <div className="experience-entry">
                        <h4>Job Title — Company</h4>
                        <p><em>Location</em> | 20XX - 20XX</p>
                        <ul>
                            <li>Responsibility or achievement 1</li>
                            <li>Responsibility or achievement 2</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Template6;
