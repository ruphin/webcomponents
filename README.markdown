# Web Component Course and accompanying presentation

## Course

This project contains a little course on the WebComponent v1 specification.

In the 'course' directory you will find 18 HTML files, each with a small lesson introducing a new concept. The lessons come in the form of comments and other explanatory texts in the source code. Simply open the files in a v1 compliant browser (Chrome or Opera) to see the results.

If you have any comments or suggestions regarding the contents of the course, please create an issue on this repository, or send me a message directly.

## Website

The `app` directory contains the course website, with the lessons and working demos. It is served and built with [Vite](https://vite.dev):

```sh
npm install
npm run dev      # start a development server
npm run build    # build the site into dist/
npm run preview  # serve the built site
```

The custom elements, web components polyfills, highlight.js and the lesson demos live in `app/public` and are served as-is.

To package the built site in the `ruphin/proxy` Docker image (nginx), run `npm run docker`. `npm run docker:push` also pushes the image.

## Presentation

The project also contains a small presentation on the subject in the `presentation` directory. Run it with:

```sh
cd presentation
npm install
npm run dev
```

Use `npm run build` to build it into `presentation/dist`, and `npm run deploy` to publish it with surge.
