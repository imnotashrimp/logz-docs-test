tocbot.init({
  tocSelector: '.js-toc', // Where to render the table of contents.
  contentSelector: '.page-content', // Where to grab the headings to build the table of contents.
  headingSelector: 'h2, h3, h4' // Which headings to grab inside of the contentSelector element.
});
