function findMatching(parameter, name) {
  return parameter.filter(x => x.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(parameter, letters) {
      return parameter.filter(x =>  x.startsWith(letters));
}

function matchName(parameter, name){
return parameter.filter(x => x.name=== "Bobby")
}