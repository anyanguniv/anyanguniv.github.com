---
layout: post
title:  "폰트 및 텍스트 꾸미기"
date:   2019-06-24
categories: css3
---
<style>
  .stylish {
    font-family : "Times New Roman", Serif;	font-size : large; 
  }
	.stylish h3 { text-align : right; font-family : "consolas", monospace; }			/* 오른쪽 정렬 */
	.stylish span { 	text-decoration : line-through; }	/* 중간 줄 */
	.stylish strong { text-decoration : overline; }		/* 윗줄 */
	.stylish .p1 { 	text-indent : 3em;		/* 3 글자 들여쓰기 */
		text-align : justify; }		/* 양쪽 정렬 */
	.stylish .p2 {	text-indent : 1em;		/* 1 글자 들여쓰기 */ 
		text-align : center; }		/* 중앙 정렬 */
</style>

<div class="stylish">
  <h3>텍스트 꾸미기</h3>
  <hr>
  <p class="p1">
    HTML의 태그만으로 기존의 워드 프로세서와 같이
    들여쓰기, 정렬, 공백, 간격 등과 
    세밀한 <span>텍스트 제어</span>를 할 수 없다. 
  </p>
  <p class="p2">
    그러나,	<strong>스타일 시트</strong>는 이를	 가능하게 한다. 
    들여쓰기, 정렬에 대해서 알아본다.
  </p>

  <h3>Consolas font</h3>
    <hr>
    <p style="font-weight:900">font-weight 900</p>
    <p style="font-weight:100">font-weight 100</p>
    <p style="font-style:italic">Italic Style</p>
    <p style="font-style:oblique">Oblique Style</p>
    <p>현재 크기의 <span style="font-size:1.5em">1.5배</span> 크기로</p>
</div>
