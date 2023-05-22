<div align="center">
    <img src="https://img.shields.io/npm/v/express-status-validate.svg" alt="author shawshankkumar"/>
    <img src="https://img.shields.io/badge/author-shawshankkumar-orange" alt="author shawshankkumar"/>
    <img src="https://img.shields.io/npm/l/express-status-validate.svg" alt="author shawshankkumar"/>
</div>
<br/>
<p align="center">
    A dead simple npm library to validate express.js response status codes.
</p>

## Inspiration for this package!

1. To learn how to make packages 😉
2. I spent around 40-50 minutes debugging why [SRMKZILLA's](https://srmkzilla.net) backend kept crashing. Found out someone passed the mongo error codes(single digit) to express and viola.

## What does it do?

It does what a middleware should, it sits quietly and on a day to day basis, you never notice it. Express is great, but it can be better. In TypeScript, passing a wrong status code is not that easy. But in JavaScript? One could pass a tank and the code would run (Thanks JS :) ). This package safeguards your app from throwing unwanted errors or crashing. What can you pass?

1. If you pass a valid status code like 200, it works. It doesn't change anything in the original status code.
2. BUT, if you pass "200" or "200OK", it converts it to 200 and sends it. But what if you pass something like 799 (invalid status code)? In that case a default status code is set and sent.
3. And you guesses correct, you can easily set the default status code you want.

## How to use it in your JS/TS project?

1. CD into the root folder of your project!
2. Install [express-status-validate](https://www.npmjs.com/package/express-status-validate) using pnpm (pnpm is cool, yarn is boring and npm is npm.)

```
pnpm i express-status-validate
```

or

```
npm i express-status-validate
```

or

```
yarn add express-status-validate
```

3. Open the entry point of your express app.

Our express application before adding the package:

```
const express = require("express");

const app = express();

app.get("/healthcheck", (req, res) => {
  //This should throw an error and crash.
  res.status(200123).send("OK");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

```

After adding the [express-status-validate](https://www.npmjs.com/package/express-status-validate) :

```
const express = require("express");
const expressStatusValidate = require("express-status-validate");

const app = express();

// 500 is optional, you can pass any valid http status code
app.use(expressStatusValidate(500));

app.get("/healthcheck", (req, res) => {
  //This should throw an error and crash an application but it doesn't anymore.
  res.status(200123).send("OK");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

```

> **_NOTE:_** app.use(expressStatusValidate(500)) must be on top to work as desired.

## Examples:

We are in the process of adding more examples and testing this library to make sure it works smoothly everywhere. Currently we have the following examples (Shoutout to [Harshit Singh, my roommate :p](https://github.com/whiletrueee) for being the first user of this library) :

1. [JavaScript Example](https://github.com/shawshankkumar/express-status-validation/tree/main/example/js-example)
2. [TypeScript Example](https://github.com/shawshankkumar/express-status-validation/tree/main/example/ts-example)

## License 📜

`express-status-validate` is available under the ISC license. See the LICENSE file for more info.

## Contributing 🤝

Please read `Contributing.md` for details on our code of conduct, and the process for submitting pull requests to us.

## How to contribute to this project:

1. Fork it 😜 and make sure you have Node(>14) installed!
2. Install the pnpm using

```
npm i -g pnpm
```

3. Install the dependencies

```
cd package && pnpm i
```

4. Do you magic (We recommend that you stick to the code and not configuration files unless there is a specific reason to do so)🪄
5. Build the TypeScript

```
pnpm run build
```

6. Run npm link and move to the examples and run npm link <package-name> and test it! [Refer to this!](https://www.jamesqquick.com/blog/how-to-test-npm-packages-locally/)
7. Make sure you run all the tests before making a pull request!
8. Make a pull request, sit back and enjoy while we review your changes.

## Forking this repo 🚨

Many people have contacted us asking if they can use this code for their own websites. The answer to that question is usually "yes", with attribution. There are some cases, such as using this code for a business or something that is greater than a personal project, that we may be less comfortable saying yes to. If in doubt, please don't hesitate to ask us.

We value keeping this site open source, but as you all know, _**plagiarism is bad**_. We spent a non-negligible amount of effort developing, designing, and trying to perfect this iteration of our website, and we are proud of it! All we ask is to not claim this effort as your own.

So, feel free to fork this repo. If you do, please just give us proper credit by linking back to this repo. Refer to this handy [quora post](https://www.quora.com/Is-it-bad-to-copy-other-peoples-code) if you're not sure what to do. Thanks!
