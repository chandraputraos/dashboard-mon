var myapp = angular.module("mainCtrl",   []);


myapp.controller('appCtrl', function( $scope, $http, $timeout) {
	
	var myTimer;
	
	var refreshIntervalMinutes = 8;
	var c =0;
	
	$scope.contractHealth = [];
	
	function startRequest() {
		
		//Start API
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/inpreproc.php"
		).then(function(response) {
			$scope.inPreprocess =
				response.data;
		});
	   
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/payment_flow.php"
		).then(function(response) {
			$scope.paymentFlow =
				response.data;
		});
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/lap.php"
		).then(function(response) {
			$scope.lapQueue = response
				.data;
		});
	/* 	$http.get(
			"http://10.56.45.133/dashboard/itoc-api/lap_user.php"
		).then(function(response) {
			$scope.lapUser = response
				.data;
		}); */
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/rtd_error.php"
		).then(function(response) {
			$scope.errRTD = response
				.data;
		});
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/bsl_cz_unsync.php"
		).then(function(response) {
			$scope.bslCz = response
				.data;
		});
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/inpreproc.php"
		).then(function(response) {
			$scope.inPreproc = response
				.data;
		});
				/*  $http.get(
			"http://10.56.45.133/dashboard/itoc-api/elog.php"
		).then(function(response) {
			$scope.eLog = response
				.data;
		}); */
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/bo_regact.php"
		).then(function(response) {
			$scope.boRegact = response
				.data;
		});
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/otp_sms.php"
		).then(function(response) {
			$scope.otpSms = response
				.data;
		});
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/mob_push_notif.php"
		).then(function(response) {
			$scope.mobPush = response
				.data;
		});
		 $http.get(
			"http://10.56.45.133/dashboard/itoc-api/polo_reg.php"
		).then(function(response) {
			$scope.mobpoloReg = response
				.data;
		});
				
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/payment_stuck.php"
		).then(function(response) {
			$scope.paymentStuck = response
				.data;	
			});
				
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/polo_approved.php"
		).then(function(response) {
			$scope.poloAppr = response
				.data;
				
		});
				
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/email_sms_cfa.php"
		).then(function(response) {
			$scope.emsCfa = response
				.data;
				
		});
		
		/* $http.get(
			"http://10.56.45.133/dashboard/itoc-api/genesys.php"
		).then(function(response) {
			$scope.genesys = response
				.data;
				
		}); */
		
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/mss_otp.php"
		).then(function(response) {
			$scope.mssOtp = response
				.data;
				
		});
				
		$http.get(
			"http://10.56.45.133/dashboard/itoc-api/orbp.php"
		).then(function(response) {
			$scope.orbpTime = response
				.data;		
			
				//END API
				
			/*  setTimeout(function() {
					$scope.bslCz[0].RESULT = 50;
					$scope.$apply();
					console.log($scope.bslCz);
				}, 10000);  */
			
					
		}); 
		
		
		myTimer = $timeout(function(){	
		
		$scope.message = new Date().toLocaleTimeString();
		$scope.czTime = new Date().toLocaleTimeString("en-EU", {timeZone: "Europe/Prague"});
		  $scope.counter = "Dashboard refreshed "+c+" time.";
		    c++;
					
			startRequest();
			
		}, refreshIntervalMinutes * 60 * 1000);
	}
	startRequest();
	
	/* $scope.killtimer = function() {
		console.log("Timer Stopped");
		$timeout.cancel(myTimer);
	} */
	
	
	
	//let play the music ;)
	var audio = new Audio('audio/PPanthers.mp3');
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
		swal({
  title: "Contract Health",
  text: "Please check ..!",
  icon: "error",
  buttons: true,
  dangerMode: true,
})
.then((acknowledge) => {
  if (acknowledge) {  
			
			 audio.pause();
			 audio.currentTime=0.0;
			audio_request_stop = true;
  } else {
   showPopUp()
  }
});
	}

	//Audio Triger Formula
	$scope.$watch('lapQueue', 
		function(newValue, oldValue) {
			if(angular.isDefined(newValue) && newValue[0].TOTAL > 80) {				
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('bslCz', 
		function(newValue, oldValue) {
			if(angular.isDefined(newValue) && newValue[0].RESULT > 5) {			
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('otpSms', 
		function(newValue, oldValue) {
			if(angular.isDefined(newValue) && newValue[0].NOT_VERIFIED > 10) {			
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('mobPush', 
		function(newValue, oldValue) {
			if(angular.isDefined(newValue) && newValue[0].NOT_DELIVERED > 100) {			
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('emsCfa', 
		function(newValue, oldValue) {
			if(angular.isDefined(newValue) && newValue[0].CFA_SMS_FAIL > 10) {			
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('orbpTime', 
		function(newValue, oldValue) {
			if(angular.isDefined(newValue) && newValue[0].ORBP_TIME > 40) {			
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 500)
				}			
	}, true);
	
	$scope.$watch('mobpoloReg', 
		function(newValue, oldValue) {
			console.log(newValue, oldValue);
			if(angular.isDefined(newValue)  && angular.isDefined(oldValue) && angular.isDefined(oldValue[0])) {
				
				
				let growth_percentage = (newValue[0].TOTAL_REG / oldValue[0].TOTAL_REG * 100) - 100;
				console.log(`growth_percentage : ${growth_percentage}`)
			$scope.growth = growth_percentage;
				if (growth_percentage < -50) {
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 200)
				}
				
			}
	}, true);
	
	$scope.$watch('poloAppr', 
		function(newValue, oldValue) {
			console.log(newValue, oldValue);
			if(angular.isDefined(newValue)  && angular.isDefined(oldValue) && angular.isDefined(oldValue[0])) {
				
				// Start Formula
				let growth_percentage = (newValue[0].POLOAPPROVED / oldValue[0].POLOAPPROVED * 100) - 100;
				console.log(`growth_percentage : ${growth_percentage}`)
			$scope.growth = growth_percentage;
				if (growth_percentage < -50) {
					playAudio();
					setTimeout(function() {
						showPopUp();
					}, 200)
				}
				
			}
	}, true);
	
	// End Formula
	


});
