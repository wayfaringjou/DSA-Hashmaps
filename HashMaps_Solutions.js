const HashMap = require("./HashMap");

function lotr(key) {
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  /*
Export your HashMap module Create a .js file called HashMaps_drills. In the file import the HashMap module. Create a function called main() Inside your main() function, create a hash map called lotr. For your hash map that you have created, set the MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3. Add the following items to your hash map:

{"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"}, {"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"}, {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"}, {"Ent": "Treebeard"}

Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to? Retrieve the value that is hashed in the key "Maiar" and Hobbit. What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer. What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
*/

  const lotr = new HashMap();

  lotr.set("Hobbit", "Bilbo");
 /*  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  lotr.set("Orc", "Azog"); */

  if (key) {
    //return lotr.get(key);
  }
  return lotr;
}

const WhatDoesThisDo = function () {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1);
  console.log(map2);
};

function main() {
  console.log("Drill #1 A. Print hash map:");
  console.log(lotr());
  console.log("Drill #1 B. Get 'Maiar':");
  console.log(lotr("Maiar"));
  console.log(lotr("Hobbit"));
  console.log("Drill #1 B. Get 'Maiar':");
  console.log(WhatDoesThisDo());
}

main();
