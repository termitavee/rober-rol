# React Native Complete monorepo

Using the minimal dependencies to have a fully funciontal monorepo avoiding redundancy

## Usage

Scripts folder has all necesary functions to init, run, compile and general use script

### Explanation

Boilerplate to use React native sintaxt in all possible platforms. Sorted by framework so for a project some folders can be deleted

Each platform will manage it's own navigation,screens and other stuff will be imported from app.

Utils will be used for scripts and other stuff related to the project but no related to production app

Until I syncronize React Native dependencies with root projects, each repo should be used as a project (aka, open in a new window) in order to eslint works as intended

### Required for adding a workspace

- Extend .eslintrc (Update import/no-extraneous-dependencies to import other workspaces)
- Extend tsconfig (Update rootDir to point to root monorepo)
- Add scripts to package.json
  - start: run bundler or listener required to test
  - open: script(s) to launch i proper device(s) if possible
  - build: script(s) to compile app (primaly production, an be release development versions too)
  - release: empty but to be used in a real project
  - test: run tests
  - lint: run linter
  - typecheck run tsc (probably `tsc --noEmit --skipLibCheck` is enough)
- Import and render App from @workspace/App
- Import .env file

### Depenencies

- For anything [node](https://nodejs.org/es) is required (better install with [nvm](https://github.com/nvm-sh/nvm))
- For mobile [React Native](https://reactnative.dev/docs/environment-setup?guide=quickstart) should be configured, by default uses expo go
- For web and extension no configuration is required, it uses [React Native for web](https://necolas.github.io/react-native-web/) as a compatibility layer to share code with React Native

## Planned to do

- Fix issues related to monorepo

  - [ ] Fix image import differs from web and app

- Configure and improve projects

  - [x] Eslint config
  - [x] Prettier config
  - [x] Project global config (added config, require fixes)
  - [ ] Add typescript and test linter commands
  - [ ] Add start commands (bundler/watchers)
  - [ ] Add start commands (open proper device if not managed by the above)
  - [x] Fix npm audit vulnerabilities (for now)
  - [ ] Add Storybook to preview screens and components (as a workspace for all workspaces not just app)
  - [ ] Try to use metro for web (Expo)
  - [ ] Add default app layout
    - [ ] Add navigation
    - [ ] Add utils with proper platfom detection
    - [ ] Add a hook
    - [ ] Add a component
  - [ ] Review dependencies, try to unify them as much as possible in root project
    - [x] Maybe App worspace only with peer dependencies?
  - [ ] Make multiple workspaces to make it easier to differentiate them
  - [ ] Make this project a cli to copy intself and manage/add/remove workspaces

- Create and test hello world for apps
  Apps that shares code, can import some parts (like screens, components or utils) or a whole common app (with navigation), by default shares whole app if possible (excluded cli variants )

  - [x] [Expo](https://expo.dev/) (ios, android, web)
  - [x] [electron](https://electronjs.org/) (desktop) (like electron but with rust and webview)
  - [ ] Create workpsace with common parts (screens, components, utils...)
  - [ ] [Ink](https://github.com/vadimdemedes/ink) (terminal) (Uses React sintaxt)
  - [ ] [Nextjs](https://nextjs.org/) (web) (Also uses React native web)
  - [ ] Browser extension (web extension) (Also uses React native web)
  - [ ] Backend express?
  - [ ] [tv React native](https://github.com/react-native-tvos/react-native-tvos) (Apple TV, Android TV)
  - [ ] [React native](https://reactnative.dev/) (ios and android)
  - [ ] [Neutralino](https://neutralino.js.org/) (desktop) (like tarui but with js and webview)
  - [ ] [Tarui](https://tauri.app/) (desktop) (like electron but with rust and webview)
  - [ ] [tv Expo](https://github.com/react-native-tvos/react-native-tvos) (Apple TV, Android TV)

- Create scripts

  - [ ] Init
  - [ ] Rename
  - [ ] Change version
  - [ ] Remove/add workspace

## Documentation

- Expo guide for monorepos: [docs.expo.dev/guides/monorepos](https://docs.expo.dev/guides/monorepos/)
- npm docs [docs.npmjs.com/cli/v10/using-npm/workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces)
- Original idea [github.com/mmazzarolo/react-native-universal-monorepo](https://github.com/mmazzarolo/react-native-universal-monorepo)
- Original fork [github.com/termitavee/react-native-universal-monorepo](https://github.com/termitavee/react-native-universal-monorepo)
