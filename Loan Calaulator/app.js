document.getElementById('loan-form')
.addEventListener('submit',function(e)
{
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    setTimeout(calculateResults,1000);
    e.preventDefault();
}
);

function calculateResults(){
    console.log('calculating.....');
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const MonthlyPayment = document.getElementById('MonthlyPayment');
    const TotalPayment = document.getElementById('TotalPayment');
    const TotalInterest = document.getElementById('TotalInterest');

    const principal = parseFloat(amount.value);

    const calculateInterest = parseFloat(interest.value)/100/12;

    const calculatePayments =parseFloat(years.value)*12;

    const x = Math.pow(1+calculateInterest,calculatePayments);
    const monthly = (principal*x*calculateInterest)/(x-1);

    if(isFinite(monthly)){
        MonthlyPayment.value=monthly.toFixed(2);
        TotalPayment.value = (monthly*calculatePayments).toFixed(2);
        TotalInterest.value = ((monthly*calculatePayments)-principal).toFixed(2);

    }
    
    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}