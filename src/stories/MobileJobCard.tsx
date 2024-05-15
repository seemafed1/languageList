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

type Props = {
    city: string,
    salary: string,
    applicants: string,
    jobType: string,
    postedDate: string,
    urgentHiring: boolean,
    save: boolean
    brandName: string,
    department: string,
    backgroundColor?: string,
    saveCard: () => void,
    shareCard: () => void,
    apply: () => void,
    view: () => void
}

const JobCard = ({ city, salary, applicants, jobType, postedDate, urgentHiring, brandName, department, save, backgroundColor, saveCard, shareCard, apply, view }: Props) => {
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
                        <p className='duration'>{postedDate}</p>
                    </div>
                </div>
            </div>
            <div className='job-Type'>
                <div className='job-Type-info'>
                    {/* <Image src={locationImage} alt='no img' width={25} height={25} /> */}
                    <h3><LocationOnIcon/></h3>
                    <p className='job-city'>&nbsp;{city}</p>
                </div>
                <div className='job-Type-info'>
                <h3><WorkIcon/></h3>
                    <p className='job-city'>&nbsp;{jobType}</p>
                </div>
            </div>
            <div className='job-info'>
                <div >
                    <div className='job-info-logo'>
                        <h3><CurrencyRupeeIcon/></h3>
                        <p>{salary} &nbsp;</p>
                    </div>
                    <div className='job-info-logo'>
                    <h3><PersonIcon/> &nbsp;</h3>
                        <p>{applicants} Applicants</p>
                    </div>
                </div>
                <div className='share-save'>
                    <button type='button' className={`${save ? 'save' : '' }`} onClick={saveCard}><BookmarkIcon/></button>
                    <button type='button' onClick={shareCard}><ShareIcon/></button>
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
