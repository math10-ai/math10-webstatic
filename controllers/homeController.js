const translations = require('../utils/translations');

// Render the home page with the correct language translations
exports.renderHomePage = (req, res) => {
  // Get language code from query parameter, default to 'en'
  const lang = req.query.lang || 'en';

  // Fetch translations for the requested language
  const langTranslations = translations[lang] || translations['en']; // Fallback to English if the language is not found

  // Render the index.ejs view and pass translations and lang
  res.render('index', { lang, translations: langTranslations });
};
