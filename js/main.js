const playerCards=document.querySelectorAll('.playing-card');
const cardCountDisplay=document.getElementById('card-count-display');

let presentTableCard="funmi";
let cardCount=0;
const allCards=[
	{
		id:'the2',
		theImage:'./images/2.png',
	},
	{
		id:'the3',
		theImage:'./images/3.png',
	},
	{
		id:'the4',
		theImage:'./images/4.png',
	},
	{
		id:'the5',
		theImage:'./images/5.png',
	},
	{
		id:'the6',
		theImage:'./images/6.png',
	},
	{
		id:'the7',
		theImage:'./images/7.png',
	},
	{
		id:'the8',
		theImage:'./images/8.png',
	},
]

//Randomise card
allCards.sort(()=>0.5-Math.random());


//INITIALISE THE PLAYERS CARDS
playerCards.forEach((card,index)=>{
	card.addEventListener('click',crossCheckCard);
	card.addEventListener('dragend',crossCheckCard);
	
	//arranges random cards for the player
	// let randomIndex=Math.floor(Math.random()*allCards.length );
	// let cardId=allCards[randomIndex]['id'];
	let cardId=allCards[index]['id'];
	// let cardImage=allCards[randomIndex]['theImage'];
	let cardImage=allCards[index]['theImage'];
	card.setAttribute('data-cardid', cardId);
	card.style.backgroundImage=`url(${cardImage})`;
})


function crossCheckCard(e){
	
	if(e.currentTarget.dataset.cardid===presentTableCard){
		e.currentTarget.style.backgroundImage='url(./images/leaf.jpg)';
		e.currentTarget.style.pointerEvents='none';
		cardCount++;
		cardCountDisplay.innerText=cardCount;
	}
	
	
}


//WHEN PLAYER ATTEMPTS TO END GAME WITH LOTERIA
const loteriaBtn=document.getElementById('loteria-button');

loteriaBtn.addEventListener('click', loteriaCheck)

function loteriaCheck(){
	if(cardCount===5){
		return console.log('win');
	}
	
	console.log('not done')
}

