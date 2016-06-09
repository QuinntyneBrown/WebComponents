//describe("carouselContent", () => {
//    var carouselContentComponent;
//    var $compile;
//    var $rootScope;
//    class MockActionCreator { }
//    beforeEach(() => {
//        angular.mock.module("app.carouselContent");
//    });
//    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
//        $rootScope = _$rootScope_;
//        $compile = _$compile_;
//        carouselContentComponent = $controller("carouselContentComponent", { carouselContentActionCreator: new MockActionCreator() });
//    }));
//    it("should compile", () => {
//        var element = $compile("<carousel-content></carousel-content>")($rootScope);
//        expect(carouselContentComponent).toBeDefined();
//    });
//    it("should be defined", () => {
//        expect(carouselContentComponent).toBeDefined();
//    });
//})

//describe("carousel", () => {
//    var carouselComponent;
//    var $compile;
//    var $rootScope;
//    class MockActionCreator { }
//    beforeEach(() => {
//        angular.mock.module("app.carousel");
//    });
//    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
//        $rootScope = _$rootScope_;
//        $compile = _$compile_;
//        carouselComponent = $controller("carouselComponent", { carouselActionCreator: new MockActionCreator() });
//    }));
//    it("should compile", () => {
//        var element = $compile("<carousel></carousel>")($rootScope);
//        expect(carouselComponent).toBeDefined();
//    });
//    it("should be defined", () => {
//        expect(carouselComponent).toBeDefined();
//    });
//})

describe("counter", function () {
    var counterActionCreator;
    beforeEach(function () {
        angular.mock.module("app.counter");
    });
    beforeEach(inject(function (_counterActionCreator_) {
        counterActionCreator = _counterActionCreator_;
    }));
    it("should be defined", function () {
        expect(counterActionCreator).toBeDefined();
    });
});

describe("counter", function () {
    var counterComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.counter");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        counterComponent = $controller("counterComponent", { counterActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<counter></counter>")($rootScope);
        expect(counterComponent).toBeDefined();
    });
    it("should be defined", function () {
        expect(counterComponent).toBeDefined();
    });
});
