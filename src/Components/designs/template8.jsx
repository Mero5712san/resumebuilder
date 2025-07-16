import './Style8.css';

const Template8 = ({ colour, fontstyle }) => {
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
        <div className="template8-wrapper" style={customcss}>
            <header className="template8-header">
                <h1>IT Fresher</h1>
                <p>Ambitious IT Graduate with Strong Programming Skills and a Passion for Technology</p>
                <p className="template8-contact">
                    1234567890 | example@email.com | LinkedIn | GitHub
                </p>
            </header>

            <section className="template8-section">
                <h2>OBJECTIVE</h2>
                <p>Aspiring IT professional with a strong foundation in computer science and hands-on experience in software development through academic projects...</p>
            </section>

            <section className="template8-section">
                <h2>EDUCATION</h2>
                <p><strong>ABC Institute of Technology, New Delhi</strong> — BTech - CSE</p>
                <p>June 2019 – June 2023 | CGPA: 8.5</p>
            </section>

            <section className="template8-section">
                <h2>SKILLS</h2>
                <ul>
                    <li>Languages: Python, Java, C++</li>
                    <li>Web Dev: HTML, CSS, JavaScript, React</li>
                    <li>Databases: MySQL, MongoDB</li>
                    <li>Tools: Git, Docker, Jenkins</li>
                    <li>Others: DS, Algorithms, OOP</li>
                </ul>
            </section>

            <section className="template8-section">
                <h2>CERTIFICATIONS</h2>
                <ul>
                    <li>Java Programming - Coursera</li>
                    <li>Web Development - Udemy</li>
                </ul>
            </section>

            <section className="template8-section">
                <h2>INTERNSHIPS</h2>
                <p><strong>Software Development Intern</strong> — XYZ Tech Solutions</p>
                <p>May 2022 – Sept 2022, New Delhi</p>
                <ul>
                    <li>Developed and tested client projects using Python & Django.</li>
                    <li>Collaborated in a team of 5 for deployment efficiency.</li>
                </ul>
            </section>

            <section className="template8-section">
                <h2>ACADEMIC PROJECTS</h2>
                <ul>
                    <li><strong>Inventory Management System:</strong> Java + MySQL for small businesses.</li>
                    <li><strong>Personal Blog Website:</strong> React + Node.js with SEO & CMS.</li>
                </ul>
            </section>

            <section className="template8-section">
                <h2>EXTRACURRICULAR ACTIVITIES</h2>
                <ul>
                    <li>Member of Computer Science Club</li>
                    <li>Volunteered in 'Code for Good'</li>
                    <li>Hackathon & coding competitions</li>
                </ul>
            </section>
        </div>
    );
};

export default Template8;
