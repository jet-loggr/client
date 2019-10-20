# Jet Logr
An app submission for Lambda School's Summer Hackathon.

## Winner for "Most likely to be a start-up"

## deployed

https://jet-loggr.netlify.com/

## Getting Started

This repository contains a **yarn.lock** file. Please do not remove this file from your local code, as the integrity of the application cannot be gauranteed if versions that may be incompatible with each other are used by installing the newest version of each dependency.

#### Installation and Setup

To get the client running locally, clone this repo and use the following commands/steps:

1. **cd** into the `root` directory and then into the `client` directory
2. Use the **yarn**  or **yarn install**  command in the `client` directory to install all required dependencies
3. Use the **yarn start** command to start the local instance of `React` in your default browser

#### Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a `.env` file containing the following:

    *  REACT_APP_BACKEND_URL - Backend API of Jetloggr
    *  REACT_APP_AUTH0_DOMAIN - This is an Auth0 domain, generated in the Auth0 dashboard
    *  REACT_APP_AUTH0_CLIENT_ID - This is an Auth0 clientId, generated in the Auth0 dashboard
    *  REACT_APP_AUTH0_CALLBACK_URL - This is an Auth0 callback URL /callback


## Tech Stack
- ReactJS
- Redux
- MaterialUI
- Sass
