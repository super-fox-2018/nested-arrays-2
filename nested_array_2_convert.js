var roster =
[
	["Number","Name","Position","Points per Game"],
	[12,"Joe Schmo","Center",[14,32,7,0,23]],
	[9,"Ms. Buckets","Point Guard",[19,0,11,22,0]],
	[31,"Harvey Key","Shooting Guard",[0,30,16,0,25]],
	[7,"Sally Talls","Power Forward",[18,29,26,31,19]],
	[22,"MK DiBoux","Small Forward",[11,0,23,17,0]],
]

function convert_roster_format(roster) {
	var result=[]
	for(var i=1;i<roster.length;i++) {
		var obj={}
		for(var j=0;j<roster[i].length;j++){
			obj[roster[0][j]] = roster[i][j]
		}
	result.push(obj)	
	}
	return result	
}

var object_roster = convert_roster_format(roster)

console.log(convert_roster_format(roster))
console.log(object_roster[0].Name)
console.log(object_roster[1].Number)
