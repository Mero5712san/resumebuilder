import './Style7.css';

const Template7 = ({ colour, fontstyle }) => {
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
        <div className="template7-wrapper" style={customcss}>
            <header className="template7-header">
                <h1>Firstname LASTNAME</h1>
                <h3>Senior Sales Representative</h3>
                <p>email@example.com | linkedin.com/in/name | New York, NY, USA | (555) 555-1234</p>
            </header>

            <section className="template7-summary">
                <p>Performance-driven professional with a wealth of experience in sales data analysis, reporting, presentation, and leadership across global teams...</p>
            </section>

            <section className="template7-section">
                <h2>Work Experience</h2>

                <div className="job-entry">
                    <h4>Senior Sales Representative</h4>
                    <p><em>ACME International LLC | New York</em></p>
                    <p>Jun 2021 – Present</p>
                    <ul>
                        <li>Launched and deployed CRM system for global team.</li>
                        <li>Led training program for vendors and staff.</li>
                    </ul>
                </div>

                <div className="job-entry">
                    <h4>Junior Sales Representative</h4>
                    <p><em>ACME International LLC | New York</em></p>
                    <p>Apr 2018 – Jun 2021</p>
                    <ul>
                        <li>Prepared performance reports and developed presentations.</li>
                        <li>Analyzed CRM metrics and coordinated monthly sales meetings.</li>
                    </ul>
                </div>

                <div className="job-entry">
                    <h4>CRM Administrator</h4>
                    <p><em>ACME International LLC | New York</em></p>
                    <p>Jan 2014 – Dec 2017</p>
                    <ul>
                        <li>Managed onboarding and logistics for 5 executives.</li>
                        <li>Streamlined communication and expense reporting process.</li>
                    </ul>
                </div>
            </section>

            <section className="template7-section">
                <h2>Education</h2>
                <p><strong>Southeastern State University</strong> — <em>Bachelor of Science, Marketing</em></p>
                <p>Graduated: Dec 2014</p>
            </section>
        </div>
    );
};

export default Template7;
