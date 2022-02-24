  

# 🌑 Same Same Studio Boilerplate

  

  

  

Same Same Studio Next.js Boilerplate with `eslint`, `prettier`, `path aliases` and `styled components`.

  

  

  

## Stack

  

  

* [Next.js](https://nextjs.org/docs)

  

  

* [Sass (SCSS)](https://sass-lang.com/)

  

* [Styled Components](https://styled-components.com/docs/basics#getting-started)

  

  

  

## Project set-up

  

    git clone https://github.com/samesamestudio/samesame-starter.git
    
    cd samesame-starter
    
    npm install

  

___

  

  

To use it as boilerplate for another project:


    git remote remove origin
    
    git remote add origin new_github_repo_url
    
    git push -u origin main

  

## Getting started

1. `npm install` ➡️ install all dependencies

2. `npm run dev` ➡️ runs dev enviroment at port `localhost:3000`

  
## Utilities
This project is set up with our most recent `Utilities.jsx` file. For basic styling please refer to the `Utlities`, `Basestyles` and `Variables` to keep all the codebases consistent.
  

## Styled Components

  

* [Documentation](https://styled-components.com/docs)

  

* [Best practice](https://www.joshwcomeau.com/css/styled-components/)

  

  

This boilerplate includes various concepts of styled components. It's free to decide what to use and what can be omitted.

  

Concepts such as: `Theming`, `CSS Variables in styled components`, `base styles`, `utlities`.

  

You can choose with what to go and delete what you don't need.

  

## Sanity Connection

Currently this repository has a set up Sanity (www.sanity.io) connection. Simply change the credentials in the `.env` file and you are good to go. If there is no backend needed, simply delete the `lib` file and the `files` in the `hooks` folder + run a `npm uninstall` on all `sanity packages`.

  

### Query language: groq

The content is queried in with `groq`, which is similar to `graphql`.

* How to: https://www.sanity.io/docs/how-queries-work

* Cheat Sheet: https://www.sanity.io/docs/query-cheat-sheet

  

You can preview the response object in the `vision` tab in the `sanity studio`. There is an example query set up in `/lib/queries`.

  

## Dependency Versions

  

  

Next.js: `11.1.0`

  

React + DOM: `17.0.2`

  

Node: `v14.16.0`

  

  

## Authors

  

  

Rebecca Balogh @samesamestudio
