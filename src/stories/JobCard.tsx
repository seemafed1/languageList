import Image from 'next/image';
import React from 'react';
import './jobCard.css'
import jobCardImg from './assets/webImages/jobCardImg.png'
import fireImage from './assets/webImages/fireImage.png'
import locationImage from './assets/webImages/locationImage.png'
import uim_bag from './assets/webImages/uim_bag.png'
import Rs_Img from './assets/webImages/Rs.png'
import userLogo from './assets/webImages/userLogo.png'
import shareLogo from './assets/webImages/shareLogo.png'
import saveLogo from './assets/webImages/saveLogo.png'

const JobCard = ({ city, salary, applicants, jobType, postedDate, urgentHiring, backgroundColor}: any) => {
    return (
        <div className='job-card' style={{backgroundColor:backgroundColor}}>
            <div className='heading'>
                <Image src={jobCardImg} alt='no img' />
                <div>
                    <div className='job-title'>
                        <h1>Executive Chef</h1>
                        {
                            urgentHiring  &&  <div className='fire'>
                            <Image src={fireImage} alt='no img' />
                            <p className='hiring'>Urgent Hiring</p>
                        </div>
                        }
                        
                    </div>
                    <div className='job-applicants'>
                        <p>Indian Bier House</p>
                        <p className='duration'>{postedDate}</p>
                    </div>
                </div>
            </div>
            <div className='job-Type'>
                <div className='job-Type-info'>
                    <Image src={locationImage} alt='no img' width={25} height={25} />
                    <p className='job-city'>&nbsp;{city}</p>
                </div>
                <div className='job-Type-info'>
                    <Image src={uim_bag} alt='no img' width={25} height={25} />
                    <p className='job-city'>&nbsp;{jobType}</p>
                </div>
            </div>
            <div className='job-info'>
                <div >
                    <div className='job-info-logo'>
                        <Image src={Rs_Img} alt='no img' width={15} height={15} />
                        <p>{salary}</p>
                    </div>
                    <div className='job-info-logo'>
                        <Image src={userLogo} alt='no img' width={15} height={15} />
                        <p>{applicants} Applicants</p>
                    </div>
                </div>
                <div>
                    <Image src={saveLogo} alt='no img' width={20} height={20} style={{ paddingRight: '10px' }} />
                    <Image src={shareLogo} alt='no img' width={20} height={20} />
                </div>
            </div>
            <div className='btn'>
                <button type='button' className='btn-1' onClick={()=>console.log('Job Card is created')}>Apply</button>
                <button type='button' className='btn-2'>View</button>
            </div>
        </div>
    );
}

export default JobCard;
