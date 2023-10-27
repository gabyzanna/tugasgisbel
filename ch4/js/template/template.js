export let URLGeoJson = "https://asia-southeast2-global-student-401904.cloudfunctions.net/function-1";
export let urlPostGCF ="https://asia-southeast2-global-student-401904.cloudfunctions.net/gis4";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`