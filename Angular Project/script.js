
/** 
    An AngilarJS application connected to a REST service to Select a User, Display User’s Profile, Post, Comments, Albumns, Photos, and TODOS.
    REST API calls are made to the URL -https://jsonplaceholder.typicode.com using the HTTP GET
    The controller module is represented as a simple JavaScript function that is given AngularJS’s $scope and $http components
    JSON object is returned which one can  bind  to a $scope variable and which can be used to get various details
*/

//Module Part
var app = angular.module("myApp", ['ui.bootstrap']);

//Controller Part
app.controller("userController", function($scope, $http) {

    //Initialize page with default data 
    $scope.users = [];
    $scope.selectUserData = [];
    $scope.posts = [];
    $scope.comments = [];
    $scope.albums = [];
    $scope.photos = [];
    $scope.TODOS = [];



    //Make viewTab a property of controller set an initial value
    //
    $scope.viewTab = 0;

    //Function for comparison for which tab has been clicked
    // Returns the cliked tab's property
    $scope.isTab = function(checkTab) {
        return $scope.viewTab === checkTab;
    };

    // Function Called on Click of a Selected User and in turn calls the userDetailData function for the Selected User
    $scope.userSelect = function(userselect, setTab) {
        $scope.viewTab = setTab
        _userDetailData(userselect);
    };

    // Function Called on Click of a Selected User's Posts and in turn calls the userPostData function for the Selected User
    $scope.postSelect = function(userselect, setTab) {
        $scope.viewTab = setTab
        _userPostData(userselect);
    };

    // Function Called on Click of a Selected Post's Comments and in turn calls the userCommentData function for the Selected User
    $scope.commentSelect = function(postselect, setTab) {
        $scope.viewTab = setTab;
        _userCommentData(postselect);
    };

    // Function Called on Click of a Selected User's Album and in turn calls the userAlbumData function for the Selected User
    $scope.albumSelect = function(userselect, setTab) {
        $scope.viewTab = setTab;
        _userAlbumData(userselect);
    };

    // Function Called on Click of a Selected Album's Photos and in turn calls the userPhotoData function for the Selected User
    $scope.photoSelect = function(albumselect, setTab) {
        $scope.viewTab = setTab;
        _userPhotoData(albumselect);
    };

    // Function Called on Click of a Selected User's TODOS and in turn calls the userTODOSData function for the Selected User
    $scope.tODOSSelect = function(userselect, setTab) {
        $scope.viewTab = setTab;
        _userTODOSData(userselect);
    };


    /* Functions */

    //load the user data
    _userData();

     //HTTP GET methods for getting user data
    function _userData() {
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then(function successCallback(response) {
            $scope.viewTab = 0;
            $scope.users = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }

    //Get  user details for the selected user
    function _userDetailData(userid) {
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users/' + userid.id
        }).then(function successCallback(response) {
            $scope.selectUserData = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }

     //Get user's posts details for the selected user
    function _userPostData(userid) {
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userid.id
        }).then(function successCallback(response) {
            $scope.posts = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }

    //Get a post's comments details for the selected posts
    function _userCommentData(postid) {
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments?postId=' + postid.id
        }).then(function successCallback(response) {
            $scope.comments = response.data;
            $scope.posts = postid;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }

    //Get user's album details for the selected user
    function _userAlbumData(userid) {
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/albums?userId=' + userid.id
        }).then(function successCallback(response) {
            $scope.albums = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }

    //get album's photo details for the selected album
    function _userPhotoData(albumid) {
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumid.id
        }).then(function successCallback(response) {
            $scope.photos = response.data;
            $scope.albums = albumid;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }

    //get user's TODOS details for the selected user.
    function _userTODOSData(userid) {
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos?userId=' + userid.id
        }).then(function successCallback(response) {
            $scope.TODOS = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);
        });
    }

});