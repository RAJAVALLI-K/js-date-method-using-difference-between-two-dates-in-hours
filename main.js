// Difference between two dates in hours

let date1=new Date(2023,8,4);
let date2=new Date(2023,8,5);

function diffHour(date1,date2){
    var diff=(date2.getTime()-date1.getTime())/1000;
    diff=diff/(60*60);
    return Math.abs(Math.round(diff));
}
console.log(diffHour(date1,date2),'Hour');
