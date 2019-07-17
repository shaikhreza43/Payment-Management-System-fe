app.config(function($routeProvider){
    $routeProvider.when("/",{
        template:"<h4>Please choose a payment mode</h4>"
    }).when("/debitCard",{
        templateUrl:'debitCard.html'
    }).when("/creditCard",{
        templateUrl:"creditCard.html"
    }).when("/netBanking",{
        templateUrl:"netBanking.html"
    }).when("/wallet",{
        templateUrl:"wallet.html"
    }).when("/upi",{
        templateUrl:"upi.html"
    })
});