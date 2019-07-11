function formatTime (number_minutes) {
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let temp = Math.floor(number_minutes / 60);
  if (temp > 0){
    hours = temp;
    number_minutes -= temp*60;
  }
  minutes = number_minutes;
  temp = Math.floor(hours / 24);
  if (temp > 0){
    days = temp;
    hours -= temp*24;
  }
  const answer = `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
  return answer;
}
console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));
