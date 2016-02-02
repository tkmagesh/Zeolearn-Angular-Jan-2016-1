describe("myApp.greet module", function(){
    beforeEach(module("myApp.greet"));

    describe("greet Controller", function(){
        it("should initialize name with empty string", inject(function($controller){

            //Arrange
            var dummyScope = {};

            $controller('greetController', {$scope : dummyScope});

            expect(dummyScope.name).toBe('');
        }));

        it("should initialize message with empty string", inject(function($controller){

            //Arrange
            var dummyScope = {};

            $controller('greetController', {$scope : dummyScope});

            expect(dummyScope.message).toBe('');
        }));

        it("should generate the message when greeted", inject(function($controller){

            //Arrange
            var dummyScope = {};

            $controller('greetController', {$scope : dummyScope});

            dummyScope.name = 'Magesh';
            dummyScope.greet();
            expect(dummyScope.message).toBe('Hi Magesh, Have a nice day!');
        }));

        it("should call the greetService when greeted", inject(function($controller){
            //Arrange
            var dummyScope = {},
                dummyGreetService = {
                    greet : function(name){

                    }
                };
            spyOn(dummyGreetService, 'greet');

            //Act
            $controller('greetController', {$scope : dummyScope, greetService : dummyGreetService});

            dummyScope.name = 'abc';
            dummyScope.greet();

            //Assert
            expect(dummyGreetService.greet).toHaveBeenCalledWith(dummyScope.name);
        }));

        it("should set the message with the greetService message", inject(function($controller){
            //Arrange
            var dummyScope = {},
                dummyGreetService = {
                    greet : function(name){

                    }
                };
            spyOn(dummyGreetService, 'greet').and.returnValue("test greet message");

            //Act
            $controller('greetController', {$scope : dummyScope, greetService : dummyGreetService});

            dummyScope.name = 'abc';
            dummyScope.greet();

            //Assert
            expect(dummyScope.message).toBe("test greet message");
        }));
    });

    describe("trimText Filter", function(){
        it("Should return the given string for short strings", inject(function($filter){
            //Arrange
            var testString = 'short string';

            var trimTextFilter = $filter('trimText');

            //Act
            var result = trimTextFilter(testString);

            //Assert
            expect(result).toBe(testString);
        }));

        it("Should return the truncated string for long strings", inject(function($filter){
            //Arrange
            var testString = 'this is a really long string for testing purpose';
            var expectedResult = 'this is a really long string f...';
            var trimTextFilter = $filter('trimText');

            //Act
            var result = trimTextFilter(testString);

            //Assert
            expect(result).toBe(expectedResult);
        }));

    });


});
