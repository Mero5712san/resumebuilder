import { useState } from 'react';

const UserInfo = () => {

  let [activemaincontact, setactivemaincontact] = useState(true)
  let [activesocial,setactivesocial] = useState(false)
  let [basic, setbasic] = useState(true)
  let [others , setothers] = useState(false)
  let [languages, setLanguages] = useState([''])
  let [achievements, setAchievements] = useState([{ achievement: '', atWhat: '', year: '' }])
  let [skills, setSkills] = useState([''])
  let [firstname, setfirstname] = useState("")
  let [lastname, setlastname] = useState("")
  let [profession, setprofession] = useState("")
  let [shortpitch, setsortpitch] = useState("")
  let [email,setemail] = useState("")
  let [mobile,setmobile] = useState("")
  let [country,setcountry] = useState("")
  let [city,setcity] = useState("")
  let [address,setaddress] = useState("")
  let [website,setwebsite] = useState("")
  let [linkedin, setlinkedin] = useState("")
  let [leetcode, setleetcode] = useState("")
  let [codechef, setcodechef] = useState("")
  let [github, setgithub] = useState("")
  let [hackerearth, sethackerearth] = useState("")
  let [hackerrank, sethackerrank] = useState("")

  let [projects, setProjects] = useState([{
      projectName: '',
      monthOfStart: '',
      yearOfStart: '',
      monthOfEnd: '',
      yearOfEnd: ''
    }]);
  let [educationEntries, setEducationEntries] = useState([{
      studyProgram: '',
      institution: '',
      year: '',
      percentage: ''
    }]);
  let [experienceEntries, setExperienceEntries] = useState([{
      experienceAt: '',
      role: '',
      fromDate: '',
      description: ''
    }]);


  let handleAddLanguage = () => {
    setLanguages([...languages, '']);
  };

  let handleLanguageChange = (index, event) => {
    let newLanguages = [...languages];
    newLanguages[index] = event.target.value;
    setLanguages(newLanguages);
  };

  let handleAddAchievement = () => {
    setAchievements([...achievements, { achievement: '', atWhat: '', year: '' }]);
  };

  let handleAchievementChange = (index, event) => {
    let { name, value } = event.target;
    let newAchievements = [...achievements];
    newAchievements[index][name] = value;
    setAchievements(newAchievements);
  };

  let handleAddProject = () => {
    setProjects([...projects, {
      projectName: '',
      monthOfStart: '',
      yearOfStart: '',
      monthOfEnd: '',
      yearOfEnd: ''
    }]);
  };

  let handleProjectChange = (index, event) => {
    let { id, value } = event.target;
    let newProjects = [...projects];
    newProjects[index][id] = value;
    setProjects(newProjects);
  };

  let handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  let handleSkillChange = (index, event) => {
    let newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  let handleAddEducation = () => {
    setEducationEntries([...educationEntries, {
      studyProgram: '',
      institution: '',
      year: '',
      percentage: ''
    }]);
  };

  let handleEducationChange = (index, event) => {
    let { name, value } = event.target;
    let newEntries = [...educationEntries];
    newEntries[index][name] = value;
    setEducationEntries(newEntries);
  };

  let handleAddExperience = () => {
    setExperienceEntries([...experienceEntries, {
      experienceAt: '',
      role: '',
      fromDate: '',
      description: ''
    }]);
  };

  let handleExperienceChange = (index, event) => {
    let { name, value } = event.target;
    let newEntries = [...experienceEntries];
    newEntries[index][name] = value;
    setExperienceEntries(newEntries);
  };

  return (
    <>
        <div className="user">
          <h1 className='head'>User info</h1>
          <h5 className='sechead'>Choose your wish</h5>
            {others && <h2 onClick={()=>{setbasic(!basic),setothers(!others)}}>Basic Information   
              {!basic?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
              </svg>: 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
              </svg>}
            </h2>}
            {basic && <div className="nameinfo">
              <h2>User Info</h2>
              <div className="getname">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='usericon'>
                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
                  </svg>
                  <input type="text" id="fname" placeholder='First Name' value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}/>
                </li>
                <li>
                  <input type="text" id="lname" placeholder='Last Name' value={lastname} onChange={(e)=>{setlastname(e.target.value)}}/>
                </li>
              </div>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 0 32 0 352-256 0 0-352 0-32zM64 96l32 0 0 384-32 0c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64zM448 480l-32 0 0-384 32 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64z"/>
                  </svg>
                  <input type="text" name="" id="professiontitle" placeholder='Professional Title' value={profession} onChange={(e)=>{setprofession(e.target.value)}}/>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                </svg>
                <input type="text" name="" id="shortpitch" placeholder='short pitch' value={shortpitch} onChange={(e)=>{setsortpitch(e.target.value)}}/>
              </li>
            </div>}

            {basic && <div className="contactinfo">
              <h2>Contact Info </h2>
              <ul className='slidebar'>
                <li className={activemaincontact?"active":"inactive"} onClick={()=>{setactivemaincontact(true),setactivesocial(false)}}>General</li>
                <li className={activesocial?"active":"inactive"} onClick={()=>{setactivemaincontact(false),setactivesocial(true)}}>Social</li>
              </ul>
              <div className={activemaincontact?"activemaincontact":"maincontact"}>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                </svg>
                  <input type="Email" id="mail" placeholder="abc@gmail.com" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/>
                  </svg>
                  <input type="number" name="" id="mobilenumber" placeholder='123-456-7890' value={mobile} onChange={(e)=>{setmobile(e.target.value)}}/>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9l2.3 0c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"/>
                  </svg>
                  <input type="text" name="" id="country" placeholder='Country' value={country} onChange={(e)=>{setcountry(e.target.value)}}/>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M480 48c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48l0 48-64 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72c0-13.3-10.7-24-24-24S64 10.7 64 24l0 72L48 96C21.5 96 0 117.5 0 144l0 96L0 464c0 26.5 21.5 48 48 48l256 0 32 0 96 0 160 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-112 0 0-144zm96 320l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 416l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM560 256c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 176l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM112 320l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zm304-48l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16z"/>
                  </svg>
                  <input type="text" name="" placeholder='City' id="city" value={city} onChange={(e)=>{setcity(e.target.value)}}/>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                  </svg>
                  <input type="text" name="" placeholder='Address' id="address" value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
                </li>
              </div>
              <div className={activesocial?"activesocial":"social"}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>
                  </svg>
                  <input type="text" name="" id="Website" placeholder='Website' value={website} onChange={(e)=>{setwebsite(e.target.value)}}/>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                  </svg>
                  <input type="text" name="" id="linkedin" placeholder='LinkedIn' value={linkedin} onChange={(e)=>{setlinkedin(e.target.value)}}/>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                  </svg>
                  <input type="text" name="" placeholder='GitHub' id="github" value={github} onChange={(e)=>{setgithub(e.target.value)}}/>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M64 32c17.7 0 32 14.3 32 32l0 352 192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32z"/>
                  </svg>
                  <input type="text" name="" placeholder='LeetCode' id="leetcode" value={leetcode} onChange={(e)=>{setleetcode(e.target.value)}}/>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z"/>
                  </svg>
                  <input type="text" name="" placeholder='CodeChef' id="codechef" value={codechef} onChange={(e)=>{setcodechef(e.target.value)}}/>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M320 256l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 192 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 256 0z"/>
                  </svg>
                  <input type="text" name="" placeholder='HackerEarth' id="hackerearth" value={hackerearth} onChange={(e)=>{sethackerearth(e.target.value)}}/>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M477.5 128C463 103.1 285.1 0 256.2 0S49.3 102.8 34.8 128s-14.5 230.8 0 256 192.4 128 221.3 128S463 409.1 477.5 384s14.5-231 0-256zM316.1 414.2c-4 0-40.9-35.8-38-38.7 .9-.9 6.3-1.5 17.6-1.8 0-26.2 .6-68.6 .9-86.3 0-2-.4-3.4-.4-5.9h-79.9c0 7.1-.5 36.2 1.4 72.9 .2 4.5-1.6 6-5.7 5.9-10.1 0-20.3-.1-30.4-.1-4.1 0-5.9-1.5-5.7-6.1 .9-33.4 3-84-.2-212.7v-3.2c-9.7-.4-16.4-1-17.3-1.8-2.9-2.9 34.5-38.7 38.5-38.7s41.2 35.8 38.3 38.7c-.9 .9-7.9 1.5-16.8 1.8v3.2c-2.4 25.8-2 79.6-2.6 105.4h80.3c0-4.6 .4-34.7-1.2-83.6-.1-3.4 1-5.2 4.2-5.2 11.1-.1 22.2-.1 33.2-.1 3.5 0 4.6 1.7 4.5 5.4C333 354.6 336 341.3 336 373.7c8.9 .4 16.8 1 17.7 1.8 2.9 2.9-33.6 38.7-37.6 38.7z"/>
                  </svg>
                  <input type="text" name="" placeholder='HackerRank' id="hackerrank" value={hackerrank} onChange={(e)=>{e.target.value}}/>
                </li>
              </div>
            </div>}
            <div className="secondarydata">
              { basic && <h2 onClick={() => {setothers(!others),setbasic(!basic)}}>Others  
                {!others?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                </svg>: 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
                </svg>}
              </h2>}
              {
              others && <div className="otherinfo">
                <h2>Experience</h2>
                  { others && <div className="experience">
                    {experienceEntries.map((entry, index) => (
                      <div key={index}>
                        <input type="text" id="experienceat" name="experienceAt" placeholder='Experience IN' value={entry.experienceAt} onChange={(event) => handleExperienceChange(index, event)} />
                        <input type="text" id="role" name="role" placeholder='Role' value={entry.role} onChange={(event) => handleExperienceChange(index, event)} />
                        <input type="text" id="fromdate" name="fromDate" placeholder='DD/MM/YYYY' value={entry.fromDate} onChange={(event) => handleExperienceChange(index, event)} />
                        <textarea id="description" name="description" placeholder='Comments on Experience' value={entry.description} onChange={(event) => handleExperienceChange(index, event)} />
                      </div>
                    ))}
                  <button className='addbutton' onClick={handleAddExperience}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                    </svg>
                  </button>
                </div>}
                <h2>Education</h2>
                {others && <div className="educationinfo">
                  {educationEntries.map((entry, index) => (
                    <div key={index}>
                      <input type="text" id="studyprogram" name="studyProgram" placeholder='Study Program' value={entry.studyProgram} onChange={(event) => handleEducationChange(index, event)} />
                      <input type="text" id="institution" name="institution" placeholder='Institution/Place of Education' value={entry.institution} onChange={(event) => handleEducationChange(index, event)}/>
                      <input type="text" id="year" name="year" placeholder='Year of Passing' value={entry.year} onChange={(event) => handleEducationChange(index, event)} />
                      <input type="text" id="percentage" name="percentage" placeholder='CGPA/Percentage' value={entry.percentage} onChange={(event) => handleEducationChange(index, event)} />
                    </div>
                  ))}
                  <button className='addbutton' onClick={handleAddEducation}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                    </svg>
                  </button>
                </div>}
                <h2>Skills</h2>
                { others && <div className="skills">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <input type="text" id='Skills' placeholder='skills' value={skill} onChange={(event) => handleSkillChange(index, event)}/>
                    </div>
                  ))}
                  <button className='addbutton' onClick={handleAddSkill}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                    </svg>
                  </button>
                </div>}
                <h2>Projects</h2>
                {others && <div className="personalprojetcs">
                  {projects.map((project, index) => (
                    <div key={index}>
                      <input type="text" id="projectName" placeholder="Project Name" value={project.projectName} onChange={(event) => handleProjectChange(index, event)} />
                      <div className='singlelinedate'>
                        <input type="text" id="monthOfStart" placeholder="MM" value={project.monthOfStart} onChange={(event) => handleProjectChange(index, event)} />
                        <span>
                          /
                        </span>
                        <input type="text" id="yearOfStart" placeholder="YYYY" value={project.yearOfStart} onChange={(event) => handleProjectChange(index, event)} />
                        <span>
                          --
                        </span>
                        <input type="text" id="monthOfEnd" placeholder="MM" value={project.monthOfEnd} onChange={(event) => handleProjectChange(index, event)}/>
                        <span>
                          /
                        </span>
                        <input type="text" id="yearOfEnd" placeholder="YYYY" value={project.yearOfEnd} onChange={(event) => handleProjectChange(index, event)} />
                      </div>
                    </div>
                  ))}
                  <button className='addbutton' onClick={handleAddProject}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                    </svg>
                  </button>
                </div>}
                <h2>Achivements</h2>
                {others && <div className="achivements">
                  <div>
                    {achievements.map((achievement, index) => (
                      <div key={index}>
                        <input type="text" name="achievement" placeholder="Achievements" value={achievement.achievement} onChange={(event) => handleAchievementChange(index, event)} />
                        <input type="text" name="atWhat" placeholder="@" value={achievement.atWhat} onChange={(event) => handleAchievementChange(index, event)} />
                        <input type="text" name="year" placeholder="MM/YYYY" value={achievement.year} onChange={(event) => handleAchievementChange(index, event)} />
                      </div>
                    ))}
                  </div>
                  <button className='addbutton' onClick={handleAddAchievement}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                    </svg>
                  </button>
                </div>}
                <h2>Languages</h2>
                {others && 
                  <div className="languages">
                  <div>
                    {languages.map((language, index) => (
                      <div key={index}>
                        <input type="text" placeholder="languages" value={language} onChange={(event) => handleLanguageChange(index, event)} />
                      </div>
                      ))}
                  </div>
                  <button className='addbutton' onClick={handleAddLanguage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                    </svg>
                  </button>
                </div>}
              </div>
              }
            </div>
        </div>
    </>
  );
}

export default UserInfo;
