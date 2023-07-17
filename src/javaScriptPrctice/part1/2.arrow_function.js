/*
 * 5. 화살표함수
 *   >> 화살표 함수 작성법
 *      1) 매개변수가 없을 때 - function을 생략해도 됨
 *         ex)
 *            const f = function() { return "100" };
 *            const af = () => { return "100" };
 *      2) 매개변수가 하나일 때 - 괄호 생략 가능
 *         ex)
 *            const f = function(a) { return 100 + a };
 *            const af = (a) => { return 100 + a };
 *            const af2 = a => { return 100 + a };
 *      3) 매개변수가 2개 이상일 때 - 괄호 생략 불가
 *         ex)
 *            const f = function(a, b) { return a + b };
 *            const af = (a, b) => { return a + b };
 *   >> 화살표 함수와 this
 *      일반 함수)
 *      const calc = {
 *          firstNumber: 100,
 *          secondNumber: 20,
 *          print: function(){
 *              // this 는 calc 객체를 가리킴
 *              console.log(this);
 *              // > {firstNumber: 100, secondNumber: 20, print: ƒ}
 *              function add(){
 *                  // this가 전역개체를 가리킴
 *                  console.log(this);
 *                  // > Window {window: Window, self: Window, document: document, name: '', location: Location, …}
 *                  return this.firstNumber + this.secondNumber;
 *              }
 *              console.log(this.firstNumber + " + " + this.secondNumber + " = " + add() );
 *              // > 100 + 20 = NaN
 *          }
 *      }
 *
 *      화살표 함수)
 *      const calc = {
 *          firstNumber: 100,
 *          secondNumber: 20,
 *          print: function(){
 *              const add = () => {
 *                  // 화살표함수 표현식에서는 함수를 정의할 때 this를 calc 객체로 고정시킴
 *                  console.log(this);
 *                  // > {firstNumber: 100, secondNumber: 20, print: ƒ}
 *                  return this.firstNumber + this.secondNumber;
 *              }
 *              console.log(this.firstNumber + " + " + this.secondNumber + " = " + add());
 *              // > 100 + 20 = 120
 *          }
 *      }
 * 6. for of 문
 *   >> 배열의 각 요소를 순회함
 *   >> 문자열을 이루는 문자요소를 순회함
 *   >> for in 문처럼 객체의 프로퍼티를 열거하지는 않음
 * */
