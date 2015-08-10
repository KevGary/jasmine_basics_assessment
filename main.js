exports.letterGrader = function(score) {
  if(score >= 90 && score < 100) {
    return "A";
  } else if(score >= 80 && score < 90) {
    return "B";
  } else if(score >= 70 && score < 80) {
    return "C";
  } else if(score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
};

exports.averageScore = function(array) {
  return array.reduce(function(prev, curr){
    return (prev + curr);
  }) / array.length;
};

exports.medianScore = function(array) {
  if(array.length % 2 !== 0) {
    return array[Math.floor(array.length / 2)];
  } else {
    return ((array[array.length / 2] + array[array.length / 2 - 1]) / 2)
  }
}

exports.modeScore = function(array) {
  var newObj = {}
  var maxElement = array[0];
  var maxCount = 1;

  for(var i = 0; i < array.length; i++) {
    if(newObj[array[i]] === undefined) {
      newObj[array[i]] = 1;
    } else {
      newObj[array[i]]++
    }
    if(newObj[array[i]] > maxCount){
      maxCount = newObj[array[i]];
      maxElement = array[i];
    }
  }
  return maxElement;
}
