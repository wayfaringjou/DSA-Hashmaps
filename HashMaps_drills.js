const HashMap = require("./HashMap");

function main() {
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  const lotr = new HashMap();

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  lotr.set("Orc", "Azog");
  console.log(lotr);

  console.log(lotr.get('Maiar'))
}

main();
