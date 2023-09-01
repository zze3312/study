/*
 * 1. var 선언자 특성
 *   >> 중복선언 가능
 *   >> 일반변수 선언시 호이스팅
 *      ※ 호이스팅 : 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것을 의미함
 *                  변수가 함수내에서 정의되었을 경우 선언이 함수의 최상위로, 함수 바깥에서 정의되었을 경우 전역 컨텍스트의 최상위로 변경
 *   >> for문 초기화 식에서 변수 선언시 호이스팅 : 변수 사용시 변수선언하지 않았지만 호이스팅됨
 *      ex)
 *          console.log(i);
 *
 *          for(var i = 0; i < 3; i++){
 *              console.log("test i = " + i);
 *          }
 *
 *          --------------------------------------------
 *           > undefined
 *           > test i = 0
 *           > test i = 1
 *           > test i = 2
 *          ---------------------------------------------
 *   >> if문 내에서 변수 선언시 호이스팅 : if문 내부에 선언된 변수가 외부에 선언된 변수 위로 끌어 올려짐
 *      ex)
 *          console.log(num);
 *
 *          if(num !== 10) {
 *              var num = 20;
 *              console.log("num !== 10");
 *          } else{
 *              console.log("num === 10");
 *          }
 *
 *          console.log("num = " + num);
 *          --------------------------------------------
 *           > undefined
 *           > num !== 10
 *           > num = 20
 *          --------------------------------------------
 *
 * 2. let 선언자
 *   >> 중복 선언 불가능
 *   >> 호이스팅 발생하지 않음
 *   >> 제어문 중괄호 블록 내부에서 변수선언
 *
 * 3. const 선언자
 *   >> 상수 선언
 *   >> 상수를 선언과 동시에 초기화 해야함
 *   >> 초기값 설정 이후 값 할당 불가
 *   >> 중복 선언 불가능
 *
 * 4. Symbol 타입
 *   >> 사용방법 - Symbol() 사용 : const LINE = Symbol();
 *   >> Symbol의 설명 : const LINE = Symbol("line"); ~~~ Line.toString();
 *   >> 심볼 사용과 상수 사용 비교
 *      상수)
 *          const CONST_VALUE1 = "1";
 *          const CONST_VALUE2 = "1";
 *
 *          console.log(VALUE1 === VALUE2) // > true
 *
 *      심볼)
 *          const SYMBOL_VALUE1 = Symbol("1");
 *          const SYMBOL_VALUE2 = Symbol("1");
 *          let let_value = SYMBOL_VALUE1;
 *
 *          console.log(SYMBOL_VALUE1 === SYMBOL_VALUE2)  // > false
 *          console.log(SYMBOL_VALUE1 === let_value)  // > true
 *
 * */
