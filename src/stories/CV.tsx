import React from 'react';
import './cv.css'
import Education from './Education';
import Experience from './Experience';

type EducationProps = {
    levelOfEducation: string,
    institution: string,
    cgpa: string,
    graduarionYear: string
}
type AwardProps = {
    competion: string,
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
    experience: ExperienceProps[]
    backgroundColor?: string,
}

const CV = ({skills, educations, languages, awards, references, experience, backgroundColor}: Props) => {
    return (
        <div>
      <div className='main'>
        <div className='navbar' style={{backgroundColor: backgroundColor}}></div>
        <div className='cv '>
          <Education educations={educations} skills={skills} languages={languages}/>
          <Experience  awards={awards} references={references} experience={experience} backgroundColor={backgroundColor}/>
        </div>
      </div>
      <div className='next-page'>
        {
          experience.length > 4 &&
          <div className='next-page-main '>
            <div className='navbar' style={{backgroundColor: backgroundColor}}></div>
            <div className='sub-exp'>
              {
                experience && experience.slice(4).map((experience: any) => (
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
