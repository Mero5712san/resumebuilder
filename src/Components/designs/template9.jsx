import './Style9.css';

const Template9 = ({ colour, fontstyle }) => {
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
        <div className="template9-wrapper" style={customcss}>
            <header className="template9-header">
                <div className="template9-name">
                    <h1>Firstname Lastname</h1>
                    <h3>Senior Product Designer</h3>
                </div>
                <div className="template9-contacts">
                    <p>📞 (123) 456-7890</p>
                    <p>✉️ firstname.lastname@example.com</p>
                    <p>🔗 linkedin.com/in/name</p>
                </div>
            </header>

            <section className="template9-section">
                <h2>Summary</h2>
                <p>Creative and detail-oriented designer with over 8 years of experience creating impactful visual identities and UX strategies...</p>
            </section>

            <section className="template9-section">
                <h2>Experience</h2>
                <div className="experience-entry">
                    <h4>Lead UX Designer – Creative Co.</h4>
                    <p><em>San Francisco, CA</em> | 2019 – Present</p>
                    <ul>
                        <li>Led redesign of e-commerce platform increasing sales by 35%.</li>
                        <li>Managed a team of 4 designers and collaborated with engineering.</li>
                    </ul>
                </div>
                <div className="experience-entry">
                    <h4>Product Designer – Studio X</h4>
                    <p><em>New York, NY</em> | 2016 – 2019</p>
                    <ul>
                        <li>Created prototypes for cross-platform interfaces.</li>
                        <li>Worked closely with stakeholders to align design goals.</li>
                    </ul>
                </div>
            </section>

            <section className="template9-section">
                <h2>Education</h2>
                <p><strong>School of Visual Arts</strong> — BFA Graphic Design</p>
                <p>2012 – 2016</p>
            </section>

            <section className="template9-section">
                <h2>Skills</h2>
                <ul>
                    <li>Figma, Adobe XD, Sketch</li>
                    <li>UI/UX Research & Wireframing</li>
                    <li>HTML/CSS/JS for prototyping</li>
                </ul>
            </section>
        </div>
    );
};

export default Template9;
