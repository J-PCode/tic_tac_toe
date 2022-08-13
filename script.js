// game module, check results, ends game when someone won it and resets after request

// player factory create player and playturn
const playerFactory = (name, mark) => {
	const playTurn = (board, cell) => {
		const idx = board.cells.findIndex(position => position === cell);
		if (board.boardArray[idx] === ''){
			board.render();
			return idx;
		}
		return null;
	};
	return {name, mark, playTurn};
	};

	const boardModule = (() => {
		let boardArray = ['', '', '', '', '', '', '', '', ''];
		const gameboard = document.querySelector('#board');
		const cells = Array.from(document.querySelectorAll('.cell'));
		let winner = null;

		const render = () => {
			boardArray.forEach((mark, idx) => {
				cells[idx].textContent = boardArray[idx];
			});
		};
		const reset = () => {
			boardArray = ['', '', '', '', '', '', '', '', ''];
		};

		const checkWin = () => {
			const winArrays = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			];

			winArrays.forEach((combo) => {
				if (boardArray[combo[0]] && boardArray[combo[0]] === boardArray[combo[1]] && boardArray[combo[0]] === boardArray[combo[1]]) {
					winner = 'current';
				}
			});
			return winner || (boardArray.includes('') ? null : 'tie');
		};

		return {
			render, gameboard, cells, boardArray, checkWin, reset,
		};
	})();
	
/* add event listeners
Document.querySelector('#array-id').addEventListener('click', (e) => ja mitä sitten tehdään?
Lisätään merkki siihen mitä pelaaja painoi, lisätään tulos taulukkoon
e.textContent = activeplayer.marker;

 

Tarkistetaan pelin tila ja vaihdetaan mahdollisesti vuoro
// User interface, show UI tasks: show info for the game, results and gameboard.*/
