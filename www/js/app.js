'Use Strict';
angular.module('App', ['ionic', 'ngStorage', 'ngCordova', 'firebase', 'ngMessages'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'views/home/menu.html',
                        controller: 'appController'
                    })
                    .state('app.home', {
                        url: '/home',
                        views: {
                            'menuContent': {
                                templateUrl: 'views/home/home.html'
                            }}
                    })
                    .state('app.login', {
                        url: '/login',
                        views: {
                            'menuContent': {
                                templateUrl: 'views/login/login.html',
                                controller: 'loginController'
                            }}
                    })
                    .state('app.forgot', {
                        url: '/forgot',
                        views: {
                            'menuContent': {
                                templateUrl: 'views/forgot/forgot.html',
                                controller: 'forgotController'
                            }}
                    })
                    .state('app.register', {
                        url: '/register',
                        views: {
                            'menuContent': {
                                templateUrl: 'views/register/register.html',
                                controller: 'registerController'
                            }}
                    })
                    .state('app.profile', {
                        url: '/profile',
                        views: {
                            'menuContent': {
                                templateUrl: 'views/profile/profile.html',
                                controller: 'profileController'
                            }}
                    });

            $urlRouterProvider.otherwise('app/login'); //set to login when done, use to check pages
        })

        // Changue this for your Firebase App URL.
        .constant('FURL', {
            apiKey: "AIzaSyBsymJAzlK9eetJ2OnvEerSPynSjD9o1Zc",
            authDomain: "projectx-b1485.firebaseapp.com",
            databaseURL: "https://projectx-b1485.firebaseio.com",
            storageBucket: "projectx-b1485.appspot.com"
        }
        )

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function (FURL) {


                // AdMob
                if (window.AdMob) {
                    var admobid;

                    if (device.platform == "Android") {
                        admobid = {// for Android
                            banner: 'ca-app-pub-8943241156434100/4304279677',
                            interstitial: 'ca-app-pub-8943241156434100/3994725276'
                        };
                    } else {
                        admobid = {// for iOS
                            banner: 'ca-app-pub-8943241156434100/7257746078',
                            interstitial: 'ca-app-pub-8943241156434100/2378391279'
                        };
                    }
                    console.log("admobid" + angular.toJson(admobid));

                    $adMob.createBanner({
                        adId: admobid.banner,
                        autoShow: true,
                        bgColor: 'black',
                        position: $adMob.position.BOTTOM_CENTER
                    });

                    $adMob.prepareInterstitial({
                        adId: admobid.interstitial,
                        autoShow: false
                    });
                }
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        });
