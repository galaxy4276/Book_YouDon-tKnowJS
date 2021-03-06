var obj = {
  a: 1,
  b: 'bbb',
};

obj.a = 2;
/*
  변수영역, 데이터 영역 외에 객체의 변수 영역이 따로 존재한다.
  데이터 영역은 항시 불변성을 유지한다.

  변수영역에는 다른 값을 대입할 수 있다. ( 가변이다 )
  a 프로퍼티를 변경할 때 데이터 영역에서 2를 생성하고 변수 영역에서 값의 주소참조만 바뀐다.

  변수영역의 주소는 데이터 영역에 바인딩 된다.
 */

// 중첩 객체가 선언 된 경우
var obj2 = {
  x: 3,
  arr: [3, 4, 5],
};
