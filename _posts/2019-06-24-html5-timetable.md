---
layout: post
title:  "<table>을 이용한 시간표"
date:   2019-06-24
categories: html5
---
<style>
  table {
    border-radius: 1em;
    font-size: 20px;
    text-align: center;
    color: #043255;
    overflow: hidden;
  }
  th {
    background-color: #498da7;
    padding: 10px;
    color: white;
  }
  td:first-child {
    font-weight: bold;
  }
  td {
    padding: 10px;
    background-color: #80bad0;
  }
</style>

<h1>19년 1학기 시간표</h1>
<hr>

<table border="1">
  <thead>
    <tr>
      <th>/</th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1교시 (09:00~)</td>
      <td></td>
      <td rowspan="6"></td>
      <td rowspan="3">웹컨텐츠제작기술</td>
      <td rowspan="5"></td>
      <td rowspan="9"></td>
    </tr>
    <tr>
      <td>2교시 (10:00~)</td>
      <td rowspan="2">자료구조응용</td>
    </tr>
    <tr>
      <td>3교시 (11:00~)</td>
    </tr>
    <tr>
      <td>4교시 (12:00~)</td>
      <td rowspan="4"></td>
      <td></td>
    </tr>
    <tr>
      <td>5교시 (13:00~)</td>
      <td rowspan="2">프로그래밍언어구성론</td>
    </tr>
    <tr>
      <td>6교시 (14:00~)</td>
      <td>프로그래밍언어구성론</td>
    </tr>
    <tr>
      <td>7교시 (15:00~)</td>
      <td>운영체제</td>
      <td rowspan="3">자바스크립트</td>
      <td rowspan="3"></td>
    </tr>
    <tr>
      <td>8교시 (16:00~)</td>
      <td>데이터베이스</td>
      <td>자료구조응용</td>
    </tr>
    <tr>
      <td>9교시 (17:00~)</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
