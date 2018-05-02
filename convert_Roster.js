'use strict'

function convert_roster_format(nestedArray) {
  var output = [];
  var obj = {};
  
  for(let i = 1; i < nestedArray.length; i++) {
    for(let j = 0; j < nestedArray[i].length; j++) {
        obj[nestedArray[0][0]] = nestedArray[i][0];
        obj[nestedArray[0][1]] = nestedArray[i][1];
        obj[nestedArray[0][2]] = nestedArray[i][2];
        obj[nestedArray[0][3]] = nestedArray[i][3];
      
    }
      output.push(obj);
      obj = {};
  }
  
  return output;
}
let roster = [
  ["Number", "Name", "Position", "Points per Game"],
  [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
  [31, "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
  [9, "Ms. Buckets", "Point Guard", [19, 0, 11, 22, 0]],
  [7, "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
  [22, "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]]
];
console.log(convert_roster_format(roster));
/**
 * Output
 * [
 * { "Number": 12, "Name": "Joe Schmo", "Position": "Center", "Points per Game": [14, 32, 7, 0, 23] }
 * { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }
 * ..etc
 * ]
 */