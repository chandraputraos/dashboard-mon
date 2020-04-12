var myapp = angular.module("rcmappCtrl", [])

myapp.controller("rcmCtrl", function($scope, $http) {
    $scope.rcm = [];
	
	var requestIntervalMinutes = 10;
	
	function requestData() {
		$http({
			method: "GET",
			url: "http://10.56.45.133/dashboard/itoc-api/credo.php"
		}).then(function(response) {
			
			if ($scope.rcm.length === 0) {
				$scope.rcm = response.data;
				
				
			//Audio Triger Formula
	$scope.$watch('rcm', 
		function(newValue, oldValue) {
			if(angular.isDefined(newValue) && newValue[0].CREDO_ERROR > 50) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('rcm', 
		function(newValue, oldValue) {
			if(angular.isDefined(newValue) && newValue[0].PEFINDO_ERROR > 50) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('rcm', 
		function(newValue, oldValue) {
			if(angular.isDefined(newValue) && newValue[0].PEFINDO_OTHER_DATA_ERROR > 1) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);	
	
	$scope.$watch('rcm', 
		function(newValue, oldValue) {
			if(angular.isDefined(newValue) && newValue[0].CBAS_ERROR > 50) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);	
				
				
				
			}
			
			
			//Lets Splice ;)
			var myArray = response.data;
			var dateV = [];
			var credoError = [];
			var credoFound = [];
			var credoNotfound = [];
			var pefindoError = [];
			var pefindoFound = [];
			var pefindoNotfound = [];
			var cbasError = [];
			var cbasFound = [];
			var cbasNotfound = [];
			var pefindootherError = [];
			var pefindootherFound = [];
			var pefindootherNotfound = [];
			var x;
			for (x = 0; x < $scope.rcm.length; x++) {
			
				dateV[x] = myArray[x].TIMER;
				credoError[x] = myArray[x].CREDO_ERROR;
				credoFound[x] = myArray[x].CREDO_FOUND;
				credoNotfound[x] = myArray[x].CREDO_NOT_FOUND;
				pefindoError[x] = myArray[x].PEFINDO_ERROR;
				pefindoFound[x] = myArray[x].PEFINDO_FOUND;
				pefindoNotfound[x] = myArray[x].PEFINDO_NOT_FOUND;
				cbasError[x] = myArray[x].CBAS_ERROR;
				cbasFound[x] = myArray[x].CBAS_FOUND;
				cbasNotfound[x] = myArray[x].CBAS_NOT_FOUND;
				pefindootherError[x] = myArray[x].PEFINDO_OTHER_DATA_ERROR;
				pefindootherFound[x] = myArray[x].PEFINDO_OTHER_DATA_FOUND;
				pefindootherNotfound[x] = myArray[x].PEFINDO_OTHER_DATA_FOUND;
				
				var dayDate = dateV[dateV.length - 1];
				var credoErrors = credoError[credoError.length - 1];
				var credoFounds = credoFound[credoFound.length - 1];
				var credoNotfounds = credoNotfound[credoNotfound.length - 1];
				var pefindoErrors = pefindoError[pefindoError.length - 1];
				var pefindoFounds = pefindoFound[pefindoFound.length - 1];
				var pefindoNotfounds = pefindoNotfound[pefindoNotfound.length - 1];
				var cbasErrors = cbasError[cbasError.length - 1];
				var cbasFounds = cbasFound[cbasFound.length - 1];
				var cbasNotfounds = cbasNotfound[cbasNotfound.length - 1];
				var pefindootherErrors = pefindootherError[pefindootherError.length - 1];
				var pefindootherFounds = pefindootherFound[pefindootherFound.length - 1];
				var pefindootherNotfounds = pefindootherNotfound[pefindootherNotfound.length - 1];
				//alert(lastD);
			}
			var xD = dayDate, // current time
				yErrorcredo = credoErrors;
			yNotfoundcredo = credoNotfounds;
			yFoundcredo = credoFounds;
			yErrorpefindo = pefindoErrors;
			yNotfoundpefindo = pefindoNotfounds;
			yFoundpefindo = pefindoFounds;
			yErrorcbas = cbasErrors;
			yNotfoundcbas = cbasNotfounds;
			yFoundcbas = cbasFounds;
			yErrorpefindoother = pefindootherErrors;
			yNotfoundpefindoother = pefindootherNotfounds;
			yFoundpefindoother = pefindootherFounds;
			
			var series = chartCredo.series[0];
			var series = chartPefindo.series[0];
			
			shift = series.data.length > 10; // shift if the series is longer than 20
			
			chartCredo.series[2].addPoint(eval([dayDate, yErrorcredo]), true, shift);
			chartCredo.series[1].addPoint(eval([dayDate, yNotfoundcredo]), true, shift);
			chartCredo.series[0].addPoint(eval([dayDate, yFoundcredo]), true, shift);
			chartPefindo.series[2].addPoint(eval([dayDate, yErrorpefindo]), true, shift);
			chartPefindo.series[1].addPoint(eval([dayDate, yNotfoundpefindo]), true, shift);
			chartPefindo.series[0].addPoint(eval([dayDate, yFoundpefindo]), true, shift);
			chartCbas.series[2].addPoint(eval([dayDate, yErrorcbas]), true, shift);
			chartCbas.series[1].addPoint(eval([dayDate, yNotfoundcbas]), true, shift);
			chartCbas.series[0].addPoint(eval([dayDate, yFoundcbas]), true, shift);
			chartPefindoother.series[2].addPoint(eval([dayDate, yErrorpefindoother]), true, shift);
			chartPefindoother.series[1].addPoint(eval([dayDate, yNotfoundpefindoother]), true, shift);
			chartPefindoother.series[0].addPoint(eval([dayDate, yFoundpefindoother]), true, shift);
			categories = chartCredo.xAxis[0].categories;
			categories = chartPefindo.xAxis[0].categories;
			categories = chartCbas.xAxis[0].categories;
			categories = chartPefindoother.xAxis[0].categories;
			categories.push(dayDate);
			chartCredo.xAxis[0].setCategories(categories, false);
			chartPefindo.xAxis[0].setCategories(categories, false);
			chartCbas.xAxis[0].setCategories(categories, false);
			chartPefindoother.xAxis[0].setCategories(categories, false);
			
			
			setTimeout(requestData, requestIntervalMinutes * 60 * 1000);
			
			chartCredo.redraw();
			chartPefindo.redraw();
			chartCbas.redraw();		   
			chartPefindoother.redraw();
		}, function(response) {
			// error
			console.log(response.data, response.status);
		});
	}
	
	
	/* setTimeout(function() {
					$scope.online[0].BLIBLI = 0;
					$scope.$apply();
					console.log($scope.online);
				}, 10000);  */
		
		//Tester
					
	var audio = new Audio('audio/Entertainer.mp3');
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

	
	
	function showPopUp() {
	
		if (confirm('Scoring Alert.!, Please check..!!')) {
			audio.pause();
			audio_request_stop = true;
		} else {
			showPopUp()
		}
	}
        
	var chartCredo = new Highcharts.Chart({
			chart: {
				renderTo: 'credoContainer',
				type: 'area',
				height: 205,
				marginLeft: 40,
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
				labels: {
					format: '{value}%'
				},
				title: false
			},
			tooltip: {
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} )<br/>',
				split: true
			},
			plotOptions: {
				area: {
					stacking: 'percent',
					lineColor: '#fff000',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#ffffff'
					}
				}
			},
			legend: {
        enabled: false
    },
			series: [{
					name: 'Found',
					data: [],
					color: 'rgba(8, 255, 0, 0.8)',
				},
				{
					name: 'NotFound',
					data: [],
					color: 'rgba(255, 204, 0, 0.8)',
				},
				{
					name: 'Error',
					data: [],
					color: 'rgba(255, 17, 0, 0.8)',
				}
			],
			xAxis: {
				categories: [],
				crosshair: true,
				tickmarkPlacement: 'on'
			}
		});
	var chartPefindo = new Highcharts.Chart({
		chart: {
			renderTo: 'pefindoContainer',
			type: 'area',
			height: 205,
			marginLeft: 40,
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
			labels: {
				format: '{value}%'
			},
			title: false
		},
		tooltip: {
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} )<br/>',
			split: true
		},
		plotOptions: {
			area: {
				stacking: 'percent',
				lineColor: '#fff000',
				lineWidth: 1,
				marker: {
					lineWidth: 1,
					lineColor: '#ffffff'
				}
			}
		},
		legend: {
        enabled: false
    },
		series: [{
				name: 'Found',
				data: [],
				color: 'rgba(8, 255, 0, 0.8)',
			},
			{
				name: 'NotFound',
				data: [],
				color: 'rgba(255, 204, 0, 0.8)',
			},
			{
				name: 'Error',
				data: [],
				color: 'rgba(255, 17, 0, 0.8)',
			}
		],
		xAxis: {
			categories: [],
			crosshair: true,
			tickmarkPlacement: 'on'
		}
	});
	var chartCbas = new Highcharts.Chart({
		chart: {
			renderTo: 'cbasContainer',
			type: 'area',
			height: 205,
			marginLeft: 40,
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
			labels: {
				format: '{value}%'
			},
			title: false
		},
		tooltip: {
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} )<br/>',
			split: true
		},
		plotOptions: {
			area: {
				stacking: 'percent',
				lineColor: '#fff000',
				lineWidth: 1,
				marker: {
					lineWidth: 1,
					lineColor: '#ffffff'
				}
			}
		},
		legend: {
        enabled: false
    },
		series: [{
				name: 'Found',
				data: [],
				color: 'rgba(8, 255, 0, 0.8)',
			},
			{
				name: 'NotFound',
				data: [],
				color: 'rgba(255, 204, 0, 0.8)',
			},
			{
				name: 'Error',
				data: [],
				color: 'rgba(255, 17, 0, 0.8)',
			}
		],
		xAxis: {
			categories: [],
			crosshair: true,
			tickmarkPlacement: 'on'
		}
	});
	var chartPefindoother = new Highcharts.Chart({
		chart: {
			renderTo: 'pefindootherContainer',
			type: 'area',
			height: 205,
			marginLeft: 40,
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
			labels: {
				format: '{value}%'
			},
			title: false
		},
		tooltip: {
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} )<br/>',
			split: true
		},
		plotOptions: {
			area: {
				stacking: 'percent',
				lineColor: '#fff000',
				lineWidth: 1,
				marker: {
					lineWidth: 1,
					lineColor: '#ffffff'
				}
			}
		},
		legend: {
        enabled: false
    },
		series: [{
				name: 'Found',
				data: [],
				color: 'rgba(8, 255, 0, 0.8)',
			},
			{
				name: 'NotFound',
				data: [],
				color: 'rgba(255, 204, 0, 0.8)',
			},
			{
				name: 'Error',
				data: [],
				color: 'rgba(255, 17, 0, 0.8)',
			}
		],
		xAxis: {
			categories: [],
			crosshair: true,
			tickmarkPlacement: 'on'
		}
	});

	$scope.rcmMon = function() {
        requestData();
    };
	$scope.rcmMon();
});
