let decision = confirm('Do you want to play a game?')
if (decision === false) {
    alert('You did not become a billionaire, but can.');
} else {
    let tprice = 0;
    let lose = 0;
    let min = 0;
    let max = 8;
    for (let i = 1;;) {
        let n = Math.floor(Math.random() * (max - min + 1)) + min;
        let price = 100 * Math.pow(2, i - 1);
        let k = 1;
        for (let j = 3; j > 0; j--) {
            let gess = Number(prompt('Choose a roulette pocket number from 0 to ' + max +
                '\nAttempts left: ' + j + '\nTotal prize: ' + tprice +
                '$\nPossible price on current attempt: ' + Math.floor(price / k) + '$', 0));
            if (gess === n) {
                tprice += Math.floor(price / k);
                break;
            } else if (j === 1) {
                lose = 1;
            }
            k *= 2
        }
        if (lose === 1) {
            alert('Thank you for your participation.Your prize is: ' + tprice + '$');
            decision = confirm('Do you want to play again?')
            if (decision === false) {
                break;
            } else {
                i = 1;
                tprice = 0;
                lose = 0;
                k = 1;
                max = 8;
            }
        } else {
            alert('Congratulation, you won! Your prize is: ' + tprice + '$');
            decision = confirm('Do you want to continue?');
            if (decision === false) {
                alert('Thank you for your participation. Your prize is:' + tprice + '$');
                break;
            } else {
                max = 12;
                i++;
            }
        }
    }
}