import React from 'react';
import Topbar from './Topbar';
import back from './assets/webImages/backIcons.png'
import PrimaryLogo from './assets/webImages/horecah wt 1.png'
import { action } from '@storybook/addon-actions';
import Image from 'next/image';
import rejectLogo from './assets/webImages/rejectLogo.png'
import horecahWT from './assets/webImages/horecah wt 1.png'
import './KYCReject.css'
import { DesktopNavbar } from './DesktopNavbar';

type Props = {
    contact: () => void
}

const desktopNavbarProps = {
    logo: horecahWT,
    rightNavItems: [
        {
            id: 1,
            type: "link",
            title: "Hire",
            path: '/hire'
        },
        {
            id: 2,
            type: "link",
            title: "Become Supplier",
            path: '/supplier'
        },
        {
            id: 3,
            type: "link",
            title: "Job / Internship",
            path: '/job'
        }
    ],
    leftNavItems: [
        {
            id: 1,
            type: "dropdown",
            title: "Jobs",
            path: 'jobs',
            links: [
                {
                    id: 1,
                    type: "link",
                    title: "Search Jobs",
                    path: "/search-jobs",
                },
                {
                    id: 2,
                    type: "link",
                    title: "Manage Jobs",
                    path: "/manage-jobs",
                }
            ]
        },
        {
            id: 2,
            type: "link",
            title: "Learning",
            path: '/learning'
        }
    ],
}
const topBar = {
    label: "Label",
    backgroundColor: "#113B73",
    color: "white",
    button: back,
    logo: PrimaryLogo,
    progress: '30%',
    onBack: action('Back button clicked')
}

const KYCReject = ({ contact }: Props) => {
    return (
        <div className='kyc'>
            <div className='desktopNav'>
            <DesktopNavbar {...desktopNavbarProps} />
            </div>
            <div className='topBar'>
                <Topbar {...topBar} />
            </div>
                <h1>Verification</h1>
            <div className='kyc-info'>
                <Image src={rejectLogo} alt='no img'/>
                <h3>Your KYC has been <br/> rejected</h3>
                <button type='button' onClick={contact}>Contact Us</button>
            </div>
        </div>
    );
}

export default KYCReject;
