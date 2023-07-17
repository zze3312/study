/*
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
 * */
