import React from 'react';
import '../../uiTwo/FirstTwo/Firsst.scss'
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import shere from '../../../../img/shere.png'
import tabBlock1 from '../../../../img/lo.png'
import tabBlock2 from '../../../../img/lp.png'
import tabBlock22 from '../../../../img/lk.png'
import {useTranslation} from "react-i18next";
const FirstTwo = () => {
    const {t, i18n} = useTranslation()

    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }
    return (
        <div className="description">
            <div className="description-desc">
                <div className="description-desc_group">
                    <div className="description-desc_group-bg">
                        <h1>{t("teachesFrom")}</h1>
                        <p>{t("Lasts10-1")}</p>
                        <p>{t("everyoneSpeaks")}</p>
                        <h1>{t("intensive")}</h1>
                        <p>{t("theSchool")}</p>
                        <p>{t("noVisa")}</p>
                        <h1>{t("visasAreIssued")}</h1>
                        <p>{t("youCan'tEnter")}</p>
                        <p>{t("theResponse")}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};




export default FirstTwo;