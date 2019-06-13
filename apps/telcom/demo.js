telcomApp.controller("demoController",function($scope){




    $scope.init=function () {
        $scope.names=[{"name":"KIKI","country":"American"},{"name":"YYY","country":"Sweden"},{"name":"BBB","country":"China"}];
        $(document).on('click','.buttonVideo',function () {
            //console.log(123456);
            var a=1;
            alert(a);
        })


        $scope.age=20;

        $scope.points=[1,2,3,9,6,5,9];

        $scope.people = [{"name":'唐磊',"age":20},{"name":"zhangsan","age":30}];

        $scope.user = 'John Doe';
        $scope.email = 'john.doe@gmail.com';

        var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
        $scope.myaction="783567954@126.com";
        $scope.myoptions=["a","b","c"];
        $scope.city=[{"id":"1","name":"北京"},{"id":"2","name":"上海"},{"id":"3","name":"深圳"}];
        $scope.stu=$scope.city[0].id;



    }

    // $scope.emailFormatter=function (value) {
    //     if(value){
    //
    //     }
    // }



    $('#table').bootstrapTable({
        //url: '.....',//从后台获取数据
        striped:true,
        pagination:true,
        data:[{"id":1,"name":"Leo","price":90.2,"calcMode":1},{"id":2,"name":"Jack","price":10.2,"calcMode":2},{"id":3,"name":"Ocean","price":100.2,"calcMode":3},{"id":4,"name":"Jay","price":80.0,"calcMode":1}],
        columns: [{
            checkbox: true,
            visible: true                  //是否显示复选框
        },{
            field: 'id',
            title: 'Item ID',
            align:'center',
            sortable: true
        }, {
            field: 'name',
            title: 'Item Name'
        }, {
            field: 'price',
            title: 'Item Price',
            sortable: true
        },
            {
                field: 'calcMode',
                title: '计算方式',
                align: 'center',
                //valign: 'middle',
                formatter:function (value,row,index) {
                    var text = "-";
                    switch (value){
                        case 1:
                            text ="方式一";
                            break;
                        case 2:
                            text ="方式二";
                            break;
                        case 3:
                            text ="方式三";
                            break;
                    }
                    return text;
                }
            },
            {
                field: 'Email',
                title: '邮箱',
                sortable: true,
                //formatter: emailFormatter
            }

        ]
    });

    $scope.counters = 0;
    $scope.add = function(amount) {
        $scope.counters += amount;
    };

    $scope.subtract = function(amount) {
        $scope.counters -= amount;
    };





})

telcomApp.controller("demoController",function($scope){

})