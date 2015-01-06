var alignment_option = ["Good", "Evil",  "Neutral"];

function racecheck(race){

    if (race === Orc){
        //calling character lower wisdom
        return race;
    };

}

function character(first, last, align, roll, Race, Classtype) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    this.Race = Race;
    this.Classtype = Classtype;

    //racecheck(this);
    // this.Strength = Race.Strength; //Set by Default; 

    this.Strength = 10;
    this.Dexterity = 10; //Set by Default; 
    this.Constitution = 10; //Set by Default; 
    this.Wisdom = 10; //Set by Default; 
    this.Intelligence = 10; //Set by Default; 
    this.Charisma = 10; //Set by Default;
    this.XP = 0;
    this.level = 1;

    this.levelUp = function () {// upon level up add HP and other perks
        //return this.level
        this.defhp += 5;
        if (this.Classtype === "Fighter"){
            this.defhp +=5;
        }
        this.level +=1;
        //if mod 2 on roll === 0  then add +1 to roll attack value function

        };
    //write PA.levelUp function + HP

    
    this.defArmor = 5; //Default armor and updates when permanant 
    this.armor = function () {return this.defArmor + this.applyMod(this.Dexterity);}
    //Add dexterity modifier to armor

    this.defhp = 5; //Set by default
    this.hp =  function () {
        if (this.defhp < 0){
                return 0;
        }
        else if (this.defhp + this.applyMod(this.Constitution) >= 0){
            return this.defhp + this.applyMod(this.Constitution);
        }
        
        else return 1;}
    //add Constitution modifier to hit points (always at least 1 hit point)
    //Low constitution shouldn't make hp <= 0
    
    this.roll = roll;

    this.rollfc = function () {

        if (this.defhp < 0){
                return 1;
            }
        else if (this.roll + this.applyMod(this.Strength) >= 0 && this.Classtype != "Rogue"){
            return this.roll + this.applyMod(this.Strength);}
        else {   return 1;}
    };
        //    if (this.defhp < 0){
        //         return 0;
        // }
        // else if (this.defhp + this.applyMod(this.Constitution) >= 0){
        //     return this.defhp + this.applyMod(this.Constitution);
        // }
        
        // else return 1;}
    //add Strength modifier to: attack roll and damage dealt
    
    this.fullname = function() {return this.firstName + this.lastName;}
    this.setName  = function(newName) {return this.firstName = newName;}
    this.setAlign = function(newAlign) { return this.alignment = alignment_option[newAlign];}
 	this.setAttack = function(attack) { return this.attack = attack;}
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
function orcCharacter(first, last, align, roll, Race, Classtype) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    this.race = Race;

    //racecheck(this);
    // this.Strength = Race.Strength; //Set by Default; 

    this.Strength = 10;
    this.Dexterity = 10; //Set by Default; 
    this.Constitution = 10; //Set by Default; 
    this.Wisdom = 10; //Set by Default; 
    this.Intelligence = 10; //Set by Default; 
    this.Charisma = 10; //Set by Default;
    this.XP = 0;
    this.level = 1;

    this.levelUp = function () {// upon level up add HP and other perks
        //return this.level
        this.defhp += 5;
        this.level +=1;
        //if mod 2 on roll === 0  then add +1 to roll attack value function

        };
    

    
    this.defArmor = 5; //Default armor and updates when permanant 
    this.armor = function () {return this.defArmor + this.applyMod(this.Dexterity);}
    //Add dexterity modifier to armor

    this.defhp = 5; //Set by default
    this.hp =  function () {
        if (this.defhp < 0){
                return 0;
        }
        else if (this.defhp + this.applyMod(this.Constitution) >= 0){
            return this.defhp + this.applyMod(this.Constitution);
        }
        
        else return 1;}
    //add Constitution modifier to hit points (always at least 1 hit point)
    //Low constitution shouldn't make hp <= 0
    
    this.roll = roll;

    this.rollfc = function () {
        if (this.defhp < 0){
                return 1;
            }
        else if (this.roll + this.applyMod(this.Strength) >= 0){
            return this.roll + this.applyMod(this.Strength);}
        else {   return 1;}
    };
        //    if (this.defhp < 0){
        //         return 0;
        // }
        // else if (this.defhp + this.applyMod(this.Constitution) >= 0){
        //     return this.defhp + this.applyMod(this.Constitution);
        // }
        
        // else return 1;}
    //add Strength modifier to: attack roll and damage dealt
    
    this.fullname = function() {return this.firstName + this.lastName;}
    this.setName  = function(newName) {return this.firstName = newName;}
    this.setAlign = function(newAlign) { return this.alignment = alignment_option[newAlign];}
    this.setAttack = function(attack) { return this.attack = attack;}
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
function dwarfCharacter(first, last, align, roll, Race, Classtype) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    this.race = Race;

    //racecheck(this);
    // this.Strength = Race.Strength; //Set by Default; 

    this.Strength = 10;
    this.Dexterity = 10; //Set by Default; 
    this.Constitution = 10; //Set by Default; 
    this.Wisdom = 10; //Set by Default; 
    this.Intelligence = 10; //Set by Default; 
    this.Charisma = 10; //Set by Default;
    this.XP = 0;
    this.level = 1;

    this.levelUp = function () {// upon level up add HP and other perks
        //return this.level
        this.defhp += 5;
        this.level +=1;
        //if mod 2 on roll === 0  then add +1 to roll attack value function

        };
    //write PA.levelUp function + HP

    
    this.defArmor = 5; //Default armor and updates when permanant 
    this.armor = function () {return this.defArmor + this.applyMod(this.Dexterity);}
    //Add dexterity modifier to armor

    this.defhp = 5; //Set by default
    this.hp =  function () {
        if (this.defhp < 0){
                return 0;
        }
        else if (this.defhp + this.applyMod(this.Constitution) >= 0){
            return this.defhp + this.applyMod(this.Constitution);
        }
        
        else return 1;}
    //add Constitution modifier to hit points (always at least 1 hit point)
    //Low constitution shouldn't make hp <= 0
    
    this.roll = roll;

    this.rollfc = function () {
        if (this.defhp < 0){
                return 1;
            }
        else if (this.roll + this.applyMod(this.Strength) >= 0){
            return this.roll + this.applyMod(this.Strength);}
        else {   return 1;}
    };
        //    if (this.defhp < 0){
        //         return 0;
        // }
        // else if (this.defhp + this.applyMod(this.Constitution) >= 0){
        //     return this.defhp + this.applyMod(this.Constitution);
        // }
        
        // else return 1;}
    //add Strength modifier to: attack roll and damage dealt
    
    this.fullname = function() {return this.firstName + this.lastName;}
    this.setName  = function(newName) {return this.firstName = newName;}
    this.setAlign = function(newAlign) { return this.alignment = alignment_option[newAlign];}
    this.setAttack = function(attack) { return this.attack = attack;}
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
function elfCharacter(first, last, align, roll, Race, Classtype) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    this.race = Race;

    //racecheck(this);
    // this.Strength = Race.Strength; //Set by Default; 

    this.Strength = 10;
    this.Dexterity = 10; //Set by Default; 
    this.Constitution = 10; //Set by Default; 
    this.Wisdom = 10; //Set by Default; 
    this.Intelligence = 10; //Set by Default; 
    this.Charisma = 10; //Set by Default;
    this.XP = 0;
    this.level = 1;

    this.levelUp = function () {// upon level up add HP and other perks
        //return this.level
        this.defhp += 5;
        this.level +=1;
        //if mod 2 on roll === 0  then add +1 to roll attack value function

        };
    //write PA.levelUp function + HP

    
    this.defArmor = 5; //Default armor and updates when permanant 
    this.armor = function () {return this.defArmor + this.applyMod(this.Dexterity);}
    //Add dexterity modifier to armor

    this.defhp = 5; //Set by default
    this.hp =  function () {
        if (this.defhp < 0){
                return 0;
        }
        else if (this.defhp + this.applyMod(this.Constitution) >= 0){
            return this.defhp + this.applyMod(this.Constitution);
        }
        
        else return 1;}
    //add Constitution modifier to hit points (always at least 1 hit point)
    //Low constitution shouldn't make hp <= 0
    
    this.roll = roll;

    this.rollfc = function () {
        if (this.defhp < 0){
                return 1;
            }
        else if (this.roll + this.applyMod(this.Strength) >= 0){
            return this.roll + this.applyMod(this.Strength);}
        else {   return 1;}
    };
        //    if (this.defhp < 0){
        //         return 0;
        // }
        // else if (this.defhp + this.applyMod(this.Constitution) >= 0){
        //     return this.defhp + this.applyMod(this.Constitution);
        // }
        
        // else return 1;}
    //add Strength modifier to: attack roll and damage dealt
    
    this.fullname = function() {return this.firstName + this.lastName;}
    this.setName  = function(newName) {return this.firstName = newName;}
    this.setAlign = function(newAlign) { return this.alignment = alignment_option[newAlign];}
    this.setAttack = function(attack) { return this.attack = attack;}
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
function halflingCharacter(first, last, align, roll, Race, Classtype) {
    this.firstName = first;
    this.lastName = last;
    this.alignment = alignment_option[align];
    this.race = Race;

    //racecheck(this);
    // this.Strength = Race.Strength; //Set by Default; 

    this.Strength = 10;
    this.Dexterity = 10; //Set by Default; 
    this.Constitution = 10; //Set by Default; 
    this.Wisdom = 10; //Set by Default; 
    this.Intelligence = 10; //Set by Default; 
    this.Charisma = 10; //Set by Default;
    this.XP = 0;
    this.level = 1;

    this.levelUp = function () {// upon level up add HP and other perks
        //return this.level
        this.defhp += 5;
        this.level +=1;
        //if mod 2 on roll === 0  then add +1 to roll attack value function

        };
    //write PA.levelUp function + HP

    
    this.defArmor = 5; //Default armor and updates when permanant 
    this.armor = function () {return this.defArmor + this.applyMod(this.Dexterity);}
    //Add dexterity modifier to armor

    this.defhp = 5; //Set by default
    this.hp =  function () {
        if (this.defhp < 0){
                return 0;
        }
        else if (this.defhp + this.applyMod(this.Constitution) >= 0){
            return this.defhp + this.applyMod(this.Constitution);
        }
        
        else return 1;}
    //add Constitution modifier to hit points (always at least 1 hit point)
    //Low constitution shouldn't make hp <= 0
    
    this.roll = roll;

    this.rollfc = function () {
        if (this.defhp < 0){
                return 1;
            }
        else if (this.roll + this.applyMod(this.Strength) >= 0){
            return this.roll + this.applyMod(this.Strength);}
        else {   return 1;}
    };
        //    if (this.defhp < 0){
        //         return 0;
        // }
        // else if (this.defhp + this.applyMod(this.Constitution) >= 0){
        //     return this.defhp + this.applyMod(this.Constitution);
        // }
        
        // else return 1;}
    //add Strength modifier to: attack roll and damage dealt
    
    this.fullname = function() {return this.firstName + this.lastName;}
    this.setName  = function(newName) {return this.firstName = newName;}
    this.setAlign = function(newAlign) { return this.alignment = alignment_option[newAlign];}
    this.setAttack = function(attack) { return this.attack = attack;}
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

function curse(char){
	return char.Dexterity - 1;
};

   //var _pd.hp = pd.hp();
function attack(pa, pd){
    var addattack = 0;
    var prlvl;
    var curlvl;
    var tempDex = pd.Dexterity;
    if (pa.Classtype === "Rogue" && pd.Dexterity > 10){
        pd.Dexterity = 10;
    }

    if (pa.XP <= 999){
        prlvl = 1;
    }
    else if (pa.XP <=1999 && pa.XP > 999){
        prlvl = 2;
    }
    else if (pa.XP <=2999 && pa.XP > 1999){
        prlvl = 3;
    }    
    else if (pa.XP <=3999 && pa.XP > 2999){
        prlvl = 4;
    }
    else if (pa.XP <= 4999 && pa.XP > 3999){
       prlvl = 4;
    }
    else if (pa.XP <= 5999 && pa.XP > 4999){
      prlvl = 5;
    }

    if (pd.hp() <= 0) {
        pd.defhp = 0;
        pd.Constitution = 10;
        return 0 
        };

    if (pa.rollfc() >= 20){
        if (pa.Classtype = "Rogue"){
        pd.defhp = pd.defhp-3 ;    
        }
        else{
        pd.defhp = pd.defhp-2 ;
    }
        pa.XP += 10;
        if (pa.XP <= 999){
            curlvl = 1;
        }
        else if (pa.XP <=1999 && pa.XP > 999){
            curlvl = 2;
        }
        else if (pa.XP <=2999 && pa.XP > 1999){
            curlvl = 3;
        }    
        else if (pa.XP <=3999 && pa.XP > 2999){
            curlvl = 4;
        }
        else if (pa.XP <= 4999 && pa.XP > 3999){
           curlvl = 4;
        }
        else if (pa.XP <= 5999 && pa.XP > 4999){
          curlvl = 5;
        }
        if (prlvl < curlvl){
            pa.levelUp();
        }
        pd.Dexterity = tempDex;
        return pd.hp();
        };

    if (pa.Classtype === "Fighter"){
        addattack = prlvl;
        }
    else if(prlvl % 2 === 0){
        //when even numbered
        addattack = prlvl / 2;
    }
    else{
        addattack = (prlvl-1)/2;
        if (addattack < 0){
            addattack = 0;
        }
    }


    if (pa.rollfc() + addattack >=pd.armor()) {
         pd.defhp =  pd.defhp-1 ;
         //x=pd.Constitution;
         pa.XP += 10;
            if (pa.XP <= 999){
            curlvl = 1;
            }
            else if (pa.XP <=1999 && pa.XP > 999){
            curlvl = 2;
            }
            else if (pa.XP <=2999 && pa.XP > 1999){
                curlvl = 3;
                }    
            else if (pa.XP <=3999 && pa.XP > 2999){
                curlvl = 4;
             }
            else if (pa.XP <= 4999 && pa.XP > 3999){
               curlvl = 4;
                }
            else if (pa.XP <= 5999 && pa.XP > 4999){
              curlvl = 5;
                }
            if (prlvl < curlvl){
                pa.levelUp();
                }
        pd.Dexterity = tempDex;
        return pd.hp();
        };

    if (pa.rollfc()<pd.armor()){
        pd.Dexterity = tempDex;
        return pd.hp();
        };
};

