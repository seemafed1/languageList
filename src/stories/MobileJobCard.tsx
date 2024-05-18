import BookmarkIcon from '@mui/icons-material/Bookmark';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import WorkIcon from '@mui/icons-material/Work';
import Image from 'next/image';
import fireImage from './assets/webImages/fireImage.png';
import jobCardImg from './assets/webImages/jobCardImg.png';
import './mobileJobCard.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useState } from 'react';

type Props = {
    city: string,
    salary: string,
    applicants: string,
    jobType: string,
    postedDate: Date,
    urgentHiring: boolean,
    brandName: string,
    department: string,
    backgroundColor?: string,
    saveCard: () => void,
    shareCard: () => void,
    apply: () => void,
    view: () => void
}

const JobCard = ({ city, salary, applicants, jobType, postedDate, urgentHiring, brandName, department, backgroundColor, saveCard, shareCard, apply, view }: Props) => {

    const [save, setSave] = useState(false);
    const handleSave = () => {
        setSave(!save)
        saveCard()
    }
    const formatDateDifference = (postedDate: Date) => {
        const isFutureDate = new Date(postedDate) > new Date();
        if(isFutureDate){
            return 'Wrong date'
        }
        const now = new Date();
        const differenceInSeconds = Math.floor((now.getTime() - new Date(postedDate).getTime()) / 1000);
        
        const minutes = Math.floor(differenceInSeconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (years > 0) {
            return years === 1 ? '1 year ago' : `${years} years ago`;
        } else if (months > 0) {
            return months === 1 ? '1 month ago' : `${months} months ago`;
        } else if (weeks > 0) {
            return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
        } else if (days > 0) {
            return days === 1 ? '1 day ago' : `${days} days ago`;
        } else if (hours > 0) {
            return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
        } else if (minutes > 0) {
            return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
        } else {
            return 'just now';
        }
    };

    
    
    return (
        <div className='job-card' style={{ backgroundColor: backgroundColor }}>
            <div className='heading'>
                <Image src={jobCardImg} alt='no img' />
                <div>
                    <div className='job-title'>
                        <h1>{department}</h1>
                        {
                            urgentHiring && <div className='fire'>
                                <Image src={fireImage} alt='no img' />
                                <p className='hiring'>Urgent Hiring</p>
                            </div>
                        }

                    </div>
                    <div className='job-applicants'>
                        <p>{brandName}</p>
                        <p className='duration'>{ formatDateDifference(postedDate)}</p>
                    </div>
                </div>
            </div>
            <div className='job-Type'>
                <div className='job-Type-info'>
                    <h3><LocationOnIcon /></h3>
                    <p className='job-city'>&nbsp;{city}</p>
                </div>
                <div className='job-Type-info'>
                    <h3><WorkIcon /></h3>
                    <p className='job-city'>&nbsp;{jobType}</p>
                </div>
            </div>
            <div className='job-info'>
                <div >
                    <div className='job-info-logo'>
                        <h3><CurrencyRupeeIcon /></h3>
                        <p>{salary}</p>
                    </div>
                    <div className='job-info-logo'>
                        <h3><PersonIcon /> </h3>
                        <p>{applicants} Applicants</p>
                    </div>
                </div>
                <div className='share-save'>
                    <button type='button' className={`${save ? 'save-true' : 'save-false'}`} onClick={handleSave}>{save ? <BookmarkIcon /> : <BookmarkBorderIcon />}</button>
                    <button type='button' className='share' onClick={shareCard}><ShareIcon /></button>
                </div>
            </div>
            <div className='btn'>
                <button type='button' className='btn-1' onClick={apply}>Apply</button>
                <button type='button' className='btn-2' onClick={view}>View</button>
            </div>
        </div>
    );
}

export default JobCard;
