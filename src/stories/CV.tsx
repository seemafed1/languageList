import React from 'react';
import './cv.css'
import Education from './Education';
import Experience from './Experience';
import backgroundImg  from './assets/webImages/backGround.png'

type EducationProps = {
  levelOfEducation: string,
  institution: string,
  cgpa: string,
  graduartionYear: string
}
type AwardProps = {
  competition: string,
  brandName: string,
  department: string,
  position: string
}
type ReferenceProps = {
  name: string,
  companyName: string,
  designation: string,
  phone: string,
  email: string
}
type ExperienceProps = {
  duration: string,
  companyName: string,
  address: string,
  department: string,
  position: string
}
type Props = {
  skills: string[],
  educations: EducationProps[],
  languages: string[],
  awards: AwardProps[],
  references: ReferenceProps[],
  experience: ExperienceProps[],
  backgroundColor?: string,
  name: string,
  designation: string,
  image: string,
  about: string,
  portfolio: string,
  newsletter: string,
  phone: string,
  whatsApp: string,
  email: string,
  instagram: string,
  facebook: string,
  linkedin: string,
  address: string
}

const CV = ({ skills, educations, languages, awards, references, experience, name, designation, image, about, portfolio, newsletter, phone, whatsApp, email, instagram, facebook, linkedin, address, backgroundColor }: Props) => {
  return (
    <div>
      <div className='main'>
        <div className='navbar' style={{ backgroundColor: backgroundColor }}></div>
        <div className='cv '>
          <Education 
          educations={educations} 
          skills={skills} 
          languages={languages}
          image={image}
          phone={phone}
          whatsApp={whatsApp}
          email={email}
          instagram={instagram}
          facebook={facebook}
          linkedin={linkedin}
          address={address}
          />
          <Experience 
          awards={awards} 
          references={references} 
          experience={experience} 
          name={name}
          designation={designation}
          backgroundColor={backgroundColor} 
          about={about}
          portfolio={portfolio}
          newsletter={newsletter}
          />
        </div>
      </div>
      <div className='next-page'>
        {
          experience.length > 3 &&
          <div className='next-page-main '>
            <div className='navbar' style={{ backgroundColor: backgroundColor }}></div>
            <div className='sub-exp'>
              {
                experience && experience.slice(3).map((experience: any) => (
                  <div key={experience.id} className='exp-detail'>
                    <p>{experience.duration}</p>
                    <p>{experience.companyName}, {experience.address}</p>
                    <p className='expedience-department'>{experience.department}, {experience.position}</p>
                  </div>
                ))
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default CV;
