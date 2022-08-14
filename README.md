# Werkplaats

<p align="center">
    <img style="height: 150px" src=".github/images/me.png"/>
</p>

> Every Smit needs a Werkplaats.

---

## Features

-   🔑 Fully typed.
-   ⚡ Fast.

## Commands

| Command      | Function                       |
| ------------ | ------------------------------ |
| `yarn`       | Install all dependencies       |
| `yarn dev`   | Spin up the development server |
| `yarn build` | Make a production build.       |

## Structure

```ts
.
└── /env                // Environment is housed here.
└── /public             // Public assets (that never change)
└── /src
    └── /assets         // Static assets that have to be hashed
    └── /components     // Place to put your components.
    └── /routes         // Routes can go here.
    └── /definitions    // All TypeScript .d.ts files go here
    └── /styles         // Place to put your CSS tokens.
```

## Dependencies

| Dependency                                                               | Reasoning                                                                                                                                                                                             |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Vite](https://github.com/vitejs/vite)**                               | <sup>Bundle-less development, great support for TypeScript, CSS Modules, and zero-config development builds.</sup>                                                                                    |
| **[React](https://reactjs.org/)**                                        | <sup>What can I say. It's React, with TypeScript.</sup>                                                                                                                                               |
| **[Husky](https://github.com/typicode/husky)**                           | <sup>Committable git-hooks, so we can format and lint the codebase on commits and pushes.</sup>                                                                                                       |
| **[Prettier](https://prettier.io/)** + **[ESLint](https://eslint.org/)** | <sup>The iconic duo. Keep your files tidy, sorted, and clean.</sup>                                                                                                                                   |
| **[SASS](https://github.com/sass/sass)**                                 | <sup>To make life with CSS Modules easier, and be able to nest selectors. Use in combination with CSS Variables for maximum scalability and minimal dependency.</sup>                                 |
| **[The New CSS Reset](https://elad2412.github.io/the-new-css-reset/)**   | <sup>The great reset we all know and need; modernised.</sup>                                                                                                                                          |
| **[useSWR](https://swr.vercel.app/)**                                    | <sup>A great addition to 'just' `fetch`, with caching and error-handling included. The cache actually works out-of-the-box, no additional configuration required.</sup>                               |
| **[Framer Motion](https://www.framer.com/motion/)**                      | <sup>Great for simple animations. It's a tad bit large, but with lazy loading, tree-shaking, and opting in for the most minimal animations-bundle, we can bring the initial size down to `5kb`.</sup> |
| **[zustand](https://github.com/pmndrs/zustand)**                         | <sup>Used to replace React Context API. It's easier to use and has less boilerplate. It's also under `1kb`, so hardly has any bad effects on the bundle size.</sup>                                   |
