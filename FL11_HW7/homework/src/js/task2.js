if (!confirm('Do you want to play a game?')){
  alert('You did not become a billionaire, but can.');
} else {
  const startPrize = 0;
  const startRange = 9;
  const startMaxPrize = 100;
  const three = 3;
  const two = 2;
  const incrementForRange = 4;
  let condition = true;
  let totalPrize = startPrize;
  let maxRange = startRange;
  let maxPrize = startMaxPrize;
  while(condition){
    let number = Math.floor(Math.random()*maxRange);
    let flag = false;
    let userNumber;
    let prize = maxPrize;
    for (let i = 0; i < three; i++) {
      userNumber = +prompt('Choose a roulette pocket number from 0 to '+ (maxRange-1) + '\nAttempts left: '+ (three-i) +
                          '\nTotal prize: ' + totalPrize + '$ \nPossible prize on current attempt: ' + prize + '$');
      if(userNumber === number){
        flag = true;
        break;
      }
      prize /= two;
    }
    if (flag){
      totalPrize += prize;
      if(!confirm('Congratulation, you won! Your prize is: '+ prize + '$. Do you want to continue?')){
        alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
        if(confirm('Do you want to play again ?')){
          totalPrize = startPrize;
          maxRange = startRange;
          maxPrize = startMaxPrize;
        } else {
          condition = false;
        }
      } else {
        maxPrize *= two;
        maxRange +=incrementForRange;
      }
    } else {
      alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
      if(confirm('Do you want to play again ?')){
        totalPrize = startPrize;
        maxRange = startRange;
        maxPrize = startMaxPrize;
      } else {
        condition = false;
      }
    }
  }
}
