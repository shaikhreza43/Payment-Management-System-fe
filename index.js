//    var x= document.getElementById("debit");
//  if(x!=undefined || x!=null)
//document.write("<h3>Hello</h3>");
//    console.log("Debit Card Mode selected");
var app = angular.module("paymentApp", ["ngRoute"]);
app.controller("paymentModeCtrl", function($scope) {
  $scope.items = [
    {
      type: "cloth",
      name: "trouser",
      price: "500",
      size: "38"
    },
    {
      type: "mobile",
      name: "Samsung Galaxy s9",
      price: "5500"
    },
    {
      type: "Camera",
      name: "Canon 5430",
      price: "2000"
    }
  ];
});
