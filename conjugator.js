
var SpanishVerb = require('./spanish/verb.js');
var EnglishVerb = require('./english/verb.js');
var Mapping = require('./mapping.js');

var Grammemes = require('./grammemes.js');
var Person = Grammemes.Person;
var Number = Grammemes.Number;
var Tense = Grammemes.Tense;
var Mood = Grammemes.Mood;
var Voice = Grammemes.Voice;

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var english_verb;
var spanish_verb;

GetRandomVerbForm();
rl.on('line', function (answer) {
	console.log( spanish_verb.getConjugatedVerb() === answer ? "Correct!" : "Incorrect! It should be: "+ spanish_verb.getConjugatedVerb() );
	GetRandomVerbForm();
});

function GetRandomVerbForm()
{
    var keys = Object.keys(Mapping)
    var infinitive = keys[ keys.length * Math.random() << 0];
	english_verb = new EnglishVerb(infinitive);	
	spanish_verb = new SpanishVerb(Mapping[english_verb.infinitive]);
	english_verb.setForm(Person.third, Number.singular, Tense.present, Mood.indicative, Voice.active);
	spanish_verb.setForm(Person.third, Number.singular, Tense.present, Mood.indicative, Voice.active);
	var prompt = english_verb.getPronoun() + " " + english_verb.getConjugatedVerb() + " ("+  spanish_verb.infinitive  +"): ";
	rl.setPrompt(prompt, prompt.length);
	rl.prompt();
}
