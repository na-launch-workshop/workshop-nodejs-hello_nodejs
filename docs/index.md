# 🚀 **Module: Node.js Hello World Translation Service**

**Technology Stack:**

- Node.js

---

## 🎯 **Scenario**

This project reimplements the Quarkus-based hello world service from `workshop-quarkus-hello_quarkus` using Node.js and Express. It exposes a single endpoint that returns a localized greeting with an ISO-8601 timestamp appended, mirroring the original Quarkus behaviour.

### Prerequisites
- Node.js 18 or newer
- npm

## 🐾 **Guided Walkthrough**

1. Installation
```bash
npm install
```

2. Run the tests
```bash
npm test
```

3. Start the service
```bash
npm start
```
The server listens on port `8080` by default. Override with the `PORT` environment variable if needed.

4. HTTP Endpoint
- `GET /helloworld-by-language` – Responds with a greeting string such as `hello world @ 2024-06-01T12:34:56.000Z`.

5. Configuration
Environment variables provide the same configurability as the Quarkus version:
- `TRANSLATION_DEFAULT_LANGUAGE` (default: `EN`) – Two-letter code used to choose the greeting.
- `TRANSLATION_FILE` (default: `translations.json`) – File located in the `resources/` directory that contains the greeting map.
- `PORT` (default: `8080`) – Port for the HTTP server.

All translations are stored in `resources/translations.json` 
