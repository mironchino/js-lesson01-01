/* const depositAmount = 1000;
const yearRate = 15;
const depositTermInYears = 2;

function getDepositIncome(amount, rate, term) {
  let depositIncome = 0;
  let count = 0;
  while (count < term) {
    depositIncome = depositIncome + amount * (rate / 100);
    count++;
  }

  return depositIncome;
}

const depositIncome_1 = getDepositIncome(
  depositAmount,
  yearRate,
  depositTermInYears
);
console.log(depositIncome_1);
/* const depositIncome_2 = getDepositIncome(1500, 16, 3);
console.log(depositIncome_2);
const totalIncome = depositIncome_1 + depositIncome_2;
console.log(totalIncome);
 */
