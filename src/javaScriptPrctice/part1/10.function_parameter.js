/*
 * 10. 함수 매개변수
 *   >> 나머지 매개변수 : 나머지 매개변수는 전개연산자(...)로 표현한 매개변수.
 *      1) 다른 매개변수와 사용
 *          function add(a, b, ... args){
 *              console.log(a, b, args);
 *
 *              let sum = a + b;
 *              for (let i = 0; i < args.length; i++){
 *                  sum += args[i];
 *              }
 *              return sum;
 *          }
 *
 *          let sum = add(1, 2, 3, 4, 5);
 *          console.log(sum);
 *          --------------------------------------------
 *          >> 1 2 [3, 4, 5]
 *          >> 15
 *          --------------------------------------------
 *
 *      2) 단독사용
 *          function add(... args){
 *              console.log(args);
 *
 *              let sum = 0;
 *              for (let i = 0; i < args.length; i++){
 *                  sum += args[i];
 *              }
 *              return sum;
 *          }
 *
 *          let sum = add(1, 2, 3, 4, 5);
 *          console.log(sum);
 *          --------------------------------------------
 *          >> [1, 2, 3, 4, 5]
 *          >> 15
 *          --------------------------------------------
 *
 *  >> 매개변수의 기본값 : 매개변수에 대입연산자(=)를 사용하여 기본값을 설정할 수 있음
 *      1) 기본값 사용하지 않을 때
 *          function add(a, b){
 *              console.log("a = " + a);
 *              console.log("b = " + b);
 *
 *              return a + b;
 *          }
 *
 *          let sum = add(1);
 *
 *          console.log(sum);
 *
 *          --------------------------------------------
 *          >> a = 1
 *          >> b = undefined
 *          >> NaN
 *          --------------------------------------------
 *
 *      2) 기본값 사용할 때
 *          function add(a, b = 10){
 *              console.log("a = " + a);
 *              console.log("b = " + b);
 *
 *              return a + b;
 *          }
 *
 *          let sum = add(1);
 *
 *          console.log(sum);
 *          --------------------------------------------
 *          >> a = 1
 *          >> b = 10
 *          >> 11
 *          --------------------------------------------
 * */
