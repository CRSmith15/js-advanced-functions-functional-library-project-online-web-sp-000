const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, cb) {
      if (Array.isArray(coll)){
        for (let i = 0; i < coll.length; i++){
          cb(arr[i], i, coll);
        }
        return coll;
      }  else {
        for (let e in coll){
          cb(coll[e], e, arr);
        }
        return arr;
      }
    },

    map: function(coll, cb) {
      if (Array.isArray(coll)){
        let newArr = [];
        for (let i = 0; i < coll.length; i++){
          newArr.push(cb(coll[i]));
        }
        return newArr;
      } else {
        let newArr = [];
        for (let e in coll){
          newArr.push(cb(coll[e]));
        }
        return newArr;
      }

    },

    reduce: function(coll, cb, acc = 0) {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
