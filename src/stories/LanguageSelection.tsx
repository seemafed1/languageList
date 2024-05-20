import React from 'react';
import LanguageCard from './LanguageCard'
import horecaLogo from './assets/webImages/horecah wt 1.png'
import Image from 'next/image';;
import './languageSelection.css'
import { DesktopNavbar } from './DesktopNavbar';
import horecahWT from './assets/webImages/horecah wt 1.png'
import delhi from './assets/cities/delhi.png'
import mumbai from './assets/cities/mumbai.png'
import banglore from './assets/cities/banglore.png'
import kolkata from './assets/cities/kolkata.png'
import hydrabad from './assets/cities/Hydrabad.png'

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

type LanguageCardProps = {
    id: number,
    banner: string,
    title: string,
}

type Props = {
    languageData: LanguageCardProps[],
    hoverColor?: string,
    backgroundColor?: string
}

const LanguageSelection = ({ languageData, hoverColor, backgroundColor }: Props) => {


    return (
        <div className='main-page'>
            <div className='navbar'><DesktopNavbar {...desktopNavbarProps} /></div>
            <div className='language-list'>
                <div className='list-image' >
                    <Image src={horecaLogo} alt='no image' />
                </div>
                <h1>Choose Language</h1>
                <div className='languages-grid'>
                    {
                        languageData && languageData?.map((language: any) => (
                            <LanguageCard banner={language.banner} title={language.title} backgroundColor={backgroundColor} hoverColor={hoverColor} />
                        ))
                    }
                </div>
                <div className='cities'>
                    <p>Cities we are in</p>
                    <Image src={delhi} alt='no img'/>
                    <Image src={mumbai} alt='no img'/>
                    <Image src={banglore} alt='no img'/>
                    <Image src={kolkata} alt='no img'/>
                    <Image src={hydrabad} alt='no img'/>
                </div>
            </div>
        </div>
    );
}

export default LanguageSelection;
