const express = require('express');
const i18n = require('i18n');
const app = express();

i18n.configure({
  locales: ['en', 'fr', 'es', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko', 'ar', 'hi', 'bn', 'tr', 'vi', 'pl', 'nl', 'sv', 'no', 'fi', 'da', 'th'],
  directory: __dirname + '/locales',
  defaultLocale: 'en',
  queryParameter: 'lang',
  objectNotation: true,
});

app.set('view engine', 'ejs');
app.use(i18n.init);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { lang: req.getLocale() });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
