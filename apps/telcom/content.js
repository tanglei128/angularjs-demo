telcomApp.controller("contentController",function($scope){

	$scope.param = {
		date: new Date()
	};
	$scope.dateOptions = {
		dateFormat: 'yyyy-MM-dd',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(2017,1,01),
        startingDay: 1
    };
    $scope.openDatePopup = function() {
        $scope.datePopup = {
            opened: true
        };
    };

	$scope.init=function(){

		//今日攻击小时趋势
		$scope.draw1();
		//站点攻击热点目标top5被攻击小时趋势
		$scope.draw2();
		//攻击者IP TOP5
		$scope.draw3();
		//被攻击者IP TOP10
		$scope.draw4();
		//路线图
        $scope.draw5();
        //热力图
		$scope.draw6();
        //攻击风险与等级分布
        $scope.draw7();

        $scope.draw8();

        $scope.draw20();
	}
	//赋予切换按钮默认值
    $scope.state=1;

	$scope.draw1 = function(){
        var myChart = echarts.init(document.getElementById("p1"));
        var base = +new Date(1968, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];

        var data = [Math.random() * 300];

        for (var i = 1; i < 20000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }

        option = {
            title: {
                text: '今日攻击小时趋势',
                textStyle:{
                    color:'white',
                    fontSize:9,
                }
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    splitLine:{show: false},//去除网格线
                    boundaryGap : false,
                    data : ['00:00','','','','','','23:00']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    boundaryGap : false,
                    splitLine:{show: false},//去除网格线
                }
            ],
            series : [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[120, 132, 101, 134, 90, 230, 210],
					itemStyle:{
                    	normal:{
                    		borderColor:'red',
							shadowColor:'blue',
						}
					},
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(255, 0, 0)'
                            }, {
                                offset: 1,
                                color: 'rgb(0, 0, 0)'
                            }])
                        }
                    },
                }
            ]
        };


        myChart.setOption(option);
    };

    $scope.draw2 = function(){
 
        var target = ['','top1','top2','top3','top4','top5',''];
        var hours = ['00:00', '01:00','','','','',''];
        //data 二维数组 子数组前两个值分别为x,y坐标值，第三个值是圆点的半径（value压缩）
        //var data = [[0,1,60],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
        var data = [[1,1,50],[1,2,40],[1,3,30],[1,4,25],[1,5,15]];

        data = data.map(function (item) {
            return [item[0], item[1], item[2]/5];
        });
		var myChart = echarts.init(document.getElementById("p2"));
		
        var option = {
            title: {
                text: '站点攻击热点目标top5被攻击小时趋势',
                link: 'https://github.com/pissang/echarts-next/graphs/punch-card',
				textStyle:{
                	color:'white',
					fontSize:9,
				}
            },
            /*legend: {
                data: ['Punch Card'],
                left: 'right'
            },*/
            tooltip: {
                position: 'top',
                formatter: function (params) {
                    return params.value[2] + ' in ' + target[params.value[1]] + ' of ' + hours[params.value[0]];
                }
            },
            grid: {
                left: 2,
                bottom: 10,
                right: 10,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: hours,
                axisLine: {
                    show: true
                },
                boundaryGap: false,
                
            },
            yAxis: {
                type: 'category',
                data: target,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: true
                }
            },
            
            series: [{
                name: 'Punch Card',
                type: 'scatter',
                symbolSize: function (val) {
                    return val[2] * 2;
                },
                data: data,
                itemStyle:{
                    normal:{
                        color:'blue'
                    }
                },
                animationDelay: function (idx) {
                    return idx * 5;
                }
            }]
        };






		myChart.setOption(option);
    };


    $scope.draw3 = function(){
    	var myChart = echarts.init(document.getElementById("p3"));
    	var option = {
    		title : {
		        //text: '攻击者IP TOP5',
		        x: 'left',
		        align: 'left',
                textStyle:{
                    color:'white',
                    fontSize:9,
                }
		    },			        
		    xAxis:  {
                //boundaryGap: false,
                splitLine:{show: false},//去除网格线,
				show:false
		    },
		    yAxis: {
		        type: 'category',
		        data: ['IP1','IP2','IP3','IP4','IP5'],
                splitLine:{show: false},//去除网格线
                show:false
		    },
		    series: [
		        {		            
		            type: 'bar',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideLeft',
                            formatter:'{b}\t\t\t{c}',
		                }
		            },
                    //barWidth:30,
		            data: [320, 302, 301, 334, 390]
		        }
		    ]
		};
		myChart.setOption(option);
    };

    $scope.draw4 = function(){
    	var myChart = echarts.init(document.getElementById("p4"));
    	var option = {
    		title : {
		        //text: '被攻击者IP TOP10',
		        x: 'left',
		        align: 'left',
                textStyle:{
                    color:'white',
                    fontSize:9,
                }
		    },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '30%',
                containLabel: true
            },
		    xAxis:  {
                splitLine:{show: false},//去除网格线
                show:false
		    },
		    yAxis: {
		        type: 'category',
                splitLine:{show: false},//去除网格线
                show:false,
		        data: ['IP1','IP2','IP3','IP4','IP5','IP6','IP7','IP8','IP9','IP10']
		    },
		    series: [
		        {		            
		            type: 'bar',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideLeft',
                            formatter:'{b}\t\t\t{c}',
		                }
		            },
                    itemStyle:{
                        normal:{
                            color:'blue'
                        }
                    },
		            data: [320, 302, 301, 334, 390, 320, 302, 301, 334, 390]
		        }
		    ]
		};
		myChart.setOption(option);
    };

//航线轨迹图
	$scope.draw5 = function(){

				var geoCoordMap = {
			'上海': [121.4648,31.2891],
			'东莞': [113.8953,22.901],
			'东营': [118.7073,37.5513],
			'中山': [113.4229,22.478],
			'临汾': [111.4783,36.1615],
			'临沂': [118.3118,35.2936],
			'丹东': [124.541,40.4242],
			'丽水': [119.5642,28.1854],
			'乌鲁木齐': [87.9236,43.5883],
			'佛山': [112.8955,23.1097],
			'保定': [115.0488,39.0948],
			'兰州': [103.5901,36.3043],
			'包头': [110.3467,41.4899],
			'北京': [116.4551,40.2539],
			'北海': [109.314,21.6211],
			'南京': [118.8062,31.9208],
			'南宁': [108.479,23.1152],
			'南昌': [116.0046,28.6633],
			'南通': [121.1023,32.1625],
			'厦门': [118.1689,24.6478],
			'台州': [121.1353,28.6688],
			'合肥': [117.29,32.0581],
			'呼和浩特': [111.4124,40.4901],
			'咸阳': [108.4131,34.8706],
			'哈尔滨': [127.9688,45.368],
			'唐山': [118.4766,39.6826],
			'嘉兴': [120.9155,30.6354],
			'大同': [113.7854,39.8035],
			'大连': [122.2229,39.4409],
			'天津': [117.4219,39.4189],
			'太原': [112.3352,37.9413],
			'威海': [121.9482,37.1393],
			'宁波': [121.5967,29.6466],
			'宝鸡': [107.1826,34.3433],
			'宿迁': [118.5535,33.7775],
			'常州': [119.4543,31.5582],
			'广州': [113.5107,23.2196],
			'廊坊': [116.521,39.0509],
			'延安': [109.1052,36.4252],
			'张家口': [115.1477,40.8527],
			'徐州': [117.5208,34.3268],
			'德州': [116.6858,37.2107],
			'惠州': [114.6204,23.1647],
			'成都': [103.9526,30.7617],
			'扬州': [119.4653,32.8162],
			'承德': [117.5757,41.4075],
			'拉萨': [91.1865,30.1465],
			'无锡': [120.3442,31.5527],
			'日照': [119.2786,35.5023],
			'昆明': [102.9199,25.4663],
			'杭州': [119.5313,29.8773],
			'枣庄': [117.323,34.8926],
			'柳州': [109.3799,24.9774],
			'株洲': [113.5327,27.0319],
			'武汉': [114.3896,30.6628],
			'汕头': [117.1692,23.3405],
			'江门': [112.6318,22.1484],
			'沈阳': [123.1238,42.1216],
			'沧州': [116.8286,38.2104],
			'河源': [114.917,23.9722],
			'泉州': [118.3228,25.1147],
			'泰安': [117.0264,36.0516],
			'泰州': [120.0586,32.5525],
			'济南': [117.1582,36.8701],
			'济宁': [116.8286,35.3375],
			'海口': [110.3893,19.8516],
			'淄博': [118.0371,36.6064],
			'淮安': [118.927,33.4039],
			'深圳': [114.5435,22.5439],
			'清远': [112.9175,24.3292],
			'温州': [120.498,27.8119],
			'渭南': [109.7864,35.0299],
			'湖州': [119.8608,30.7782],
			'湘潭': [112.5439,27.7075],
			'滨州': [117.8174,37.4963],
			'潍坊': [119.0918,36.524],
			'烟台': [120.7397,37.5128],
			'玉溪': [101.9312,23.8898],
			'珠海': [113.7305,22.1155],
			'盐城': [120.2234,33.5577],
			'盘锦': [121.9482,41.0449],
			'石家庄': [114.4995,38.1006],
			'福州': [119.4543,25.9222],
			'秦皇岛': [119.2126,40.0232],
			'绍兴': [120.564,29.7565],
			'聊城': [115.9167,36.4032],
			'肇庆': [112.1265,23.5822],
			'舟山': [122.2559,30.2234],
			'苏州': [120.6519,31.3989],
			'莱芜': [117.6526,36.2714],
			'菏泽': [115.6201,35.2057],
			'营口': [122.4316,40.4297],
			'葫芦岛': [120.1575,40.578],
			'衡水': [115.8838,37.7161],
			'衢州': [118.6853,28.8666],
			'西宁': [101.4038,36.8207],
			'西安': [109.1162,34.2004],
			'贵阳': [106.6992,26.7682],
			'连云港': [119.1248,34.552],
			'邢台': [114.8071,37.2821],
			'邯郸': [114.4775,36.535],
			'郑州': [113.4668,34.6234],
			'鄂尔多斯': [108.9734,39.2487],
			'重庆': [107.7539,30.1904],
			'金华': [120.0037,29.1028],
			'铜川': [109.0393,35.1947],
			'银川': [106.3586,38.1775],
			'镇江': [119.4763,31.9702],
			'长春': [125.8154,44.2584],
			'长沙': [113.0823,28.2568],
			'长治': [112.8625,36.4746],
			'阳泉': [113.4778,38.0951],
			'青岛': [120.4651,36.3373],
			'韶关': [113.7964,24.7028]
		};

		var BJData = [
			[{name:'北京'}, {name:'上海',value:95}],
			[{name:'北京'}, {name:'广州',value:90}],
			[{name:'北京'}, {name:'大连',value:80}],
			[{name:'北京'}, {name:'南宁',value:70}],
			[{name:'北京'}, {name:'南昌',value:60}],
			[{name:'北京'}, {name:'拉萨',value:50}],
			[{name:'北京'}, {name:'长春',value:40}],
			[{name:'北京'}, {name:'包头',value:30}],
			[{name:'北京'}, {name:'重庆',value:20}],
			[{name:'北京'}, {name:'常州',value:10}]
		];

		var SHData = [
			[{name:'上海'},{name:'包头',value:95}],
			[{name:'上海'},{name:'昆明',value:90}],
			[{name:'上海'},{name:'广州',value:80}],
			[{name:'上海'},{name:'郑州',value:70}],
			[{name:'上海'},{name:'长春',value:60}],
			[{name:'上海'},{name:'重庆',value:50}],
			[{name:'上海'},{name:'长沙',value:40}],
			[{name:'上海'},{name:'北京',value:30}],
			[{name:'上海'},{name:'丹东',value:20}],
			[{name:'上海'},{name:'大连',value:10}]
		];

		var GZData = [
			[{name:'广州'},{name:'福州',value:95}],
			[{name:'广州'},{name:'太原',value:90}],
			[{name:'广州'},{name:'长春',value:80}],
			[{name:'广州'},{name:'重庆',value:70}],
			[{name:'广州'},{name:'西安',value:60}],
			[{name:'广州'},{name:'成都',value:50}],
			[{name:'广州'},{name:'常州',value:40}],
			[{name:'广州'},{name:'北京',value:30}],
			[{name:'广州'},{name:'北海',value:20}],
			[{name:'广州'},{name:'海口',value:10}]
		];

		var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

		var convertData = function (data) {
			var res = [];
			for (var i = 0; i < data.length; i++) {
				var dataItem = data[i];
				var fromCoord = geoCoordMap[dataItem[0].name];
				var toCoord = geoCoordMap[dataItem[1].name];
				if (fromCoord && toCoord) {
					res.push({
						fromName: dataItem[0].name,
						toName: dataItem[1].name,
						coords: [fromCoord, toCoord]
					});
				}
			}
			return res;
		};

		var color = ['#a6c84c', '#ffa022', '#46bee9'];
		var series = [];
		[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
			series.push({
				name: item[0] + ' Top10',
				type: 'lines',
				zlevel: 1,
				effect: {
					show: true,
					period: 6,
					trailLength: 0.7,
					color: '#fff',
					symbolSize: 3
				},
				lineStyle: {
					normal: {
						color: color[i],
						width: 0,
						curveness: 0.2
					}
				},
				data: convertData(item[1])
			},
			{
				name: item[0] + ' Top10',
				type: 'lines',
				zlevel: 2,
				symbol: ['none', 'arrow'],
				symbolSize: 10,
				effect: {
					show: true,
					period: 6,
					trailLength: 0,
					symbol: planePath,
					symbolSize: 15
				},
				lineStyle: {
					normal: {
						color: color[i],
						width: 1,
						opacity: 0.6,
						curveness: 0.2
					}
				},
				data: convertData(item[1])
			},
			{
				name: item[0] + ' Top10',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					brushType: 'stroke'
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						formatter: '{b}'
					}
				},
				symbolSize: function (val) {
					return val[2] / 8;
				},
				itemStyle: {
					normal: {
						color: color[i]
					}
				},
				data: item[1].map(function (dataItem) {
					return {
						name: dataItem[1].name,
						value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
					};
				})
			});
		});
		var myChart = echarts.init(document.getElementById("p5"));
		option = {
			backgroundColor: '#404a59',
			/*title : {
				text: '模拟迁徙',
				subtext: '数据纯属虚构',
				left: 'center',
				textStyle : {
					color: '#fff'
				}
			},*/
			tooltip : {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				top: 'bottom',
				left: 'right',
				data:['北京 Top10', '上海 Top10', '广州 Top10'],
				textStyle: {
					color: '#fff'
				},
				selectedMode: 'single'
			},
			geo: {
				map: 'china',
				label: {
					emphasis: {
						show: false
					}
				},
				roam: true,
				itemStyle: {
					normal: {
						areaColor: '#323c48',
						borderColor: '#404a59'
					},
					emphasis: {
						areaColor: '#2a333d'
					}
				}
			},
			series: series
		};
		myChart.clear();
		myChart.setOption(option);	 
}
	$scope.draw6 = function(){

var geoCoordMap = {
    "海门":[121.15,31.89],
    "鄂尔多斯":[109.781327,39.608266],
    "招远":[120.38,37.35],
    "舟山":[122.207216,29.985295],
    "齐齐哈尔":[123.97,47.33],
    "盐城":[120.13,33.38],
    "赤峰":[118.87,42.28],
    "青岛":[120.33,36.07],
    "乳山":[121.52,36.89],
    "金昌":[102.188043,38.520089],
    "泉州":[118.58,24.93],
    "莱西":[120.53,36.86],
    "日照":[119.46,35.42],
    "胶南":[119.97,35.88],
    "南通":[121.05,32.08],
    "拉萨":[91.11,29.97],
    "云浮":[112.02,22.93],
    "梅州":[116.1,24.55],
    "文登":[122.05,37.2],
    "上海":[121.48,31.22],
    "攀枝花":[101.718637,26.582347],
    "威海":[122.1,37.5],
    "承德":[117.93,40.97],
    "厦门":[118.1,24.46],
    "汕尾":[115.375279,22.786211],
    "潮州":[116.63,23.68],
    "丹东":[124.37,40.13],
    "太仓":[121.1,31.45],
    "曲靖":[103.79,25.51],
    "烟台":[121.39,37.52],
    "福州":[119.3,26.08],
    "瓦房店":[121.979603,39.627114],
    "即墨":[120.45,36.38],
    "抚顺":[123.97,41.97],
    "玉溪":[102.52,24.35],
    "张家口":[114.87,40.82],
    "阳泉":[113.57,37.85],
    "莱州":[119.942327,37.177017],
    "湖州":[120.1,30.86],
    "汕头":[116.69,23.39],
    "昆山":[120.95,31.39],
    "宁波":[121.56,29.86],
    "湛江":[110.359377,21.270708],
    "揭阳":[116.35,23.55],
    "荣成":[122.41,37.16],
    "连云港":[119.16,34.59],
    "葫芦岛":[120.836932,40.711052],
    "常熟":[120.74,31.64],
    "东莞":[113.75,23.04],
    "河源":[114.68,23.73],
    "淮安":[119.15,33.5],
    "泰州":[119.9,32.49],
    "南宁":[108.33,22.84],
    "营口":[122.18,40.65],
    "惠州":[114.4,23.09],
    "江阴":[120.26,31.91],
    "蓬莱":[120.75,37.8],
    "韶关":[113.62,24.84],
    "嘉峪关":[98.289152,39.77313],
    "广州":[113.23,23.16],
    "延安":[109.47,36.6],
    "太原":[112.53,37.87],
    "清远":[113.01,23.7],
    "中山":[113.38,22.52],
    "昆明":[102.73,25.04],
    "寿光":[118.73,36.86],
    "盘锦":[122.070714,41.119997],
    "长治":[113.08,36.18],
    "深圳":[114.07,22.62],
    "珠海":[113.52,22.3],
    "宿迁":[118.3,33.96],
    "咸阳":[108.72,34.36],
    "铜川":[109.11,35.09],
    "平度":[119.97,36.77],
    "佛山":[113.11,23.05],
    "海口":[110.35,20.02],
    "江门":[113.06,22.61],
    "章丘":[117.53,36.72],
    "肇庆":[112.44,23.05],
    "大连":[121.62,38.92],
    "临汾":[111.5,36.08],
    "吴江":[120.63,31.16],
    "石嘴山":[106.39,39.04],
    "沈阳":[123.38,41.8],
    "苏州":[120.62,31.32],
    "茂名":[110.88,21.68],
    "嘉兴":[120.76,30.77],
    "长春":[125.35,43.88],
    "胶州":[120.03336,36.264622],
    "银川":[106.27,38.47],
    "张家港":[120.555821,31.875428],
    "三门峡":[111.19,34.76],
    "锦州":[121.15,41.13],
    "南昌":[115.89,28.68],
    "柳州":[109.4,24.33],
    "三亚":[109.511909,18.252847],
    "自贡":[104.778442,29.33903],
    "吉林":[126.57,43.87],
    "阳江":[111.95,21.85],
    "泸州":[105.39,28.91],
    "西宁":[101.74,36.56],
    "宜宾":[104.56,29.77],
    "呼和浩特":[111.65,40.82],
    "成都":[104.06,30.67],
    "大同":[113.3,40.12],
    "镇江":[119.44,32.2],
    "桂林":[110.28,25.29],
    "张家界":[110.479191,29.117096],
    "宜兴":[119.82,31.36],
    "北海":[109.12,21.49],
    "西安":[108.95,34.27],
    "金坛":[119.56,31.74],
    "东营":[118.49,37.46],
    "牡丹江":[129.58,44.6],
    "遵义":[106.9,27.7],
    "绍兴":[120.58,30.01],
    "扬州":[119.42,32.39],
    "常州":[119.95,31.79],
    "潍坊":[119.1,36.62],
    "重庆":[106.54,29.59],
    "台州":[121.420757,28.656386],
    "南京":[118.78,32.04],
    "滨州":[118.03,37.36],
    "贵阳":[106.71,26.57],
    "无锡":[120.29,31.59],
    "本溪":[123.73,41.3],
    "克拉玛依":[84.77,45.59],
    "渭南":[109.5,34.52],
    "马鞍山":[118.48,31.56],
    "宝鸡":[107.15,34.38],
    "焦作":[113.21,35.24],
    "句容":[119.16,31.95],
    "北京":[116.46,39.92],
    "徐州":[117.2,34.26],
    "衡水":[115.72,37.72],
    "包头":[110,40.58],
    "绵阳":[104.73,31.48],
    "乌鲁木齐":[87.68,43.77],
    "枣庄":[117.57,34.86],
    "杭州":[120.19,30.26],
    "淄博":[118.05,36.78],
    "鞍山":[122.85,41.12],
    "溧阳":[119.48,31.43],
    "库尔勒":[86.06,41.68],
    "安阳":[114.35,36.1],
    "开封":[114.35,34.79],
    "济南":[117,36.65],
    "德阳":[104.37,31.13],
    "温州":[120.65,28.01],
    "九江":[115.97,29.71],
    "邯郸":[114.47,36.6],
    "临安":[119.72,30.23],
    "兰州":[103.73,36.03],
    "沧州":[116.83,38.33],
    "临沂":[118.35,35.05],
    "南充":[106.110698,30.837793],
    "天津":[117.2,39.13],
    "富阳":[119.95,30.07],
    "泰安":[117.13,36.18],
    "诸暨":[120.23,29.71],
    "郑州":[113.65,34.76],
    "哈尔滨":[126.63,45.75],
    "聊城":[115.97,36.45],
    "芜湖":[118.38,31.33],
    "唐山":[118.02,39.63],
    "平顶山":[113.29,33.75],
    "邢台":[114.48,37.05],
    "德州":[116.29,37.45],
    "济宁":[116.59,35.38],
    "荆州":[112.239741,30.335165],
    "宜昌":[111.3,30.7],
    "义乌":[120.06,29.32],
    "丽水":[119.92,28.45],
    "洛阳":[112.44,34.7],
    "秦皇岛":[119.57,39.95],
    "株洲":[113.16,27.83],
    "石家庄":[114.48,38.03],
    "莱芜":[117.67,36.19],
    "常德":[111.69,29.05],
    "保定":[115.48,38.85],
    "湘潭":[112.91,27.87],
    "金华":[119.64,29.12],
    "岳阳":[113.09,29.37],
    "长沙":[113,28.21],
    "衢州":[118.88,28.97],
    "廊坊":[116.7,39.53],
    "菏泽":[115.480656,35.23375],
    "合肥":[117.27,31.86],
    "武汉":[114.31,30.52],
    "大庆":[125.03,46.58]
};

var data = [
    {name: "海门", value: 9},
    {name: "鄂尔多斯", value: 12},
    {name: "招远", value: 12},
    {name: "舟山", value: 12},
    {name: "齐齐哈尔", value: 14},
    {name: "盐城", value: 15},
    {name: "赤峰", value: 16},
    {name: "青岛", value: 18},
    {name: "乳山", value: 18},
    {name: "金昌", value: 19},
    {name: "泉州", value: 21},
    {name: "莱西", value: 21},
    {name: "日照", value: 21},
    {name: "胶南", value: 22},
    {name: "南通", value: 23},
    {name: "拉萨", value: 24},
    {name: "云浮", value: 24},
    {name: "梅州", value: 25},
    {name: "文登", value: 25},
    {name: "上海", value: 25},
    {name: "攀枝花", value: 25},
    {name: "威海", value: 25},
    {name: "承德", value: 25},
    {name: "厦门", value: 26},
    {name: "汕尾", value: 26},
    {name: "潮州", value: 26},
    {name: "丹东", value: 27},
    {name: "太仓", value: 27},
    {name: "曲靖", value: 27},
    {name: "烟台", value: 28},
    {name: "福州", value: 29},
    {name: "瓦房店", value: 30},
    {name: "即墨", value: 30},
    {name: "抚顺", value: 31},
    {name: "玉溪", value: 31},
    {name: "张家口", value: 31},
    {name: "阳泉", value: 31},
    {name: "莱州", value: 32},
    {name: "湖州", value: 32},
    {name: "汕头", value: 32},
    {name: "昆山", value: 33},
    {name: "宁波", value: 33},
    {name: "湛江", value: 33},
    {name: "揭阳", value: 34},
    {name: "荣成", value: 34},
    {name: "连云港", value: 35},
    {name: "葫芦岛", value: 35},
    {name: "常熟", value: 36},
    {name: "东莞", value: 36},
    {name: "河源", value: 36},
    {name: "淮安", value: 36},
    {name: "泰州", value: 36},
    {name: "南宁", value: 37},
    {name: "营口", value: 37},
    {name: "惠州", value: 37},
    {name: "江阴", value: 37},
    {name: "蓬莱", value: 37},
    {name: "韶关", value: 38},
    {name: "嘉峪关", value: 38},
    {name: "广州", value: 38},
    {name: "延安", value: 38},
    {name: "太原", value: 39},
    {name: "清远", value: 39},
    {name: "中山", value: 39},
    {name: "昆明", value: 39},
    {name: "寿光", value: 40},
    {name: "盘锦", value: 40},
    {name: "长治", value: 41},
    {name: "深圳", value: 41},
    {name: "珠海", value: 42},
    {name: "宿迁", value: 43},
    {name: "咸阳", value: 43},
    {name: "铜川", value: 44},
    {name: "平度", value: 44},
    {name: "佛山", value: 44},
    {name: "海口", value: 44},
    {name: "江门", value: 45},
    {name: "章丘", value: 45},
    {name: "肇庆", value: 46},
    {name: "大连", value: 47},
    {name: "临汾", value: 47},
    {name: "吴江", value: 47},
    {name: "石嘴山", value: 49},
    {name: "沈阳", value: 50},
    {name: "苏州", value: 50},
    {name: "茂名", value: 50},
    {name: "嘉兴", value: 51},
    {name: "长春", value: 51},
    {name: "胶州", value: 52},
    {name: "银川", value: 52},
    {name: "张家港", value: 52},
    {name: "三门峡", value: 53},
    {name: "锦州", value: 54},
    {name: "南昌", value: 54},
    {name: "柳州", value: 54},
    {name: "三亚", value: 54},
    {name: "自贡", value: 56},
    {name: "吉林", value: 56},
    {name: "阳江", value: 57},
    {name: "泸州", value: 57},
    {name: "西宁", value: 57},
    {name: "宜宾", value: 58},
    {name: "呼和浩特", value: 58},
    {name: "成都", value: 58},
    {name: "大同", value: 58},
    {name: "镇江", value: 59},
    {name: "桂林", value: 59},
    {name: "张家界", value: 59},
    {name: "宜兴", value: 59},
    {name: "北海", value: 60},
    {name: "西安", value: 61},
    {name: "金坛", value: 62},
    {name: "东营", value: 62},
    {name: "牡丹江", value: 63},
    {name: "遵义", value: 63},
    {name: "绍兴", value: 63},
    {name: "扬州", value: 64},
    {name: "常州", value: 64},
    {name: "潍坊", value: 65},
    {name: "重庆", value: 66},
    {name: "台州", value: 67},
    {name: "南京", value: 67},
    {name: "滨州", value: 70},
    {name: "贵阳", value: 71},
    {name: "无锡", value: 71},
    {name: "本溪", value: 71},
    {name: "克拉玛依", value: 72},
    {name: "渭南", value: 72},
    {name: "马鞍山", value: 72},
    {name: "宝鸡", value: 72},
    {name: "焦作", value: 75},
    {name: "句容", value: 75},
    {name: "北京", value: 79},
    {name: "徐州", value: 79},
    {name: "衡水", value: 80},
    {name: "包头", value: 80},
    {name: "绵阳", value: 80},
    {name: "乌鲁木齐", value: 84},
    {name: "枣庄", value: 84},
    {name: "杭州", value: 84},
    {name: "淄博", value: 85},
    {name: "鞍山", value: 86},
    {name: "溧阳", value: 86},
    {name: "库尔勒", value: 86},
    {name: "安阳", value: 90},
    {name: "开封", value: 90},
    {name: "济南", value: 92},
    {name: "德阳", value: 93},
    {name: "温州", value: 95},
    {name: "九江", value: 96},
    {name: "邯郸", value: 98},
    {name: "临安", value: 99},
    {name: "兰州", value: 99},
    {name: "沧州", value: 100},
    {name: "临沂", value: 103},
    {name: "南充", value: 104},
    {name: "天津", value: 105},
    {name: "富阳", value: 106},
    {name: "泰安", value: 112},
    {name: "诸暨", value: 112},
    {name: "郑州", value: 113},
    {name: "哈尔滨", value: 114},
    {name: "聊城", value: 116},
    {name: "芜湖", value: 117},
    {name: "唐山", value: 119},
    {name: "平顶山", value: 119},
    {name: "邢台", value: 119},
    {name: "德州", value: 120},
    {name: "济宁", value: 120},
    {name: "荆州", value: 127},
    {name: "宜昌", value: 130},
    {name: "义乌", value: 132},
    {name: "丽水", value: 133},
    {name: "洛阳", value: 134},
    {name: "秦皇岛", value: 136},
    {name: "株洲", value: 143},
    {name: "石家庄", value: 147},
    {name: "莱芜", value: 148},
    {name: "常德", value: 152},
    {name: "保定", value: 153},
    {name: "湘潭", value: 154},
    {name: "金华", value: 157},
    {name: "岳阳", value: 169},
    {name: "长沙", value: 175},
    {name: "衢州", value: 177},
    {name: "廊坊", value: 193},
    {name: "菏泽", value: 194},
    {name: "合肥", value: 229},
    {name: "武汉", value: 273},
    {name: "大庆", value: 279}
];

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var convertedData = [
    convertData(data),
    convertData(data.sort(function (a, b) {
        return b.value - a.value;
    }).slice(0, 6))
];

var myChart = echarts.init(document.getElementById("p6"));
option = {
    backgroundColor: '#404a59',
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicInOut',
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    title: [
        {
            text: '全国主要城市 PM 2.5',
            subtext: 'data from PM25.in',
            sublink: 'http://www.pm25.in',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        {
            id: 'statistic',
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        }
    ],
    toolbox: {
        iconStyle: {
            normal: {
                borderColor: '#fff'
            },
            emphasis: {
                borderColor: '#b1e4ff'
            }
        }
    },
    brush: {
        outOfBrush: {
            color: '#abc'
        },
        brushStyle: {
            borderWidth: 2,
            color: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,0.5)',
        },
        seriesIndex: [0, 1],
        throttleType: 'debounce',
        throttleDelay: 300,
        geoIndex: 0
    },
    geo: {
        map: 'china',
        left: '10',
        right: '35%',
        center: [117.98561551896913, 31.205000490896193],
        zoom: 2.5,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    tooltip : {
        trigger: 'item'
    },
    grid: {
        right: 40,
        top: 100,
        bottom: 40,
        width: '30%'
    },
    xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
    },
    yAxis: {
        type: 'category',
        name: 'TOP 20',
        nameGap: 16,
        axisLine: {show: false, lineStyle: {color: '#ddd'}},
        axisTick: {show: false, lineStyle: {color: '#ddd'}},
        axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
        data: []
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertedData[0],
            symbolSize: function (val) {
                return Math.max(val[2] / 10, 8);
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertedData[1],
            symbolSize: function (val) {
                return Math.max(val[2] / 10, 8);
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            id: 'bar',
            zlevel: 2,
            type: 'bar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            },
            data: []
        }
    ]
};

//myChart.clear();
myChart.on('brushselected', renderBrushed);
myChart.setOption(option);

setTimeout(function () {
    myChart.dispatchAction({
        type: 'brush',
        areas: [
            {
                geoIndex: 0,
                brushType: 'polygon',
                coordRange: [[119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77],[118.76,34.63],[118.6,34.6],[118.46,34.6],[118.33,34.57],[118.05,34.56],[117.6,34.56],[117.41,34.56],[117.25,34.56],[117.11,34.56],[117.02,34.56],[117,34.56],[116.94,34.56],[116.94,34.55],[116.9,34.5],[116.88,34.44],[116.88,34.37],[116.88,34.33],[116.88,34.24],[116.92,34.15],[116.98,34.09],[117.05,34.06],[117.19,33.96],[117.29,33.9],[117.43,33.8],[117.49,33.75],[117.54,33.68],[117.6,33.65],[117.62,33.61],[117.64,33.59],[117.68,33.58],[117.7,33.52],[117.74,33.5],[117.74,33.46],[117.8,33.44],[117.82,33.41],[117.86,33.37],[117.9,33.3],[117.9,33.28],[117.9,33.27],[118.09,32.97],[118.21,32.7],[118.29,32.56],[118.31,32.5],[118.35,32.46],[118.35,32.42],[118.35,32.36],[118.35,32.34],[118.37,32.24],[118.37,32.14],[118.37,32.09],[118.44,32.05],[118.46,32.01],[118.54,31.98],[118.6,31.93],[118.68,31.86],[118.72,31.8],[118.74,31.78],[118.76,31.74],[118.78,31.7],[118.82,31.64],[118.82,31.62],[118.86,31.58],[118.86,31.55],[118.88,31.54],[118.88,31.52],[118.9,31.51],[118.91,31.48],[118.93,31.43],[118.95,31.4],[118.97,31.39],[118.97,31.37],[118.97,31.34],[118.97,31.27],[118.97,31.21],[118.97,31.17],[118.97,31.12],[118.97,31.02],[118.97,30.93],[118.97,30.87],[118.97,30.85],[118.95,30.8],[118.95,30.77],[118.95,30.76],[118.93,30.7],[118.91,30.63],[118.91,30.61],[118.91,30.6],[118.9,30.6],[118.88,30.54],[118.88,30.51],[118.86,30.51],[118.86,30.46],[118.72,30.18],[118.68,30.1],[118.66,30.07],[118.62,29.91],[118.56,29.73],[118.52,29.63],[118.48,29.51],[118.44,29.42],[118.44,29.32],[118.43,29.19],[118.43,29.14],[118.43,29.08],[118.44,29.05],[118.46,29.05],[118.6,28.95],[118.64,28.94],[119.07,28.51],[119.25,28.41],[119.36,28.28],[119.46,28.19],[119.54,28.13],[119.66,28.03],[119.78,28],[119.87,27.94],[120.03,27.86],[120.17,27.79],[120.23,27.76],[120.3,27.72],[120.42,27.66],[120.52,27.64],[120.58,27.63],[120.64,27.63],[120.77,27.63],[120.89,27.61],[120.97,27.6],[121.07,27.59],[121.15,27.59],[121.28,27.59],[121.38,27.61],[121.56,27.73],[121.73,27.89],[122.03,28.2],[122.3,28.5],[122.46,28.72],[122.5,28.77],[122.54,28.82],[122.56,28.82],[122.58,28.85],[122.6,28.86],[122.61,28.91],[122.71,29.02],[122.73,29.08],[122.93,29.44],[122.99,29.54],[123.03,29.66],[123.05,29.73],[123.16,29.92],[123.24,30.02],[123.28,30.13],[123.32,30.29],[123.36,30.36],[123.36,30.55],[123.36,30.74],[123.36,31.05],[123.36,31.14],[123.36,31.26],[123.38,31.42],[123.46,31.74],[123.48,31.83],[123.48,31.95],[123.46,32.09],[123.34,32.25],[123.22,32.39],[123.12,32.46],[123.07,32.48],[123.05,32.49],[122.97,32.53],[122.91,32.59],[122.83,32.81],[122.77,32.87],[122.71,32.9],[122.56,32.97],[122.38,33.05],[122.3,33.12],[122.26,33.15],[122.22,33.21],[122.22,33.3],[122.22,33.39],[122.18,33.44],[122.07,33.56],[121.99,33.69],[121.89,33.78],[121.69,34.02],[121.66,34.05],[121.64,34.08]]
            }
        ]
    });
}, 0);


        function renderBrushed(params) {
            var mainSeries = params.batch[0].selected[0];

            var selectedItems = [];
            var categoryData = [];
            var barData = [];
            var maxBar = 30;
            var sum = 0;
            var count = 0;

            for (var i = 0; i < mainSeries.dataIndex.length; i++) {
                var rawIndex = mainSeries.dataIndex[i];
                var dataItem = convertedData[0][rawIndex];
                var pmValue = dataItem.value[2];

                sum += pmValue;
                count++;

                selectedItems.push(dataItem);
            }

            selectedItems.sort(function (a, b) {
                return a.value[2] - b.value[2];
            });

            for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
                categoryData.push(selectedItems[i].name);
                barData.push(selectedItems[i].value[2]);
            }

            this.setOption({
                yAxis: {
                    data: categoryData
                },
                xAxis: {
                    axisLabel: {show: !!count}
                },
                title: {
                    id: 'statistic',
                    text: count ? '平均: ' + (sum / count).toFixed(4) : ''
                },
                series: {
                    id: 'bar',
                    data: barData
                }
            });
        }
	}
	$scope.draw7 = function () {
		var myChart = echarts.init(document.getElementById('p7'));
        option = {
            title : {
                text: '攻击风险与等级分布',
                x:'left',
				textStyle:{
                	color:'white',
					fontSize:9
				}
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            /*legend: {
                x : 'center',
                y : 'bottom',
                data:['警告','低危','高危','致命']
            },*/
            /*toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },*/
            calculable : true,
            series : [
                {
                    name:'',
                    type:'pie',
                    radius : [10, 30],
                    center : ['48%', '60%'],
                    roseType : 'radius',
                    minAngle:30,
                    label: {
                        normal: {
                            textStyle: {
                                //color: 'rgba(255, 255, 255, 0.3)',
                                fontSize:8
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 5,
                            length2: 8
                        }
                    },
                    data:[
                        {value:500, name:'警告',itemStyle:{
                            normal:{color:'#8600ff'}
                        }},
                        {value:400, name:'低危',itemStyle:{
                            normal:{color:'yellow'}
                        }},
                        {value:150, name:'高危',itemStyle:{
                            normal:{color:'#d94600'}
                        }},
                        {value:60, name:'致命',itemStyle:{
                            normal:{color:'red'}
                        }}
                    ]
                }
            ]
        };

        myChart.setOption(option);
    }
    $scope.draw8 = function () {
		var myChart=echarts.init(document.getElementById('p8'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data:[
                        {value:335, name:'xss'},
                        {value:310, name:'zxx'},
                    ]
                }
            ]
        };
        myChart.setOption(option);

    }
    $scope.draw20 = function () {
		var myChart=echarts.init(document.getElementById('p20'));

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            textStyle: {
                                //color: 'rgba(255, 255, 255, 0.3)',
                                fontSize:8
                            },
                            formatter: "{c}\n{b} "

                        }
                    },
                    labelLine: {
                        normal: {
                            /*lineStyle: {
                                color: 'rgba(255, 5, 0, 0.3)'
                            },*/
                            //smooth: 0.2,
                            length: 10,
                            length2:15
                        }
                    },
                    data:[
                        {value:335, name:'钓鱼',itemStyle:{
                        	normal:{
                        		color:'rgb(27,164,130)'
							}
						}},
                        {value:310, name:'赌博',itemStyle:{
                            normal:{
                                color:'rgb(216,56,50)'
                            }
                        }},
                        {value:234, name:'色情',itemStyle:{
                            normal:{
                                color:'rgb(226,129,54)'
                            }
                        }},
                        {value:135, name:'其他',itemStyle:{
                            normal:{
                                color:'rgb(141,20,158)'
                            }
                        }},
                    ]
                }
            ]
        };
        myChart.setOption(option);
    }



});

