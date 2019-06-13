telcomApp.controller("heheController",function ($scope) {

    $scope.init = function () {


        var data  = {
            "variables":["[Store]Code=", "8888", "desc=", "[ACCMGR-1220] ACC_ACCOUNT_INFO.UNPRINT_BALANCE: 349268327超过发票可打印金额"]
        };

        console.log(data.variables)
        var errorList = data.variables;
        var markFlag = false;
        for(var i=0;i<errorList.length;i++){
            if(errorList[i].indexOf("UNPRINT_BALANCE") != -1){
                markFlag = true;
                break;
            }
        }
        if(markFlag){
            // $scope.invoiceFailText = "开票失败，额度不足导致无法打印发票，请联系10010处理";
            alert(555)
        }else{
            alert(222)
            // $scope.invoiceFailText = "开票失败，请稍后再试";
        }










        $scope.addLoadingDiv();
        // $scope.loading =true;
        //$("#mask-loading").show();

        var str = "浦东万祥镇宏祥北路83弄万祥工业园(FTTO自动)11号1F新增客户";
			var isFTTO = str.indexOf("FTTO")!=-1;
			//alert(isFTTO)

        console.log(isFTTO)
        console.log("1111111111111111")
			$scope.mydate= new Date().getTime();


        // $scope.loading =true;

        //console.log($scope.Format(new Date(),"yyyy-MM-dd hh:mm:ss"));
			// 	var stime="2018-11-08 12:00:00";
        // var end =new Date(stime.replace(/-/g,'/')).getTime();
			// 	if(end<$scope.mydate){
			// 		alert(true)
			// 	}else{
			// 		alert(false)
			// 	}
        //  console.log(Date.parse(new Date()));
        //
        //  console.log($scope.stillUse(""));

        $scope.tips = true;
$scope.tipsInfo = "hehe";
       var createPromOrder = {
            // "offeringOrderInfos": [],
            payType: $scope.payType,
            totalAmount: 0
          };

$scope.list = ["1","2","5"];
createPromOrder.list = angular.copy($scope.list);

console.log(createPromOrder);
          



        $scope.count = 0;
        $scope.invoiceFailText = "111111";

        $scope.flag = false;
        $scope.invoiceFailed = true;
        $scope.fee = 3333;
        $scope.name="糖类显示";
        $scope.names=[{"name":"KIKI","country":"American"},{"name":"YYY","country":"Sweden"},{"name":"BBB","country":"China"}];
        $scope.list = [];

        // $scope.myname ="start";
        $scope.myname=[];

        // $scope.req=$scope.getReq("5004");
        // console.log($scope.req)


    }


    setTimeout(function () {
        console.log(1111555555)
        // $scope.loading =false;
        // console.log($scope.loading)
        $("#mask-loading").hide();

    },3000);


    $scope.addLoadingDiv = function () {
        var mask = "<div id='mask'></div>";
        var loading = "<div id='loading'>" +
            "<img src='../../images/loading_02.gif'/>" + '数据加载中' + "</div>";
        $("#popupwin").prepend(loading).prepend(mask);
        $("#loading").css("position", "fixed")
            .css("height", "51px").css("text-align", "center")
            .css("z-index", "9999").css("top", "45%")
            .css("left", "45%")
            .css("line-height", "2.3");

        $("#mask").width($("#popupwin").width()).height($("#popupwin").height())
            .css("background-color", "#fafafa")
            .css("filter", "alpha(opacity=60)")
            .css("opacity", "0.5")
            .css("position", "absolute")
            .css("z-index", "10");
    };



    $scope.Format = function (date, fmt) {
                    var o = {
                        "M+": date.getMonth() + 1, //月份
                        "d+": date.getDate(), //日
                        "h+": date.getHours(), //小时
                        "m+": date.getMinutes(), //分
                        "s+": date.getSeconds(), //秒
                        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                        "S": date.getMilliseconds() //毫秒
                    };
                    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                    for (var k in o)
                        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    return fmt;
                };

    $scope.stillUse = function(time){
        var nowTime = Date.parse(new Date());
        if(time){
            console.log(88888);
            var endTime = Date.parse(time);
            console.log(nowTime)
            console.log(endTime)
            if(endTime>nowTime){
                return true;
            }else{
                return false;
            }
        }else{
            console.log(9999);
            return false;
        }

    }

$scope.keke = function(){

    //$scope.tips = true;
    $scope.tipsInfo ="bye"
    setTimeout(function(){
       $scope.tips = false; 
    },1000);
    
    return ;

    alert(123)
}




    $scope.gotest = function ($event,x,index) {


        // console.log($($event.target).children())
        // $($event.target).children().css("color","red");
        //$scope.names[index].name=$scope.names2[index].name;
        alert(x.name+x.country)
    }
    $scope.changeName = function (index) {

        $scope.names[index].name = $scope.myname[index].name;
        console.log($scope.names[index].name);


        angular.forEach($scope.names, function (data) {
            console.log(data);

        })
    }

    $scope.getReq=function(type){
        if("5004"==type){
            return "5004"+"000";

        }
        if("5019"==type){
            return "5019"+"000";

        }

    }


})