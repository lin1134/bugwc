export default {
	// backgroundColor: "#f8f8f8",
	title: {
		text: '中国感染人群分布',
		subtext: '纯属虚构',
		x: 'center'
	},
	tooltip: {
		trigger: 'item',

		formatter: "{b}: {c}",
		// formatter: function ( params,ticket) {
		// 	// console.log(params)
		//                 var value = (params.value + '').split('.');
		//                 value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
										
		//                 return params.seriesName + '<br/>' + params.name + ': ' + params.dataIndex +'人';
		//             }
	},
	visualMap: {
							x: 'left',
							y: 'center',
							// splitList: [
							//   {start: 1500},
							//   {start: 900, end: 1500},
							//   {start: 310, end: 1000},
							//   {start: 200, end: 300},
							//   {start: 10, end: 200, label: '10 到 200（自定义label）'},
							//   {start: 5, end: 5, label: '5（自定义特殊颜色）', color: 'black'},
							//   {end: 10}
							// ],
	            min: 0,
	            max: 50,
	            text: ['高', '低'],
	            realtime: false,
	            calculable: true,
	            inRange: {
	                color: ['lightskyblue', 'yellow', 'orangered']
	            }
	        },
	// geo: { // 这个是重点配置区
	//             map: 'china', // 表示中国地图
	//             roam: true,
	//             label: {
	//               normal: {
	//                 show: false, // 是否显示对应地名
	//                 textStyle: {
	//                   color: 'rgba(0,0,0,0.4)'
	//                 }
	//               }
	//             },
	// 		},


			// 右边选择框
	    toolbox: {
	        show: true,
	        orient : 'vertical',
	        x: 'right',
	        y: 'center',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    
			series: [{
				name: '感染人数',
        type: 'map',
				coordinateSystem: 'geo' ,
        mapType: 'china',// mapType或者map都可以
        map: 'china',
				// itemStyle:{
				// 	     emphasis:{label:{show:true}}//不显示地图每个地方的名字
				// },
				// itemStyle: {
				//     normal: {
				//         borderWidth: .5,//区域边框宽度
				//         // borderColor: '#009fe8',//区域边框颜色
				//         // areaColor:"#ffefd5",//区域颜色
				//     },
				//     emphasis: {
				//         borderWidth: .5,
				//         borderColor: '#4b0082',
				//         areaColor: "#ffdead",
				//     }
				// },
				data:[
							{name: '河北',value:10},
							{name: '山西',value: 1},
							{name: '辽宁',value:5},
							{name: '吉林',value: 6},
							{name: '黑龙江',value:20},
							{name: '江苏',value: 30},
							{name: '浙江',value:25},
							{name: '安徽',value: 45},
							{name: '福建',value: 49},
							{name: '江西',value: 38},
							{name: '山东',value: 50},
							{name: '河南',value: 5},
							{name: '湖北',value: 50},
							{name: '湖南',value: 20},
							{name: '广东',value: 15},
							{name: '海南',value: 90},
							{name: '四川',value: 55},
							{name: '贵州',value: 50},
							{name: '云南',value: 10},
							{name: '陕西',value: 30},
							{name: '甘肃',value: 50},
							{name: '青海',value: 40},
							{name: '台湾',value: 13},
							{name: '内蒙古',value: 49},
							{name: '广西',value: 41},
							{name: '西藏',value: 10},
							{name: '宁夏',value: 50},
							{name: '新疆',value: 10},
							{name: '北京',value: 40},
							{name: '天津',value: 35},
							{name: '上海',value: 19},
							{name: '重庆',value: 25},
							{name: '香港',value: 0},
							{name: '天津',value: 0},
							{name: '澳门',value: 20},
							{name:"南海诸岛",value:0},
					],
					nameMap:{
						"福建":"福建",
					}
        }]


}



// tooltip: {
//             trigger: 'item',
//             formatter: function(params) {
//                 var res = params.name+'<br/>';
//                 var myseries = option.series;
//                 for (var i = 0; i < myseries.length; i++) {
//                     for(var j=0;j<myseries[i].data.length;j++){
//                         if(myseries[i].data[j].name==params.name){
//                             res+=myseries[i].name +' : '+myseries[i].data[j].value+'</br>';
//                         }
//                     }
//                 }
//                 return res;
//             }
//         }