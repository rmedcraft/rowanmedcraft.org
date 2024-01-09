/*
    Rowan Medcraft
    Created 10/8/2023
    Last Updated: 1/8/2024
    Various Cipher Translations
*/

function caesarCipher(text, offset) {
	var alph = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
	var alphCaps = alph.toUpperCase();
	for (var i = 0; i < text.length; i++) {
		if (alph.indexOf(text.charAt(i)) != -1) {
			text =
				text.substr(0, i) +
				alph.charAt(alph.indexOf(text.charAt(i)) + offset) +
				text.substr(i + 1); // lowercase
		} else if (alphCaps.indexOf(text.charAt(i)) != -1) {
			text =
				text.substr(0, i) +
				alphCaps.charAt(alphCaps.indexOf(text.charAt(i)) + offset) +
				text.substr(i + 1); // uppercase
		}
	}
	return text;
}

function atbashCipher(text) {
	var alph = "abcdefghijklmnopqrstuvwxyz";
	var reverse = "zyxwvutsrqponmlkjihgfedcba";
	var alphCaps = alph.toUpperCase();
	var revCaps = reverse.toUpperCase();
	for (var i = 0; i < text.length; i++) {
		if (alph.indexOf(text.charAt(i)) != -1) {
			text =
				text.substr(0, i) +
				reverse.charAt(alph.indexOf(text.charAt(i))) +
				text.substr(i + 1); // lowercase
		} else if (alphCaps.indexOf(text.charAt(i)) != -1) {
			text =
				text.substr(0, i) +
				revCaps.charAt(alphCaps.indexOf(text.charAt(i))) +
				text.substr(i + 1); // uppercase
		}
	}
	return text;
}

function a1z26Cipher(text) {
	var alph = "abcdefghijklmnopqrstuvwxyz";
	var result = "";
	var lastTranslated = false;
	for (var i = 0; i < text.length; i++) {
		if (alph.indexOf(text.toLowerCase().charAt(i)) != -1) {
			var translation = "";

			if (lastTranslated) {
				translation += "-"; // makes it easier to read when words are connected
			}

			translation += alph.indexOf(text.toLowerCase().charAt(i)) + 1; // turns the letter into it's place in the alphabet

			result += translation;
			lastTranslated = true;
		} else {
			result += text.charAt(i); // keeps the untranslated text
			lastTranslated = false;
		}
	}
	return result;
}

document.getElementById("button").onclick = function() {
	var text = document.getElementById("textarea").value;
	var cipher = document.getElementById("dropdown").value;
	if ((cipher = "Caesar")) {
		var output = "All possible caesar cipher translations for your input: <br>";
		for (var i = 1; i < 26; i++) {
			output += "Offset " + i + ": " + caesarCipher(text, i) + "<br>";
		}
        document.getElementById("output").innerHTML = output;
	} else if ((cipher = "Atbash")) {
        document.getElementById("output").innerHTML = "Atbash cipher translation of your input: <br>" + atbashCipher(text);
	} else if ((cipher = "A1Z26")) {
        document.getElementById("output").innerHTML = "A1Z26 cipher translation of your input: <br>" + a1z26Cipher(text);
	} else {
		document.getElementById("output").innerHTML = cipher;
	}
}
console.log(
	"Atbash Cipher: " + atbashCipher("zyxwvutsrqponmlkjihgfedcba".toUpperCase())
);

console.log("A1Z26 Cipher: " + a1z26Cipher("I'm a reall;y cool guy"));
