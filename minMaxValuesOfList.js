var min = function(list){
    let minimum = list[0]
    for (i = 1; i < list.length; i++) {
      if (list[i] < minimum) {
        minimum = list[i] 
      }
    }
    return minimum;
}

var max = function(list){
    let maximum = list[0]
    for (i = 1; i < list.length; i++) {
      if (list[i] > maximum)
        maximum = list[i]
    }
    return maximum;
}