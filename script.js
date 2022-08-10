// game module, check results, ends game when someone won it and resets after request

const cells = document.querySelectorAll('.cell');
const gameboard = (() => {

	//generate board array
	const board = [
	"","","",
	"","","",
	"","",""];
	
  const setBoard = () => {
    for (let i = 0; i < cells.length; < 8; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}
    
}
const createPlayer = (name, marker) => {
	return {name, marker};
	}
	
/* add event listeners
Document.querySelector('#array-id').addEventListener('click', (e) => ja mitä sitten tehdään?
Lisätään merkki siihen mitä pelaaja painoi, lisätään tulos taulukkoon
e.textContent = activeplayer.marker;

 

Tarkistetaan pelin tila ja vaihdetaan mahdollisesti vuoro
// User interface, show UI tasks: show info for the game, results and gameboard.*/
