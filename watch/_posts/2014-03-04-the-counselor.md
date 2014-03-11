---
published: true
layout: watch
categories: watch
series-id: the-counselor

assets: 2014-the-counselor
stylesheet: true
javascript: true
skrollable: true
---

{% assign series = site.data.watch | find_first : "id", page.series-id %}

<div class="page-section section-first section-light">
  <div class="the-counselor-1-ender" data-0="display:none;" data-100="display:block;" data-2400="display:block;" data-2401="display:none;"></div>
  <div class="the-counselor-1">

    <div class="row">

      <div class="medium-12 large-8 medium-centered text-center columns">
        <div class="type type-first">
          <h1>{{ series.title }}</h1>
          <p>{{ series.description_medium }}</p>

          <p><a href="#messages"
             class="action"
             >
             Watch on demand <i class="icon icon-play-2"></i>
          </a>

          <a href="#"
             class="action"
             >
             Watch Live in 14min 28sec <i class="icon icon-play-2"></i>
          </a></p>

          <div class="please-scroll">
            <span>Scroll</span>
            <div class="scroll-arrow"><i class="icon-arrow-down-1"></i></div>
          </div>

          <div class="please-touch">
            <span>Start Scrolling</span>
            <div class="touch-status"></div>
            <div class="touch-finger"></div>
            <div class="touch-active"></div>
          </div>
        </div>

        <div class="skrollr-elements">
          <div class="couch-bg" data-0="display:none;" data-200="display:block;" data-2500="opacity:1; display:block;" data-2600="opacity:0; display:none;"></div>
          <div class="couch" data-2500="opacity:1; display:block;" data-2600="opacity:0; display:none;"></div>
          <div class="person person-1 state-1" data-0="display:none;" data-250="display:block; opacity:0; top:150px" data-450="opacity:1; top:200px; display:block;" data-451="opacity:0; display:none;"></div>
          <div class="person person-1 state-2" data-0="display:none;" data-450="display:block; opacity:0;" data-451="opacity:1" data-471="opacity:1; display:block;" data-472="opacity:0; display:none;"></div>
          <div class="person person-1 state-3" data-0="display:none;" data-471="display:block; opacity:0;" data-472="opacity:1" data-900="opacity:1; display:block;" data-1100="opacity:0; display:none;"></div>

          <div class="person person-2 state-1" data-0="display:none;" data-1000="display:block; opacity:0; top:150px" data-1200="opacity:1; top:200px; display:block;" data-1201="opacity:0; display:none;"></div>
          <div class="person person-2 state-2" data-0="display:none;" data-1200="display:block; opacity:0;" data-1201="opacity:1" data-1221="opacity:1; display:block;" data-1222="opacity:0; display:none;"></div>
          <div class="person person-2 state-3" data-0="display:none;" data-1221="display:block; opacity:0;" data-1222="opacity:1" data-1700="opacity:1; display:block;" data-1800="opacity:0; display:none;"></div>

          <div class="person person-3 state-1" data-0="display:none;" data-1800="display:block; opacity:0; top:150px" data-2000="opacity:1; top:200px; display:block;" data-2001="opacity:0; display:none;"></div>
          <div class="person person-3 state-2" data-0="display:none;" data-2000="display:block; opacity:0;" data-2001="opacity:1" data-2021="opacity:1; display:block;" data-2022="opacity:0; display:none;"></div>
          <div class="person person-3 state-3" data-0="display:none;" data-2021="display:block; opacity:0;" data-2022="opacity:1" data-2500="opacity:1; display:block;" data-2600="opacity:0; display:none;"></div>
        </div>

        <div class="type">
          <blockquote>
            <p>“What if cats actually have their own internet, full of pictures of humans?”</p>
            <cite>{{ series.quote_cite }}</cite>
          </blockquote>
        </div>

        <div class="thin-image thin-image-1"></div>

        <div class="type">
          <blockquote>
            <p>“What if the comet that killed the dinosaurs was actually a UFO, and we are the aliens?”</p>
            <cite>{{ series.quote_cite }}</cite>
          </blockquote>
        </div>

        <div class="thin-image thin-image-2"></div>

        <div class="type">
          <blockquote>
            <p>“What if I'm the only person alive that can't read minds, and everyone's lying to me?”</p>
            <cite>{{ series.quote_cite }}</cite>
          </blockquote>
        </div>

        <div class="thin-image thin-image-2"></div>

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
