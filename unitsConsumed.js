// Units Consumed
// Sample Input 1 
// 930
// Sample Output 1
// 170
// Hint
// Total 930 rupees is the bill amount.
// So total unit consumed would be 170. See calculation below.
// Charges for 170 units :-
// Fixed Charge :- 80
// Charges for first 50 units :- 50 * 3 = 150
// Charges of next 100 units :- 100 * 5 = 500
// Charges of next 20 units :- 20 * 10 = 200
// Total Charges => 80 + 150 + 500 + 200 = 930.

function unitsConsumed(n) {
    let rupies = n-80
    if(rupies <=150)
        console.log(rupies/3)
    else if(rupies-150 <=500)
        console.log(50+ ((rupies-150)/5))
    else
        console.log(150 +((rupies-650)/10))
}

unitsConsumed(340)

