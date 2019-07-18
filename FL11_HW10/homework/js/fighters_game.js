function Fighter(date){
  const name = date.name;
  let damage = date.damage;
  let max_hp = date.hp;
  let current_hp = max_hp;
  let agility = date.agility;
  let win = 0;
  let loss = 0;

  this.getName = () => {
    return name;
  }
  this.getDamage = () => {
     return damage;
  }
  this.getAgility = () => {
     return agility;
  }
  this.getHealth = () => {
    return current_hp;
  }
  this.attack = (defender) => {
    const random_number = Math.random();
    const for_percentages = 100;
    if (random_number < defender.getAgility()/for_percentages){
      console.log(`${name} attack missed`);
    } else{
      console.log(`${name} make ${damage} to ${defender.getName()}`);
      defender.dealDamage(damage);
    }
  }
  this.logCombatHistory = () => {
    console.log(`Name: ${name}, Wins: ${win}, Losses: ${loss}`);
  }
  this.heal = (hp) => {
    current_hp += hp;
    if (current_hp > max_hp){
      current_hp = max_hp;
    }
  }
  this.dealDamage = (hp) => {
    current_hp -= hp;
    if (current_hp < 0){
      current_hp = 0;
    }
  }
  this.addWin = () => {
    win++;
  }
  this.addLoss = () => {
    loss++;
  }
}

function battle (fighter1, fighter2){
  if(fighter1.getHealth() === 0){
    console.log(`${fighter1.getName()} is dead and can't fight.`);
    return;
  }
  if(fighter2.getHealth() === 0){
    console.log(`${fighter2.getName()} is dead and can't fight.`);
    return;
  }
  while(fighter1.getHealth() !== 0 ){
    fighter1.attack(fighter2);
    if(fighter2.getHealth() === 0 ){
      fighter1.addWin();
      fighter2.addLoss();
      console.log(`${fighter1.getName()} is winner`);
      return;
    }
    fighter2.attack(fighter1);
  }
  fighter2.addWin();
  fighter1.addLoss();
  console.log(`${fighter2.getName()} is winner`);
  return;
}
