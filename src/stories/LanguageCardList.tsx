import React from 'react';
import './languageCardList.css'
import LanguageCard from './LanguageCard';


type LanguageCardProps = {
    id: number,
    banner: string,
    title: string,
  }

type Props = {
    languageData : LanguageCardProps[],
    hoverColor?: string,
    backgroundColor?: string
}

const LanguageCardList = ({ languageData, hoverColor, backgroundColor }: Props) => {
   
    return (
        <div className='list'>
            <div className='language-grid'>
                {
                    languageData && languageData?.map((language: any) => (
                        // <div className='card-list' key={language.id} style={{backgroundColor: backgroundColor}}>
                            <LanguageCard  banner={language.banner} title={language.title} backgroundColor={backgroundColor} hoverColor={hoverColor}/>
                        // </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LanguageCardList;
