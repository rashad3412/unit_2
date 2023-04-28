//** writing two functions using function method and arrow method */
//**  each function has to stay within the budget of input-budget */
//** each function has two prices to compare using true and false booleans */
//** each funtion has to return True if over the Budegt input amount or False if under the input amount */


function budget(){
    let amount = 500;
    let gift_prices = 230 + 230;
    if (amount > gift_prices){
        return true
    }else 
        return false
} 

console.log(budget())
 

const budget = 100;
const price1 = 50;
const price2 = 46;

function sumOfGifts(gift1, gift2) {
    return gift1 + gift2;
}

const giftTotal = sumOfGifts(price1, price2)

function addTax(giftTotal) {
    return giftTotal + (giftTotal * 0.08);
}

const giftsWithTax = addTax(giftTotal);

function holidayShopping(budget, giftsWithTax) {
    return budget > giftsWithTax;
}

holidayShopping(budget, giftsWithTax);

console.log(holidayShopping(budget,giftsWithTax))


const budget = 50;
const price1 = 20;
const price2 = 25;

const sumOfGifts = (gift1, gift2) => gift1 + gift2;

const giftTotal = sumOfGifts(price1, price2);

const addTax = (giftTotalArrow) => giftTotal + (giftTotal * 0.08);

const giftsWithTax = addTax(giftTotal);

const holidayShopping = (budget, giftsWithTax) => budget > giftsWithTax;

holidayShopping(budget, gistWithTax);