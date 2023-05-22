# Express Status Validate example in TypeScript

[![npm version](https://img.shields.io/npm/v/express-status-validate.svg)](https://www.npmjs.com/package/express-status-validate-example)
[![license](https://img.shields.io/npm/l/express-status-validate.svg)](https://github.com/shawshankkumar/express-status-validate-example/blob/master/LICENSE)

An example express app in JavaScript.
We have used pnpm, you can use npm or yarn as well.

## Installation and Test

1. ```shell
   npm install -g pnpm
   ```
2. ```shell
   pnpm i
   ```

3. ```shell
   pnpm run start
   ```

Open

[Health Check Route with wrong Status code](https://localhost:3000/healthcheck)

It doesn't break.

Try commenting out the middleware and running it again, it will break 😉

## Example without express-status-validate:

<img width="1331" alt="image" src="https://github.com/shawshankkumar/express-status-validation/assets/74819565/fbe47e15-2080-4b24-bcd7-e7cee62c6448">

## Example with express-status-validate enabled:

<img width="1327" alt="image" src="https://github.com/shawshankkumar/express-status-validation/assets/74819565/21626ea0-9d24-49cc-8d1d-78797e92f961">
