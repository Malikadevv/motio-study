import React from 'react';
import '../../uiTwo/SecondTwo/SecondTwo.scss'
import {useTranslation} from "react-i18next";
import '../../../PageStudyAbord/Explore/Malaysiaa/Style/malaysia.scss'
const SecondTwo = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div className="cost">
            <h1>{t("$450Monthly")}</h1>
            <p>{t("monthlyFixed")}</p>
             <p>{t("service")}</p>
            <h1>{t("whatkind")}</h1>
            <p>{t("choosing")}</p>
            <p>{t("IfNecessary")}</p>
        </div>
    );
};


export default SecondTwo;