import Image from 'next/image';
import React from 'react';
import female from '@/constants/face3.avif'
import { educations, languages, skills } from '@/constants/create-cv';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './cv.css'

const Education = ({skills, educations, languages}: any) => {
  return (
    <div className='education'>
      <Image src={female} alt='no img' width={200} height={200} className='img'/>
      <div className='user-info'>
        <p><PhoneIcon/> &nbsp; +123-456-7890</p>
        <p><WhatsAppIcon/> &nbsp; +123-456-7890</p>
        <p><MailOutlineIcon/> &nbsp; fed1@gmail.com</p>
        <p><InstagramIcon/> &nbsp; instagram</p>
        <p><FacebookIcon/> &nbsp; facebook</p>
        <p><LinkedInIcon/> &nbsp; linkedin</p>
        <p><LocationOnIcon/> &nbsp; Phaltan, Satara, ABC 234</p>
      </div>
      <div className='education-info'>
        <h1>EDUCATION</h1>
        {
          educations && educations.map((education: any) => (
            <div className='education-data' key={education.id}>
              <h2>{education.levelOfEducation}</h2>
              <h3>{education.institution}, {education.cgpa}</h3>
              <p>{education.graduarionYear}</p>
            </div>
          ))
        }
      </div>
      <div >
        <h1>SKILLS</h1>
        <div className='skills'>
        {
          skills && skills.map((skill: any) => (
            <div className='skill' key={skill.id}>
            <p>{skill}</p>
            </div>
          ))
        }
        </div>
      </div>
      <div>
        <h1>LANGUAGE</h1>
        <div className='skills'>
        {
          languages && languages.map((language: any) => (
            <div className='skill' key={language.id}>
            <p>{language}</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default Education;
