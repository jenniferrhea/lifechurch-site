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

      <a class="logo logo-2" href="/" data-200="opacity:0; display:block;" data-300="opacity:1; display:block;" data-4800="opacity:1; display:block;" data-4900="opacity:0; display:none;"><span>LifeChurch.tv</span></a>

      <div class="medium-8 medium-centered text-center columns">
        <div class="type type-first" data-0="opacity:1; display:block;" data-150="opacity:0; display:none;">
          <h1>{{ series.title }}</h1>
          <p>{{ series.description_medium }}</p>

          <div class="please-scroll">
            <span>Scroll</span>
            <div class="scroll-arrow"><i class="icon-arrow-down-1"></i></div>
          </div>
        </div>

        <div class="couch" data-4400="opacity:1; display:block;" data-4500="opacity:0; display:none;"></div>
        <div class="person person-1 state-1" data-250="opacity:0; top:150px" data-450="opacity:1; top:200px; display:block;" data-451="opacity:0; display:none;"></div>
        <div class="person person-1 state-2" data-450="opacity:0;" data-451="opacity:1" data-471="opacity:1; display:block;" data-472="opacity:0; display:none;"></div>
        <div class="person person-1 state-3" data-471="opacity:0;" data-472="opacity:1" data-1500="opacity:1; display:block;" data-1600="opacity:0; display:none;"></div>

        <div class="type" data-450="opacity:0" data-650="opacity:1" data-1500="opacity:1; display:block;" data-1600="opacity:0; display:none;">
          <blockquote>
            <p>“What if cats actually have their own internet, full of pictures of humans?”</p>
            <cite>{{ series.quote_cite }}</cite>
          </blockquote>
        </div>

        <div class="type" data-2000="opacity:0" data-2200="opacity:1; display:block;" data-3000="opacity:1; display:block;" data-3100="opacity:0; display:none;">
          <blockquote>
            <p>“What if the comet that killed the dinosaurs was actually a UFO, and we are the aliens?”</p>
            <cite>{{ series.quote_cite }}</cite>
          </blockquote>
        </div>

        <div class="person person-2 state-1" data-1800="opacity:0; top:150px" data-2000="opacity:1; top:200px; display:block;" data-2001="opacity:0; display:none;"></div>
        <div class="person person-2 state-2" data-2000="opacity:0;" data-2001="opacity:1" data-2021="opacity:1; display:block;" data-2022="opacity:0; display:none;"></div>
        <div class="person person-2 state-3" data-2021="opacity:0;" data-2022="opacity:1" data-3000="opacity:1; display:block;" data-3100="opacity:0; display:none;"></div>

        <div class="type" data-3500="opacity:0" data-3700="opacity:1; display:block;" data-4400="opacity:1; display:block;" data-4500="opacity:0; display:none;">
          <blockquote>
            <p>“What if I'm the only person alive that can't read minds, and everyone's lying to me?”</p>
            <cite>{{ series.quote_cite }}</cite>
          </blockquote>
        </div>

        <div class="person person-3 state-1" data-3300="opacity:0; top:150px" data-3500="opacity:1; top:200px; display:block;" data-3501="opacity:0; display:none;"></div>
        <div class="person person-3 state-2" data-3500="opacity:0;" data-3501="opacity:1" data-3521="opacity:1; display:block;" data-3522="opacity:0; display:none;"></div>
        <div class="person person-3 state-3" data-3521="opacity:0;" data-3522="opacity:1" data-4400="opacity:1; display:block;" data-4500="opacity:0; display:none;"></div>
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
