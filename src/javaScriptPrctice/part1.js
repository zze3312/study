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
 *
 * 6. for of 문
 *   >> 배열의 각 요소를 순회함
 *   >> 문자열을 이루는 문자요소를 순회함
 *   >> for in 문처럼 객체의 프로퍼티를 열거하지는 않음
 *
 * 7. 비구조화 할당
 *   >> 비구조화 할당 이전 방식 - 객체의 프로퍼티별로 따로 변수를 선언하여 값을 할당
 *      let coffee = {
 *          name : "Americano",
 *          price : 3000
 *      };
 *
 *      let coffeeName;
 *      let coffeePrice;
 *
 *      coffeeName = coffee.name;
 *      coffeePrice = coffee.price;
 *
 *      console.log(coffeeName);
 *      console.log(coffeePrice);
 *      --------------------------------------------
 *       > Americano
 *       > 3000
 *      --------------------------------------------
 *   >> 비구조화 할당
 *      1) 기본적인 사용법 - 객체 리터럴과 비슷한 문법 사용 ( { 프로퍼티명 : 변수명, 프로퍼티명 : 변수명 ... } )
 *          let coffee = {
 *              name : "Americano",
 *              price : 3000
 *          };
 *
 *          let { name : coffeeName, price : coffeePrice } = coffee;
 *
 *          console.log(coffeeName);
 *          console.log(coffeePrice);
 *          --------------------------------------------
 *           > Americano
 *           > 3000
 *          --------------------------------------------
 *
 *      2) 프로퍼티 미존재 - 프로퍼티가 존재하지 않을 시 undefined로 값이 할당됨
 *          let coffee = {
 *              name : "Americano",
 *              price : 3000
 *          };
 *
 *          let { name : coffeeName, caffeine : coffeeCaffeine } = coffee;
 *
 *          console.log(coffeeName);
 *          console.log(coffeeCaffeine);
 *          --------------------------------------------
 *           > Americano
 *           > undefined
 *          --------------------------------------------
 *
 *      3) 기본값 설정 - 프로퍼티가 존재하지 않더라도 기본값 설정 가능
 *          let coffee = {
 *              name : "Americano",
 *              price : 3000
 *          };
 *
 *          let { name : coffeeName, caffeine : caffeeCaffeine = 500 } = coffee;
 *
 *          console.log(coffeeName);
 *          console.log(coffeeCaffeine);
 *          --------------------------------------------
 *           > Americano
 *           > 500
 *          --------------------------------------------
 *
 *      4) 프로퍼티명 생략 - 변수명만 쉼표로 구분해서 작성할 수 있음
 *          let coffee = {
 *              name : "Americano",
 *              price : 3000
 *          };
 *
 *          let { name, price } = coffee;
 *
 *          console.log(name);
 *          console.log(price);
 *          --------------------------------------------
 *           > Americano
 *           > 3000
 *          --------------------------------------------
 *
 * 8. Map 컬렉션 타임
 *   >> Map 객체 생성
 *      let map = new Map();
 *      console.log(map);
 *      --------------------------------------------
 *       > Map(0) {}
 *      --------------------------------------------
 *
 *   >> 초기데이터 지정해서 생성
 *      let map = new Map([["Apple","red"],["Melon","green"]]);
 *      console.log(map);
 *      --------------------------------------------
 *       > Map(2) {"Apple" => "red","Melon" => "green"}
 *      --------------------------------------------
 *
 *   >> Map 객체 데이터의 개수 확인
 *      let map = new Map([["Apple","red"], ["Melon","green"]]);
 *      console.log(map.size);
 *      --------------------------------------------
 *       > 2
 *      --------------------------------------------
 *
 *   >> 데이터 추가하기
 *      let map = new Map();
 *      map.set("Apple","red");
 *      map.set("Melon","green");
 *
 *      console.log(map);
 *      --------------------------------------------
 *       > Map(2) {"Apple" => "red","Melon" => "green"}
 *      --------------------------------------------
 *
 *   >> 데이터 값 읽기
 *      let map = new Map();
 *      map.set("Apple","red");
 *      map.set("Melon","green");
 *
 *      console.log(map.get("Apple"));
 *      console.log(map.get("Melon"));
 *      --------------------------------------------
 *       > red
 *       > green
 *      --------------------------------------------
 *
 *   >> 데이터 존재 확인
 *      let map = new Map();
 *      map.set("Apple", "red");
 *      map.set("Melon", "green");
 *
 *      console.log(map.has("Apple"));
 *      console.log(map.has("Banana"));
 *      --------------------------------------------
 *       > true
 *       > false
 *      --------------------------------------------
 *
 *   >> 데이터 삭제
 *      let map = new Map();
 *      map.set("Apple","red");
 *      map.set("Melon","green");
 *
 *      console.log(map.has("Apple"));
 *      console.log(map.has("Melon"));
 *
 *      map.delete("Apple");
 *
 *      console.log(map.has("Apple"));
 *      console.log(map.has("Melon"));
 *      --------------------------------------------
 *       > true
 *       > true
 *       > false
 *       > true
 *      --------------------------------------------
 *
 *   >> 모든 데이터 삭제
 *      let map = new Map();
 *      map.set("Apple","red");
 *      map.set("Melon","green");
 *
 *      console.log(map.has("Apple");
 *      console.log(map.has("Melon");
 *
 *      map.clear();
 *
 *      console.log(map.has("Apple");
 *      console.log(map.has("Melon");
 *      --------------------------------------------
 *       > true
 *       > true
 *       > false
 *       > false
 *      --------------------------------------------
 *
 *   >> 모든 키 값 열거
 *      let map = new Map([["Apple","red"],["Melon","green"]]);
 *
 *      var keyIter = map.keys();
 *
 *      for(var key of keyIter){
 *          console.log(key);
 *      }
 *      --------------------------------------------
 *       > Apple
 *       > Melon
 *      --------------------------------------------
 *
 *   >> 모든 값 열거
 *      let map = new Map([["Apple","red"],["Melon","green"]]);
 *
 *      var valueIter = map.values();
 *
 *      for(var value of valueIter){
 *          console.log(value);
 *      }
 *      --------------------------------------------
 *       > red
 *       > green
 *      --------------------------------------------
 *
 *   >> 모든 데이터 열거
 *      let map = new Map([["Apple","red"],["Melon","green"]]);
 *
 *      var entryIter = map.entries();
 *
 *      for(var entry of entryIter){
 *          console.log(entry);
 *      }
 *      --------------------------------------------
 *       > ["Apple","red"]
 *       > ["Melon","green"]
 *      --------------------------------------------
 *
 *   >> 모든 데이터 함수 처리
 *      let fruitMap = new Map([["Apple","red"],["Melon","green"]]);
 *
 *      fruitMap.forEach(function(value, key, map){
 *          console.log(key + " : " + value);
 *      });
 *      --------------------------------------------
 *       > Apple : red
 *       > Melon : green
 *      --------------------------------------------
 * 9. Set 컬렉션 타입
 *   >> Set 객체 생성
 *      let fruitSet = new Set();
 *      console.log(fruitSet);
 *      --------------------------------------------
 *       > Set(0) {}
 *      --------------------------------------------
 *
 *   >> 초기데이터 지정해서 생성
 *      let fruitSet = new Set(["Apple","Melon"]);
 *      console.log(fruitSet);
 *      --------------------------------------------
 *       > Set(2) {"Apple","Melon"}
 *      --------------------------------------------
 *
 *   >> Set 객체 데이터의 개수 확인
 *      let fruitSet = new Set(["Apple","Melon"]);
 *      console.log(fruitSet.size);
 *      --------------------------------------------
 *       > 2
 *      --------------------------------------------
 *
 *   >> 데이터 추가하기
 *      let fruitSet = new Set();
 *      fruitSet.add("Apple");
 *      fruitSet.add("Melon");
 *
 *      console.log(fruitSet);
 *      --------------------------------------------
 *       > Set(2) {"Apple","Melon"}
 *      --------------------------------------------
 *
 *   >> 데이터 존재 확인
 *      let fruitSet = new Set();
 *      fruitSet.add("Apple");
 *      fruitSet.add("Melon");
 *
 *      console.log(fruitSet.has("Apple");
 *      console.log(fruitSet.has("Banana");
 *      --------------------------------------------
 *       > true
 *       > false
 *      --------------------------------------------
 *
 *   >> 데이터 삭제
 *      let fruitSet = new Set();
 *      fruitSet.add("Apple");
 *      fruitSet.add("Melon");
 *
 *      console.log(fruitSet.has("Apple");
 *      console.log(fruitSet.has("Melon");
 *
 *      fruitSet.delete("Apple");
 *
 *      console.log(fruitSet.has("Apple");
 *      console.log(fruitSet.has("Melon");
 *      --------------------------------------------
 *       > true
 *       > true
 *       > false
 *       > true
 *      --------------------------------------------
 *
 *   >> 모든 데이터 삭제
 *      let fruitSet = new Set();
 *      fruitSet.add("Apple");
 *      fruitSet.add("Melon");
 *
 *      console.log(fruitSet.has("Apple");
 *      console.log(fruitSet.has("Melon");
 *
 *      fruitSet.clear();
 *
 *      console.log(fruitSet.has("Apple");
 *      console.log(fruitSet.has("Melon");
 *      --------------------------------------------
 *       > true
 *       > true
 *       > false
 *       > false
 *      --------------------------------------------
 *
 *   >> 모든 키 값 열거
 *      let fruitSet = new Set(["Apple","Melon"]);
 *
 *      var keyIter = fruitSet.keys();
 *
 *      for(var key of keyIter){
 *          console.log(key);
 *      }
 *      --------------------------------------------
 *       > Apple
 *       > Melon
 *      --------------------------------------------
 *
 *   >> 모든 데이터 열거
 *      let fruitSet = new Set(["Apple","Melon"]);
 *
 *      var entryIter = fruitSet.entries();
 *
 *      for(var entry of entryIter){
 *          console.log(entry);
 *      }
 *      --------------------------------------------
 *       > ["Apple","Apple"]
 *       > ["Melon","Melon"]
 *      --------------------------------------------
 *
 *   >> for of 문을 사용하여 모든 데이터 열거
 *      let fruitSet = new Set(["Apple","Melon"]);
 *
 *      for(var fruit of fruitSet){
 *          console.log(fruit);
 *      }
 *      --------------------------------------------
 *       > Apple
 *       > Melon
 *      --------------------------------------------
 *
 *   >> 모든 데이터 함수 처리
 *      let fruitSet = new Set(["Apple","Melon"]);
 *
 *      fruitSet.forEach(function(value1, value2, map){
 *          console.log(value1 + " : " + value2);
 *      });
 *      --------------------------------------------
 *       > Apple : Apple
 *       > Melon : Melon
 *      --------------------------------------------
 *
 *
 *
 * */
