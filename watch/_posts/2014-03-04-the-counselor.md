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

<div class="person-1-test"></div>

<div class="page-section section-first section-light">
  <img src="/images/watch/2014-the-counselor/couch.png" width="1" height="1" border="0" alt="Preload" />
  <img src="/images/watch/2014-the-counselor/person-1.png" width="1" height="1" border="0" alt="Preload" />
  <img src="/images/watch/2014-the-counselor/person-2.png" width="1" height="1" border="0" alt="Preload" />
  <img src="/images/watch/2014-the-counselor/person-1-thin.png" width="1" height="1" border="0" alt="Preload" />
  <img src="/images/watch/2014-the-counselor/person-2-thin.png" width="1" height="1" border="0" alt="Preload" />

  <div class="the-counselor-1 contain">
    <div class="inner">
    </div>

    <div class="slide-1">
      <div class="row">
        <div class="medium-7 columns">
          <h1>{{ series.title }}</h1>
          <p>{{ series.description_medium }}</p>
          <p>

            {% for message in series.messages limit:1 %}
            <a href="javascript:void(0);"
               class=""
               data-video-player="{{message.video}}"
               onclick="ga('send', 'event', 'Series', 'Click', 'Live');">
               Visit Church Online <span data-churchonline-counter></span> <i class="icon icon-play"></i>
            </a>
            {% endfor %}

            <br />

            <a href="#"
               class="learn-more"
               onclick="ga('send', 'event', 'Series', 'Click', 'Learn More');">
               Learn More <i class="icon icon-play"></i>
            </a>
          </p>
        </div>
      </div>
    </div>

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


{% endif %}
{% endfor %}
