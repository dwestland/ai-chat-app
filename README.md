# next-typescript-prettier-eslint

## Notes from creating this repository

**Install App**

```
npx create-next-app <app name>
```

**Start dev:**

```
npm run dev
```

```
sudo npm i -g typescript
```

```
npm i -g eslint
```

**Create a tsconfig.json file, restart**

**Install dependencies:**

```
npm i --dev typescript @types/react @types/node
```

**Rename index.js to index.tsx**

**Add ESLint:**

```
npm i --dev eslint
```

**Configure ESLint:**

```
npx eslint --init
```

**To check syntax, find problems, and enforce code style, JavaScript modules (import/export), React, Yes, Browser, Use a popular style guide, Airbnb, JavaScript**

**Add to eslintrc.js to avoid React detection bug:**

```js
  settings: {
    react: {
      version: "latest",
    },
  },
```

**Install Prettier:**

```
npm i --dev prettier
```

**Avoid conflicts with Prettier using eslint-config-prettier:**

```
npm i --dev eslint-config-prettier
```

**Add prettier to the extends array in the eslintrc.js file:**

```js
  'extends': [
    'plugin:react/recommended',
    'google',
    'prettier'
  ]
```

**For customizing Prettier Rules, create a .prettierrc file in root and add rules**

```js
{
  "endOfLine": "lf",
  "printWidth": 80,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

**Add .eslintignore and .prettierignore to not apply linting to certain files (optional)**

**Install ESLint and Prettier VS Code plugins**

**Modify VS Code settings: Code > Preferences > Settings and search for "Editor:default formatter" and select "Prettier - Code formatter". Also search for "format on" and check "Format on Paste" and "Format on Save".**

**Close VS Code file and re-open**

**Check index.tsx for errors, Add:**

```js
import React from 'react'

/**
 * This is the Home Page
 * @return {JSX.Element}: The JSX Code for the Home Page
 */
```

**Add to the .eslintrc.js file to remove errors:**

```js
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
  },
```

**Reformat the code using Prettier, install if necessary:**

```
npm i -g prettier
```

```
prettier --write .
```

**Evoke ESLint and Prettier on save, create a /.vscode/settings.json file:**

```js
{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.format": true
  }
}
```

**Done**

### Settings are from:

**How To Setup Next.JS with TypeScript, Prettier, ESLint and Husky**

https://www.youtube.com/watch?v=sH93pQb9bWM

https://github.com/jarrodwatts/code-like-google
