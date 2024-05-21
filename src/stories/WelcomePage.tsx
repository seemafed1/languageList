import React from 'react';
import { DesktopNavbar } from './DesktopNavbar';
import horecahWT from './assets/webImages/horecah wt 1.png'
import Image from 'next/image';
import h_animation from './assets/webImages/H_animation.gif'
import horecLogo from './assets/webImages/horecah wt 1.png'
import './WelcomePage.css'

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

const WelcomePage = () => {
  return (
    <div className='kyc'>
            <div className='desktopNav'>
                <DesktopNavbar {...desktopNavbarProps} />
            </div>
            <div className='logo-wel'>
               <Image src={horecLogo} alt='no img' />
            </div>
            <div className='kyc-info-wel'>
                <Image src={h_animation} alt='no img' />
                <h2>Welcome To&nbsp;
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

export default WelcomePage;
