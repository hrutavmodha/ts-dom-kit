# Reat Lite

- **A minimal, blazing fast React-style UI library made in TypeScript**

- Built from  scratch by [Hrutav Modha](https://github.com/hrutavmodha)

## What is React-Lite?

- React-lite is a light-weight, JSX-compatible UI library built using plain TypeScript with minimal external dependencies

- Inspired by React's declarative paradigm, it offers a bare-metal implementation of `createElement` function, JSX transpilation, a `render` function to render changes to DOM via HMR, various React hooks (current implemented only `useState()`, others coming soon) and a simple and effective client-side routing via custom `router` - which is, I believe, perfect for learning the internals of the modern frontend frameworks

## Features

- Written fully in TypeScript (except few config files, which were needed to be written in JavaScript)

- Faster DOM rendering without Virtual DOM (at this stage)

- Stateful reactive components possible with my own custom `useState()` function

- A simple router for Client-side Routing 

- JSX-Support with custom runtime

- Modular file-structure

## Folder Structure

``` Bash
src/
    react/
        hooks/
            useState.ts
        createElement.ts
        dispatcher.ts
        Component.ts
        fragment.ts
        jsx-runtime.ts
        jsx-dev-runtime.ts
        jsx.d.ts
    react-dom/
        render.ts
        rerenderer.ts
    react-router/
        router.ts
    index.tsx
.gitignore
README.md
vite.config.js
package.json
package-lock.json
```

## Contribution Guide

### Pre-requisites

Make sure you have the following listed setup in your local PC:

1. Node.js

2. npm

3. Git CLI

**1. Clone repository**

First of all, clone the repository in your PC by running the following command in your terminal:

``` Bash
git clone https://github.com/hrutavmodha/react.git
```

**2. Move to repository's folder**

- Now, change the directory

- Use the following command for this:

``` Bash
cd react
```

**3. Install dependencies**

By running the following command in your terminal again, install all the dependencies that are required for running the code:

``` Bash
npm install
```

**4. Run server**

Finally, run the development server by running this command in your terminal:

``` Bash
npm start
```

**5. Contribute**

Congratulations, now you're all set to make changes and PRs to the original repository later on

## Usage Example

**App.tsx**

``` TypeScript JSX
import { useState } from './react/hooks/useState'
export default function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>React</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}
```

**index.tsx**

``` TypeScript JSX
import render from './react-dom/render'
import App from './App'
const root = document.getElementById('root')
render(<App />, root)
```

## Philosophy

- React-lite is my approach to understand the core working of the React internally, rather than focusing on abstractions

- No doubt, [React](https://react.dev/) by Meta is an amazing frontend library

- This is all about learning the magic behind the component-based architecture.

## Author

Made with love by **Hrutav Modha**