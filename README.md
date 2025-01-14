
# Narfex SDK

Forked from the [Pancake SDK](https://github.com/pancakeswap/pancake-swap-sdk/commit/38b00a59d8ff04bac61d0d12fa9b94af80808392).

You can refer to the Uniswap SDK documentation [uniswap.org](https://docs.uniswap.org/sdk/2.0.0/).

## Running tests

To run the tests, follow these steps. You must have at least node v10 and [yarn](https://yarnpkg.com/) installed.

First clone the repository:

```sh
git clone https://github.com/narfex/pancake-swap-sdk narfex-sdk
```

Move into the narfex-sdk working directory

```sh
cd narfex-sdk/
```

Install dependencies

```sh
yarn install
```

Run tests

```sh
yarn test
```

You should see output like the following:

```sh
yarn run v1.22.4
$ tsdx test
 PASS  test/constants.test.ts
 PASS  test/pair.test.ts
 PASS  test/fraction.test.ts
 PASS  test/miscellaneous.test.ts
 PASS  test/entities.test.ts
 PASS  test/trade.test.ts

Test Suites: 1 skipped, 6 passed, 6 of 7 total
Tests:       3 skipped, 82 passed, 85 total
Snapshots:   0 total
Time:        5.091s
Ran all test suites.
✨  Done in 6.61s.
```
