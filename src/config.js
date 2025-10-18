const path = require('path');

const DEFAULT_LANGUAGE = (process.env.TRANSLATION_DEFAULT_LANGUAGE || 'EN').toUpperCase();
const TRANSLATION_FILE = process.env.TRANSLATION_FILE || 'translations.json';
const RESOURCES_DIR = path.resolve(__dirname, '..', 'resources');

module.exports = {
  defaultLanguage: DEFAULT_LANGUAGE,
  translationFileName: TRANSLATION_FILE,
  translationFilePath: path.resolve(RESOURCES_DIR, TRANSLATION_FILE),
  resourcesDir: RESOURCES_DIR,
  port: Number.parseInt(process.env.PORT, 10) || 8080
};