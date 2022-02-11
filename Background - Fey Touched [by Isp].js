/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Background
	Effect:		This script adds a background, called "Fey Touched"
				This background is made by Isp
	Code by:	Isp (based on work by MorePurpleMoreBetter)
	Date:		2018-11-24 (sheet v13)


*/

var iFileName = "Fey Touched [by Isp].js";
RequiredSheetVersion(13);
 
SourceList["Isp:IC8"] = {
	name : "Background - Fey Touched",
    abbreviation : "Isp:IC8",
	group : "Isp Creations",
	date : "2018/11/24"

};
 
BackgroundList["fey touched"] = {
	regExpSearch : /^(?=.*fey)(?=.*touched).*$/i,
	name : "Fey Touched",
	source : ["Isp:IC8"],
	skills : ["Nature","Deception"],
	skillstxt : "Nature and Deception",
	languageProfs : ["Sylvan",1],
	gold : 10,
	equipleft : [
		["Waterskin", "", ""],
		["Musical Instrument", "", ""],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Feywild Flower or other small item ", "", ""],
		["Toy from my previous family ", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Fey Touched",
	trait : [
		"I tend to talk, hum or sing to myself quite often.",
		"No matter the situation, I tend to be in an up-beat mood.",
		"I like causing problems every once in awhile.",
		"I tend to be skittish and/or hostile towards those I don't know or trust.",
		"I tend to speak in a variety of voices for no reason whatsoever. It's fun!",
		"I tend to fidget with things constantly."     
	],
	ideal : [
		["Kindness",
			"Kindness. I wish to bestow my kindness to my friends, as the Fey did to me years ago (Good)"
		],
		["Trickster",
			"Trickster. A little prank here or there shouldn't cause too much harm...Maybe...Hehehe (Any)"
		],
		["Whispers",
			"The voices speak to me and usually they forget to tell me about the rules. (Any)"
		],
		["Curiosity",
			"Curiosity. I wonder what'll happen if.... (Chaotic)"
		],
		["Remembered",
			"Remembered. Wherever I go, either people love me or hate me. And I tend to not be forgotten by most. (Neutral)"
		],
		["Hope",
			"Hope. Someday I'll find my true family. Till then I'll make the best of what I've got! (Neutral)"
		]
	],
	bond : [
		"I think fondly and keep in touch to the Fey that protected me.",
		"The Fey caused strife and turmoil to my life; I shall not forgive them.",
		"I want to find out who I was to become before the Fey Wilds.",
		"My magic may have caused...A little trouble to a group of kinda important individuals? I may need to be careful about them.",
		"A noble seems oddly interested in my powers. I don't know what to make of this.",
		"I'm a high target to Fey-ish kind due to my past and magic."
	],
	flaw : [
		"Sometimes I can get carried away and cause problems.",
		"I'm scared of my own magical abilities.",
		"I repeat the same phrases over and over again when nervous.",
		"I tend to make people like me because I'm scared they won't trust me.",
		"I speak in rhyme all the time.",
		"I can't help myself to not prank a sleeping / prone individual, or anyone actually."
	],
	extra : [
		"",
		"Pixie",
		"Sprite",
		"Dryad",
		"Nereid",
		"Satyr",
		"Eladrin",
		"Hag",
		"Darkling"
		
	],
	toolProfs : ["Musical Instrument", 1],
	lifestyle : "modest"
};
 
BackgroundFeatureList["fey touched"] = {
    description : "I am fey touched; at a young age, I found myself deep within the Feywild. Even though I may not be of actual Fey blood/racial stock, all Fey I encounter recognize me as Fey-touched and treat me as one of their own. I know the customs/culture of Fey society and find acceptance in their communities. I automatically succeed on saving throws needed to retain my memories of my stay in the Feywild.",
    source : ["Isp:IC8"]
};
