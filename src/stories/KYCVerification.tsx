import React from 'react';
import './KYCVerification.css'
import verificationLogo from './assets/webImages/kycVerification.png'
import Image from 'next/image';
import { DesktopNavbar } from './DesktopNavbar';
import PrimaryLogo from './assets/webImages/horecah wt 1.png'
import horecahWT from './assets/webImages/horecah wt 1.png'
import back from './assets/webImages/backIcons.png'
import Topbar from './Topbar';
import { action } from '@storybook/addon-actions';

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

const KYCVerification = () => {
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
                <Image src={verificationLogo} alt='no img' />
                <h4>Thank you for your interest. KYC Verification will be updated in 24 hours as per our company’s policy.</h4>
            </div>
        </div>
  );
}

export default KYCVerification;
