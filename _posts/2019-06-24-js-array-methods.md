---
layout: post
title:  "Array 객체의 메소드 활용"
date:   2019-06-24
categories: js
---

<script>
	var a = new Array("쓰시", "사시미", "마끼");
	var b = new Array("타코야끼");
	var c;

  function pr(msg, arr) { document.write(msg + arr.toString() + "<br>"); }

	pr("0.배열 a = ", a);
	pr("0.배열 b = ", b);
  document.write("<hr>");

	c = a.concat(b);
				pr("1. c = a.concat(b) 처리후 c = ", c);
				pr("2. c = a.concat(b) 처리후 a = ", a);

	c = a.join("##");
				pr("3. c = a.join(\"##\") 처리후 c = ", c);
				pr("4. c = a.join(\"##\") 처리후 a = ", a);

	c = a.slice(1, 2);
				pr("5. c= a.slice(1, 2) 처리후 c = ", c);
				pr("6. c= a.slice(1, 2) 처리후 a = ", a);

	c = a.sort();
				pr("7. c= a.sort() 처리후 c = ", c);
				pr("8. c= a.sort() 처리후 a = ", a);

  document.write("<hr>");
	var d = new Array(5,2,3,1,4);
				pr("10. 배열 d = ", d);
	
	d.sort();		pr("11. d.sort() = ", d);
	d.reverse();		pr("12. d.reverse() = ", d);

	pr("13. d.indexOf(2) = ", d.indexOf(2));

	d.pop();		pr("14. d.pop() = ", d);
	d.shift();		pr("15. d.shift() = ", d);
	d.push(7);		pr("16. d.push(7) = ", d);
	d.unshift(8);		pr("17. d.unshift(8) = ", d);
	
  document.write("<hr>");
	var e = new Array("유수봉","수리봉","비로봉","한라봉","꼬봉");	
				pr("20. 배열 e = ", e);
	e.sort();		pr("21. e.sort() = ", e);
				document.write("22. e[1] = ", e[1]);
</script>
