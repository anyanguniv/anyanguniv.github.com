---
layout: post
title:  "여러 모서리 연습"
date:   2019-06-24
categories: css3
---

<style>
  .stylish p {	background : #90D000;
width : 300px;
padding : 20px; }
  .stylish #round1 { border-radius : 50px; }
  .stylish #round2 { border-radius : 0px 20px 40px 60px; }
  .stylish #round3 { border-radius : 0px 20px 40px; }
  .stylish #round4 { border-radius : 0px 20px; }
  .stylish #round5 { border-radius : 50px; border-style : dotted; }
</style>

<div class="stylish">
  <h3>둥근 모서리 테두리</h3>
  <hr>
  <p id="round1">반지름 50픽셀의 둥근 모서리</p>
  <p id="round2">반지름 0, 20, 40, 60 둥근 모서리</p>
  <p id="round3">반지름 0, 20, 40, 20 둥근 모서리</p>
  <p id="round4">반지름 0, 20, 0, 20 둥근 모서리</p>
  <p id="round5">반지름 50의 둥근 점선 모서리</p>
</div>
