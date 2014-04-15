
var SpanishVerb = require('./spanish/verb.js');
var EnglishVerb = require('./english/verb.js');

var Grammemes = require('./grammemes.js');
var Person = Grammemes.Person;
var Number = Grammemes.Number;
var Tense = Grammemes.Tense;
var Mood = Grammemes.Mood;
var Voice = Grammemes.Voice;

var verb = new SpanishVerb("dar");
console.log(verb.getConjugation());

verb.setForm(Person.third, Number.plural, Tense.present, Mood.indicative, Voice.active);
console.log(verb.getForm() + " of " + verb.infinitive + " is " + verb.getPronoun() + " " + verb.getConjugatedVerb());

verb.person = Person.first;
console.log(verb.getForm() + " of " + verb.infinitive + " is " + verb.getPronoun() + " " + verb.getConjugatedVerb());

verb.number = Number.singular;
console.log(verb.getForm() + " of " + verb.infinitive + " is " + verb.getPronoun() + " " + verb.getConjugatedVerb());


var verb = new EnglishVerb("go");
verb.setForm(Person.third, Number.singular, Tense.preterite, Mood.indicative, Voice.active);
console.log(verb.getForm() + " of " + verb.infinitive + " is " + verb.getPronoun() + " " + verb.getConjugatedVerb());

var verb = new EnglishVerb("talk");
verb.setForm(Person.third, Number.singular, Tense.present, Mood.indicative, Voice.active);
console.log(verb.getForm() + " of " + verb.infinitive + " is " + verb.getPronoun() + " " + verb.getConjugatedVerb());