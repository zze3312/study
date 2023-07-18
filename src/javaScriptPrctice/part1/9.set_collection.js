/*
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
