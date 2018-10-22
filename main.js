//Page Elements
var button = document.getElementsByTagName('button')[0];

var yourFortune = document.querySelector('fortune-wrapper');

//Random Fortunes Array 
var magicFortunes = ['It is certain.','It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

//Create Placeholder Text 
var fortuneTextPlaceholder = document.createTextNode('');
yourFortune.appendChild(fortuneTextPlaceholder);


//Make shakeBall Function
var shakeBall = function() {
	//Randomize Fortunes
	magicFortunes.sort(function(a, b){return 0.5 - Math.random()});

	//Print the first list item to yourFortune variable
	var fortuneText = document.createTextNode(magicFortunes[0]);
	yourFortune.appendChild(fortuneText);

	//Hide generator button
	var ourButton = document.getElementById('generator-button');
	ourButton.removeChild(button);

	//Add fortune show class 
	yourFortune.classList.add('fortune-show');
};

//Event Handler 
button.onclick = shakeBall;

