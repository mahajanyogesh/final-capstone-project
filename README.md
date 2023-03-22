# How to run the project


# Development

## Assets Source

* **SASS/PostCSS** files are located under `src/scss/`
* **JavaScript** files with support of latest ECMAScript _ES6 / ECMAScript 2016(ES7)/ etc_ files are located under `src/js/`
* **Image** files are located under `src/images/`
* **Font** files are located under `src/fonts/`
* **HTML** files are located under `src/`
  * It will **automatically** build **all HTML files** placed under `src/` directory, no need to manually configure each template anymore!

## Build Assets

### One time build assets for development

```sh
$ npm run build
```

### Build assets and enable source files watcher

```sh
$ npm run watch
```

This command is suitable if you develop with external web server.

> **Note:** File watching does not work with *NFS* (*Windows*) and virtual machines under *VirtualBox*. Extend the configuration in such cases by:

```js
module.exports = {
  //...
  watchOptions: {
    poll: 1000 // Check for changes every second
  }
};
```

### Start a development server - reloading automatically after each file change.

```sh
$ npm run dev
```

# Production 

## Build Assets

Optimize assets for production by:

```sh
$ npm run production
```

## Get Built Assets

* _CSS_ files are located under `/dist/css/`
* _JavaScript_ files with support of _ES6 / ECMAScript 2016(ES7)_ files are located under `/dist/js/`
* _Images_ are located under `/dist/images/`
  * Images part of the _design_ (_usually referenced in the CSS_) are located under `/dist/images/design/`
  * Images part of the _content_ (_usually referenced via `<img>` tags_) are located under `/dist/images/content/`
* _Fonts_ are located under `/dist/fonts/`
* _HTML_ files are located under `/dist/`

# Run Code Style Linters

## SASS

```sh
$ npm run lint:sass
```
## JavaScript

```sh
$ npm run lint:js
```

# Additional Tools

## Run Assets Bundle Analyzer

```sh
$ npm run stats
```

> This will open the visualisaion on the default configuraiton URL `localhost:8888`, you can change this URL or port following the [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-cli) documentation.

## Continuous Integration

This boilerplate template contains integration with [Travis CI](https://travis-ci.org/). The build system runs all linting scripts and deploys production optimized pages to _GitHub_ pages upon push to the `master` branch. However, note that this deployment flow only works for _Project Pages_, as User and Organization pages [only support the master branch flow](https://help.github.com/articles/user-organization-and-project-pages/).

For more information on how to set up alternative deployment processes, check out the [Travis CI documentation on deployment](https://docs.travis-ci.com/user/deployment). The service can deploy to dozens of cloud providers, including Heroku, AWS, and Firebase.


# Ecommerce website

The web project is an eCommerce fashion website that needs to be updated to optimize the mobile view. The reference file has provided specific requirements for the mobile view that need to be implemented.

## Website Reference

https://www.figma.com/file/aon7PTsZujBUjYb4LXEWqx/eCommerce-Fashion-Website-(Community)?node-id=0%3A1&t=cHZFBMpMxkfKfMZZ-

Font: https://fonts.google.com/specimen/Arimo?query=+Arimo

## Mobile Requriement

The mobile view should be optimized by making the

- Header fixed

- Footer: 4 col to 2 col

- converting the two-column layout to one column

- adjusting the images to be responsive

- Headings should be adjusted from 36px to 24px

## Breakpoints

tabs: ≥768px

large: ≥992px

## Parameters

| Parameter          | #1                                                                                                                                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Approach           | The approach for this project is to update the existing website to optimize the mobile view as per the reference file.                                                                             |
| Visual Correctness | The website should maintain its visual correctness throughout the changes made for the mobile view. All the colors, fonts, and images should be consistent with the existing website.              |
| Responsiveness     | The mobile view should be fully responsive and adapt to all (check breakpoints section) screen sizes. The changes made for the mobile view should not affect the desktop view of the website.      |
| SCSS               | The project should utilize SCSS as the preprocessor for CSS. The SCSS files should be organized and easy to maintain.                                                                              |
| Accessibility      | The website should be accessible to all users, including those with disabilities. The project should follow the Web Content Accessibility Guidelines (WCAG) to ensure the website's accessibility. |
| Coding Standard    | The project should follow a consistent coding standard to ensure the code's readability and maintainability.                                                                                       |

### Tech Stack

The tech stack for this project includes

- HTML5

- SCSS, and

- JavaScript

- Webpack 

- ESlint and Prettier

Overall, the web project's objective is to optimize the mobile view of an eCommerce fashion website as per the reference file. The project requirements should ensure that the website is fully responsive, accessible, and visually consistent. Additionally, the project should utilize SCSS and follow a consistent coding standard.
