# React - Vite Federation - CHALLENGE

This example demos consumption of federated modules from a vite bundle. `host` (react based) depends on a component exposed by `remote` app (react based).

## Running

Install `pnpm` as per instructions provided [here](https://pnpm.io/installation)

Run `pnpm install`, then `pnpm run build` and `pnpm run serve`. This will build and serve both `host` and `remote` on ports 3000, 3001, 3002 respectively.

- HOST: [localhost:3000](http://localhost:5000/)
- REMOTE: [localhost:3001](http://localhost:3001/)
- REMOTE: [localhost:3002](http://localhost:3002/)

`CTRL + C` can only stop the host server. You can run `pnpm stop` to stop all services.
