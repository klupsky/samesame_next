
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

  

  

## Styled Components

* [Documentation](https://styled-components.com/docs)

* [Best practice](https://www.joshwcomeau.com/css/styled-components/)

  

This boilerplate includes various concepts of styled components. It's free to decide what to use and what can be omitted.

Concepts such as: `Theming`, `CSS Variables in styled components`, `base styles`, `utlities`.

You can choose with what to go and delete what you don't need.

  ## Collaboration



Create `Issues` here in the repository or in `Clickup`. Make sure to always link your **Pull Requests** to the to-dos. This is important so we can keep track and review done tasks.


### Branches

1. 
`main`  the main branch should not be used for development. Merge functioning code to the  `main`  branch but don't use it for dev.

```
git pull origin main
```

this makes sure that you work with the latest files from the  `main`  branch. (Change the branch name to the data you need)

----------
2.
Create a new branch for every new component/functionality to make working together easier:

```
git checkout -b header
```

----------
3.
Once you have finished working on  `header`, stage your changes and push them to the  `header branch`.

```
git add .
```

stages all changes

----------
4.
```
git commit -m "your commit message"
```

commits the changes

----------
5.
```
git push origin header
```

pushes all commited changes to the selected branch on github repo.

----------

Go to the github repo and greate a new **Pull Request**. Add your changes and issues you worked on to keep track of development. Add @samesamestudio for a review if needed.

If the Pull Request fixes the issue, then merge it into  `main`  or  `staging`  (if available).

***Imporant***

**Don't forget to link the correct issues from github or clickup to keep track of done tasks!**

----------

```
git checkout main
```

Switches you back to the  `main`  branch. Make sure to  `git pull origin main`  the latest changes that you merged, before creating a new branch again.

## Configurations

  To ensure code consistency we use `eslint`, `prettier` and `path-alias`.

##### How to auto-fix problems with `eslint`:

Hover over the red underlined area:
![enter image description here](https://i.postimg.cc/YCGGyhF2/Bildschirmfoto-2021-06-06-um-16-33-39.png)

Right click and select the following:
![enter image description here](https://i.postimg.cc/y8Mgqshm/Bildschirmfoto-2021-06-06-um-16-33-47.png)

It also lets you **disable** rules if it's not needed for the file.

    You might have to install eslint globally and in your code editor.

**Importing modules with path-alias:**

`import { GlobalStyles } from  '@/styles/GlobalStyles';`
___
##### Further reading:

**ESlint**

  

  

> ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

  

  

Configs can be found in `.eslintrc.js` in the project root.

  

  

**Prettier**

  

  

> Prettier is an opinionated code formatter with support for JS, SCSS, CSS, JSX...

  

  

Configs can be found in `.prettierrc` in the project root.

  

  

**Path Alias**

  

  

> Path aliasing or aliases are preconfigured names used to replace long **paths** in files and resolve to certain directories on a codebase.

  

  

This project uses `@` for imports. `@/components/example.js`

  
  

## Dependency Versions

  

Next.js: `10.2.2`

React + DOM: `17.0.2`

Node: `v14.16.0`

  

## Authors

  

Rebecca Balogh @samesamestudio