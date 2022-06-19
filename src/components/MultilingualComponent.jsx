import { useContext } from "react";
import { LanguageContext } from "../../multilingualContext/context.js";
import {hu} from '../../public/assets/content_en.json';
import {en} from '../../public/assets/content_hu.json';
/**
 * Utility function to generate text dependant on the language
 * @param {React Component props} props destructured just for the contentID
 * @returns
 */
export default function MultiLingualContent({ contentID }) {
  const { language } = useContext(LanguageContext);

  return language === "en" ? en(contentID) : hu(contentID);
}