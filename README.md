# QA Engineer Challenge

## Getting Started

- ⚙️ &nbsp; Install the node version listed in `.nvmrc` (we recommend using [nvm](https://github.com/nvm-sh/nvm)).
- 😸 &nbsp; Install yarn (with `npm i -g yarn`)
- 🧶 &nbsp; Install the project's dependencies (with just `yarn`)
- 🌲 &nbsp; Run Cypress (with `yarn test:cy`)
- 📝 &nbsp; Write tests

## Helpful Advice

- We almost exclusively use [`cypress-testing-library`](https://testing-library.com/docs/cypress-testing-library/intro/)
  to write our assertions. You're welcome to use them or not.

- At Air, we try to avoid to duplicate coverage; however, we can't provide you the function we use to forcibly
  authenticate and avoid the login or registration process for inner-app tests. Unfortunately, that means you'll
  want to login or register before you can make in-app assertions.

- We use real data in our integration tests, but you're welcome to use fixtures if that's what you're used to!

## Mike Berkow Notes

- No changes to the install directions

- Bugs are in the `Bugs` directory

- Assets for the bugs are in the `images` sub-directory
