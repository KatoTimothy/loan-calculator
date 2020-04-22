/*
AUTHOR: KATO TIMOTHY



LOAN APP FORMULARS 
======================

1.Monthly Pay  = pi / {1 - (n+1)^ (-n) } 

	where p => loan amout
	i = interest rate
	n = loan period

2. Total Payment = monthly pay * repayment period 

3. Total interest = total payment - loan amount

*/


/*LOAN CALCULATOR APP*/

function loanCalculator() {

	//Get elements
	var calculateButton = document.getElementById("calculate"),
		monthlyPayEl = document.getElementById("month_pay"),
		totalPayEl = document.getElementById("total_pay"),
		totalInterestEl = document.getElementById("total_interest"),

		monthlyPayment = 0,
		totalPayment = 0,
		totalInterest = 0;

	/*Add click event listener to the calculate Button*/
	calculateButton.addEventListener("click", function (event) {

		/*Fetch values entered by user*/
		let loanAmount = document.getElementById("principle").value,
			//Convert interest to per month
			monthlyInterest = document.getElementById("interest").value / 100 / 12,
			//Convert repay period from years to months
			repayPeriod = document.getElementById("period").value * 12;

		//Compute monthly pay 
		monthlyPayment = (loanAmount * monthlyInterest / (1 - Math.pow((monthlyInterest + 1), -repayPeriod)));
		//display computed monthly payment and round off to 2 decimal places
		monthlyPayEl.innerHTML = "$ " + monthlyPayment.toFixed(2);


		//compute total payment
		totalPayment = (monthlyPayment * repayPeriod);
		//display computed total payment and round to 2 decimal places
		totalPayEl.innerHTML = "$ " + totalPayment.toFixed(2);

		//compute total interest
		totalInterest = totalPayment - loanAmount;
		//display total interest and round off to 2 decimal places
		totalInterestEl.innerHTML = "$ " + totalInterest.toFixed(2);
	});

}

$(function () {
	loanCalculator();
})

