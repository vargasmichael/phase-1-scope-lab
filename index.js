var customerName = 'bob';
const leastFavoriteCustomer = customerName;

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer (){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer (){
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = customerName;
}