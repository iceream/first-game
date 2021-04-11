import Phaser from "phaser";
import img from "./assets/icecream.png"

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  scene: {
    preload,
    create,
    update
  }
}

const game = new Phaser.Game(config);

function preload() {
  this.load.image("icecream", img)
}
function create() {
  this.add.image(100, 100, "icecream")
}
function update() {}