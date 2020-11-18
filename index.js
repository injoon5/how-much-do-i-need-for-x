var t = new Date(); // 오늘 날짜 객체를 생성합니다.
var nowYear = t.getFullYear(); // 오늘 날짜의 연도 정보를 가져옵니다.

// 현재 연도에 12월 31일 날짜 객체를 생성합니다.
var theDate = new Date(nowYear,11,04)
// 연말까지 남은 시간 = 연말 날짜 = 현재 날짜
var diffDate = theDate-t;
// 밀리초를 일로 계산합니다. // Math.ceil() 지정된 숫자나 표현식의 올림값을 반환
var result = Math.ceil( diffDate / (60*1000*60*24));
// 남은 일수를 출력합니다.

var moneyleft = result*1500
document.write("오늘부터 12/4 까지는 " +
    "<strong>" + result + "</strong>" + "일 남았습니다. <br>");
document.write("남은 돈은 " +
    "<strong>" + moneyleft + "</strong>" + "원 남았습니다.");
