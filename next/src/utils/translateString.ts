export const translateString = (
  locale: string,
  dataTranslate: any,
  forceLanguage?: string | null
) => {
  const language: any = forceLanguage || locale;

  if (typeof dataTranslate === 'string') {
    return dataTranslate;
  }
  const textTranslated = dataTranslate?.[language];

  
  if (textTranslated) {
    return textTranslated;
  }
  if (process.env.NODE_ENV === 'development') {
    console.warn({
      message: 'The translation not find with this parameter',
      dataTranslate,
      language: language,
    });
  }

  return '';
};
