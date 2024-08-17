import { useEffect } from 'react';
import './Style1.css'
const Draft = ({colour , fontstyle}) => {
    let {theme,font,heading,infont} = colour
    let {fontFamily,fontSize,fontWeight,fontStyle} = fontstyle
    let customcss = { 
        '--theme-color':theme,
        '--font-color':font ,
        '--heading-color':heading,
        '--infont-color':infont,
        '--font-family':fontFamily,
        '--font-size' : fontSize,
        '--font-weight' :fontWeight,
        '--font-style': fontStyle
        }
    // console.log(fontFamily)
  return (
    <>
        <div className="wholetemplate" style={customcss}>
        <div className="maincontainer-draft">
            <div className="sidebar-draft">
                <div className="profile-pic-draft">
                    <img src='1.jpg' alt="profile-pic" />
                </div>
                <div className="contact-draft">
                    <h2>Contact</h2><hr />
                    <p><span>Phone</span><br />9087654312</p>
                    <p><span>Email</span><br />abcd@gmail.com</p>
                    <p><span>Address</span><br />123 Anywhere srt. Any City</p>
                </div>
                <div className="education-draft">
                    <h2>Education</h2><hr />
                    <p>2008 <br /><span>your Degree </span><br />University/college</p>
                    <p>2008 <br /><span>your Degree </span><br />University/college</p>
                    <p>2008 <br /><span>your Degree </span><br />University/college</p>
                </div>
                <div className="expertise-draft">
                    <h2>Expertise</h2><hr />
                    <li>UI/UX</li>
                    <li>Visual Design</li>
                    <li>wireframes</li>
                    <li>Storyboards</li>
                    <li>UserFlows</li>
                    <li>Process Flows</li>
                </div>
                <div className="languages-draft">
                    <h2>Languages</h2><hr />
                    <li>English</li>
                    <li>Spanish</li>
                </div>
            </div>
            <div className="draft-main-page">
                <div className="draft-topbar">
                    <h1><span>Firstname</span> lastname</h1>
                    <h3>marketing manager</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est sapien, semper ac lacus non, blandit efficitur mi. Suspendisse justo purus, molestie a sapien in, eleifend pretium lorem. Ut tincidunt dolor erat, non tincidunt tortor bibendum ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris pulvinar sit amet risus euismod bibendum</p>
                </div>
                <div className="draft-experience">
                    <div className="draft-exphead"><h1>Experinece</h1><hr /></div>
                    <div className="draft-innercontent">
                        <div>
                            <div>
                                <h4>2019-2022</h4>
                                <h6>Comapny name | 123 AnyWhere St ., Any City</h6>
                                <h4>Job position here</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est sapien, semper ac lacus non, blandit efficitur mi. Suspendisse justo purus, molestie a sapien in, eleifend pretium lorem. Ut tincidunt dolor erat, non tincidunt tortor bibendum ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris pulvinar sit amet risus euismod bibendumLorem ipsum dolor sit amet, consectetur adipiscing elit. In est sapien, semper ac lacus non, blandit efficitur mi. Suspendisse justo purus, molestie a sapien in, eleifend pretium lorem. Ut tincidunt dolor erat, non tincidunt tortor bibendum ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris pulvinar sit amet risus euismod bibendum</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="draft-profiledata">
                    <h1>Profile Data</h1><hr />
                    <div className="draft-profiles">
                        <div className="draft-leetcode">
                            <h3>LeetCode</h3>
                            <li>streak : 50%</li>
                            <li>participated : 50%</li>
                            <li>total submission : 50%</li>
                            <li>best rank : 50%</li>
                            <li>achivements : 50%</li>
                        </div>
                        <div className="draft-leetcode">
                            <h3>CodeChef</h3>
                            <li>streak : 50%</li>
                            <li>participated : 50%</li>
                            <li>total submission : 50%</li>
                            <li>best rank : 50%</li>
                            <li>achivements : 50%</li>
                        </div>
                        <div className="draft-leetcode">
                            <h3>GitHub</h3>
                            <li>streak : 50%</li>
                            <li>participated : 50%</li>
                            <li>total submission : 50%</li>
                            <li>best rank : 50%</li>
                            <li>achivements : 50%</li>
                        </div>
                       
                        
                    </div>
                </div>
                <h1 className='draft-refhead'>Reference</h1><hr />
                <div className="draft-reference">
                    <div className='draft-element'>
                        <h4>Name Surname</h4>
                        <h6>Job position, Comapny name</h6>
                        <p><span>Phone: </span>0965872143</p>
                        <p><span>Email: </span>abcdef@gmail.com</p>
                    </div>
                    <div className='draft-element'>
                        <h4>Name Surname</h4>
                        <h6>Job Position, Company Name</h6>
                        <p><span>Phone: </span>9065874321</p>
                        <p><span>Email: </span>abcdef@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default Draft;
