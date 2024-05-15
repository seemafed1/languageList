import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import './cv.css';

const Education = ({skills, educations, image, phone, whatsApp, email, instagram, facebook, linkedin, address, languages}: any) => {
  return (
    <div className='education'>
      <Image src={image} alt='no img' width={200} height={200} className='img'/>
      <div className='user-info'>
        <p><PhoneIcon/> &nbsp; {phone}</p>
        <p><WhatsAppIcon/> &nbsp; {whatsApp}</p>
        <p><MailOutlineIcon/> &nbsp; {email}</p>
        <p><InstagramIcon/> &nbsp; {instagram}</p>
        <p><FacebookIcon/> &nbsp; {facebook}</p>
        <p><LinkedInIcon/> &nbsp; {linkedin}</p>
        <p><LocationOnIcon/> &nbsp; {address}</p>
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
