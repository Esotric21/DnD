/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Background
	Effect:		This script adds a background, called "Fortune Teller"
				This background is a combination of  Shawn Ellsworth's work and D&D Beyond
	Code by:	Isp (based on work by MorePurpleMoreBetter)
	Date:		2019-06-11 (sheet v13)

*/

var iFileName = "Fortune Teller [by Isp].js";
RequiredSheetVersion(13);



SourceList["Isp:IC21"] = {
	name : "Background - Fortune Teller",
	abbreviation : "Isp:IC21",
	group : "Isp Creations",
	date : "2019/6/11"
};

BackgroundList["fortune teller"] = {
	regExpSearch : /^(((?=.*\b(fortune)\b)(?=.*\b(teller)\b))).*$/i,
	name : "Fortune Teller",
	source : ["Isp:IC21"],
	skills : ["Insight", "Deception"],
	gold : 15,
	equipright : [
		["Traveler's clothes", "", 3],
		["Fortune Teller Tools", "", ""],
		["Costume clothes", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Fortune Telling",
	trait : [
		"I hate to stay in one place for more than a day or two.",
		"I often have vivid dreams or nightmares.",
		"I speak mostly in cryptic phrases.",
		"I know that fortunes can change and I seek to make the world a better place.",
		"I think that sometimes the destiny life hands us is objectively unfair, but there is always hope for change.",
		"I believe strongly in destiny, accepting all events as meant to be.",
		"I will not make an important decision about anything until I have consulted my fortune.",
		"I am not sure of the accuracy of my own fortunes, but I trust in it."
	],
	ideal : [
		["Prevention",
			"Prevention: I want to prevent the bad things happening to innocent people. (Good)"],
		["Curiosity",
			"Curiosity: What comes over the next hill is worth seeing. (Any)"],
		["Manipulation",
			"Manipulation: I will use my power to gain control over the ignorant people. (Evil)"],
		["Purpose",
			"Purpose: Everything leads us all towards fulfilling our destinies, even if we make choices against it. (Lawful)"],
		["Independence",
			"Independence: Carving out your future means submitting to no authority but your own. (Chaotic)"],
		["Guidance",
			"Guidance: Acting without concern for the future is foolish. (Neutral)"]
	],
	bond : [
		"I have experienced the presence of a special person I want to meet.",
		"My wisdom comes at a price to those who are not my companions.",
		"The plans that the gods have for each of us must become known.",
		"I will always tell fortunes truthfully.",
		"Two forces are telling me to go to a direction opposite of each other.",
		"I am tasked with the resurrection of a dead entity."
	],
	flaw : [
		"I sometimes have random black-outs during readings.",
		"I act like I am sure of the future, even when I am not.",
		"I tend to avoid people because my powers put stress on me.",
		"I am overly curious and concerned with the lives of others, especially since I am capable of reading them so well.",
		"I am neglectful of my duties because I believe that whatever happens is what must happen.",
		"I guess peoples feelings, character or birth date and am usually wrong"
	],
	extra : [
		"Astrologist",
		"Card Reading (Cartomancy)",
		"Clairvoyant",
		"Crystallomancy (reading of a crystal sphere)",
		"Face Reading",
		"Numerologist",
		"Palmistry (reading of the palms)",
		"Pendulum Reading",
		"Spirit Board Reading",
		"Tasseography (reading tea leaves in a cup)",
		"Pyro-Osteomancy (reading thrown bones)",
	],
	toolProfs : [["Fortune Teller's Tools", "Wis"]],
	languageProfs : [1],
	lifestyle : "modest"
	
};

BackgroundFeatureList["fortune telling"] = {
	description : "Once per day I may attempt to use my fortune telling tools to determine the near future of someone who has come to me for advice. I learn vague impressions of this future, such as danger, love, loss, or betrayal. I may even use this Feature to discover my own future. Alternatively, I may use this Feature to give Inspiration to another PC, while doing a reading for them.",
	source : ["Isp:IC21"]
};

//Adds Fortune Teller Tools
ToolsList["crystal ball"] = {
		infoname : "Crystal Ball [20 gp]",
		name : "Crystal Ball",
		source : ["Isp:IC21"],
		amount : "",
		weight : 3,
		type : "fortune teller's tools"
	},
ToolsList["fortune-telling cards"] = {
		infoname : "Fortune-telling cards [10 gp]",
		name : "Fortune-telling cards",
		source : ["Isp:IC21"],
		amount : "",
		weight : "",
		type : "fortune teller's tools"
	},
ToolsList["pendulum"] = {
		infoname : "Pendulum [20 gp]",
		name : "Pendulum",
		source : ["Isp:IC21"],
		amount : "",
		weight : 1,
		type : "fortune teller's tools"
	},
ToolsList["astrology charts"] = {
		infoname : "Astrology charts [20 gp]",
		name : "Astrology charts",
		source : ["Isp:IC21"],
		amount : "",
		weight : 1,
		type : "fortune teller's tools"
	},
ToolsList["bone set"] = {
		infoname : "Bone set [10 gp]",
		name : "Bone set",
		source : ["Isp:IC21"],
		amount : "",
		weight : "",
		type : "fortune teller's tools"
	},
ToolsList["rune stones"] = {
		infoname : "Rune stones [10 gp]",
		name : "Rune stones",
		source : ["Isp:IC21"],
		amount : "",
		weight : "",
		type : "fortune teller's tools"
	},
ToolsList["spirit board"] = {
		infoname : "Spirit board [10 gp]",
		name : "Spirit board",
		source : ["Isp:IC21"],
		amount : "",
		weight : 1,
		type : "fortune teller's tools"
	},
ToolsList["tea set and tea leaves"] = {
		infoname : "Tea set and tea leaves [10 gp]",
		name : "Tea set and tea leaves",
		source : ["Isp:IC21"],
		amount : "",
		weight : "",
		type : "fortune teller's tools"
	},

//adds Mule to the companion list

addCreatureList = {
		"mule" : {
		name : "Mule",
		source : ["Isp:IC21"],
		size : 3, //Medium
		type : "Beast",
		subtype : "",
		companion : "mount",
		alignment : "Unaligned",
		ac : 10,
		hp : 11,
		hd : [2, 8],
		speed : "40 ft",
		scores : [14, 10, 13, 2, 10, 5],
		saves : ["", "", "", "", "", ""],
		senses : "",
		passivePerception : 10,
		languages : "",
		challengeRating : "1/8",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Hooves",
			ability : 1,
			damage : [2, 4, "bludgeoning"],
			range : "Melee (5 ft)",
			description : ""
		}],
		traits : [{
			name : "Beast of Burden",
			description : "The mule is considered to be a Large animal for the purpose of determining its carrying capacity."
			},
		{
			name : "Sure-Footed",
			description : "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
			}],
	},
};