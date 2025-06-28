<h1 align="center">
  <a href="https://barrio.lambdacurry.dev"><img src="https://barrio.lambdacurry.dev/favicon.svg" alt="Medusa 2 Starter with Remix Storefront" width="80" height="80"></a>
  <br>
  <br>
  Medusa 2 Starter with Remix Storefront
  <br>
</h1>


This is an official Turborepo monorepo integrating a Medusa2 backend with a Remix frontend. Showcasing a Coffee Roast themed dynamic storefront, it features Stripe payment integration, scalability with unlimited products and categories, and a developer-friendly setup using TypeScript and Biome. Ideal for rapidly building dynamic, scalable e-commerce stores.

https://github.com/user-attachments/assets/3c10d2f5-91b8-405c-a47c-c8ae8a4be575

## Table

- [Prerequisites](#prerequisites)
- [Project Overview](#project-overview)
  - [Key Features](#key-features)
  - [Demo](#demo)
- [Getting Started](#getting-started)
- [Local Development Setup](#local-development-setup)
- [Resetting the Database](#resetting-the-database)
- [Enabling Express Checkout](#enabling-express-checkout)
- [Deployment](#deployment)
  - [Deploying with Coolify](#deploying-with-coolify)
- [Useful Links](#useful-links)
- [Contributors](#contributors)

## Prerequisites

Before you begin, ensure you have the following installed:

- ✅ Node.js 20+
- ✅ Yarn 4.5.0
- ✅ Remix
- ✅ Docker and Docker Compose


## Project Overview

### Key Features

- **Dynamic Storefront**: Leverages Medusa2's robust headless commerce capabilities and Remix's fast, data-driven UI for modern e-commerce experiences.
- **Advanced Payment Integration**: Out-of-the-box support for Stripe enables secure and reliable transaction processing.
- **Scalability**: Supports unlimited products, collections, categories, and tags, accommodating businesses as they expand their inventory.
- **Developer Experience**: Built with TypeScript and Biome, enhancing code quality, consistency, and maintainability.

## Demo

You can view a live demo of the project [here](https://barrio.lambdacurry.dev/).


## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   yarn
   ```
3. Test the setup:
   ```
   yarn build
   ```

## Local Development Setup
1. Generate `.env` files for both the Medusa backend and the Remix storefront.
   ```
   yarn run generate-env
   ```
   > This will generate the `apps/medusa/.env` and `apps/storefront/.env` files.

2. Replace the following environment variables in your `apps/medusa/.env` file:
   - `STRIPE_API_KEY` # Your Stripe secret key. Required to checkout.

3. Run the following command to initialize the Medusa database:

   ```
   yarn run medusa:init
   ```

   > This will set up the database and seed it with some initial data, including a user with the email `admin@medusa-test.com` and password `supersecret`.

4. Start the development servers:
   ```
   yarn dev
   ```

   > This will start both the Medusa backend and the Remix storefront in development mode.

5. Create a Publishable API Key for your storefront:

   - Log in to the [Medusa admin](http://localhost:9000/app/login) using the credentials `admin@medusa-test.com` / `supersecret`

   - Navigate to the [_Publishable API Keys_ settings](http://localhost:9000/app/settings/publishable-api-keys) and **copy** an exisiting API Key or create a new one with at least one Sales Channel.

6. Replace the environment variables in the `apps/storefront/.env` file:

   - `MEDUSA_PUBLISHABLE_KEY` # API key from previous step
   - `STRIPE_PUBLIC_KEY` # starts with `pk_`
   - `STRIPE_SECRET_KEY` # starts with `sk_`

7. Restart your storefront and medusa backend:
      ```
      yarn dev
      ```


## Deployment
### Deploying with Coolify

These instructions guide you through deploying the Medusa backend and the Remix storefront using Coolify.

#### 1. Database Setup

Before deploying your applications, set up your databases in Coolify.

1.  **Create Databases**: In your Coolify project, create separate **PostgreSQL** and **Redis** database instances.
2.  **Enable Public Access for Postgres**: To run initial migrations, make your PostgreSQL database publicly accessible. In Coolify, go to your Postgres resource settings and enable "Is Publicly Accessible." Copy the public connection URL.
3.  **Run Migrations Locally**: Update your local `apps/medusa/.env` file, setting `DATABASE_URL` and `POSTGRES_URL` to the public Coolify Postgres URL. Then, run the migrations from your local machine:
    ```bash
    yarn migrate:prod
    ```
4.  **Secure Your Database**: After the migration, disable public access to your PostgreSQL database in Coolify. Your applications will use the private network.
5.  **Note Private URLs**: Keep the private connection URLs for both PostgreSQL and Redis handy for the next steps.

#### 2. GitHub Actions & Docker Image Setup

This repository uses GitHub Actions to automatically build and publish Docker images for the Medusa backend and the storefront.

1.  **Configure Docker Repository**: Open the `.github/workflows/barrio.yaml` file and update the `DOCKER_REPOSITORY` variable with your Docker Hub username and desired repository path.
2.  **Enable GitHub Actions**: Go to your repository's "Actions" tab on GitHub and enable them if they are not already.

Once enabled, the workflow will run, building the necessary Docker images. The workflow might show a failure on the Helm step, but the Docker images will still be successfully created and pushed to the repository you specified.

#### 3. Deploying the Medusa Backend

1.  **Get Docker Image URL**: From your Docker Hub repository, copy the URL for the Medusa backend image (e.g., `yourusername/medusa-backend:latest`).
2.  **Create Coolify Resource**: In your Coolify dashboard, create a new resource and select "Docker Image". Paste the URL you copied.
3.  **Configure Settings**:
    -   **Domain**: Set your desired domain. HTTPS is recommended and pre-configured.
    -   **Port**: Set the port to `9000`.
4.  **Add Environment Variables**: Copy the contents of `apps/medusa/.env.template` and add them as environment variables in the Coolify application settings. Ensure you fill in all required values.
5.  **Deploy**: Click the "Deploy" button.

 Heads up: It might not work on the first try. You’ll probably cry a little. That’s normal. Be patient — it’ll work.
 
#### 4. Deploying the Remix Storefront

You can deploy the storefront using Coolify or Vercel. Vercel is often simpler for Next.js/Remix applications.

**Using Coolify:**

1.  **Get Docker Image URL**: From your Docker Hub repository, copy the URL for the storefront image (e.g., `yourusername/storefront:latest`).
2.  **Create Coolify Resource**: Follow the same process as the backend, creating a new "Docker Image" resource in Coolify.
3.  **Configure Settings**:
    -   **Domain**: Set your desired domain.
    -   **Port**: Set the port to `3000`.
4.  **Add Environment Variables**: Copy the environment variables from `apps/storefront/.env.template` to Coolify.
5.  **Deploy**: Click the "Deploy" button.

#### 5. Post-Deployment Configuration
After logging into your Medusa Admin (http://your-domain.com/app/login), go to:

Settings → Publishable API Keys

Create a key and assign a Sales Channel.

**CRITICAL STEP**: If you don’t assign a Sales Channel, you’ll waste hours googling 500 errors and questioning your life choices..

1.  Log in to your Medusa Admin dashboard.
2.  Navigate to **Settings → Publishable API Keys**.
3.  Create a new key or select an existing one.
4.  In the key's settings, add at least one **Sales Channel**.
5.  Update the `MEDUSA_PUBLISHABLE_KEY` environment variable in your storefront application with this new key and redeploy if necessary.

## Resetting the Database
In order to reset the database, follow the steps from 3 to 7 in the Local Development Setup section.

## Enabling Express Checkout

> For a more complete guide on how to enable Express Checkout, see the Stripe [documentation](https://docs.stripe.com/elements/express-checkout-element).

To enable Express Checkout in the Medusa Storefront, follow these steps:

1. Enable the payment methods you want to use to during Express Checkout in the Stripe [payment methods settings](https://dashboard.stripe.com/settings/payment_methods).
   - Learn more about Apple Pay integration [here](https://docs.stripe.com/apple-pay) 
   - Learn more about Google Pay integration [here](https://docs.stripe.com/google-pay).

2. Create your own [domain association file](https://docs.stripe.com/apple-pay?platform=web#verify-domain) to verify your domain, and replace the content in the `apps/storefront/app/routes/[.well-known].apple-developer-merchantid-domain-association.tsx` file with your own domain association file content.

3. Register your domain for payment methods - see [this stripe guide](https://docs.stripe.com/payments/payment-methods/pmd-registration) for more information.
   -  for development, you may want to use a service like [ngrok](https://ngrok.com).
   -  for production, a domain with `https` is required.






## Useful Links

- [Medusa Documentation](https://docs.medusajs.com/)
- [Remix Documentation](https://remix.run/docs/en/main)
- [Turborepo Documentation](https://turbo.build/repo/docs)
 - [Stripe Express Checkout](https://docs.stripe.com/elements/express-checkout-element)


## Contributors
Made with ❤️ by the Lambda Curry team.


<a href = "https://github.com/lambda-curry/medusa2-starter/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=lambda-curry/medusa2-starter"/>
</a>