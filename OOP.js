function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.point = 0;
}

Player.prototype.gainXp = function (exp) {
  if (exp < 1 || exp > 10) return;
  if (this.point >= 10) {
    this.lvl++;
    this.point = -10;
  } else {
    this.point += exp;
  }
};
Player.prototype.describe = function () {
  return (
    this.name +
    " is level " +
    this.lvl +
    " with " +
    this.point +
    " experience point(s)"
  );
};
const player1 = new Player("abc");
player1.gainXp(3);
player1.gainXp(4);
player1.gainXp(3);
player1.gainXp(1);
player1.gainXp(3);
player1.gainXp(6);
player1.gainXp(9);
player1.gainXp(13);
console.log(player1.describe());
