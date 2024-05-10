import { LanguageData } from "@/constants/language";
import LanguageCardList from "@/stories/LanguageCardList";

export default function Home() {

  return (
    <div>
      <LanguageCardList languageData={LanguageData}/>
    </div>
  );
}
