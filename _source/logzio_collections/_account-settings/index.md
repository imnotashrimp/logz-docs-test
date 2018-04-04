---
layout: category-home
title: Account settings
collection: account-settings
permalink: /account-settings/
thisPageTOC: true
---

You base football-player! You crooked-nose knave! You puterell, you skalemar. You hedge-born levereter, you bedswerver fopdoodle! Ye olde mucksprout and mumblecrust. You rakefile skobberlotcher. Thou subtle, perjur’d, false, disloyal man! Thou art like a toad; ugly and venomous. A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality. Thou are pigeon-liver’d and lack gall. Thine face is not worth sunburning. You are as a candle, the better burnt out.

{% for file in site.account-settings %}
  {{ file.content }}
{% endfor %}


<!-- ### In this category
<ul>
  {% for file in site.account-settings %}
    {% if file.layout == "article" %}
      <li><a href="{{ file.url | prepend:site.baseurl }}">{{ file.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul> -->
