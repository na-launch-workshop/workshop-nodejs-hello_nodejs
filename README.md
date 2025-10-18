# Node.js Hello World Translation Service

This project reimplements the Quarkus-based hello world service from `workshop-quarkus-hello_quarkus` using Node.js and Express. It exposes a single endpoint that returns a localized greeting with an ISO-8601 timestamp appended, mirroring the original Quarkus behaviour.

## Prerequisites
- Node.js 18 or newer
- npm

## Installation
```bash
npm install
```

## Running the Tests
```bash
npm test
```

## Starting the Service
```bash
npm start
```
The server listens on port `8080` by default. Override with the `PORT` environment variable if needed.

## HTTP Endpoint
- `GET /helloworld-by-language` – Responds with a greeting string such as `hello world @ 2024-06-01T12:34:56.000Z`.

## Configuration
Environment variables provide the same configurability as the Quarkus version:
- `TRANSLATION_DEFAULT_LANGUAGE` (default: `EN`) – Two-letter code used to choose the greeting.
- `TRANSLATION_FILE` (default: `translations.json`) – File located in the `resources/` directory that contains the greeting map.
- `PORT` (default: `8080`) – Port for the HTTP server.

All translations are stored in `resources/translations.json` 
