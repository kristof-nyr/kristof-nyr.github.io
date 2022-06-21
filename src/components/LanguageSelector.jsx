import React, { useContext } from 'react';
import { languageOptions } from '../lang';
import { LanguageContext } from './LanguageContext';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = e => userLanguageChange(e.target.value);

//TODO: Use MaterialUI
//   <Select
//   id="language-select"
//   className='lang-select'
//   labelId='lang-label'
//   label="Language"
//   value={userLanguage}
//   onChange={handleLanguageChange}
// >
//   {Object.entries(languageOptions).map(([id, name]) => {
//     return <MenuItem className='lang-option' value={name} key={id}>{name}</MenuItem>
//   })}
//   ))} */}
// </Select>
  return (
    <select
      className='lang-select'
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  );
};