import React from 'react';
import Experience from './Experience';
import Education from './Education';
import './cv.css'
import { experience } from '@/constants/create-cv';

const Cv = () => {
  return (
    <div>
      <div className='main'>
        <div className='bg-yellow-500 h-14'></div>
        <div className='cv '>
          <Education />
          <Experience />
        </div>
      </div>
      <div className='py-14 '>
        {
          experience.length > 4 &&
          <div className='main bg-gray-100 h-[100vh]'>
            <div className='bg-yellow-500 h-14'></div>
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

export default Cv;
