/*
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
 * */
