import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import customStyleSelect from './StyleSelectLanguage';

const options = [
  { value: 'uk', label: 'UA' },
  { value: 'en', label: 'EN' },
  { value: 'pl', label: 'PL' },
];

export const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(
    options.find(option => option.value === i18n.language) || options[0]
  );

  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLanguageOption = options.find(
        option => option.value === i18n.language
      );
      setSelectedOption(currentLanguageOption);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const filteredOptions = options.filter(
    option => option.value !== selectedOption.value
  );

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    i18n.changeLanguage(selectedOption.value);
  };
  return (
    <Select
      isSearchable={false}
      styles={customStyleSelect}
      value={selectedOption}
      onChange={handleChange}
      options={filteredOptions}
    />
  );
};
