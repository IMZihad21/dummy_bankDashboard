// Declare variables
let depositDashboard = document.getElementById('depositDashboard');
let withdrawDashboard = document.getElementById('withdrawDashboard');
let balanceDashboard = document.getElementById('balanceDashboard');
let depositInput = document.getElementById('depositInput');
let depositSubmit = document.getElementById('depositSubmit');
let withdrawInput = document.getElementById('withdrawInput');
let withdrawSubmit = document.getElementById('withdrawSubmit');

// set initial balance
balanceDashboard.innerText = 2500;

// Deposit operations
depositSubmit.addEventListener('click', function(){
    depositDashboard.innerText = parseFloat(depositDashboard.innerText) + parseFloat(depositInput.value);
    depositInput.value = '';
});
