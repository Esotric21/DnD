/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Wizard, called "Rune-Arcanist"
				This subclass is made by Isp
	Code by:	Isp (based on work by MorePurpleMoreBetter)
	Date:		2019-04-28 (sheet v13)
*/

var iFileName = "Wizard - Rune-Arcanist [by Isp].js";
RequiredSheetVersion(13);

SourceList["Isp:IC7"] = {
	name : "Wizard - Rune-Arcanist",
	abbreviation : "Isp:IC7",
	group : "Isp Creations",
	date : "2019/04/28"
};

AddSubClass("wizard", "rune-arcanist", {
	regExpSearch : /^(?=.*wizard)(?=.*rune)(?=.*arcanist).*$/i,
	subname : "Rune-Arcanist",
	source : ["Isp:IC7"],
	features : {
		"subclassfeature2" : {
			name : "Living Spellbook",
			source : ["Isp:IC7"],
			minlevel : 2,
			description : desc([
				"I perform a ritual transferring the contents of my spellbook onto my body in the form of tattoos. The spells move across my body on their own and at my command. Should I cast any spell that alters my physical form, I retain the ability to see the spells written on my body, but no one else can. My rune-tattooed skin is my spellcasting focus. I gain proficiency with either the Intimidation skill, tattoo kit, or learn one language. Use the \"Choose Feature\" button above to select one of these three options"
			]),
			choices : ["Skill proficiency: Intimidation", "Tool proficiency: Tattoo Kit", "Language proficiency"],
			"language proficiency" : {
				name : "Living Spellbook",
				description : desc([
					"I perform a ritual transferring the contents of my spellbook onto my body in the form of tattoos. The spells move across my body on their own and at my command. Should I cast any spell that alters my physical form, I retain the ability to see the spells written on my body, but no one else can. My rune-tattooed skin is my spellcasting focus. I learn one language"
				]),
				languageProfs : [1]
			},
			"skill proficiency: intimidation" : {
				name : "Living Spellbook",
				description : desc([
					"I perform a ritual transferring the contents of my spellbook onto my body in the form of tattoos. The spells move across my body on their own and at my command. Should I cast any spell that alters my physical form, I retain the ability to see the spells written on my body, but no one else can. My rune-tattooed skin is my spellcasting focus. I gain the Intimidation skill."
				]),
				skills : ["Intimidation"]
			},
			"tool proficiency: tattoo kit" : {
				name : "Living Spellbook",
				description : desc([
					"I perform a ritual transferring the contents of my spellbook onto my body in the form of tattoos. The spells move across my body on their own and at my command. Should I cast any spell that alters my physical form, I retain the ability to see the spells written on my body, but no one else can. My rune-tattooed skin is my spellcasting focus.",
				]),
				toolProfs : ["Tattoo Kit"]
			}
		},
		"subclassfeature2.1" : {
			name : "Rune of Binding",
			source : ["Isp:IC7"],
			minlevel : 2,
			description : desc([
				"I can bind an inanimate object to me that I can physically carry with a 4 hour ritual, during which I tattoo the rune to my skin. Upon the ritual's completion, the item transforms into a rune on my skin. As a bonus action, I can summon a bound object to my hand. By pressing on the rune again as a bonus action, I can return the item to it. When the object is destroyed, the corresponding rune disappears."
			]),
			action : ["bonus action", ""],
			additional : levels.map( function(n) { return n < 6 ? "" : "max " + (n < 14 ? 2 : 4) + " objects bound"; })
		},		
		"subclassfeature6" : {
			name : "Rune Cocoon",
			source : ["Isp:IC7"],
			minlevel : 6,
			description : "\n   " + "The runes on my body acts as a ward. I'm always under the effects of Mage Armor.",
			addarmor : "Mage Armor",
		},
		"subclassfeature10" : {
			name : "Skin Glyphs",
			source : ["Isp:IC7"],
			minlevel : 10,
			description : desc([
				"When preparing spells, I can convert a spell I can cast into a skin glyph. Doing so uses a spell slot equal to the spell's level. As long as the spell is in the glyph, I cannot cast it with spell slots. The glyph can be triggered as per the Glyph of Warding spell or I can set a trigger option for a gesture or command, which requires a bonus action to activate. Skin glyphs can't harm me and require no components to trigger. Spells triggered by the glyph do not require concentration, and last their full duration."
			]),
			additional : levels.map( function(n) { return n < 2 ? "" : "max " + (n < 14 ? 1 : 2) + " active skin glyph" + (n < 14 ? "" : "s"); })
		},
		"subclassfeature14" : {
			name : "Runic Mastery",
			source : ["Isp:IC7"],
			minlevel : 14,
			description : desc([
				"I can create up to two active skin glyphs and bind up to four objects. I can create one active skin glyph on another creature instead of on myself. This can be resisted with a successful Wisdom saving throw"
			])
		}
	}
});
















