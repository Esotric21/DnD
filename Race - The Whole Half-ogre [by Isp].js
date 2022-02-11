/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Half-ogre"
				This race is made by Isp
	Code by:	Isp (based on work by MorePurpleMoreBetter)
	Date:		2019-04-15 (sheet v13)
*/
var iFileName = "The Whole Half-ogre [by Isp].js";
RequiredSheetVersion(13);

SourceList["Isp:IC10"] = {
	name : "Race - Half-Ogre",
	abbreviation : "Isp:IC10",
	group : "Isp Creations",
	date : "2019/04/15"
};

RaceList["half-ogre"] = {
regExpSearch : /^(((?=.*\b(ogre?|ogres|ogrish)\b)(?=.*\b(half)\b))).*$/i,
	name : "Half-ogre",
	source : ["Isp:IC10"],
	plural : "Half-ogres",
	size : 2,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	skills: ["Intimidate", "Choose 1"],
	languageProfs : ["Common", "Giant"],
	vision : [["Darkvision", 60]],
	age : "Half-ogres reach adulthood at age 15 and live up to 90 years.",
	height : " are between 7 and a half and 8 feet tall (7\" + 2d6\")",
	weight : " weigh between 273 and 450 lb (270 + 3d10 \xD7 1d6 lb)",
	heightMetric : " are between 2 and 2,6 metres tall (190 + 5d10 cm)",
	weightMetric : " weigh between 124 and 200 kg (120 + 4d20 kg)",
	improvements : "Half-ogre: +2 Strength, +1 Constitution, -2 Intelligence;",
	scores : [2, 0, 1, -2, 0, 0],
	trait : "Half-ogre (+2 Strength, +1 Constitution, -2 Intelligence)" + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + "\nGiant-kin: I am considered a giant and subject to all effects that target giants." + "\nOgre Toughness: My hit point maximum increases by 1, and it increases by 1 every time I gain a level.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};

// Add Racial Variants of Half Ogre
AddRacialVariant("half-ogre", "human-blood", {
	regExpSearch : /^(?=.*half)(?=.*ogre)(?=.*human)(?=.*blood).*$/i,
	name: "Half-ogre, Human-blood",
	source : ["Isp:IC10", 1],
	improvements : "Half-ogre: +2 Strength, +1 Constitution, -2 Intelligence; Increase my Dexterity, Intelligence, Wisdom, or Charisma score by 1",
	scores : [2, 0, 1, -2, 0, 0],
	trait : "Human-blood (+2 Str, +1 Con, -2 Int)" + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + "\nGiant-kin: I am considered a giant and subject to all effects that target giants." + "\nOgre Toughness: My hit point maximum is increased by 1 each level." + "\nAbility Score Increase: Increase my Dex, Int, Wis, or Cha score by 1",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
});
AddRacialVariant("half-ogre", "hgoblin-blood", {
	regExpSearch : /^(?=.*half)(?=.*ogre)(?=.*hgoblin)(?=.*blood).*$/i,
	name: "Half-ogre, Hobgoblin-blood",
	source : ["Isp:IC10", 2],
	languageProfs : ["Goblin"],
	features : {
		"big bully" : {
			name : "Big Bully",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
		},
	},
	trait : "Hobgoblin-blood (+2 Str, +1 Con, -2 Int)" + "\nPowerful Build: I count as one size larger when determining carrying capacity and the weight I can push, drag, or lift." + "\nGiant-kin: I am considered a giant and subject to all effects that target giants." + "\nOgre Toughness: My hit point maximum is increased by 1 each level." + "\nBig Bully. Once per short rest, when I damage a creature with an attack or a spell and the creature's size is smaller than mine, I can cause the attack or spell to deal extra dmg equal to my level to the creature."
});
AddRacialVariant("half-ogre", "orc-blood", {
	regExpSearch : /^(?=.*half)(?=.*ogre)(?=.*orc)(?=.*blood).*$/i,
	name: "Half-ogre, Orc-blood",
	source : ["Isp:IC10", 3],
	languageProfs : ["Common","Giant","Orcish"],
	weapons : ["Club-Fisted"],
	features : {
		"club fisted" : {
			name : "Club-Fisted",
			minlevel : 1
		},
		"bone plating" : {
			name : "Bone Plating",
			minlevel : 1
		},
	},
	trait : "Orc-blood (+2 Str, +1 Con, -2 Int)" + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + " \nGiant-kin: I am considered a giant and subject to all effects that target giants." + " \nOgre Toughness: My hit point maximum is increased by 1 each level." + " \nClubfisted: I have bony protrusions on my knuckles. My unarmed strikes deal bludgeoning damage equal to 1d4 + Str." + " \nBone Plating: My body is covered in closely fitting bony plates. When not wearing armor, my AC is 13 + Dex. A shield's benefits apply as normal while I use my natural armor.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
});
AddRacialVariant("half-ogre", "goliath-blood", {
	regExpSearch : /^(?=.*half)(?=.*ogre)(?=.*goliath)(?=.*blood).*$/i,
	name: "Half-ogre, Goliath-blood",
	source : ["Isp:IC10", 4],
	height : " are between 8 and a half and 9 feet tall (8\" + 2d6\")",
	weight : " weigh between 402 and 600 lb (402 + 2d100 lb)",
	improvements : "Half-ogre: +2 Strength, +2 Constitution, -2 Intelligence;",
	scores : [2, 0, 2, -2, 0, 0],
	languageProfs : ["Common","Giant"],
	weapons : ["Giant-Fisted"],
	features : {
		"giant fisted" : {
			name : "Giant-Fisted",
			minlevel : 1
		},
	},
	trait : "Goliath-blood (+2 Str, +1 Con, -2 Int)" + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + " \nGiant-kin: I am considered a giant and subject to all effects that target giants." + " \nOgre Toughness: My hit point maximum is increased by 1 each level." + " \nGiant Fists: My fists are like weapons. My unarmed strikes deal bludgeoning damage equal to 1d6 + Str.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
});

// Add Racial Weapons
WeaponsList["club fisted"] = {
	regExpSearch : /^(?=.*club)(?=.*\bfisted?\b).*$/i,
	name : "Club-Fisted",
	source : ["Isp:IC10", 3],
	ability : 1,
	type : "Unarmed",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "My unarmed strikes deal 1d4 damage instead of their usual amount",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["giant fisted"] = {
	regExpSearch : /^(?=.*giant)(?=.*\bfisted?\b).*$/i,
	name : "Giant-Fisted",
	source : ["Isp:IC10", 4],
	ability : 1,
	type : "Unarmed",
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "My unarmed strikes deal 1d6 damage instead of their usual amount",
	abilitytodamage : true,
	monkweapon : true
};

// Add Racial Armor
ArmourList["bone plating"] = {
	regExpSearch : /^(?=.*bone)(?=.*plating).*$/i,
	name : "Bone Plating",
	addarmor : "Bone Plating",
	source : ["Isp:IC10", 3],
	type : "natural",
	ac : 13,
	stealthdis : false,
	strReq : 0
};

// Add Racial Feats for Half-ogres
FeatsList["giants grip"] = {
	name : "Giant's Grip",
	source : ["Isp:IC10"],
	prerequisite : "Being a Half-ogre",
	prereqeval : "CurrentRace.known.indexOf('half-ogre') !== -1",
	description : "You can now wield melee weapons with the two-handed property using only one hand if the weapons are made for creatures of at least one size category smaller than your size. You can deal dmg with versatile melee weapons as being wielded with two hands even if being wielded in one hand.",
	improvements : "+1 Strength",
	action : ["action", ""]
};


