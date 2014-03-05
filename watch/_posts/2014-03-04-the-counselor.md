---
published: true
layout: watch
categories: watch
series-id: the-counselor

assets: 2014-the-counselor
stylesheet: true
javascript: true
---

{% assign series = site.data.watch | find_first : "id", page.series-id %}

<div class="page-section section-first the-counselor-bg-1 section-light" data-stellar-background-ratio="0.9">
  <div class="the-counselor-bg-2-wrapper">
    <div class="the-counselor-bg-2" data-stellar-background-ratio="0.8"></div>
  </div>

  <div class="row">
    <div class="medium-6 large-4 columns">
    </div>
    <div class="medium-6 large-7 columns">
      <h1 class="series-title">{{ series.title }}</h1>
      <p>{{ series.description_medium }}</p>
      <p><a href="#messages" class="action">Watch series <i class="icon icon-arrow-down-2"></i></a></p>
    </div>
  </div>
</div>

{{ if series.quote }}
<div class="page-section section-light the-counselor-2">
<div class="row">
  <div class="medium-12 columns">
    <blockquote class="quote-large">
      <p>“{{ series.quote }}”</p>
      <cite>{{ series.quote_cite }}</cite>
    </blockquote>
  </div>
</div>
</div>
{{ endif }}
