---
layout: post
title:  "CSS의 여러 선택자(selector)"
date:   2019-06-24
categories: css3
---
<style>
  .stylish h3, li { 	color : brown; }				/* 태그 이름 셀렉터 */
	.stylish div > div > strong { background : yellow; }	/* 자식 셀렉터 */
	.stylish ul strong { color : dodgerblue; }			/* 자손 셀렉터 */
	.stylish .warning { color : red; }				/* class 셀렉터 */
	.stylish body.main { background : aliceblue; }		/* class 셀렉터 */
	.stylish #list { background : mistyrose; }			/* id 셀렉터 */
	.stylish #list span{ color : forestgreen; }			/* 자손 셀렉터 */
	.stylish h3:first-letter { color : red; }			/* 가상 클래스 셀렉터 */
	.stylish li:hover { background : yellowgreen; }		/* 가상 클래스 셀렉터 */
</style>

<div class="stylish">
<h3>Web Programming</h3>
  <hr>
  <div>
	<div>금일 <strong>학습 내용</strong>입니다.</div>
	<ul id="list">
 		<li><span>HTML5</span></li>
		<li><strong>CSS</strong></li>
		<li>JAVASCRIPT</li>
	</ul>
	<div class="warning">60점 이하는 F</div>
  </div>
</div>