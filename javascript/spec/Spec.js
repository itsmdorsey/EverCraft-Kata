
var MDchar = new character("Matt", "Dorsey", 0, 10, "human", "Paladin");
var OppOrc = new character("Bill", "Bradshaw", 1, 10, "orc", "Fighter"); //fname, lname, Alignment, attck-roll
var dwarfchar = new characterDwarf("Bill", "Bradshaw", 1, 10, "orc", "Fighter"); //fname, lname, Alignment, attck-roll

// var MDElf = new elfCharacter("Susan", "Smith", 0, 10, "elf");
// var OppDwarf = new dwarfCharacter("Tim", "Thomas", 2, 10, "dwar"); //fname, lname, Alignment, attck-roll
// var MDHalf = new halflingCharacter("Lou", "Lou", 1, 10, "halfling");


describe("Character", function() {
  it("Can Set the Name", function() {
    expect(MDchar.firstName).toBe("Matt");
    });
  });

describe("dwarf HP are double Constitution", function() {
  it("Constitution = 20, HP +5 = 15", function() {
    expect(dwarfchar.hp()).toBe(5);
    });
  });





// describe("Testing Paladin", function() {
//   it("has a start of 999XP and level 1", function() {
//     MDchar.XP = 999
//     expect(MDchar.XP).toBe(999);
//     });

//     it("MD Char is a Paladin Classtype", function() {
//     expect(MDchar.Classtype).toBe("Paladin");
//     });

//       it("Opp orc to have 5 HP prior to attack", function() {
//     expect(OppOrc.defhp).toBe(5);
//     });
//     it("Opp orc should be Evil", function() {
//     expect(OppOrc.alignment).toBe("Evil");
//     });

//     it("Can gain 10 XP to be 1009 +2 to attack and damage when attacking evil characters", function() {
//       //MDchar.XP = MDchar.XP + 10;
//       attack(MDchar, OppOrc);
//     expect(MDchar.XP).toBe(1009);
//     });

//     it("Evil Orc should be 2 (5-3) when MDchar is Paladin ", function() {
//     expect(OppOrc.defhp).toBe(2);
//     });

//     it("Evil Orc should be reset to 13 HP", function() {
//       OppOrc.defhp = 13;
//     expect(OppOrc.defhp).toBe(13);
//     });

//     it("Crit hit on evil should be 1 (13-8)", function() {
//     MDchar.roll = 20;
//     attack(MDchar, OppOrc);
//     expect(OppOrc.defhp).toBe(5);
//     });

//     it("MD Paladin should get 13 (5+8) HP after leveling up", function() {
//     expect(MDchar.defhp).toBe(13);
//     });
//     it("MD Char is a Paladin Classtype", function() {
//     expect(MDchar.Classtype).toBe("Paladin");
//     });

//     it("MD Paladin rolls 10+level 4 to damage orc 2 (5-3) with armor 15", function() {
//       OppOrc.defhp = 5;
//       MDchar.roll = 10;
//       MDchar.XP = 100;
//       OppOrc.alignment = "Evil"
//    //   MDchar.level = 6;
//       //OppOrc.defArmor = 15;
//       OppOrc.Dexterity = 18;
//    attack(MDchar, OppOrc);      
//     expect(OppOrc.defhp).toBe(2);
//     //expect(MDchar.level).toBe(5);
//     });

//   });

// describe("Testing War Monk", function() {
//   it("has a start of 999XP and level 1", function() {
//     MDchar.XP = 999
//     expect(MDchar.XP).toBe(999);
//     });
//     it("MD Char is a War Monk Classtype", function() {
//     expect(MDchar.Classtype).toBe("War Monk");
//     });
//       it("Opp orc to have 5 HP prior to attack", function() {
//     expect(OppOrc.defhp).toBe(5);
//     });

//     it("Can gain 10 XP to be 1009", function() {
//       //MDchar.XP = MDchar.XP + 10;
//       attack(MDchar, OppOrc);
//     expect(MDchar.XP).toBe(1009);
//     });

//     it("Can level up from 1 to 2 after crossing 999 to 1009", function() {
//     expect(MDchar.level).toBe(2);
//     });
//         it("Expect War Monk to have now have 11 HP at level 2", function() {
//     expect(MDchar.defhp).toBe(11);
//     });
//     it("Opp Orc should have 2 (5-3) HP after War Monk reg attack", function() {
//     expect(OppOrc.defhp).toBe(2);
//     });
//     it("Wisdom modifier 15 (if positive) to Armor Class in addition to Dexterity", function() {
//     MDchar.Wisdom = 15;
//     expect(MDchar.armor()).toBe(7);
//     });
//     it("Wisdom modifier 5 (if positive) to Armor Class in addition to Dexterity", function() {
//     MDchar.Wisdom = 5;
//     expect(MDchar.armor()).toBe(5);
//     });

//   });

// describe("Level Up", function() {
//   it("has a start of 999XP and level 1", function() {
//     MDchar.XP = 999
//     expect(MDchar.XP).toBe(999);
//     });
//       it("orc to have 5 HP prior to attack", function() {
//     expect(OppOrc.defhp).toBe(5);
//     });

//     it("expect MD class to be Rogue", function() {
//     expect(MDchar.Classtype).toBe("Rogue");
//     });

//     it("Can gain 10 XP to be 1009", function() {
//       //MDchar.XP = MDchar.XP + 10;
//       attack(MDchar, OppOrc);
//     expect(MDchar.XP).toBe(1009);
//     });
//     it("Orc takes -2 damage down to 3 HP left", function() {
//       //MDchar.XP = MDchar.XP + 10;
//     expect(OppOrc.defhp).toBe(3);
//     });
//     it("Can level up from 1 to 2 after crossing 999 to 1009", function() {
//     expect(MDchar.level).toBe(2);
//     });
//         it("Expect Fighter to how have 15HP (5+10) after leveling up", function() {
//     expect(MDchar.defhp).toBe(15);
//     });
//   });


//Feature: A Character can gain experience when attacking +10XP per attak

// describe("MDChar can successfully attack and achieve 10XP have level 1", function() {
//   it("MDChar can successfully attack and achieve 10XP", function() {
//     attack(MDchar, Opp);
//     expect(MDchar.XP).toBe(10);
//     expect(MDchar.level).toBe(1);
//     });
//   });
// describe("MDChar should have level 1 XP", function() {
//   it("MDChar should have level 1 XP", function() {
//     MDchar.XP = 999;
//     attack(MDchar, Opp);
//     expect(MDchar.XP).toBe(1009);
//     });
//   });

// describe("MDChar has 999 XP, attack success, should reach level 2 XP", function() {
//   it("CMDChar has 999 XP, attack success, should reach level 2 XP", function() {
//      //attack(MDchar, Opp);
//     expect(MDchar.XP).toBe(1009);
//     expect(MDchar.hp()).toBe(10);
//     expect(MDchar.level).toBe(2);
//     });
//   });

// describe("MDChar has 999 XP, attack success, should reach level 2 XP", function() {
//   it("CMDChar has 999 XP, attack success, should reach level 2 XP", function() {
//      //attack(MDchar, Opp);
//     //MDchar.level = 2;
//     MDchar.XP = 1000;
//     OppOrc.defArmor = 11;
//     attack(MDchar, OppOrc);
//     expect(OppOrc.hp()).toBe(4);
//     // expect(MDchar.hp()).toBe(10);
//     // expect(MDchar.level).toBe(2);
// //     });
// //   });
// describe("Fighter should get 10HP per level and addattack per level not everyOther", function() {
//   it("should read +10HP after successful attack and level up", function() {
//      //attack(MDchar, Opp);
//     //MDchar.level = 2;
//     MDchar.XP = 2999;
//     OppOrc.defArmor = 13;
//     OppOrc.Dexterity = 20;
//     attack(MDchar, OppOrc);
//     //expect(MDchar.level).toBe(3);
//     expect(OppOrc.defhp).toBe(2);
//     expect(MDchar.hp()).toBe(10);
//     // expect(OppOrc.hp()).toBe(4);
//     // expect(MDchar.Race).toBe("human")
//     // // expect(MDchar.hp()).toBe(10);
//     // // expect(MDchar.level).toBe(2);
//     });
//   });
//   });
// describe("Rogue ignores Opps Dex", function() {
//   it("should change Opp Dex from 14 to 10", function() {
//      //attack(MDchar, Opp);
//     //MDchar.level = 2;
//     MDchar.XP = 1999;
//     OppOrc.defArmor = 10;
//     OppOrc.Dexterity = 10;
//     attack(MDchar, OppOrc);
//     //expect(MDchar.level).toBe(3);
//     expect(OppOrc.defhp).toBe(4);
//     expect(MDchar.hp()).toBe(10);
//     // expect(OppOrc.hp()).toBe(4);
//     // expect(MDchar.Race).toBe("human")
//     // // expect(MDchar.hp()).toBe(10);
//     // // expect(MDchar.level).toBe(2);
//     });
// //   });

// describe("Rogue ignores Opps Dex", function() {
//   it("should change Opp Dex from 14 to 10", function() {
//      //attack(MDchar, Opp);
//     //MDchar.level = 2;
//     MDchar.XP = 1999;
//     expect(MDchar.level.toBe(1);
//     });
//   });

	//FName, LName, Align, Attack
// //NEED TO validate that it is a proper character when created.
// 	it("Can Set the Name", function() {
//     expect(MDchar.setName("Susan")).toBe("Susan");
// 	   });
//   it("Can Get the full name", function() {
//     expect(MDchar.fullname()).toBe("SusanDorsey");
//       });
//   it("Can Set the Alignment", function() {
//     expect(MDchar.setAlign(0)).toBe("Good");
//       });
//   it("Can Get the hit points of player", function() {
//     expect(MDchar.hp()).toBe(5);
//       });	
//   it("Can Get the players Strength", function() {
//      expect(Opp.Strength).toBe(10);
//       });    	
// });
// describe("Attack", function() {
// 	it("Opponent is fully charged", function() {
// 		expect(Opp.hp()).toBe(5);
// 	});
// });

//  describe("Attack", function() {
//  		it("Matt Can score an attack", function() {
//  			attack(MDchar, Opp)
//       		expect(Opp.hp()).toBe(4);
//     });
//         it("Matt Can score an attack", function() {
//       attack(MDchar, Opp)
//           expect(Opp.hp()).toBe(3);
//     });
//         it("Matt Can miss and Opp defends", function() {
//       MDchar.roll = 1;
//             attack(MDchar, Opp)
//           expect(Opp.hp()).toBe(3);
//     });
//       it("Matt attack 4 -roll w/ weakness -6 still attacks for 1 against 1 Opp", function() {
//       MDchar.roll = 4;
//       MDchar.Strength = -1
//       Opp.defArmor = 1;
//             attack(MDchar, Opp)
//           expect(Opp.hp()).toBe(2);
//     });
//     it("Opp's Dex goes up, improves Armor blocks attack roll of 14", function() {
//       MDchar.roll = 10;
//       pp.defArmor = 10;
//       MDchar.Strength = 19;
//       Opp.Dexterity = 19;
//             attack(MDchar, Opp)
//           expect(Opp.hp()).toBe(2);
//           Opp.Dexterity =10;
//     });
//         it("Matt Can score Critical attack of -2", function() {
//       MDchar.roll = 20;
//       Opp.Dexterity = 10;
//       attack(MDchar, Opp)
//           expect(Opp.hp()).toBe(0);
//     });
//         it("Opponent can be eliminated, all negs return 0", function() {
//           MDchar.roll = 20;
//          //Opp.defp = Opp.defhp + 2;
//        attack(MDchar, Opp);
//       expect(Opp.hp()).toBe(0);
//     });
//     it("Opp 3HP - 1HP for 8 Constitution, attack w/ 20 should kill Opp?", function() {
//           MDchar.roll = 20;
//           Opp.defhp = 3;
//           Opp.Constitution = 8;
//        attack(MDchar, Opp);
//       expect(Opp.hp()).toBe(0);
//     });
//       it("Opp uses attack function", function() {
//        attack(Opp, MDchar);
//       expect(MDchar.hp()).toBe(4);
//     });
// });
//  describe("Strength Modifier", function() {
//     it("Opp strength should be 10", function() {
//           expect(Opp.Strength).toBe(10);
//       });
//         it("Opp roll should be 10", function() {
//           expect(Opp.rollfc()).toBe(10);
//       });
//  });
//   describe("Strength Modifier Cont", function() {
//       it("Opp strength should be 1", function() {
//              Opp.Strength = 1;
//           expect(Opp.Strength).toBe(1);
//       });
//       it("Opp strength should be 1 still...", function() {
//           expect(Opp.Strength).toBe(1);
//       });
//       it("Opp 1 Strength should lower rollfc from 10 to 5", function() {
//           expect(Opp.rollfc()).toBe(5);
//       });

// //need to double Strength modifier on critical hits
// });














