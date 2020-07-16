type TranslationsParams = { [key: string]: string };

export type TranslationFn = (
  path: string,
  params?: TranslationsParams,
  language?: 'cs' | 'en'
) => string;
