---
layout: category-home
title: About
collection: about
permalink: /about/
menus:
  header:
    identifier: about
---

You base football-player! You crooked-nose knave! You puterell, you skalemar. You hedge-born levereter, you bedswerver fopdoodle! Ye olde mucksprout and mumblecrust. You rakefile skobberlotcher. Thou subtle, perjur’d, false, disloyal man! Thou art like a toad; ugly and venomous. A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality. Thou are pigeon-liver’d and lack gall. Thine face is not worth sunburning. You are as a candle, the better burnt out.

### In this category
<ul>
  {% for file in site.account-settings %}
    {% if file.layout == "article" %}
      <li><a href="{{ file.url | prepend:site.baseurl }}">{{ file.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>