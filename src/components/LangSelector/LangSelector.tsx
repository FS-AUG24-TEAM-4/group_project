import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import GB_FLAG from '../../assets/images/icons/GB_flag.svg';
import UA_FLAG from '../../assets/images/icons/UA_flag.svg';

export const LangSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem('language') || 'en',
  );

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setSelectedLang(lng);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language');

    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setSelectedLang(savedLang);
    }
  }, [i18n]);

  return (
    <button
      className={styles.flagButton}
      onClick={() => handleChange(selectedLang === 'en' ? 'ua' : 'en')}
    >
      {selectedLang === 'en' ? (
        <img src={GB_FLAG} alt="English" className={styles.flag} />
      ) : (
        <img src={UA_FLAG} alt="Ukrainian" className={styles.flag} />
      )}
    </button>
  );
};
