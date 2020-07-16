import { translations, TranslationFn } from '@project-better/common';

const DEFAULT_LANGUAGE = 'en';

export const t: TranslationFn = (path, params, language) => {
  const _language = language ? language : DEFAULT_LANGUAGE;
  const langTranslations = translations[_language];

  let translation: string = path.split('.').reduce((prevVal: any, currentVal: string) => {
    return (prevVal && prevVal[currentVal]) || null;
  }, langTranslations);

  if (translation && params) {
    for (const key in params) {
      translation = translation.replace(`{${key}}`, params[key]);
    }
  }

  if (!translation) {
    console.warn('Did not find "%s" translation for path: "%s".', _language, path);

    return path;
  } else {
    return translation;
  }
};
