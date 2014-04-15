var Grammemes = require('../grammemes.js');
var IrregularVerbs = require('./verb_forms_irregular.js');
var VerbEndings = require('./verb_endings.js');
var Pronouns = require('./pronouns.js');

var verb = module.exports = function (infinitive)
{
	var person, number, tense, mood, voice, conjugation;
	this.infinitive = infinitive;

	this.irregularForms = IrregularVerbs[infinitive]; 
	this.regularEndings = VerbEndings[this.getConjugation()];
	this.pronouns = Pronouns;
 }
 
verb.prototype.setForm = function(person, number, tense, mood, voice)
{
	this.person = person;
	this.number = number;
	this.tense = tense;
	this.mood = mood;
	this.voice = voice;
}
   
verb.prototype.getForm = function()
{
	return this.person + " person " + this.number + " " + this.tense + " " + this.mood + " " +  this.voice ;
}

verb.prototype.getPronoun = function()
{
	return this.pronouns[this.number][this.person];
}
	
verb.prototype.getEnding = function()
{
	return this.regularEndings[this.voice][this.mood][this.tense][this.number][this.person];
}
 
verb.prototype.getStem = function()
{
	var tense = Grammemes.Tense 
	switch(this.tense) {
		case tense.present:
		case tense.preterite:
		case tense.imperfect:
			return this.infinitive.substring(0, this.infinitive.length-2);
			break;
		case tense.future:
		case tense.conditional:
			return this.infinitive;
			break;

	}	
}

verb.prototype.getConjugation = function()
{
	var infinitive = this.infinitive;
	var conjugation = infinitive.substring(infinitive.length-2);
	if (conjugation == 'se')
		conjugation = infinitive.substring(infinitive.length-4,3);
	return conjugation;
}

verb.prototype.getConjugatedVerb = function()
{
	var form = "";
	if ( this.irregularForms 
			&& this.irregularForms[this.voice] 
			&& this.irregularForms[this.voice][this.mood]
			&& this.irregularForms[this.voice][this.mood][this.tense]
			&& this.irregularForms[this.voice][this.mood][this.tense][this.number]
			&& this.irregularForms[this.voice][this.mood][this.tense][this.number][this.person]
	){
		form = this.irregularForms[this.voice][this.mood][this.tense][this.number][this.person];
	} else {
		form = this.getStem() + this.getEnding();
	}
	return form;
}

