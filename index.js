const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, cb) {
      if (Array.isArray(arr)){
        for (let i = 0; i < arr.length; i++){
          cb(arr[i], i, arr);
        }
        return arr;
      }  else {
        for (let e in arr){
          cb(arr[e], e, arr);
        }
        return arr;
      }
    },

    map: function(arr, cb) {
      if (Array.isArray(arr)){
        let newArr = [];
        for (let i = 0; i < arr.length; i++){
          newArr.push(cb(arr[i]));
        }
        return newArr;
      } else {
        let newArr = [];
        for (let e in arr){
          newArr.push(cb(arr[e]));
        }
        return newArr;
      }

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
