# function vs const

## Stack trace demo (browser)

```
npm install
npm run dev
```

Click each button to throw an error and compare how component names appear in stack traces across declaration styles.

## Greppability demo (terminal)

Compares how well a single `grep` can classify exports in a `function`-first codebase vs a `const`-only codebase. Both codebases export the same 21 symbols.

### Running on Windows

**Option A — Git Bash** (recommended, ships with [Git for Windows](https://git-scm.com/download/win)):

```
bash grep-demo/run.sh
```

**Option B — WSL**:

```
bash grep-demo/run.sh
```
