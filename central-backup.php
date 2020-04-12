<!DOCTYPE html>
<!--

 ___ _____    ___  ____  _____ ____      _  _____ ___ ___  _   _    ____ _____ _   _ _____ _____ ____  
|_ _|_   _|  / _ \|  _ \| ____|  _ \    / \|_   _|_ _/ _ \| \ | |  / ___| ____| \ | |_   _| ____|  _ \ 
 | |  | |   | | | | |_) |  _| | |_) |  / _ \ | |  | | | | |  \| | | |   |  _| |  \| | | | |  _| | |_) |
 | |  | |   | |_| |  __/| |___|  _ <  / ___ \| |  | | |_| | |\  | | |___| |___| |\  | | | | |___|  _ < 
|___| |_|    \___/|_|   |_____|_| \_\/_/   \_\_| |___\___/|_| \_|  \____|_____|_| \_| |_| |_____|_| \_\

-->
<html lang="en" ng-app="myapp">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>ITOC Monitoring Alert | HCID</title>

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
	<link rel="stylesheet" href="lib/highchart_style.css">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/highcharts-3d.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.js"></script>
 
    <script src="app/app.js"></script>
  <script src="app/main.js"></script> 
    <script src="app/polo.js"></script>
   <script src="app/rcm.js"></script>  
   <script src="app/pgw.js"></script>  
    <script src="app/substatus.js"></script>  
	<script src ="app/online.js"></script>

</head>

<body class="hold-transition layout-top-nav">

    <div class="wrapper">

        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-light navbar-blue border-bottom">
            <div class="container">
                <a href="#" class="navbar-brand">
                    <img src="dist/img/hci-ban.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                    <span class="brand-text font-weight-light"> <b><font color="white">IT OPERATION CENTER MONITORING ALERT</font></b></span>
                </a>

                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                      
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                   
                    </li>
                </ul>

                <!-- SEARCH FORM -->
                <form class="form-inline ml-3">
                    <div class="input-group input-group-sm">
                   
                        
                    </div>
                </form>

                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">
                    <!-- Messages Dropdown Menu -->
                    <li class="nav-item dropdown">
                        
                      
                    </li>
                    <!-- Notifications Dropdown Menu -->

                    <li class="nav-item">
                        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i
              class="fas fa-th-large"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- /.navbar -->

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper" ng-controller="appCtrl">
            <!-- Content Header (Page header) -->
            <div class="content-header">

            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <!--  <div class="container"> -->
                <div class="row">

                    <div class="col-lg-9 col-6">
                        <div class="row">
                           

                            <div class="col-lg-2 col-6">
                                <!-- small card -->
                                <div ng-repeat="x in lapQueue" class="small-box" ng-class="{'bg-success' : x.TOTAL < '60' , 'bg-warning' : x.TOTAL >= '60' && x.TOTAL <= 80 , 'bg-danger' : x.TOTAL >= '81'}">
                                    <div class="inner">
                                        <h3>{{x.TOTAL}}</h3>

                                        <p>LAP</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>

                            <div class="col-lg-2 col-6">
                                <!-- small card -->
                                <div ng-repeat="x in otpSms" class="small-box" ng-class="{'bg-success' : x.NOT_VERIFIED <= '19' , 'bg-danger' : x.NOT_VERIFIED >= '20'}">
                                    <div class="inner">
                                        <h3>{{x.NOT_VERIFIED}} </h3>

                                        <p>SMS OTP FAILED</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>
							
							<div class="col-lg-2 col-6">
  
					<div ng-repeat="x in bslCz" class="small-box" ng-class="{'bg-success' : x.RESULT == '0' , 'bg-warning' : x.RESULT >=  '1' && x.RESULT <= '9' , 'bg-danger' : x.RESULT >= '10'}">
					<div class="inner">
					<h3>{{x.RESULT}}</h3>
	
					<p>BSL<>CZ UNSYNC
					</div>

        <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
    </div>
</div>
						
						<div class="col-lg-2 col-md-3">
                                <!-- small card -->
                                <div ng-repeat="x in mobPush" class="small-box" ng-class="{'bg-danger' : x.NOT_DELIVERED >= '10' , 'bg-success' : x.NOT_DELIVERED <= '9'}">
                                    <div class="inner">
                                        <h3>{{x.NOT_DELIVERED}}</h3>

                                        <p>PUSH NOTIF FAILED</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>
							
							
							 <div class="col-lg-2 col-6">
                                <!-- small card -->
                                <div ng-repeat="x in boRegact" class="small-box" ng-class="{'bg-danger' : x.SIGNED == '0' , 'bg-success' : x.SIGNED >= '1'}">
                                    <div class="inner">
                                        <h3>{{x.SIGNED}}</h3>

                                        <p>SIGNED CONTRACT</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>
                           
						
						 <div class="col-lg-2 col-6">
                                <!-- small card -->
                                <div ng-repeat="x in paymentFlow" class="small-box" ng-class="{'bg-success' : x.MONITORING == 'OK' , 'bg-warning' : x.MONITORING == 'WARNING' , 'bg-danger' : x.MONITORING == 'CRITICAL'}">
                                    <div class="inner">
                                        <h3>{{x.MONITORING}}</h3>

                                        <p>PAYMENT FLOW</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>
							
									
						 <div class="col-lg-2 col-6">
                            <div ng-repeat="x in mobpoloReg" class="small-box" ng-class="{'bg-success' : x.TOTAL_REG >= '25' ,'bg-warning' : x.TOTAL_REG >=  '10' && x.TOTAL_REG <= '24' , 'bg-danger' : x.TOTAL_REG <= '9'}">
                                    <div class="inner">
                                        <h3>{{x.TOTAL_REG}} </h3>

                                        <p>POLO CREATED CONTRACT</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>
							
							
									
						 <div class="col-lg-2 col-6">
                            <div ng-repeat="x in emsCfa" class="small-box" ng-class="{'bg-success' : x.CFA_SMS_FAIL == '0' , 'bg-warning' : x.CFA_SMS_FAIL >=  '1' && x.CFA_SMS_FAIL <= '10' , 'bg-danger' : x.CFA_SMS_FAIL >= '11'}">
                                    <div class="inner">
                                        <h3>E : {{x.CFA_EML_FAIL}}  | S : {{x.CFA_SMS_FAIL}} </h3>

                                        <p>E-Mail SMS CFA Failed</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>
							
									
										
						 <div class="col-lg-2 col-6">
							<div ng-repeat="x in poloAppr" class="small-box" ng-class="{'bg-success' : x.POLOAPPROVED >= '25' ,'bg-warning' : x.POLOAPPROVED >=  '10' && x.POLOAPPROVED <= '24' , 'bg-danger' : x.POLOAPPROVED <= '9'}">
                                    <div class="inner">
                                        <h3>{{x.POLOAPPROVED}} </h3>

                                        <p>POLO APPROVED CONTRACT</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>
							
									
						 <div class="col-lg-2 col-6">
							<div ng-repeat="x in poloAppr" class="small-box" ng-class="{'bg-success' : x.ALLAPPROVED >= '50' ,'bg-warning' : x.ALLAPPROVED >=  '10' && x.ALLAPPROVED <= '49' , 'bg-danger' : x.ALLAPPROVED <= '9'}">
                                    <div class="inner">
                                        <h3>{{x.ALLAPPROVED}} </h3>

                                        <p>APPROVED CONTRACT</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>
							
							<div class="col-lg-2 col-6">
                                <!-- small card -->
                                <div ng-repeat="x in boRegact" class="small-box" ng-class="{'bg-danger' : x.ACTIVATED == '0' , 'bg-success' : x.ACTIVATED >= '1'}">
                                    <div class="inner">
                                        <h3>{{x.ACTIVATED}}</h3>

                                        <p>ACTIVATED CONTRACT</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>
							
							<div class="col-lg-2 col-6">
                                <!-- small card -->
                                <div ng-repeat="x in orbpTime" class="small-box" ng-class="{'bg-danger' : x.ORBP_TIME >= '40' , 'bg-success' : x.ORBP_TIME <= '39'}">
                                    <div class="inner">
                                        <h3>{{x.ORBP_TIME}}</h3>

                                        <p>ORBP SCORING (second)</p>
                                    </div>

                                    <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                                </div>
                            </div>    
							      
							
							       

                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-6" ng-controller="rcmCtrl">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">CREDO</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-widget="remove"><i class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="chart">
                                            <div id="credoContainer"></div>
                                        </div>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- /.row -->
                            </div>

                            <div class="col-lg-3 col-6">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">PEFINDO</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-widget="remove"><i class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="chart">
                                            <div id="pefindoContainer"></div>
                                        </div>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- /.row -->
                            </div>

                            <div class="col-lg-3 col-6">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">CBAS</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-widget="remove"><i class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="chart">
                                            <div id="cbasContainer"></div>
                                        </div>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- /.row -->
                            </div>

                            <div class="col-lg-3 col-6">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">PEFINDO OTHER</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-widget="remove"><i class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="chart">
                                            <div id="pefindootherContainer"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>
							
							<div ng-controller ='pgwCtrl' class="col-lg-6 col-6">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">PGW - Bank</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-widget="remove"><i class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="chart">
                                            <div id="containerBankPGW"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>
							
							
							<div class="col-lg-6 col-6">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">PGW - Retailer</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-widget="remove"><i class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="chart">
                                            <div id="containerRetailerPGW"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                           <!--  <div class="col-lg-4 col-6" ng-controller="pgwCtrl">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Bank PGW</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-widget="remove"><i class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="chart">
                                            <div id="containerBankPGW"></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div> -->

                           <!--  <div class="col-lg-4 col-6">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Retailer PGW</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-widget="remove"><i class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="chart">
                                            <div id="containerRetailerPGW"></div>
                                        </div>
                                    </div>
                                    
                                </div>
                             
                            </div> -->

                          
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.row section-->
					
					
					

                   <!-- /.row section II-->
                    <div class="col-lg-3 col-6">
                        <!-- small card -->
                      <div class="alert alert-info alert dismissable ">
  
	
  <div>
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
                  <h4><i class="icon fas fa-info"></i>CZ : {{czTime}} || ID : {{message}}</h4>
                   <i class="icon fa fa-refresh"></i>{{counter}}
                </div>
	</div>
		
		<div class="row">
		  <div class="col-lg-6 col-3">
		<div ng-repeat="x in inPreprocess" class="info-box mb-3"  ng-class="{'bg-success' : x.TOTAL_INPREPROC <= '9' ,'bg-warning' : x.TOTAL_INPREPROC >=  '10' && x.TOTAL_INPREPROC <= '20' , 'bg-danger' : x.TOTAL_INPREPROC >= '21'}">
              <span class="info-box-icon">{{x.TOTAL_INPREPROC}}</span>

              <div class="info-box-content">
                <span class="info-box-text"><b>ALDI</b></span>
                <span class="info-box-number">BSL >< Mobile</span>
              </div>
              <!-- /.info-box-content -->
            </div>
			</div>
			
			  <div class="col-lg-6 col-3">
			
			<div ng-repeat="x in donaOPF" class="info-box mb-3"  ng-class="{'bg-success' : x.TOTAL_DONA <= '9' ,'bg-warning' : x.TOTAL_DONA >=  '10' && x.TOTAL_DONA <= '20' , 'bg-danger' : x.TOTAL_DONA >= '21'}">
              <span class="info-box-icon">{{x.TOTAL_DONA}}</span>

              <div class="info-box-content">
                <span class="info-box-text"><b>DONA</b></span>
                <span class="info-box-number">BSL >< Mobile</span>
              </div>
             </div>
			</div>
			
			 <div  class="col-lg-6 col-3">			
			<div ng-repeat="x in paymentStuck" class="info-box mb-3" ng-class="{'bg-danger' : x.TOTAL_XML >= '5' ,'bg-warning' : x.TOTAL_XML >=  '1' && x.TOTAL_XML <= '4', 'bg-success' : x.TOTAL_XML == '0'}">
              <span class="info-box-icon">{{x.TOTAL_XML}}</span>

              <div class="info-box-content">
                <span class="info-box-text"><b>PAYMENT STUCK </b></span>
                <span class="info-box-number">XML</span>
              </div>
              <!-- /.info-box-content -->
            </div>
			</div>
			
			
			 <div  class="col-lg-6 col-3">			
			<div ng-repeat="x in errRTD" class="info-box mb-3" ng-class="{'bg-danger' : x.RTD_TOTAL >= '1' ,'bg-success' : x.RTD_TOTAL == '0'}">
              <span class="info-box-icon">{{x.RTD_TOTAL}}</span>

              <div class="info-box-content">
                <span class="info-box-text"><b>RTD </b></span>
                <span class="info-box-number">FAILED</span>
              </div>
              <!-- /.info-box-content -->
            </div>
			</div>
			
			
			<!-- 
			 <div class="col-lg-6 col-3">			
			<div ng-repeat="x in lapUser" class="info-box mb-3 bg-info">
              <span class="info-box-icon"><i class="far fa-star"></i></span>

              <div class="info-box-content">
                <span class="info-box-number"><b>{{x.ACTIVE_USERS}} ACTIVE USER</b></span>
                <span class="info-box-number"><b>{{x.USERS_ON_BREAK}} BREAK USER</b></span>
              </div>
           
            </div>
			</div> -->
			
			 		
			
			</div>
			
			<figure ng-controller="onlineCtrl" class="highcharts-figure" >
    <div id="containerOnlineContract"></div>
    </figure>
			
<figure ng-controller="substatusCtrl" class="highcharts-figure" >
    <div id="container3d"></div>
    </figure>
			
						
					<!-- 	<div class="small-box bg-info">
                            <div class="inner">
                                <div class="card-body">
                                    <table class="table table-bordered">

                                        <tr>
                                            <th>STATUS</th>
                                            <th>NAME</th>                                            
											<th>TIME</th>
                                            <tr>

                                                <tr ng-repeat="x in contractOnline">
                                                    <td>{{x.STATUS}}</td>
                                                    <td>{{x.NAME}}</td>												
                                                    <td>{{x.TIME}}</td>
                                                </tr>
                                    </table>

                                </div>
                                <p>CONTRACT ONLINE</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-chart-pie"></i>
                            </div>
                            <a href="#" class="small-box-footer">
                More info <i class="fas fa-arrow-circle-right"></i>
              </a>
                        </div> -->

                        <!-- /.row -->

                    </div>

                </div>
                <!-- /. </div>All section -->
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
            <div class="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>
        </aside>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
            <div class="float-right d-none d-sm-inline">
                 V 1.4
            </div>
            <!-- Default to the left -->
            <strong>Home Credit Indonesia &copy; 2019 <a href="https://homecredit.co.id">IT Operation Center</a>.</strong> All rights reserved.
        </footer>
    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED SCRIPTS -->

    <!-- jQuery -->
    <script src="plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE App -->
    <!-- <script src="../../dist/js/adminlte.min.js"></script> -->
</body>

</html>