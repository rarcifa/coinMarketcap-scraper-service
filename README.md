# CoinMarketCap Web Scrapping Service

![Version Badge](https://img.shields.io/badge/Version-v1.0.1-blue)

This repository is intended to house the CoinMarketCap web scrapping service. The service provides endpoints to generate the web scrapping operations and returns the value as outlined in the routes file.

### Interface

```ts
interface ICoin {
  name: string; // project name
}
```

### Endpoints

- **Trending Coins:** http://localhost:3000/api/v1/coins-service/trending-coins
- **Most Visited Coins:** http://localhost:3000/api/v1/coins-service/most-visited-coins

### Local setup

- This local setup is provided as is
- In order to run the formatter with `vscode`, the prettier extension needs to be installed
- After installing the extension, add the following `json` to your `.vscode/settings.json` file:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "jest.jestCommandLine": "npm run test --",
  "jest.autoRun": "off"
}
```

- You need to generate API and security keys for prod, dev, and testing and place them into the env folder. The helper file security in the helper folder can help you to generate these tokens. Alternatively, you can switch off authorization by removing the middleware in the coin-routes.ts file.

- In order to have the local environment variables set up, add the following `.env` file in the root of the project:

```
READ_API_KEY=YOUR_READ_API_KEY
READ_API_SECRET=YOUR_READ_API_SECRET
WRITE_API_KEY=YOUR_WRITE_API_KEY/68zAyBQ=
WRITE_API_SECRET=YPUR_WRITE_API_SECRET
TEST_API_KEY=YOUR_TEST_API_KEY/68zAyBQ=
TEST_SECRET_KEY=YPUR_TEST_API_SECRET
BASE_ACCESS_URL=localhost
PORT=3000
```

- Finally, to install all the dependencies, run the following:

```bash
npm install
```

### Running the service

- In order to run the service locally, after all the steps, run the following command:

```bash
npm run dev
```

### Links of interest

- [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
