var myapp = angular.module("pgwappCtrl", [])
myapp.controller("pgwCtrl", function($scope, $http, $timeout) {
    $scope.pgw = [];
    var myTimer;
    var refreshIntervalMinutes = 11;
    var pgwcount = 0;


	//API
    function requestData() {
        $http({
            method: "GET",
            url: "http://10.56.45.133/dashboard/itoc-api/pgw.php"
        }).then(function(response) {
            $scope.pgw = response.data;
			
            var myArray = response.data;
            var dateV = [];
            var indomaret = [];
            var alfamart = [];
            var bca_va = [];
            var posindo = [];
            var mandiri = [];
            var bri = [];
            var bni = [];
            var bca = [];
            var x;
            for (x = 0; x < $scope.pgw.length; x++) {
                dateV[x] = myArray[x].TIMER;
                bca_va[x] = myArray[x].BCA_VA;
                indomaret[x] = myArray[x].INDOMARET;
                alfamart[x] = myArray[x].ALFAMART;
                posindo[x] = myArray[x].POSINDO;
                bca[x] = myArray[x].BCA;
                mandiri[x] = myArray[x].MANDIRI;
                bri[x] = myArray[x].BRI;
                bni[x] = myArray[x].BNI;
                var lastDate = dateV[dateV.length - 1];
                var bca_va = bca_va[bca_va.length - 1];
                var indomaret = indomaret[indomaret.length - 1];
                var alfamart = alfamart[alfamart.length - 1];
                var posindo = posindo[posindo.length - 1];
                var bca = bca[bca.length - 1];
                var mandiri = mandiri[mandiri.length - 1];
                var bri = bri[bri.length - 1];
                var bni = bni[bni.length - 1];
                //alert(lastD);
            }
            var xD = lastDate, // current time
                yBca = bca;
            yMandiri = mandiri;
            yBri = bri;
            yBni = bni;
            yBca_va = bca_va;
            yPosindo = posindo;
            yIndomaret = indomaret;
            yAlfamart = alfamart;
            var series = chartBankPGW.series[0];
            var series = chartRetailPGW.series[0];
            shift = series.data.length > 9; // shift if the series is longer than 20
            // add the point -->> 
            chartBankPGW.series[0].addPoint(eval([lastDate, yBca]), true, shift);
            chartBankPGW.series[1].addPoint(eval([lastDate, yMandiri]), true, shift);
            chartBankPGW.series[2].addPoint(eval([lastDate, yBri]), true, shift);
            chartBankPGW.series[3].addPoint(eval([lastDate, yBni]), true, shift);
            chartRetailPGW.series[0].addPoint(eval([lastDate, yBca_va]), true, shift);
            chartRetailPGW.series[1].addPoint(eval([lastDate, yIndomaret]), true, shift);
            chartRetailPGW.series[2].addPoint(eval([lastDate, yAlfamart]), true, shift);
            chartRetailPGW.series[3].addPoint(eval([lastDate, yPosindo]), true, shift);
            //console.log (yBca_va);
            categories = chartBankPGW.xAxis[0].categories;
            categories = chartRetailPGW.xAxis[0].categories;
            categories.push(lastDate);
            chartBankPGW.xAxis[0].setCategories(categories, false);
            chartRetailPGW.xAxis[0].setCategories(categories, false);
            chartBankPGW.redraw();
            chartRetailPGW.redraw();
        });
		
       /*   setTimeout(function() {
            $scope.pgw[0].BCA_VA = 1;
            $scope.$apply();
            console.log($scope.pgw);
        }, 10000);  */
		
        myTimer = $timeout(function() {
           
            requestData();
        }, refreshIntervalMinutes * 60 * 1000);
    }
	
	//let play music ;)
    var audio = new Audio('audio/terompet.mp3');
    var audio_is_play = false;
    var audio_request_stop = false;

    function playAudio() {
        if (audio_is_play === false) {
            audio_request_stop = false;
            audioPlayer = audio.play()
                .then(function() {
                    audio_is_play = true;
                })
                .finally(function() {
                    audio_is_play = false;
                    if (!audio_request_stop) {
                        playAudio();
                    }
                });
        }
    }
	
    $scope.$watch('pgw',
        function(newValue, oldValue) {
            console.log(newValue, oldValue);
            if (angular.isDefined(newValue) && angular.isDefined(oldValue) && angular.isDefined(oldValue[0])) {
                // Start Formula
                let growth_percentage = (newValue[0].BCA_VA / oldValue[0].BCA_VA * 100) - 100;
                console.log(`growth_percentage : ${growth_percentage}`)
                $scope.growth = growth_percentage;
                if (growth_percentage <= -70) {
                    playAudio();
                    setTimeout(function() {
                        showPopUp();
                    }, 300)
                }
               
            }
        }, true);
		
		$scope.$watch('pgw',
        function(newValue, oldValue) {
            console.log(newValue, oldValue);
            if (angular.isDefined(newValue) && angular.isDefined(oldValue) && angular.isDefined(oldValue[0])) {
                // Start Formula
                let growth_percentage = (newValue[0].ALFAMART / oldValue[0].ALFAMART * 100) - 100;
                console.log(`growth_percentage : ${growth_percentage}`)
                $scope.growth = growth_percentage;
                if (growth_percentage <= -70) {
                    playAudio();
                    setTimeout(function() {
                        showPopUp();
                    }, 300)
                }
                // End Formula
            }
        }, true);
		
		$scope.$watch('pgw',
        function(newValue, oldValue) {
            console.log(newValue, oldValue);
            if (angular.isDefined(newValue) && angular.isDefined(oldValue) && angular.isDefined(oldValue[0])) {
                // Start Formula
                let growth_percentage = (newValue[0].INDOMARET / oldValue[0].INDOMARET * 100) - 100;
                console.log(`growth_percentage : ${growth_percentage}`)
                $scope.growth = growth_percentage;
                if (growth_percentage <= -70) {
                    playAudio();
                    setTimeout(function() {
                        showPopUp();
                    }, 300)
                }
                // End Formula
            }
        }, true);
		
		$scope.$watch('pgw',
        function(newValue, oldValue) {
            console.log(newValue, oldValue);
            if (angular.isDefined(newValue) && angular.isDefined(oldValue) && angular.isDefined(oldValue[0])) {
                // Start Formula
                let growth_percentage = (newValue[0].BCA / oldValue[0].BCA * 100) - 100;
                console.log(`growth_percentage : ${growth_percentage}`)
                $scope.growth = growth_percentage;
                if (growth_percentage <= -70) {
                    playAudio();
                    setTimeout(function() {
                        showPopUp();
                    }, 300)
                }
                // End Formula
            }
        }, true);
		
		$scope.$watch('pgw',
        function(newValue, oldValue) {
            console.log(newValue, oldValue);
            if (angular.isDefined(newValue) && angular.isDefined(oldValue) && angular.isDefined(oldValue[0])) {
                // Start Formula
                let growth_percentage = (newValue[0].MANDIRI / oldValue[0].MANDIRI * 100) - 100;
                console.log(`growth_percentage : ${growth_percentage}`)
                $scope.growth = growth_percentage;
                if (growth_percentage <= -70) {
                    playAudio();
                    setTimeout(function() {
                        showPopUp();
                    }, 300)
                }
                // End Formula
            }
        }, true);
		
		$scope.$watch('pgw',
        function(newValue, oldValue) {
            console.log(newValue, oldValue);
            if (angular.isDefined(newValue) && angular.isDefined(oldValue) && angular.isDefined(oldValue[0])) {
                // Start Formula
                let growth_percentage = (newValue[0].BRI / oldValue[0].BRI * 100) - 100;
                console.log(`growth_percentage : ${growth_percentage}`)
                $scope.growth = growth_percentage;
                if (growth_percentage <= -70) {
                    playAudio();
                    setTimeout(function() {
                        showPopUp();
                    }, 300)
                }
                // End Formula
            }
        }, true);
		
		$scope.$watch('pgw',
        function(newValue, oldValue) {
            console.log(newValue, oldValue);
            if (angular.isDefined(newValue) && angular.isDefined(oldValue) && angular.isDefined(oldValue[0])) {
                // Start Formula
                let growth_percentage = (newValue[0].BNI / oldValue[0].BNI * 100) - 100;
                console.log(`growth_percentage : ${growth_percentage}`)
                $scope.growth = growth_percentage;
                if (growth_percentage <= -70) {
                    playAudio();
                    setTimeout(function() {
                        showPopUp();
                    }, 300)
                }
                // End Formula
            }
        }, true);
		
		$scope.$watch('pgw',
        function(newValue, oldValue) {
            console.log(newValue, oldValue);
            if (angular.isDefined(newValue) && angular.isDefined(oldValue) && angular.isDefined(oldValue[0])) {
                // Start Formula
                let growth_percentage = (newValue[0].POSINDO / oldValue[0].POSINDO * 100) - 100;
                console.log(`growth_percentage : ${growth_percentage}`)
                $scope.growth = growth_percentage;
                if (growth_percentage <= -70) {
                    playAudio();
                    setTimeout(function() {
                        showPopUp();
                    }, 300)
                }
                // End Formula
            }
        }, true);
		
		
		$scope.$watch('pgw', 
		function(newValue, oldValue) {
			/* console.log(newValue,oldValue) */
			if(angular.isDefined(newValue) && newValue[0].ALFAMART == 0 ) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('pgw', 
		function(newValue, oldValue) {
			/* console.log(newValue,oldValue) */
			if(angular.isDefined(newValue) && newValue[0].BCA == 0 ) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('pgw', 
		function(newValue, oldValue) {
			/* console.log(newValue,oldValue) */
			if(angular.isDefined(newValue) && newValue[0].BCA_VA == 0 ) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('pgw', 
		function(newValue, oldValue) {
			/* console.log(newValue,oldValue) */
			if(angular.isDefined(newValue) && newValue[0].INDOMARET == 0 ) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('pgw', 
		function(newValue, oldValue) {
			/* console.log(newValue,oldValue) */
			if(angular.isDefined(newValue) && newValue[0].BRI == 0 ) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);


    function showPopUp() {
       swal({
  title: "Payment Channel",
  text: "Please check ..!",
  icon: "error",
  buttons: true,
  dangerMode: true,
})
.then((acknowledge) => {
  if (acknowledge) {  
			audio.currentTime=0.0;
			 audio.pause();
			audio_request_stop = true;
  } else {
   showPopUp()
  }
});
    }
	
    requestData();
	
    var chartBankPGW = new Highcharts.Chart({
        chart: {
            renderTo: 'containerBankPGW',
            type: 'spline',
            height: 215,
            events: {}
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
        yAxis: {
            title: false
        },
        xAxis: {
            categories: [],
            crosshair: true,
            tickmarkPlacement: 'on'
        },
        series: [{
                name: 'BCA',
                data: [],
            },
            {
                name: 'MANDIRI',
                data: [],
            },
            {
                name: 'BRI',
                data: [],
            },
            {
                name: 'BNI',
                data: [],
            }
        ]
    });
    //Retailer PGW
    var chartRetailPGW = new Highcharts.Chart({
        chart: {
            renderTo: 'containerRetailerPGW',
            type: 'spline',
            colorByPoint: true,
            height: 215,
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
        yAxis: {
            title: false
        },
        xAxis: {
            categories: [],
            crosshair: true,
            tickmarkPlacement: 'on'
		
        },
        series: [{
                name: 'BCA VA',
                data: [],
            },
            {
                name: 'INDOMARET',
                data: [],
            },
            {
                name: 'ALFAMART',
                data: [],
            },
            {
                name: 'POS INDO',
                data: [],
            }
        ]
    });
});
