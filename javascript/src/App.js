var alignment_option = ["Good", "Evil",  "Neutral"];

function character(first, last, align, roll, Race, Classtype) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    this.Race = Race;
    this.Classtype = Classtype;

    this.Strength = 10;
    this.Dexterity = 10; //Set by Default; 
    this.Constitution = 10; //Set by Default; 
    this.Wisdom = 10; //Set by Default; 
    this.Intelligence = 10; //Set by Default; 
    this.Charisma = 10; //Set by Default;
    this.XP = 0;
    this.level = 1; //0+this.levelcheck(this.XP);


    this.levelUp = function () {// upon level up add HP and other perks
        //return this.level
        this.defhp += 5;
        if (this.Classtype === "Fighter"){
            this.defhp +=5;
        }
        if (this.Classtype === "War Monk"){
            this.defhp +=1;
        }
        if (this.Classtype === "Paladin"){
            this.defhp +=3;
        }        
        this.level +=1;
        //if mod 2 on roll === 0  then add +1 to roll attack value function
    };

    
    this.defArmor = 10; //Default armor and updates when permanant 
    this.armor = function () { 
        if (this.Classtype === "War Monk" && this.applyMod(this.Wisdom) > 0){
            return this.defArmor + this.applyMod(this.Dexterity) + this.applyMod(this.Wisdom);
        }
        else { return this.defArmor + this.applyMod(this.Dexterity)}
        ;}

    this.defhp = 5; //Set by default
    this.hp =  function () {
        if (this.defhp < 0){
                return 0;
        }
        else if (this.defhp + this.applyMod(this.Constitution) >= 0){
            return this.defhp + this.applyMod(this.Constitution);
        }
        
        else return 1;}
    
    this.roll = roll;

    this.rollfc = function () {//add Strength/Dex modifier to: attack roll and damage dealt
        if (this.defhp < 0){
                return 1;
            }
        if (this.roll + this.applyMod(this.Strength) >= 0 && this.Classtype != "Rogue"){
            return this.roll + this.applyMod(this.Strength);}

        if (this.roll + this.applyMod(this.Strength) >= 0 && this.Classtype == "Rogue"){
            return this.roll + this.applyMod(this.Dexterity);}

        return 1;
    };

    
  //   this.fullname = function() {return this.firstName + this.lastName;}
  //   this.setName  = function(newName) {return this.firstName = newName;}
  //   this.setAlign = function(newAlign) { return this.alignment = alignment_option[newAlign];}
 	// this.setAttack = function(attack) { return this.attack = attack;}
 	this.applyMod = function(attr){  //apply abilities to update
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
function characterOrc(first, last, align, roll, Race, Classtype) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    this.Race = Race;
    this.Classtype = Classtype;

    this.Strength = 10+2;
    this.Dexterity = 10; //Set by Default; 
    this.Constitution = 10; //Set by Default; 
    this.Wisdom = 10-1; //Set by Default; 
    this.Intelligence = 10-1; //Set by Default; 
    this.Charisma = 10-1; //Set by Default;
    this.XP = 0;
    this.level = 1; //0+this.levelcheck(this.XP);


    this.levelUp = function () {// upon level up add HP and other perks
        //return this.level
        this.defhp += 5;
        if (this.Classtype === "Fighter"){
            this.defhp +=5;
        }
        if (this.Classtype === "War Monk"){
            this.defhp +=1;
        }
        if (this.Classtype === "Paladin"){
            this.defhp +=3;
        }        
        this.level +=1;
        //if mod 2 on roll === 0  then add +1 to roll attack value function
    };

    
    this.defArmor = 10; //Default armor and updates when permanant 
    this.armor = function () { 
        var specOrc = 2;
        if (this.Classtype === "War Monk" && this.applyMod(this.Wisdom) > 0){
            return specOrc + this.defArmor + this.applyMod(this.Dexterity) + this.applyMod(this.Wisdom);
        }
        else { return specOrc + this.defArmor + this.applyMod(this.Dexterity)}
        ;}

    this.defhp = 5; //Set by default
    this.hp =  function () {
        if (this.defhp < 0){
                return 0;
        }
        else if (this.defhp + this.applyMod(this.Constitution) >= 0){
            return this.defhp + this.applyMod(this.Constitution);
        }
        
        else return 1;}
    
    this.roll = roll;

    this.rollfc = function () {//add Strength/Dex modifier to: attack roll and damage dealt
        if (this.defhp < 0){
                return 1;
            }
        if (this.roll + this.applyMod(this.Strength) >= 0 && this.Classtype != "Rogue"){
            return this.roll + this.applyMod(this.Strength);}

        if (this.roll + this.applyMod(this.Strength) >= 0 && this.Classtype == "Rogue"){
            return this.roll + this.applyMod(this.Dexterity);}

        return 1;
    };

    
  //   this.fullname = function() {return this.firstName + this.lastName;}
  //   this.setName  = function(newName) {return this.firstName = newName;}
  //   this.setAlign = function(newAlign) { return this.alignment = alignment_option[newAlign];}
    // this.setAttack = function(attack) { return this.attack = attack;}
    this.applyMod = function(attr){  //apply abilities to update
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
function characterDwarf(first, last, align, roll, Race, Classtype) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    this.Race = Race;
    this.Classtype = Classtype;

    this.Strength = 10;
    this.Dexterity = 10; //Set by Default; 
    this.Constitution = 10+1; //Set by Default; 
    this.Wisdom = 10; //Set by Default; 
    this.Intelligence = 10; //Set by Default; 
    this.Charisma = 10-1; //Set by Default;
    this.XP = 0;
    this.level = 1; //0+this.levelcheck(this.XP);


    this.levelUp = function () {// upon level up add HP and other perks
        //return this.level
        this.defhp += 5;
        if (this.Classtype === "Fighter"){
            this.defhp +=5;
        }
        if (this.Classtype === "War Monk"){
            this.defhp +=1;
        }
        if (this.Classtype === "Paladin"){
            this.defhp +=3;
        }        
        this.level +=1;
        //if mod 2 on roll === 0  then add +1 to roll attack value function
    };

    
    this.defArmor = 10; //Default armor and updates when permanant 
    this.armor = function () { 
        if (this.Classtype === "War Monk" && this.applyMod(this.Wisdom) > 0){
            return this.defArmor + this.applyMod(this.Dexterity) + this.applyMod(this.Wisdom);
        }
        else { return this.defArmor + this.applyMod(this.Dexterity)}
        ;}

    this.defhp = 5; //Set by default
    this.hp =  function () {
        var specDwarf = 2;
        if (this.defhp < 0){
                return 0;
        }

        else if (this.defhp + this.applyMod(this.Constitution) >= 0 && this.applyMod(this.Constitution) >= 0){
            return this.defhp + this.applyMod(this.Constitution)*2;
        }

        else if (this.defhp + this.applyMod(this.Constitution) >= 0){
            return this.defhp + this.applyMod(this.Constitution);
        }
        
        else return 1;}
    
    this.roll = roll;

    this.rollfc = function () {//add Strength/Dex modifier to: attack roll and damage dealt
        if (this.defhp < 0){
                return 1;
            }
        if (this.roll + this.applyMod(this.Strength) >= 0 && this.Classtype != "Rogue"){
            return this.roll + this.applyMod(this.Strength);}

        if (this.roll + this.applyMod(this.Strength) >= 0 && this.Classtype == "Rogue"){
            return this.roll + this.applyMod(this.Dexterity);}

        return 1;
    };

    this.applyMod = function(attr){  //apply abilities to update
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

function levelcheck(XP){
    var chlevel;
        if (XP <= 999){
        chlevel = 1;
        }
        else if (XP <=1999 && XP > 999){
            chlevel = 2;
        }
        else if (XP <=2999 && XP > 1999){
            chlevel = 3;
        }    
        else if (XP <=3999 && XP > 2999){
            chlevel = 4;
        }
        else if (XP <= 4999 && XP > 3999){
           chlevel = 4;
        }
        else if (XP <= 5999 && XP > 4999){
          chlevel = 5;
        }
        else if (XP <= 6999 && XP > 5999){
          chlevel = 6;
        }
    return chlevel;
}

   //var _pd.hp = pd.hp();
function attack(pa, pd){
    var addattack = 0;
    var prlvl = levelcheck(pa.XP);
    var curlvl;
    var tempDex = pd.Dexterity;

    //Rogues are not effected by Opp's Dexterity if > 0
    if (pa.Classtype === "Rogue" && pd.Dexterity > 10){
        pd.Dexterity = 10;
    }

    //Can't have negative HP
    if (pd.hp() <= 0) {
        pd.defhp = 0;
        pd.Constitution = 10;
        return 0 
    };

    // attack roll is added for every LEVEL when type==fighter or Paladin
        //paladin bonus when attacking an evil 
    // attack roll is every other when != fighter or paladin
    if (pa.Classtype === "Fighter" || pa.Classtype === "Paladin"){
        addattack = prlvl;
        if (pa.Classtype === "Paladin" && pd.alignment === "Evil"){
            addattack += 2;
        }
        }
    else if(prlvl % 2 === 0 && pa.Classtype != "Fighter" && pa.Classtype != "Paladin"){
            addattack = prlvl / 2;
            }
    else{
          addattack = (prlvl-1)/2;
            if (addattack < 0){
                addattack = 0;
            }
            }
              
    // functions for Critical Hit of 20, 
   if (pa.rollfc() >= 20){
        critHit();
    }
    else if (pa.rollfc() + addattack >=pd.armor()) {
        regHit();
        };

    if (pa.rollfc()<pd.armor()){
        pd.Dexterity = tempDex; //Opps Dex goes back to normal
        //return pd.hp();
        };

    function regHit(){
        pd.defhp =  pd.defhp-1 ;
        if (pa.Classtype == "War Monk"){
            pd.defhp -= 2;
        }
        if (pa.Classtype == "Paladin" && pd.alignment == "Evil"){
            pd.defhp -= 2;
        }
         //x=pd.Constitution;
         pa.XP += 10;
        curlvl = levelcheck(pa.XP);
            if (prlvl < curlvl){
                pa.levelUp();
                }
        pd.Dexterity = tempDex;
        return pd.hp();
    };

    function critHit(){
        pd.defhp = pd.defhp-2 ;
        if (pa.Classtype == "Rogue"){
        pd.defhp = pd.defhp-1 ;    
        }
        if (pa.Classtype == "Paladin" && pd.alignment == "Evil"){
            pd.defhp -= 2*3; //+2 damage and triple
        }
        pa.XP += 10;
        curlvl = levelcheck(pa.XP);
        if (prlvl < curlvl){
            pa.levelUp();
        }
        pd.Dexterity = tempDex; 
    };    

};







