import { awards, experience, references } from '@/constants/create-cv';
import React from 'react';

const Experience = () => {
  return (
    <div className='experience'>
      <h1 className='name'>Poonam Singh</h1>
      <h2>Director</h2>
      <hr />
      <div className='links'>
        <p><span>Portfolio Link</span> - www.something.com</p>
        <p><span>Newsletter Link</span> - www.something.com</p>
      </div>
      <div className='about'>
        <h1>ABOUT ME</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet possimus minima nesciunt quod facilis adipisci eum ipsa officiis commodi sunt autem odio repudiandae atque tempore illo nisi, dolore incidunt.</p>
      </div>
      <div className='awards-info'>
        <h1>AWARDS & RECOGNITIONS</h1>
        <div className='awards'>
          {
            awards && awards.map((award: any) => (
              <div key={award.id} className='award'>
                <p>{award.competion}</p>
                <p>{award.brandName}</p>
                <p>{award.department}, {award.position} </p>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <h1>REFERENCES</h1>
        <div className='reference'>
        {
          references && references.map((reference: any) => (
            <div key={reference.id}>
              <div className='ref'>
              <h2>{reference.name}</h2>
              <p>{reference.companyName},{reference.designation}</p>
              </div>
              <div className='reference-info'>
                <p><span> Phone: </span>{reference.phone}</p>
                <p> <span> Email: </span>{reference.email}</p>
              </div>
            </div>
          ))
        }
        </div>
      </div>
      <div className='expedience-info'>
        <h1>WORK EXPERIENCE</h1>
        <div className='expedience-detail'>
          {
            experience && experience.slice(0,4).map((experience: any) => (
              <div key={experience.id} className='exp-detail'>
                <p>{experience.duration}</p>
                <p>{experience.companyName}, {experience.address}</p>
                <p className='expedience-department'>{experience.department}, {experience.position}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Experience;
