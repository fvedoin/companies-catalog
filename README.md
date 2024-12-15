# Industries Catalog

This project was implemented with NestJS (API) & Vite + Tailwind (web).

## Deploy

This project was deployed using Netlify and the working demo is available [here](https://companies-ui.netlify.app/). Check the statuses below:

- API:

    [![Netlify Status](https://api.netlify.com/api/v1/badges/000c346f-b241-4991-abe0-5a1a5a9a39bf/deploy-status)](https://app.netlify.com/sites/companies-api-serverless/deploys)

- WEB:

    [![Netlify Status](https://api.netlify.com/api/v1/badges/9d92c7a1-f594-4d46-9eeb-d65ed7dc8ca2/deploy-status)](https://app.netlify.com/sites/companies-ui/deploys)

## Prerequisites

Ensure the following are installed on your system:

- Node.js (v20.9.0)
- pnpm:

```sh
npm install -g pnpm
```

## Project Configuration

Create a .env file in the root of your web project to store environment-specific variables. Example:

```env
VITE_API_URL=http://localhost:3000/api
```

## Running the Project

1. Install dependencies:

```sh
pnpm install
```

2. Start the development server:

```sh
pnpm dev
```

