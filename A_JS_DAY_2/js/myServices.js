var app = angular.module("serviceApp",[])

app.controller("servicesController", function($scope, appTitle, myFactory, empFactory, studentService, myTestProvider) {
    
    $scope.title_val = appTitle;
    
    $scope.msg_factory = myFactory;
   
    empFactory.setEmpName("Amitha R");
    $scope.obj_factory = empFactory.getEmpName();
   
    $scope.std_service = studentService;
    $scope.std_service.setstdName("Bob");
    $scope.std_service.getstdName();
    
    $scope.provider_val = myTestProvider;
//    myTestProvider.setMyString("AR"); -> setMyString defined in config phase and hence cannot be used in the run phase, hance inject in the configphase;
})

app.value("appTitle", "My Angular Title")

app.factory("myFactory", function(appTitle) {
    return "This is a Factory Service " + appTitle;
})

//Factory returning an object -> getters/setters are function;
app.factory("empFactory", function() {
    var empName = "";
    return {
        getEmpName: function() {
            return empName;
        },
        setEmpName: function(nameVal) {
            empName = nameVal;
        }
    }
})

app.service("studentService", function(){
  var stdName = "";
    this.getstdName = function() {
        return stdName;
    }
    this.setstdName = function(stdname) {
        stdName = stdname;
    }
})

app.config(function(myTestProviderProvider, orgName) { //Appending/Suffixing Provider to the provider name inorder to use it in the config phase since it is defined in the config phase , it cannot be made use of in the run phase or in any other components;
    console.log("Configuration " + orgName); //Register all the object;
    myTestProviderProvider.setMyString("AR");
})

app.run(function(studentService, myTestProvider) {
    console.log("Run phase"); //objects are instantiated;
})

app.provider("myTestProvider", function() {
    
    var myString = "This is MyString ****";
    
    //Available in the config block;
    console.log("This is My Test Provider Function.");
    
    this.setMyString  = function(newVal) {
        myString = newVal;
    }
    
    //Available in the Run block -> $get
    this.$get = function() {
        console.log("This is in $GET provider function message.");
        return myString;
    }
})

app.constant("orgName", "My Organization")
