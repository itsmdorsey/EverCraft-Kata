
var MDchar = new character("Matt", "Dorsey", 1, 10);
var Opp = new character("Tim", "Bradshaw", 2, 10); //fname, lname, Alignment, attck-roll
describe("Character", function() {
	//FName, LName, Align, Attack
//NEED TO validate that it is a proper character when created.
	it("Can Set the Name", function() {
    expect(MDchar.setName("Susan")).toBe("Susan");
	   });
  it("Can Get the full name", function() {
    expect(MDchar.fullname()).toBe("SusanDorsey");
      });
  it("Can Set the Alignment", function() {
    expect(MDchar.setAlign(0)).toBe("Good");
      });
  it("Can Get the hit points of player", function() {
    expect(MDchar.hp()).toBe(5);
      });	
  it("Can Get the players Strength", function() {
     expect(Opp.Strength).toBe(10);
      });    	
});
describe("Attack", function() {
	it("Opponent is fully charged", function() {
		expect(Opp.hp()).toBe(5);
	});
});

 describe("Attack", function() {
 		it("Matt Can score an attack", function() {
 			attack(MDchar, Opp)
      		expect(Opp.hp()).toBe(4);
    });
        it("Matt Can score an attack", function() {
      attack(MDchar, Opp)
          expect(Opp.hp()).toBe(3);
    });
        it("Matt Can miss and Opp defends", function() {
      MDchar.roll = 1;
            attack(MDchar, Opp)
          expect(Opp.hp()).toBe(3);
    });
      it("Matt attack 4 -roll w/ weakness -6 still attacks for 1 against 1 Opp", function() {
      MDchar.roll = 4;
      MDchar.Strength = -1
      Opp.defArmor = 1;
            attack(MDchar, Opp)
          expect(Opp.hp()).toBe(2);
    });
    it("Opp's Dex goes up, improves Armor blocks attack roll of 14", function() {
      MDchar.roll = 10;
      pp.defArmor = 10;
      MDchar.Strength = 19;
      Opp.Dexterity = 19;
            attack(MDchar, Opp)
          expect(Opp.hp()).toBe(2);
          Opp.Dexterity =10;
    });
        it("Matt Can score Critical attack of -2", function() {
      MDchar.roll = 20;
      Opp.Dexterity = 10;
      attack(MDchar, Opp)
          expect(Opp.hp()).toBe(0);
    });
        it("Opponent can be eliminated, all negs return 0", function() {
          MDchar.roll = 20;
         //Opp.defp = Opp.defhp + 2;
       attack(MDchar, Opp);
      expect(Opp.hp()).toBe(0);
    });
    it("Opp 3HP - 1HP for 8 Constitution, attack w/ 20 should kill Opp?", function() {
          MDchar.roll = 20;
          Opp.defhp = 3;
          Opp.Constitution = 8;
       attack(MDchar, Opp);
      expect(Opp.hp()).toBe(0);
    });
      it("Opp uses attack function", function() {
       attack(Opp, MDchar);
      expect(MDchar.hp()).toBe(4);
    });
});
 describe("Strength Modifier", function() {
    it("Opp strength should be 10", function() {
          expect(Opp.Strength).toBe(10);
      });
        it("Opp roll should be 10", function() {
          expect(Opp.rollfc()).toBe(10);
      });
 });
  describe("Strength Modifier Cont", function() {
      it("Opp strength should be 1", function() {
             Opp.Strength = 1;
          expect(Opp.Strength).toBe(1);
      });
      it("Opp strength should be 1 still...", function() {
          expect(Opp.Strength).toBe(1);
      });
      it("Opp 1 Strength should lower rollfc from 10 to 5", function() {
          expect(Opp.rollfc()).toBe(5);
      });

//need to double Strength modifier on critical hits
});














