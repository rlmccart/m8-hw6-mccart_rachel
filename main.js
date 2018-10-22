var button = document.getElementsByTagName('button')[0];

var magicFortunes = ['It is certain.','It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

var yourFortune = document.querySelector('fortune-wrapper');

var fortuneTextPlaceholder = document.createTextNode('');
yourFortune.appendChild(fortuneTextPlaceholder);

var shakeBall = function() {
    magicFortunes.sort(function(a, b){return 0.5 - Math.random()});
    
    var ourRandomFortuneFiller = document.createTextNode(magicFortunes[0]);
	ourRandomFortuneItem.appendChild(ourRandomFortuneFiller);

	//Hide generator button
	var ourShakeBallButton = document.getElementById('generator-button');
	ourShakeBallButton.removeChild(button);

	//Add class to printed Fortune
	ourRandomFortuneItem.classList.add('big-and-bold');
};



//Event Handler Property Definition
button.onclick = myFunction;





