'use strict'

let roaster = [
  ['Number', 'Name', 'Position', 'Points per Game', 'team'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23],'yaya' ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0],'lala' ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25],'haha' ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19],'yaya' ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0],'heh' ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray) {
  var result=[]
    for (var i=1; i<nestedArray.length; i++){
      var object={}
        for (var j=0; j<nestedArray[i].length; j++){
        object[nestedArray[0][j]]= nestedArray[i][j]
        }
        result.push(object)
    }
    return result
}

let object_roster = convert_roster_format(roaster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

module.exports = {
  convert_roster_format
}
