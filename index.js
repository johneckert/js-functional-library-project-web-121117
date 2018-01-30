fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, iteratee) {
      for (const i in collection) {
        iteratee(i, collection[i], collection);
      }
      return collection;
    },

    map: function(collection, iteratee) {
      newArray = [];
      for (const i in collection) {
        newArray.push(iteratee(collection[i], i, collection));
      }
      return newArray;
    },

    reduce: function(collection, iteratee, acc) {
      let num = acc;
      for (const i of collection) {
        num = iteratee(num, i, collection);
      }
      return num;
    },

    find: function(collection, predicate) {
      for (const element of collection) {
        if (predicate(element)) {
          return element;
        }
      }
    },

    filter: function(collection, predicate) {
      let newArray = [];
      for (const element of collection) {
        if (predicate(element)) {
          newArray.push(element);
        }
      }
      return newArray;
    },

    size: function(collection) {
      let counter = 0;
      for (const element in collection) {
        counter++;
      }
      return counter;
    },

    first: function(array, n) {
      n ? (n = n) : (n = 1);
      return array.slice(0, n);
    },

    last: function(array, n) {
      n ? (n = n) : (n = 1);
      return array.slice(-n, array.length);
    },

    compact: function(array) {
      const outputArray = [];
      for (const element of array) {
        if (element) {
          outputArray.push(element);
        }
      }
      return outputArray;
    },

    sortBy: function(array, iteratee) {
      const newArray = [...array];
      newArray.sort(function(a, b) {
        return iteratee(a) - iteratee(b);
      });
      return newArray;
    },

    flatten: function(array) {
      const outputArray = [];
      function recursive(targetArray) {
        for (const index in targetArray) {
          if (Array.isArray(targetArray[index])) {
            recursive(targetArray[index]);
          } else {
            outputArray.push(targetArray[index]);
          }
        }
        return outputArray;
      }
      recursive(array);
      return outputArray;
    },

    uniq: function(array, isSorted, manitee) {
      function unik(array) {
        const sortedArray = [];
        const length = array.length;
        for (let i = 0; i < length; i++) {
          if (array[i] != array[i + 1]) {
            sortedArray.push(array[i]);
          }
        }
        return sortedArray;
      }
      if (isSorted && !manitee) {
        return unik(array);
      } else if (manitee) {
        maniteedArray = [];
        for (const element of array) {
          maniteedArray.push(manitee(element));
          maniteedArray.sort(function(a, b) {
            a - b;
          });
        }
        return unik(maniteedArray);
      } else {
        array.sort(function(a, b) {
          a - b;
        });
        return unik(array);
      }
    },

    keys: function(object) {
      let output = [];
      for (const i in object) {
        output.push(i);
      }
      return output;
    },

    values: function(object) {
      let output = [];
      for (const i in object) {
        output.push(object[i]);
      }
      return output;
    },

    functions: function(object) {
      let output = [];
      for (const i in object) {
        if (typeof object[i] === "function") {
          output.push(i);
        }
      }
      return output;
    }
  };
})();

fi.libraryMethod();
