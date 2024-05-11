import React from 'react';
import horecaLogo from './assets/webImages/horecah wt 1.png'
import Image from 'next/image';
import './languageCardList.css'

const LanguageCardList = ({ languageData, backgroundColor }: any) => {
   
    return (
        <div className='list'>
            <div className='language-grid'>
                {
                    languageData && languageData?.map((language: any) => (
                        <div className='card-list' key={language.id} style={{backgroundColor: backgroundColor}}>
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
