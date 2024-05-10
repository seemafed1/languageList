import React from 'react';
import horecaLogo from './assets/webImages/horecah wt 1.png'
import Image from 'next/image';
import './languageCardList.css'

const LanguageCardList = ({ languageData }: any) => {
   
    return (
        <div className='list'>
            <div className='list-image' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src={horecaLogo} alt='no image' />
                <h1 >Choose Language</h1>
            </div>
            <div className='language-grid'>
                {
                    languageData && languageData?.map((language: any) => (
                        <div className='card-list' key={language.id}>
                            <h1>{language.banner}</h1>
                            <p>{language.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LanguageCardList;
