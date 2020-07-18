import translations from '../modules/translations';

type Language = 'cs' | 'en';
type TranslationsParams = { [key: string]: undefined | string | number };

const DEFAULT_LANGUAGE = 'en';

class Translation {
  private _language: Language = DEFAULT_LANGUAGE;
  private _translations: { [key: string]: object } = translations;

  public set language(language: Language) {
    this._language = language;
  }

  public translation(path: string, params?: TranslationsParams, language?: Language): string {
    const usedLanguage: Language = language ? language : this._language;
    const langTranslations = this._translations[usedLanguage];

    let translation: string = path.split('.').reduce((prevVal: any, currentVal: string) => {
      return (prevVal && prevVal[currentVal]) || null;
    }, langTranslations);

    if (translation && params) {
      for (const key in params) {
        if (params[key]) {
          translation = translation.replace(`{${key}}`, params[key]!.toString());
        }
      }
    }

    if (!translation) {
      console.warn('Did not find "%s" translation for path: "%s".', usedLanguage, path);

      return path;
    } else {
      return translation;
    }
  }
}

const translation = new Translation();

export const t = (path: string, params?: TranslationsParams, language?: Language): string =>
  translation.translation(path, params, language);

export const setLanguage = (language: Language): void => {
  translation.language = language;
};
