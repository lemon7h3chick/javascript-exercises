const removeFromArray = function (array, ...toRemoveValues) {
  for (const value of toRemoveValues) {
    let index = array.indexOf(value);

    while (index > -1) {
      array.splice(index, 1);
      index = array.indexOf(value);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
