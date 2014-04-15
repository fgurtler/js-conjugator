var Enum = require('enum');

exports.Person = new Enum(["first", "second", "third"]);
exports.Number = new Enum(["singular", "plural"]);
exports.Tense = new Enum(["present", "future", "imperfect", "preterite", "present_perfect", "future_perfect", "past_perfect", "conditional", "conditional_perfect"]);
exports.Mood = new Enum(["indicative", "subjunctive", "imperative"]);
exports.Voice = new Enum(["active", "passive"]);

