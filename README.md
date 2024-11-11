Simple Dashboard app that shows displays a users assets by using mock-data in json form.

## Getting Started
1. Clone this repo 


2. Then create a .env.local file in the root of the project and add this line: `NEXT_PUBLIC_BASE_URL=http://localhost:3000` 


3. then run the following commands to run the app locally:

```bash
yarn install
yarn dev

```

## Extra features 
Donut Chart which chain filtration, allowing users to see a breakdown of their portfolio for specific chains. The chart shows the top 5 assets in that chain and sorts the other assets into an 'others' category.

Animated Bouncing content component for text that would overflow. This is especially useful for when the token name is very long.


## Deployment

This app is deployed on vercel. The test link is can be found [here](https://biconomy-ui.vercel.app)