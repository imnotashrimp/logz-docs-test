---
layout: article
title: Contributing to docs
collection: about
this-page-toc: true
menus: about
---

## Logz.io feature graphics
These are pretty simple to use, so users shouldn't run into trouble updating feature graphics.

To start, the writer just needs to create an empty `<div>` container with a `feature-box` class.

Like so: `<div class="feature-box"></div>`

<div class="feature-box"></div>


See that gray line? That's the feature box. Of course, this box has no content, so we'll add one of three classes (`enterprise`, `pro`, or `community`). A linked javascript file takes care of all the content. The samples below show how it's done.

#### Enterprise plan
`<div class="feature-box enterprise"></div>`
<div class="feature-box enterprise"></div>

#### Pro plan
`<div class="feature-box pro"></div>`
<div class="feature-box pro"></div>

#### Community plan
`<div class="feature-box community"></div>`
<div class="feature-box community"></div>

### Info boxes
Info boxes comprise a `<div class="info-box">` container and a single `<p>` child. The `<p>` child takes no classes of its own.

Jekyll ignores Markdown newlines in HTML tags, so you'll need to use the `<br />` tag to make a line break. Use line breaks sparingly.

Info boxes come in one of five CSS classes: `note`, `warning`, `gotcha`, `tip`, `help`. Icon and heading styling is handled in CSS, so contributors only need to worry about the class name and box content.


#### Notes
```html
<div class="info-box note">
  <p>Content</p>
</div>
```
<p> </p>
<div class="info-box note"><p>Notes are non-actionable. They're more important than the surrounding text but less important than warnings. <br />
Could something bad happen if the user ignores this note? If yes, make it a note. Otherwise, make it a warning.</p></div>

#### Warnings
```html
<div class="info-box warning">
  <p>Content</p>
</div>
```
<p> </p>
<div class="info-box warning"><p>Use warnings when the user could cause damage that's difficult or impossible to recover from. If you need something less severe than a warning, consider a gotcha or a note.</p></div>

#### Gotchas
````html
<div class="info-box gotcha">
  <p>Content</p>
</div>
````
<p> </p>
<div class="info-box gotcha"><p>Gotchas help the user work through common trip-up points. If the user could cause damage by ignoring the gotcha, consider a warning instead.</p></div>

#### Pro tips
````html
<div class="info-box tip">
  <p>Content</p>
</div>
````
<p> </p>
<div class="info-box tip"><p>Pro tips convey best practices and good actions to ensure success. Think of these as a little more proactive than gotchas.</p></div>

#### More info
````html
<div class="info-box help">
  <p>Content</p>
</div>
````
<p> </p>
<div class="info-box help"><p>Use the more info box to route the user to resources that give them more information, like videos, blog entries, or other help articles. (I may just take this out and store all this stuff in a "Related links" section at the bottom of articles.)</p></div>
