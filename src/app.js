const express = require('express');
const fs = require('fs/promises'); 
const {
  defaultLanguage,
  translationFileName,
  translationFilePath
} = require('./config');

const app = express();

app.get('/', async (req, res) => {
  try {
    const fileContents = await fs.readFile(translationFilePath, 'utf8');
    const json = JSON.parse(fileContents);

    if (!json || typeof json !== 'object' || typeof json.translations !== 'object') {
      res.status(500).type('text/plain').send(`Invalid JSON format in ${translationFileName}`);
      return;
    }

    const translations = json.translations;
    const translation = translations[defaultLanguage] || translations.EN;

    if (!translation) {
      res
        .status(500)
        .type('text/plain')
        .send(`Invalid JSON format in ${translationFileName}`);
      return;
    }

    const timestamp = new Date().toISOString();
    res.type('text/plain').send(`${translation} @ ${timestamp}`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res
        .status(500)
        .type('text/plain')
        .send(`Could not find ${translationFileName} in resources.`);
    } else if (error instanceof SyntaxError) {
      res.status(500).type('text/plain').send(`Invalid JSON format in ${translationFileName}`);
    } else {
      res
        .status(500)
        .type('text/plain')
        .send(`Error reading ${translationFileName}: ${error.message}`);
    }
  }
});

module.exports = app;
