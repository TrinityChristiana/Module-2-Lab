//Trinity Terry
//9/11/17

//This program will demonstrate various ways to
//use functions in JavaScript.

//The main function
function main ()
{
    //Declare program variables
    var totalSales;
    var countyTax;
    var stateTax;
    var totalTax;
    welcomeMessage (); //causes welcomeMessage to run
    totalSales = inputSales();
    countyTax = calcCountyTax(totalSales);
    stateTax = calcStateTax(totalSales);
    totalTax = calcTotalTax(stateTax, countyTax);
    outputTaxes(countyTax, stateTax, totalTax);
}

//This function is to welcome people to my program
function welcomeMessage()
{
    alert("Welcome to my program using functions");
}

//Function to allow input of total monthly sales
function inputSales()
{
    var sales = 0.0; //Declare an initialize local variable as a float
    sales = prompt("Input total monthly sales");
    return sales;
}

//Function that accepts sales in a parameter and reterns the county tax 
function calcCountyTax(sales)
{
    return sales * .02;
}

//Function that accepts sales in a parameter and returns the state tax
function calcStateTax(sales)
{
    return sales * .04;
}

//Function that accepts countyTax and stateTax in parameters and returns the total tax
function calcTotalTax(stateTax, countyTax)
{
    return (stateTax + countyTax);
}

function outputTaxes(countyTax, stateTax, totalTax)
{
    
    alert("County Tax is $" + countyTax +"\nState Tax is $" + stateTax + "\nTotal Tax is $" + totalTax);
}

main();