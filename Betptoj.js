//1.Deposit some money
//2.Determine number of lines to bet on
//3.Collect a bet amount
//4.Spin the slot machine
//5.Check if the user won
//6.give the user their winning
//7.play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
};
const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
};

let balance = deposit();
const numberOfLines = getNumberOfLInes();

const deposit =() => { //this is another way of making a function
    while (true){

    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <=0) {
        console.log("Invalid deposit amount, try again.");
    }else{
        return numberDepositAmount;
    }
    }
};
const getNumberOfllines = () => {
    while (true){

        const lines = prompt("Enter the number of lines to bet on(1-3): ");
        const numberOfLInes = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLInes <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
        }else{
            return numberOfLines;
        }
    }
}

const getBet = (balance, Lines)=> {
    while (true){

        const bet = prompt("Enter the total bet per line: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet >(balance / Lines)) {
            console.log("Invalid bet, try again.");
        }else{
            return numberBet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for(const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for(Let i=0; i < count; i++){
            symbols.push(symbol)
        }
    }

    [A, B, C]
    

    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++){
            reels.push([]);
        const reelsSymbols = [...symbols];
        for (let j=0; j < ROWS; j++){
            const randomIndex = math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i =0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows
};

const printRows = (rows) => {
    for (const row of rows){
        let rowString = "A";
        ["A", "B", "C" ]
        for (const [i, symbol] of rows.entries()){
            rowString += symbol
            if(i != rows.length -1){
                rowString += " | "
            }
            
        }

        console.log(rowString)
    }
}

const getwinnings = (rows, bet, lines) => {
    let winnings = 0;

    for(let row = 0; row < lines; row++){
        const symbols = rows [row];
        let allSame = true;

        for (const symbol of  symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
        }

        if (allSame){
            winnings += bet * SYMBOL_VALUES[symbols[0]]
        }
    }

    return winnings;
}

const game = () => {
    let balance = deposit();

    while(true){
    const numberOfLines = getNumberOflines();
        const bet = getBet(balance, numberOfLines)
        balance -= bet * numberOfLines;
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    const winning = getwinnings(rows, bet, lines)
    console.log("You won, $" + winnings.toString());

        if(balance <=0){
            console.log("You ran out money!");
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)?")

        if (playAgain !="y") break;
}
};

game();


