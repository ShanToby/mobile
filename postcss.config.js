const postcss = require('postcss');

module.exports = (css) => {
  return postcss([
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ])
    .process(css, { from: undefined })
    .then(result => {
      return result.css;
    });
};
