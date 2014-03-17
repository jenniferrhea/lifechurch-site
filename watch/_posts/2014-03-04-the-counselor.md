---
published: true
layout: watch
categories: watch
series-id: the-counselor

assets: 2014-the-counselor
stylesheet: true
javascript: true
---

{% for series in site.data.watch %}
{% if series.id == page.series-id %}

<div class="page-section section-first section-light">
<div class="the-counselor-1 contain">
<div class="inner"></div>

  <section class="slide-1">
    <div class="row">
      <div class="medium-7 columns">
        <h1>{{ series.title }}</h1>
        <p>{{ series.description_medium }}</p>
        <p>

          {% for message in series.messages limit:1 %}
          <a href="javascript:void(0);"
             class=""
             data-video-player="{{message.video}}"
             >
             Watch Church Online in 14min 28sec <i class="icon icon-play-2"></i>
          </a>
          {% endfor %}

<br />
          <a href="#"
             class="learn-more"
             >
             Learn More <i class="icon icon-play-2"></i>
          </a>
        </p>
      </div>
    </div>
  </section>

  <div class="animation-elements">
    <div class="couch"></div>
    <div class="person" style="opacity:0;"></div>

    <blockquote class="quote-1" style="display:none;">
      <p>“What if cats actually have their own internet, full of pictures of humans?”</p>
    </blockquote>

    <blockquote class="quote-2" style="display:none;">
      <p>“What if the comet that killed the dinosaurs was actually a UFO, and we are the aliens?”</p>
    </blockquote>

    <blockquote class="quote-3" style="display:none;">
      <p>Our questions reveal more about our faith than our curiosities.</p>
    </blockquote>
  </div>

</div>
</div>

<div class="hide">
  <div class="person person-1 state-1"></div>
  <div class="person person-1 state-1 state-2"></div>
  <div class="person person-2 state-1"></div>
  <div class="person person-2 state-1 state-2"></div>
  <div class="person person-1-thin"></div>
  <div class="person person-2-thin"></div>
</div>

{% endif %}
{% endfor %}
