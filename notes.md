```bash
yarn init -y
yarn add mongoose
yarn add -D nodemon
touch index.js
```

```json title="package.json"
{
  "name": "mongo2",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "nodemon": "^2.0.20"
  },
  "dependencies": {
    "mongoose": "^6.8.2"
  },
  "scripts": {
    "start": "nodemon index.js"
  },
  "type": "module"
}
```
