const playerCards=document.querySelectorAll('.playing-card');
const cardCountDisplay=document.getElementById('card-count-display');

let presentTableCard="funmi";
let cardCount=0;

playerCards.forEach((card)=>{
	card.addEventListener('click',crossCheckCard)
	card.addEventListener('dragend',crossCheckCard)
})


function crossCheckCard(e){
	
	if(e.currentTarget.dataset.cardid===presentTableCard){
		e.currentTarget.style.backgroundColor='coral';
		e.currentTarget.style.pointerEvents='none';
		cardCount++;
		cardCountDisplay.innerText=cardCount;
	}
	
	
}

