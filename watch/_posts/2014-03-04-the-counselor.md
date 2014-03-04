---
published: true
layout: watch
categories: watch
series-id: the-counselor

assets: /watch/assets/2014-the-counselor/
stylesheet: false
javascript: false
---

{% assign series = site.data.watch | find_first : "id", page.series-id %}

<div class="page-section section-first">
  <div class="row">
    <div class="medium-6 large-4 columns">
      <h1 class="text-red">{{ series.headline }}.</h1>
      <p>{{ series.description_medium | newline_to_br }}</p>
      <p><a href="#messages" class="action">Watch series <i class="icon icon-arrow-down-2"></i></a></p>
    </div>
    <div class="medium-6 large-7 columns">
      <img class="padded" data-interchange="[{{ series.image_medium }}, (default)], [{{ series.image_large }}, (medium)]" alt="{{ series.title }}" />
      <noscript><img class="padded" src="{{ series.image_small }}" alt="{{ series.title }}" /></noscript>
    </div>
  </div>

  {{ if series.quote }}
    <div class="row padded">
      <div class="medium-12 columns">
        <blockquote class="quote-large">
          <p>“{{ series.quote }}”</p>
          <cite>{{ series.quote_cite }}</cite>
        </blockquote>
      </div>
    </div>
    {{ endif }}
</div>
