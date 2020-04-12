var myapp = angular.module("onlineappCtrl", [])
myapp.controller("onlineCtrl", function($scope, $http, $timeout) {
    
	
	var myTimer;
    var refreshIntervalMinutes = 20;
    var onlinecount = 0;
	$scope.online = [];
	
	
   function requestData() {
        $http({
            method: "GET",
            url: "http://10.56.45.133/dashboard/itoc-api/contract_online.php"
        }).then(function(response) {
			$scope.online = response.data; 
				
	
		
						var myArray = response.data;
                        var dateV = [];
                        
						
                                          
                        var blibli = [];
                        var tokopedia = [];
						var bukalapak =[];
                        
                      
            	      
                       
                        var x;
                        for (x = 0; x < $scope.online.length; x++) {
						
                            dateV[x] = myArray[x].TIMEX;
							
							blibli[x] = myArray[x].BLIBLI;
                            tokopedia[x] = myArray[x].TOKOPEDIA;
                            bukalapak[x] = myArray[x].BUKALAPAK;
                            					
							
                            
                            
							
                            var lastDate = dateV[dateV.length - 1];
							var blibli = blibli[blibli.length - 1];
							var tokopedia = tokopedia[tokopedia.length - 1];
                            var bukalapak = bukalapak[bukalapak.length - 1];                          
                           
                            
                            //alert(lastD);
                        }
                        var xD = lastDate, // current time
                            yBblibli = blibli;						
							yTOkopedia = tokopedia;
							yBukalapak = bukalapak;
							
                       
                        var series = chartOnlineContract.series[0];
                       
						
                        shift = series.data.length > 9; // shift if the series is longer than 10
                        // add the point -->> 
                        chartOnlineContract.series[0].addPoint(eval([lastDate, yBblibli]), true, shift);						
                        chartOnlineContract.series[1].addPoint(eval([lastDate, yTOkopedia]), true, shift);
                        chartOnlineContract.series[2].addPoint(eval([lastDate, yBukalapak]), true, shift);                    
						
                        categories = chartOnlineContract.xAxis[0].categories;
                        categories.push(lastDate);
                        chartOnlineContract.xAxis[0].setCategories(categories, false);                   
                        
			
 						 
						 chartOnlineContract.redraw();
						 
		/* 				 
		setTimeout(function() {
					$scope.online[0].BLIBLI = 1;
					$scope.$apply();
					console.log($scope.online);
				}, 10000); 	
				 */
						 
					
  			        
		});	
		
		 
		 myTimer = $timeout(function() {
           
            requestData();
        }, refreshIntervalMinutes * 60 * 1000);		
		
		
					
		}		
	
		requestData();				

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
		
		
		$scope.$watch('online', 
		function(newValue, oldValue) {
			/* console.log(newValue,oldValue) */
			if(angular.isDefined(newValue) && newValue[0].BLIBLI == 0 ) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('online', 
		function(newValue, oldValue) {
			console.log(newValue,oldValue)
			if(angular.isDefined(newValue) && newValue[0].TOKOPEDIA == 0) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('online', 
		function(newValue, oldValue) {
			console.log(newValue,oldValue)
			if(angular.isDefined(newValue) && newValue[0].BUKALAPAK == 0) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
		
		
		
	function showPopUp() {
	swal({
  title: "Approval Online",
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
	
	
			   
              var chartOnlineContract = new Highcharts.Chart({
                    chart: {
                        renderTo: 'containerOnlineContract',
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
					plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
	
                    series: [{
						  
                            name: 'BLIBLI',
                            data: [],
                           color: '#0000FF',
                        },
						{
                            name: 'TOKOPEDIA',
                            data: [],
                            color: '#006400',
                        },
                        {
                            name: 'BUKALAPAK',
                            data: [],
                             color: '#C70039',
                        }
                    ]
                });
    	                    

});
