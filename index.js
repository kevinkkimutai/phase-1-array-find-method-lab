
// code your solution here
function wonSuperBowl(element) {
  return element.result === "W"
}

function superbowlWin(record) {
  let result = record.find(wonSuperBowl)
  if (result){
      return result.year
  }
}