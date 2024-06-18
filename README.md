# Vitest VS Code plugin count issue

See <https://github.com/vitest-dev/vscode/discussions/417>

To reproduce:

- Checkout this repo locally
- Install dependencies via `npm install`
- Open the project in VS Code, with the Vitest test runner installed
- Open the Test Runner sidebar in VS Code and run the tests
- Now, the Vitest VS Code plugin says "1/5 tests passed" on top and in the icon on the left "4 failed tests". The reality is "1/2 tests passed" and "1 failed test".

Not that the Vitest command line outputs the right numbers: "Tests 1 failed | 1 passed (2)".
