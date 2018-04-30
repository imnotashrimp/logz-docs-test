---
layout: article
title: Contributing to docs
collection: about
this-page-toc: true
contributors:
- imnotashrimp
- proudboffin
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
Info boxes comprise a `<div class="info-box">` container.

Info boxes come in one of five CSS classes: `note`, `warning`, `gotcha`, `tip`, `help`. Icon and heading styling is handled in CSS, so contributors only need to worry about the class name and box content.


#### Notes
```html
<div class="info-box note">Content</div>
```
<p> </p>
<div class="info-box note">Notes are non-actionable. They're more important than the surrounding text but less important than warnings. Could something bad happen if the user ignores this note? If yes, make it a note. Otherwise, make it a warning.</div>

#### Warnings
```html
<div class="info-box warning">Content</div>
```
<p> </p>
<div class="info-box warning">Use warnings when the user could cause damage that's difficult or impossible to recover from. If you need something less severe than a warning, consider a gotcha or a note.</div>

#### Gotchas
````html
<div class="info-box gotcha">Content</div>
````
<p> </p>
<div class="info-box gotcha">Gotchas help the user work through common trip-up points. If the user could cause damage by ignoring the gotcha, consider a warning instead.</div>

#### Pro tips
````html
<div class="info-box tip">Content</div>
````
<p> </p>
<div class="info-box tip">Pro tips convey best practices and good actions to ensure success. Think of these as a little more proactive than gotchas.</div>
