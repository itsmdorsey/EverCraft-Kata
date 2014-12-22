
var MDchar = new character("Matt", "Dorsey", 1, 10)
var Opp = new character("Tim", "Bradshaw", 2, 8)
describe("Character", function() {
	//FName, LName, Align, Attack

//NEED TO validate that it is a proper character when created.

    	it("Can Set the Name", function() {
      expect(MDchar.setName("Susan")).toBe("Susan");
    });
 		it("Can Get the Name", function() {
      expect(MDchar.getName()).toBe("Susan");
    });
      	it("Can Get the Align", function() {
      expect(MDchar.getAlign()).toBe("Evil");
    });
      	it("Can Set the Alignment", function() {
      expect(MDchar.setAlign(0)).toBe("Good");
    });
      	it("Can Get the hit points of player", function() {
      expect(MDchar.gethp()).toBe(5);
    });

});

	 Opp.hp = roll(MDchar.roll, Opp.armor, Opp.hp);

 describe("Attack", function() {
// 	it("MDChar Can Roll", function() {
//       expect(hit).toBe(true);
//     });
 		it("Can score an attack", function() {
      expect(Opp.gethp()).toBe(4);
    });
});
 	Opp.hp = roll(MDchar.roll, Opp.armor, Opp.hp);


