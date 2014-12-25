
var MDchar = new character("Matt", "Dorsey", 1, 10);
var Opp = new character("Tim", "Bradshaw", 2, 8); //fname, lname, Alignment, attck-roll

//var char2chec  = new menuSetup();

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

Opp.Dexterity = 10; //reset opponent's armor to 10 for attack test

      
 describe("Attack", function() {
 		it("Matt Can score an attack", function() {
 			//topp = Opp.hp();
 			roll(MDchar.roll, Opp.armor(), Opp.hp());
      		expect(Opp.hp()).toBe(4);
    });
        it("Matt Can score an attack", function() {
      //topp = Opp.hp();
      roll(MDchar.roll, Opp.armor(), Opp.hp());
          expect(Opp.hp()).toBe(3);
    });
            it("Matt Can score an attack", function() {
      //topp = Opp.hp();
      roll(MDchar.roll, Opp.armor(), Opp.hp());
          expect(Opp.hp()).toBe(2);
    });
        it("Matt Can score an attack", function() {
      //topp = Opp.hp();
      roll(MDchar.roll, Opp.armor(), Opp.hp());
          expect(Opp.hp()).toBe(1);
    });
 		it("Opponent can be eliminated", function() {
 		   roll(MDchar.roll, Opp.armor(), Opp.hp());
      expect(Opp.hp()).toBe(0);
    });

});




