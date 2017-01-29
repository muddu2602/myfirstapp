angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function ($http,$scope) {

    	 this.totalUsersData=[];
         var self=this;
     console.log('I am here before API call');
    	 
    	 $http.get("http://localhost:4000/getAllStudentsData")
    .then(function(response) {
        
        self.totalUsersData=response.data;
        console.log(self.totalUsersData);
    });


this.submit = function()
{


	//console.log(this.name);
	//console.log(this.age);
	//console.log(this.email);

	var userdata=  {
		"name":this.name,
		"age":this.age,
		"email":this.email
	};

	console.log(userdata);
	this.totalUsersData.push(userdata);
	
	console.log(this.totalUsersData);

}



    }
  });
