var myapp = angular.module("substatusappCtrl", [])

myapp.controller("substatusCtrl", function($scope, $http) {
    $scope.subStatus = [];
	
	var requestIntervalMinutes = 23;
	
	function requestData() {
		$http({
			method: "GET",
			url: "http://10.56.45.133/dashboard/itoc-api/ho_substatus.php"
		}).then(function(response) {
			
			
				$scope.subStatus = response.data;
			
			
			var e = angular.element(document.querySelector('[ng-controller="substatusCtrl"]')); 
			var e1 = e.scope().subStatus ; 
			 
			/* console.log (e1); */
			
			Highcharts.chart('container3d', {
    chart: {
         type: 'column',
                marginLeft: -20,
                marginRight: -30,
                marginBottom: 20,
		  
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 25,
            depth: 90
        }
    },
    title: {
        text: null
    },
    subtitle: {
        text: ''
    },
	credits: {
				enabled: false
			},
    plotOptions: {
        column: {
            depth: 25,
			colorByPoint: true
        }
    },
    xAxis: {
        categories:['PCW', 'RCW', 'RLF', 'PLF', 'PCM', 'RCM', 'RLW', 'PLW', 'NPS'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },
    yAxis: {
        title: {
            text: null
        }
    },
    series: [{
        showInLegend: false,   
        data: e1
    }]
});
			
		setTimeout(requestData, requestIntervalMinutes * 60 * 1000);
			
			
		}, function(response) {
			// error
			console.log(response.data, response.status);
		});
	}
        


	$scope.subStatus = function() {
        requestData();
    };
	$scope.subStatus();
});
