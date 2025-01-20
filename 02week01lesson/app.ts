// Initial count value
let count: number = 0;

// Update the count display
const updateCountDisplay = ():void => {
    const countElement = <HTMLElement>document.getElementById('count');
    countElement.textContent = count.toString();
};

// Increment the count
const increment = ():void => {
    count += 1;
    updateCountDisplay();
};

// Decrement the count
const decrement = ():void => {
    count -= 1;
    updateCountDisplay();
};

// Reset the count
const reset = ():void => {
    count = 0;
    updateCountDisplay();
};

const incrementButton = <HTMLElement>document.getElementById('increment-button');
const decrementButton = <HTMLElement>document.getElementById('decrement-button');
const resetButton = <HTMLElement>document.getElementById('reset-button');


// Attach event listeners to buttons
incrementButton.onclick = increment;
decrementButton.onclick = decrement;
resetButton.onclick = reset;
