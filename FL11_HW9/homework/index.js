function getNumbers(str){
  let arr = [];
  let temp;
  for (let i=0;i<str.length;i++){
    temp = parseInt(str[i]);
    if(!isNaN(temp)){
      arr.push(temp);
    }
  }
  return arr;
}
function findTypes(...args){
  let result = {};
  let key = '';
  for (let i = 0; i < args.length; i++) {
    key = typeof args[i];
    if (result.hasOwnProperty(key)) {
      result[key] +=1;
    } else{
      result[key] = 1;
    }
  }
  return result;
}
function executeforEach(arr,func){
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
function mapArray(arr,func){
  const result = [];
  executeforEach(arr,function(el){
    result.push(func(el));
  });
  return result;
}
function filterArray(arr,func){
  const result = [];
  executeforEach(arr,function(el){
    if(func(el)){
      result.push(el);
    }
  })
  return result;
}
function showFormattedDate(date){
  const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = shortMonths[date.getMonth()];
  const year = date.getFullYear();
  return `Date: ${month} ${day} ${year}`;
}
function canConvertToDate(date){
  if(isNaN(Date.parse(date))){
    return false;
  }
  return true;
}
function daysBetween(date_first, date_second){
  const diff = date_second - date_first;
  const milisecondPerDay = 86400000;
  return Math.round(diff/milisecondPerDay);
}
function getAmountOfAdultPeople(data){
  const dayPer18Years = 6570;
  const now = new Date();
  const result = filterArray(data, function(el) {
    const birthday = new Date(el[' birthday ']);
    return daysBetween(birthday,now) > dayPer18Years;
  });
  return result.length;
}
function keys(obj){
  const result = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      result.push(i);
    }
  }
  return result;
}
function values(obj){
  const result = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      result.push(obj[i]);
    }
  }
  return result;
}
