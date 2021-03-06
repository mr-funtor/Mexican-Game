const playerCards=document.querySelectorAll('.playing-card');
const cardCountDisplay=document.getElementById('card-count-display');
const tableCard=document.querySelector('.playing-card-table');

let presentTableCard="";
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
	{
		id:'the9',
		theImage:'./images/9.png',
	},
	{
		id:'the10',
		theImage:'./images/10.png',
	},
	{
		id:'theA',
		theImage:'./images/A.png',
	},
	{
		id:'theJ',
		theImage:'./images/J.png',
	},
	{
		id:'theJ',
		theImage:'./images/K.png',
	},
	{
		id:'theJ',
		theImage:'./images/Q.png',
	},
]

//Randomise cards for the player
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


//PICKS RANDOM CARD FOR THE GAME TABLE
let cardsOnTable=[];
// let initialState=true;
function gameTable(){
	let randomIndex=Math.floor(Math.random()*allCards.length );
	let cardId=allCards[randomIndex]['id'];
	let cardImage=allCards[randomIndex]['theImage'];
	tableCard.style.backgroundImage=`url(${cardImage})`;
	
	presentTableCard=cardId;
	cardsOnTable.push(cardId);
	
	randomiseTheTableCard()
}

gameTable()

function randomiseTheTableCard(){
	allCards.sort(()=>0.5-Math.random());
	let newIndex=0;
	
	setInterval(()=>{
		if(newIndex>=allCards.length-1){
			allCards.sort(()=>0.5-Math.random());
			newIndex=0;
			cardsOnTable=[];
			console.log('afresh')
		}
		
		let cardId=allCards[newIndex]['id'];
		
		//checks if the card has been played before
		if(cardsOnTable.includes(cardId)){
			newIndex++;
			cardId=allCards[newIndex]['id'];
			console.log('inside')
		}
		
		cardsOnTable.push(cardId);
		presentTableCard=cardId;
		let cardImage=allCards[newIndex]['theImage'];
		tableCard.style.backgroundImage=`url(${cardImage})`;
		
		
		newIndex++
	},2000)
	
	
}


//CHECKS CARD WHEN PLAYER CLICKS
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


//BOT LOGIC
function botLogic(){
	allCards.sort(()=>0.5-Math.random());
	let shuffledIds=[];
	
	for(let i=0;i<5;i++){
		shuffledIds.push(allCards[i]['id']);
	}
	
}

botLogic()

