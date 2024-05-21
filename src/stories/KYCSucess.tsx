import React from 'react';
import back from './assets/webImages/backIcons.png'
import PrimaryLogo from './assets/webImages/horecah wt 1.png'
import horecahWT from './assets/webImages/horecah wt 1.png'
import { action } from '@storybook/addon-actions';
import { DesktopNavbar } from './DesktopNavbar';
import Topbar from './Topbar';
import Image from 'next/image';
import successLogo from './assets/webImages/kycSucess.png'
import './KYCSucess.css'



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
const KYCSucess = () => {
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
                <Image src={successLogo} alt='no img' />
                <h3>Your KYC has been accepted</h3>
                <h2>Welcome To <br />
                    <span className='h'>H</span>
                    <span className='o'>o</span>
                    <span className='o'>r</span>
                    <span className='e'>e</span>
                    <span className='c'>c</span>
                    <span className='o  '>a</span>
                    <span className='h'>h</span>
                    &nbsp;Family</h2>
            </div>
        </div>
    );
}

export default KYCSucess;
