'use strict';

var avro4sUIApp = angular.module('avro4sUIApp', ['ui.ace', 'angularSpinner']);

avro4sUIApp.controller('MainCtrl', function ($scope, $http, $q, $log) {

    $scope.avroSource = Example.avroSrc;
    $scope.jsonSource = Example.jsonSrc;
    $scope.scalaSource = Example.scalaSrc;

    $scope.isEditorAvro = true;
    $scope.isEditorJSon = false;
    $scope.isEditorScala = false;

    $scope.isAvroResultDisplayed = false;
    $scope.isScalaResultDisplayed = false;
    $scope.avroResult = "";
    $scope.scalaResult = "";

    $scope.loadAvroExample = function () {
        $log.info("Displaying Avro example");
        $scope.avroSource = Example.avroSrc;
        $scope.isEditorAvro = true;
        $scope.isEditorJSon = false;
        $scope.isEditorScala = false;
        $scope.isAvroResultDisplayed = false;
        $scope.isScalaResultDisplayed = false;
    };

    $scope.loadJsonExample = function () {
        $log.info("Displaying JSon example");
        $scope.jsonSource = Example.jsonSrc;
        $scope.isEditorAvro = false;
        $scope.isEditorJSon = true;
        $scope.isEditorScala = false;
        $scope.isAvroResultDisplayed = false;
        $scope.isScalaResultDisplayed = false;
        var millisecondsToWait = 50;
        setTimeout(function () {
            $scope.$apply();
        }, millisecondsToWait);
    };

    $scope.loadScalaExample = function () {
        $log.info("Displaying Scala example");
        $scope.scalaSource = scalaSrc;
        $scope.isEditorScala = true;
        $scope.isEditorAvro = false;
        $scope.isEditorJSon = false;
        $scope.isAvroResultDisplayed = false;
        $scope.isScalaResultDisplayed = false;
        var millisecondsToWait = 50;
        setTimeout(function () {
            $scope.$apply();
        }, millisecondsToWait);
    };

    $scope.avro4sConversion = function (apiData) {
        $http.defaults.useXDomain = true;

        var singleLineApiData = apiData.split("\n").join(" ");

        var req = {
            method: 'POST',
            data: singleLineApiData,
            crossDomain: true,
            url: avro4sEndpoint,
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        };

        $http(req)
            .success(function (data) {
                $log.info("Received a response with: " + data);
                var results = data.split("###");
                $log.info(results);
                if (results[0] == "scala") {
                    $log.info("It's Scala !! ");
                    $log.info("It's Scala :" + results[1]);
                    //alg0
                    $scope.scalaResult = results[1];
                    $scope.isAvroResultDisplayed = false;
                    $scope.isScalaResultDisplayed = true;
                } else if (results[0] == "avro") {
                    $log.info("It's Avro !! ");
                    $log.info("It's Avro :" + results[1]);
                    //alg0
                    $scope.avroResult = results[1];
                    $scope.isAvroResultDisplayed = true;
                    $scope.isScalaResultDisplayed = false;
                } else {
                    $log.info("It's : " + results[0]);
                }
            })
            .error(function (data, status) {
                $log.error("Bad data [" + data + "] status [" + status + "]");
            });
    };

    $scope.avro2scala = function () {
        $log.info("Performing an 'avro4s' transformation");
        $scope.scalaResult = "// avro -> scala";
        $scope.isAvroResultDisplayed = false;
        $scope.isScalaResultDisplayed = true;
    };

    $scope.scala2avro = function () {
        $log.info("Performing an 'avro4s' transformation");
        $scope.avroResult = "scala->avro";
        $scope.isAvroResultDisplayed = true;
        $scope.isScalaResultDisplayed = false;
    };

    $scope.json2avro = function () {
        $log.info("Performing an 'avro4s' transformation");
        $scope.avroResult = "json->avro";
        $scope.isAvroResultDisplayed = true;
        $scope.isScalaResultDisplayed = false;
    };

}); //end of controller
