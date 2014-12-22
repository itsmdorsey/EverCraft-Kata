describe("App", function() {
var MDchar = new character("Matt", "Dorsey", 1, 5)

    it("Can Set the Name", function() {
      expect(MDchar.setName("Susan")).toBe("Susan");
    });

 	it("Can Get the Name", function() {
      expect(MDchar.getName()).toBe("Susan");
    });

     it("Get Character's full name", function() {
      expect(MDchar.fullname()).toBe("SusanDorsey");
    });

      	it("Can Get the Align", function() {
      expect(MDchar.getAlign()).toBe("Evil");
    });

      	it("Can Set the Alignment", function() {
      expect(MDchar.setAlign(0)).toBe("Good");
    });
      	it("Can Get the Align", function() {
      expect(MDchar.getAlign()).toBe("Good");
    });
      	it("Can Set the Alignment", function() {
      expect(MDchar.setAlign(1)).toBe("Evil");
    });

  //    	it("Can Set the Alignment", function() {
  //     expect(MDchar.setAlign(0)).toBe("Good");
  //   });

});
