const log = console.log;
var a= 'abc';
// abd 와 abcdef String은 완전히 별개의 데이터이다.
a = a + 'def';

var b = 5;
// c 데이터 인 5는 이미 b에서 사용한 데이터영역에 존재하니 그대로 재활용한다.
var c = 5;
// 데이터 영역의 5를 7로 바꾸는 것이 아닌 완전히 새로운 데이터 영역에 7을 할당하고 사용한다.
b = 7;

/*
  기본형 데이터는 모두 불변 값 입니다.
*/