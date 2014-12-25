var alignment_option = ["Good", "Evil",  "Neutral"];

function character(first, last, align, roll) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    
    this.Strength = 10; //Set by Default; 
    this.Dexterity = 10; //Set by Default; 
    this.Constitution = 10; //Set by Default; 
    this.Wisdom = 10; //Set by Default; 
    this.Intelligence = 10; //Set by Default; 
    this.Charisma = 10; //Set by Default;
    
    this.defArmor = 10; //Default armor and updates when permanant 
    this.armor = function () {return this.defArmor + this.applyMod(this.Dexterity);}
    
    this.defhp = 5; //Set by default
    this.hp =  function () {return this.defhp + this.applyMod(this.Constitution);}
    //add Constitution modifier to hit points (always at least 1 hit point)
    
    this.roll = roll;
    
    this.fullname = function() {return this.firstName + this.lastName;}
    this.setName  = function(newName) {return this.firstName = newName;}
    this.setAlign = function(newAlign) { return this.alignment = alignment_option[newAlign];}
 	this.setAttack = function(attack) { return this.attack = attack;}
 	this.applyMod = function(attr){  //apply abilities to update
 		//return this.Dexterity;
 		 	if (attr == 1){return -5;}
 		if (attr === 2 || attr === 3)
 			{return -4;}
 		if (attr === 4 || attr === 5)
 			{return -3;}
 		if (attr === 6 || attr === 7)
 			{return -2;}
 		if (attr === 8 || attr === 9)
 			{return -1;}
 		if (attr === 10 || attr === 11)
			{return 0;}		
 		if (attr === 12 || attr === 13)
 			{return 1;}
 		if (attr === 14 || attr === 15)
 			{return 2;}
 		if (attr === 16 || attr === 17)
 			{return 3;}
 		if (attr === 19 || attr === 18)
 			{return 4;}
 		if (attr === 20)
 			{return 5;}
 	}
};

function curse(char){
	return char.Dexterity - 1;
};
			//mdchar 10, 10 opp.armor, opp.hp
function roll(attack, defend, hp){

	if (attack === 20){
        Opp.defhp =  Opp.defhp-2 ;
		return Opp.hop();
	}
	
	if (attack>=defend) {
         Opp.defhp =  Opp.defhp-1 ;
		return Opp.hp();
	};
	if (attack<defend){
		return Opp.hp();
	}
};

