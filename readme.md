# Mobilize Gateway
## General description
Node.js server serving as proxy to Mobilize API using es6 features.

## Installation
- Make sure you have Node.js installed
- Clone the repo
- run `npm install`

## Build

- run `npm run build:dev` for webpack compilation with watch option.
- run `npm build` for production optimized build.

## Starting the server

- run `npm start` (nodemon keeps the process alive).

## Mobilize authentication

- Replace env vars `MOBILIZE_KEY` and `MOBILIZE_SECRET`

## Roadmap
Currently only groups + group members fetching implemented.
