---
published: true
layout: watch
categories: watch
series-id: the-counselor

assets: 2014-the-counselor
stylesheet: true
javascript: true
skrollable: false
---

{% assign series = site.data.watch | find_first : "id", page.series-id %}

<div class="page-section section-first section-light">
<div class="the-counselor-1 contain">

  <section class="slide-1">
    <div class="row">
      <div class="medium-6 medium-centered columns text-center">
        <h1>{{ series.title }}</h1>
        <p>{{ series.description_small }}</p>
        <p>
          <a href="#messages"
             class="action"
             >
             Watch series <i class="icon icon-play-2"></i>
          </a>
          <a href="#"
             class="action learn-more"
             >
             Learn More <i class="icon icon-play-1"></i>
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
</div>

{{ if series.quote }}
<div class="page-section the-counselor-2">
<div class="row">
  <div class="medium-12 columns">
    <blockquote class="quote-large">
      <p>“When Jesus asks the questions, He sheds light on who we really are and what we truly believe. Find out how His questions reveal our hearts in The Counselor.”</p>
      <cite>{{ series.quote_cite }} &nbsp; <a class="tweet-this" href="http://twitter.com/home/?status=“Some text goes here that captures the essence of some pretty sweet quotage.”"><i class="icon"></i>tweet this quote</a></cite>
    </blockquote>
  </div>
</div>
</div>
{{ endif }}
