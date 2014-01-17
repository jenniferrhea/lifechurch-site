---
published: true
layout: watch
assets: /watch/assets/2014-stdb/
stylesheet: true
javascript: true
---

{% for series in site.data.watch %}
{% if series.title == 'Small Things Big Difference' %}

{% include watch-header.html %}

{% include watch-messages.html %}

{% endif %}
{% endfor %}
