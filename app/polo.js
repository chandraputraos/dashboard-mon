var myapp = angular.module("poloappCtrl", [])
myapp.controller("poloCtrl", function($scope, $http) {
    $scope.polo = [];
    $scope.poloMon = function() {
        $http({
            method: "GET",
            url: "http://10.56.45.133/dashboard/itoc-api/polo_PP.php"
        }).then(function(response) {
            $scope.polo = response.data;
            var jsonhasil = angular.element(document
                .querySelector(
                    '[ng-controller="poloCtrl"]'));
            var jsonchart = jsonhasil.scope().polo;

            function requestData() {
                //FRC
                $.ajax({
                    url: 'http://10.56.45.133/dashboard/itoc-api/polo_PP.php',
                    success: function(data) {
                        var myArray = JSON.parse(data);
                        var dateV = [];
                        var approved = [];
                        var rejected = [];
                        var active = [];
                        var signed = [];
                        var preprocess = [];
                        var cancelled = [];
                        var x;
                        for (x = 0; x < jsonchart.length; x++) {
                            dateV[x] = myArray[x].TIMER;
                            approved[x] = myArray[x].APPROVED;
                            rejected[x] = myArray[x].REJECTED;
                            active[x] = myArray[x].ACTIVE;
                            signed[x] = myArray[x].SIGNED;
                            preprocess[x] = myArray[x]
                                .IN_PREPROCESS;
                            cancelled[x] = myArray[x].CANCELLED;
                            var lastDate = dateV[dateV.length - 1];
                            var approved = approved[approved.length - 1];
                            var rejected = rejected[rejected.length - 1];
                            var active = active[active.length - 1];
                            var signed = signed[signed.length - 1];
                            var preprocess = preprocess[preprocess.length - 1];
                            var cancelled = cancelled[cancelled.length - 1];
                            //alert(lastD);
                        }
                        var xD = lastDate, // current time
                            yApproved = approved;
                        yRejected = rejected;
                        yActive = active;
                        ySigned = signed;
                        yPreprocess = preprocess;
                        yCancelled = cancelled;
                        var series = chartFrc.series[0];
                        var series = chartPoloPP.series[0];
                        shift = series.data.length >
                            10; // shift if the series is longer than 10
                        // add the point -->> habisin waktu lama pas disini ..grrrrrrrrrrrrr...!!!
                        chartFrc.series[0].addPoint(eval([ lastDate, yPreprocess]), true, shift);
                        chartFrc.series[1].addPoint(eval([ lastDate, yApproved]), true, shift);
                        chartFrc.series[2].addPoint(eval([ lastDate,  ySigned]), true, shift);
                        chartPoloPP.series[0].addPoint(eval([lastDate, yActive]), true, shift);
                        chartPoloPP.series[1].addPoint(eval([lastDate,yRejected]), true, shift);
                        chartPoloPP.series[2].addPoint(eval([lastDate, yCancelled]), true, shift);
                        categories = chartFrc.xAxis[0].categories;
                        categories = chartPoloPP.xAxis[0]
                            .categories;
                        categories.push(lastDate);
                        chartFrc.xAxis[0].setCategories( categories, false);
                        chartPoloPP.xAxis[0].setCategories(categories,false);
                        //chart.xAxis[0].update({categories:lastDate}, false);
                        //chart.xAxis[0].setCategories(lastDate, true);	
                        setTimeout(requestData, 900000);
                        chartFrc.redraw();
                        chartPoloPP.redraw();
                    },
                    cache: false
                });
            };
            $(document).ready(function() {
                //PoloPP
                chartFrc = new Highcharts.Chart({
                    chart: {
                        renderTo: 'containerFrc',
                        type: 'areaspline',
                        height: 230,
                        width: 540,
                        events: {
                            load: requestData
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    plotOptions: {
                        areaspline: {
                            fillOpacity: 0.5
                        }
                    },
                    yAxis: {
                        title: false
                    },
                    xAxis: {
                        categories: [],
                        crosshair: true,
                        tickmarkPlacement: 'on'
                    },
                    series: [{
                        name: 'In Preprocess',
                        data: [],
                        color: 'rgba(204, 187, 0, 0.5)',
                    }, {
                        name: 'Approved',
                        data: [],
                        color: 'rgba(0, 22, 46, 0.5)',
                    }, {
                        name: 'Signed',
                        data: [],
                        color: 'rgba(0, 123, 255, 0.5)',
                    }]
                });
                //PoloPP
                chartPoloPP = new Highcharts.Chart({
                    chart: {
                        renderTo: 'containerPoloPP',
                        type: 'areaspline',
                        height: 230,
                        width: 540,
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    plotOptions: {
                        areaspline: {
                            fillOpacity: 0.5
                        }
                    },
                    yAxis: {
                        title: false
                    },
                    xAxis: {
                        categories: [],
                        crosshair: true,
                        tickmarkPlacement: 'on'
                    },
                    series: [{
                        name: 'Rejected',
                        data: [],
                        color: 'rgba(204, 0, 0, 0.5)',
                    }, {
                        name: 'Active',
                        data: [],
                        color: 'rgba(0, 204, 3, 0.5)',
                    }, {
                        name: 'Cancelled',
                        data: [],
                        color: 'rgba(204, 190, 0, 0.5)',
                    }]
                });
            });
        }, function(response) {
            // error
            console.log(response.data, response.status);
        });
    };
    $scope.poloMon();
});
