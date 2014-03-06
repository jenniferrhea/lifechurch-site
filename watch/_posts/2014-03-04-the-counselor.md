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

<div class="page-section section-first section-light">
  <div class="the-counselor-1">

    <div class="row">

      <a class="logo logo-2" href="/" data-0="opacity:0; display:none;" data-200="opacity:0; display:block;" data-300="opacity:1; display:block;" data-3450="opacity:1; display:block;" data-3600="opacity:0;display: none;"><span>LifeChurch.tv</span></a>

      <div class="medium-8 medium-centered text-center columns">
        <div class="type type-first" data-0="opacity:1; display:block;" data-150="opacity:0; display:none;">
          <h1>{{ series.title }}</h1>
          <p>{{ series.description_medium }}</p>
          <p><a href="#messages" class="action">Watch series <i class="icon icon-arrow-down-2"></i></a></p>
        </div>

        <div class="couch" data-3050="opacity:1; display:block;" data-3100="opacity:0; display:none;"></div>
        <div class="person state-1" data-150="opacity:0; top:270px" data-250="opacity:1; top:350px; display:block;" data-251="opacity:0; display:none;"></div>
        <div class="person state-2" data-250="opacity:0;" data-251="opacity:1" data-265="opacity:1 display:block;" data-266="opacity:0; display:none;"></div>
        <div class="person state-3" data-265="opacity:0;" data-266="opacity:1" data-1000="opacity:1; display:block;" data-1050="opacity:0; display:none;"></div>

        <div class="type" data-300="opacity:0" data-450="opacity:1" data-800="opacity:1; display:block;" data-900="opacity:0; display:none;">
          <blockquote>
            <p>“What if cats actually have their own internet, full of pictures of humans?”</p>
            <cite>{{ series.quote_cite }}</cite>
          </blockquote>
        </div>

        <div class="type" data-1000="opacity:0" data-1150="opacity:1" data-1800="opacity:1; display:block;" data-1900="opacity:0; display:none;">
          <blockquote>
            <p>“What if the comet that killed the dinosaurs was actually a UFO, and we are the aliens?”</p>
            <cite>{{ series.quote_cite }}</cite>
          </blockquote>
        </div>

        <div class="person state-1" data-1150="opacity:0; top:270px" data-1250="opacity:1; top:350px; display:block;" data-1251="opacity:0; display:none;"></div>
        <div class="person state-2" data-1250="opacity:0;" data-1251="opacity:1" data-1265="opacity:1; display:block;" data-1266="opacity:0; display:none;"></div>
        <div class="person state-3" data-1265="opacity:0;" data-1266="opacity:1" data-2000="opacity:1; display:block;" data-2050="opacity:0; display:none;"></div>

        <div class="type" data-1999="display:none;" data-2000="opacity:0; display:block;" data-2150="opacity:1;" data-2800="opacity:1;" data-2900="opacity:0;" data-2901="display:none;">
          <blockquote>
            <p>“What if I'm the only person alive that can't read minds, and everyone's lying to me?”</p>
            <cite>{{ series.quote_cite }}</cite>
          </blockquote>
        </div>

        <div class="person state-1" data-2150="opacity:0; top:270px" data-2250="opacity:1; top:350px; display:block;" data-2251="opacity:0; display:none;"></div>
        <div class="person state-2" data-2250="opacity:0;" data-2251="opacity:1" data-2265="opacity:1; display:block;" data-2266="opacity:0; display:none;"></div>
        <div class="person state-3" data-2265="opacity:0;" data-2266="opacity:1" data-3000="opacity:1; display:block;" data-3050="opacity:0; display:none;"></div>

      </div>
    </div>
  </div>
</div>

{{ if series.quote }}
<div class="page-section the-counselor-2">
<div class="row">
  <div class="medium-12 columns">
    <blockquote class="quote-large">
      <p>“When Jesus asks the questions, He sheds light on who we really are and what we truly believe. Find out how His questions reveal our hearts in The Counselor.”</p>
      <cite>{{ series.quote_cite }}</cite>
    </blockquote>
  </div>
</div>
</div>
{{ endif }}

<script src="/bower_components/skrollr/src/skrollr.js"></script>
