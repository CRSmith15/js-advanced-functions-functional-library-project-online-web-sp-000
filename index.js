const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, cb) {
      if (Array.isArray(coll)){
        for (let i = 0; i < coll.length; i++){
          cb(coll[i], i, coll);
        }
        return coll;
      }  else {
        for (let e in coll){
          cb(coll[e], e, coll);
        }
        return coll;
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
      if (acc == 0){
        acc = coll[0];
        for (let i = 1; i < coll.length; i++){
          acc = cb(acc, coll[i], coll);
        }
        return acc;
      } else {
        for (let i = 0; i< coll.length; i++){
          acc = cb(acc, coll[i], coll);
        }
        return acc;
      }

    },

    find: function(coll, pred){
      if (Array.isArray(coll)){
        return coll.find(pred);
      }
    }

    functions: function() {

    },


  }
})()

fi.libraryMethod()
