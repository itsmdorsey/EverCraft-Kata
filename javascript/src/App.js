var alignment_option = ["Good", "Evil",  "Neutral"];

			//FName, LName, Align, Attack
function character(first, last, align, roll) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    this.armor = 10; //Set by Default
    this.hp = 5; //Set by default
    this.roll = roll;
    this.fullname = function() {return this.firstName + this.lastName;}
    this.getName  = function() {return this.firstName;}
    this.setName  = function(newName) {return this.firstName = newName;}
    this.setAlign = function(newAlign) { return this.alignment = alignment_option[newAlign];}
 	this.getAlign = function() { return this.alignment;}
	this.getArmor = function() { return this.armor;}
 	this.gethp = function() { return this.hp;}
 	this.setAttack = function(attack) { return this.attack = attack;}
};

function roll(attack, defend, hp){
	if (attack === 20){
		return hp-2;
	}
	
	if (attack>=defend) {
		return hp-1;
	};
	if (attack<defend){
		return hp;
	}
};

//  function getName(name) {
// 	_name = name;
// 	return _name;
// };

