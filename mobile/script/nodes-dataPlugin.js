var currrrentDay;
var currentMonth;
var currrentYear;
var startMonthDay;


/**
	初始化日期（今天和这月的第一天）
*/
function init(day) {
	var today;

	if(day == null)
		today = new Date();
	else today = day;

	currentDay = today.getDate();
	currentMonth = today.getMonth();
	currentYear = today.getFullYear();

	var startMonthFirstDay = new Date(currentYear,currentMonth,1);//定义这个月的第一天（一号）

	startMonthDay = startMonthFirstDay.getDay();//getDay() 返回这月的第一天（一号）是星期几（1-7）

	if(startMonthDay == 0)
		startMonthDay = 7;//标准的day值是（1，2，3，4，5，6，0）这里记为7便于理解 -》sunday

	console.log("currentDay:" +currentDay);
	console.log("currentMonth:" + currentMonth);
	console.log("currentYear:" + currentYear);
	
	console.log("startMonthFirstDay:" + startMonthFirstDay);
	console.log("startMonthDay:" + startMonthDay);

}

/**
	绘制表格的一行 给周日加上class
*/
function row() {
	var z = $("<tr></tr>");
	for(var i = 0; i < 7; i++) {
		if(i == 6)
			z.append($("<td></td>").addClass("sunday"));
		else
			z.append($("<td></td>"));
	}

	return z;
}

/**

*/
function days(startMonthDay) {
	for(var i = 0; i < 42; i++) {
		$("td").eq(i).append(new Date(currentYear,currentMonth,i - startMonthDay + 2).getDate());
		//$("td").eq(i).append(currentYear,currentMonth,currentMonth.getDate());

	}
}


/**

*/
$(function() {
	init(new Date());
	$("table").append("<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th>" + 
		"<th>Fri</th><th>Sat</th><th>Sun</th></tr>");
	for(var i = 0; i < 6; i++) {
		if((i > 3) && 
			break;
		$("table").append(row());
	}

	days(startMonthDay);
	$("th").addClass("headercells");
	$("tr:odd").addClass("odd");


	var to  = $("td").eq(startMonthDay + currentDay - 2);
	to.addClass("today").attr({title:"今天是" + (currentMonth + 1) + "月" + to.text() + "号"});

	/*不是本月的日期*/
	$("td").slice(0,startMonthDay -1).css({
		opacity:"0.3"
	});
	$("td").slice(startMonthDay -1 + new Date(currentYear,currentMonth + 1,0).getDate()).css({
		opacity:"0.3"
	});

	//$("tr").children().has();

});


