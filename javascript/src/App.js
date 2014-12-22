var alignment_option = ["Good", "Evil",  "Neutral"];

function character(first, last, align, _armor) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    this.armor = _armor;
    this.fullname = function() {return this.firstName + this.lastName;}
    this.getName  = function() {return this.firstName;}
    this.setName  = function(newName) {return this.firstName = newName;}
    this.setAlign = function(newAlign) { return this.alignment = alignment_option[newAlign];}
 	this.getAlign = function() { return this.alignment;}
};

function createChar(newID){
	var newID = new character();
}

//  function setName(name) {
// 	return name;
// };

//  function getName(name) {
// 	_name = name;
// 	return _name;
// };

