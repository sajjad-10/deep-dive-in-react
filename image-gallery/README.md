
# Image Gallery

Simple gallery with images, use API pixabay


## Deployment

To deploy this project run

```bash
  npx create-react-app app-name && cd app-name
  npm install tailwindcss postcss-cli autoprefixer@9.8.6 -D
  npx tailwind init tailwind.js --full
  touch postcss.config.js
```

## Usage/postcss.config.js file

```javascript
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};

```


## Usage/package.json

```javascript
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run watch:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"

```


## Deployment

To deploy this project run

```bash
  npm start
```

## API Reference

API pixabay [https://pixabay.com/api/docs/](https://pixabay.com/api/docs/) 