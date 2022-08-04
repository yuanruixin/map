$(function () {
    /*标准*/
    var radar = echarts.init(document.getElementById('radar'));
    var data_2020 = [{
        value: 10,
        name: '煤炭'
    }, {
        value: 20,
        name: '石油'
    }, {
        value: 20,
        name: '天然气'
    }, {
        value: 20,
        name: '非化石能源'
    }];
    var data_middle = [{
        value: 43,
        name: '煤炭'
    }, {
        value: 18,
        name: '石油'
    }, {
        value: 12,
        name: '天然气'
    }, {
        value: 26,
        name: '非化石能源'
    }];
    var data_wai = [{
        value: 5,
        name: '煤炭'
    }, {
        value: 6,
        name: '石油'
    }, {
        value: 9,
        name: '天然气'
    }, {
        value: 80,
        name: '非化石能源'
    }];
    
  
    option = {
        color: ['rgb(255, 97, 97)','rgb(43, 200, 255)', 'rgb(255, 255, 190)',  ' #11c73b',],
        title: {
            text: '中国能源结构展望（2020、2030、2060）',
            subtext:'数据来源《世界与中国能源展望》',
            x: 'center',
            y: '-1%',
            textStyle: {
                color:"#fff",
                fontWeight: 'normal',
                fontSize: 16
            }
        },
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{b}: {c}%"
        },
        legend: {
            icon: 'circle',
            top: 'bottom',
            // right:0,
            // width: 20,
           
            orient: 'horizontal',
            textStyle: {
                color: '#fff',
                fontSize: 10,
            },},
        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['15%', '33%'],
    
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#777777',
                        fontWeight: 'bold',
                        fontSize: 12
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data_2020
        }, {
            type: 'pie',
            radius: ['35%', '53%'],
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#777777',
                        fontWeight: 'bold',
                        fontSize: 12,
                    }
                }
            },
            data: data_middle
        }
        , {
            type: 'pie',
            radius: ['55%', '73%'],
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#777777',
                        fontWeight: 'bold',
                        fontSize: 14
                    }
                }
            },
            data: data_wai
        }]
    };
    radar.setOption(option);
    window.addEventListener("resize", function () {
        radar.resize();
    });
    //
    //
    //

    /* 飞鸟尽*/
    var graduateyear = echarts.init(document.getElementById('graduateyear'));
    option = {
        title: {
            text: "中国碳排放展望—可持续转型情景",
            x: 'center',
            y: 'top',
            textStyle:
            {
                color: '#fff',
                fontSize: 14
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '5%',
            top: "13%",
            containLabel: true
        },
        color: ["#72b332", '#35a9e0'],
       
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['2020', '2025', '2030', '2035', '2040','2045','2050', '2055', '2060'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#2d3b53'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    },
                    alignWithLabel: true,
                    interval: 0,
                    rotate: '15'
                }
            }
        ],
        yAxis: [
            {
                name: '排放量(亿吨)',
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#2d3b53'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#999"
                    }
                },
            }
        ],
        series: [
            {
                name: '排放量',
                type: 'line',
                smooth: true,
                symbol: 'roundRect',
                data: [101.3, 106.3, 97.5, 81.8,63.4, 44.4, 26.5,11.0,0]
            },
           
        ]
    };
    graduateyear.setOption(option);
    window.addEventListener("resize", function () {
        graduateyear.resize();
    });

    /*==*/
    var sexrate = echarts.init(document.getElementById('sexrate'));
    var total = {
        name: '2015年各类发电新增装机\n（单位：万千瓦）'
    };
    option = {
        title: [{
            text: total.name,
            left: '48%',
            top: '10%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 15
            }
        }],
        tooltip: {
            trigger: 'item',
            position: "top",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        color: ['#4E82BE', '#C14F4C', "#9FBE5D", '#8164A3', "#4AADC7"],
        legend: {
            x: 'center',
            bottom: '5%',
            selectedMode: false,
            orient: 'horizontal',
            data: ['火电', '水电', '核电', '风电', '太阳能'],
            show: true,
            textStyle: {
                color: '#fff',
                fontWeight: 'bold'
            },
        },

        series: [
            {
                name: '新增装机',
                type: 'pie',
                selectedMode: 'single',
                radius: ['20%', '55%'],
                center: ['50%', '40%'],
                roseType: 'radius',
                data: [
                    { value: 1375, name: '水电' },
                    { value: 6678, name: '火电' },
                    { value: 612, name: '核电' },
                    { value: 3139, name: '风电' },
                    { value: 1380, name: '太阳能' },
                ],
                label: {
                    normal: {
                        show: false,
                        position: "outer",
                        align: 'left',
                        textStyle: {
                            rotate: true
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label: {
                            show: true,
                            formatter: '{b} {c}'
                        }
                    }

                }
            }
        ]
    };
    sexrate.setOption(option);
    window.addEventListener("resize", function () {
        sexrate.resize();
    });


    var householdrate = echarts.init(document.getElementById('householdrate'));
    var total = {
        name: '2020年各类发电新增装机\n（单位：万千瓦）'
    };
    option = {
        title: [{
            text: total.name,
            left: '48%',
            top: '10%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 15
            }
        }, ],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        color: ['#C14F4C', '#4E82BE', "#9FBE5D", '#8164A3', "#4AADC7"],
        legend: {
            orient: 'vertical',
            x: 'center',
            bottom: '5%',
            selectedMode: false,
            orient: 'horizontal',
            data: ['火电', '水电', '核电', '风电', '太阳能'],
            show: true,
            textStyle: {
                color: '#fff',
                fontWeight: 'bold'
            },
        },
        series: [
            {
                name: '新增装机',
                type: 'pie',
                selectedMode: 'single',
                radius: ['20%', '55%'],
                center: ['50%', '40%'],
                roseType: 'radius',
                data: [
                    { value: 5637, name: '火电' },
                    { value: 1323, name: '水电' },
                    { value: 112, name: '核电' },
                    { value: 7167, name: '风电' },
                    { value: 4820, name: '太阳能' },
                ],
                label: {
                    normal: {
                        show: false,
                        position: "outer",
                        align: 'left',
                        textStyle: {
                            rotate: true
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label: {
                            show: true,
                            formatter: '{b} {c}'
                        }
                    }
                }
            }
        ]
    };
    householdrate.setOption(option);
    window.addEventListener("resize", function () {
        householdrate.resize();
    });



    //能源生产与结构
    var myChart = echarts.init(document.getElementById('changedetail'));

    var dataMap = {};
    function dataFormatter(obj) {
        var pList = ['煤', '原油', '天然气', '清洁能源'];
        var temp;
        for (var year = 1998; year <= 2020; year++) {
            var max = 0;
            var sum = 0;
            temp = obj[year];
            for (var i = 0, l = temp.length; i < l; i++) {
                max = Math.max(max, temp[i]);
                sum += temp[i];
                obj[year][i] = {
                    name: pList[i],
                    value: temp[i]
                }
            }
            obj[year + 'max'] = Math.floor(max / 100) * 100;
            obj[year + 'sum'] = sum;
        }
        return obj;
    }

    dataMap.data = dataFormatter({
        1998: [95168, 22981, 2856, 8829],
        1999: [97500, 22825, 3298, 8312],
        2000: [101017, 23280, 3603, 10670],
        2001: [107031, 23441, 3980, 12973],
        2002: [114238, 23910, 4376, 13752],
        2003: [134972, 24249, 4636, 14442],
        2004: [158085, 25145, 5565, 17313],
        2005: [177274, 25881, 6642, 19239],
        2006: [189691, 26434, 7832, 20805],
        2007: [205526, 26681, 9246, 22719],
        2008: [213058, 27187, 10819, 26355],
        2009: [219719, 26893, 11444, 28037],
        2010: [237839, 29028, 12797, 32461],
        2011: [264658, 28915, 13947, 32657],
        2012: [267493, 29838, 14393, 39317],
        2013: [270523, 30138, 15786, 42336],
        2014: [266333, 30397, 17008, 48128],
        2015: [260986, 30725, 17351, 52414],
        2016: [240816, 28372, 18338, 58474],
        2017:[276231,86151,31452,61992],
        2018:[278436,89194,35866,68429],
        2019:[281621,92663,38990,74586],
        2020:[282864,94122,41832,79182],
    });

    dataMap.dataM = dataFormatter({
        1998: [95168],
        1999: [97500],
        2000: [101017],
        2001: [107031],
        2002: [114238],
        2003: [134972],
        2004: [158085],
        2005: [177274],
        2006: [189691],
        2007: [205526],
        2008: [213058],
        2009: [219719],
        2010: [237839],
        2011: [264658],
        2012: [267493],
        2013: [270523],
        2014: [266333],
        2015: [260986],
        2016: [240816],
        2017:[276231],
        2018:[278436],
        2019:[281621],
        2020:[282864],
    });

    dataMap.dataYY = dataFormatter({
        1998: [22981],
        1999: [22825],
        2000: [23280],
        2001: [23441],
        2002: [23910],
        2003: [24249],
        2004: [25145],
        2005: [25881],
        2006: [26434],
        2007: [26681],
        2008: [27187],
        2009: [26893],
        2010: [29028],
        2011: [28915],
        2012: [29838],
        2013: [30138],
        2014: [30397],
        2015: [30725],
        2016: [28372],
        2017:[86151],
        2018:[89194],
        2019:[92663],
        2020:[94122],
    });

    dataMap.dataTRQ = dataFormatter({
        1998: [2856],
        1999: [3298],
        2000: [3603],
        2001: [3980],
        2002: [4376],
        2003: [4636],
        2004: [5565],
        2005: [6642],
        2006: [7832],
        2007: [9246],
        2008: [10819],
        2009: [11444],
        2010: [12797],
        2011: [13947],
        2012: [14393],
        2013: [15786],
        2014: [17008],
        2015: [17351],
        2016: [18338],
        2017:[31452],
        2018:[35866],
        2019:[38990],
        2020:[41832],
    });

    dataMap.dataQJNY = dataFormatter({
        1998: [8829],
        1999: [8312],
        2000: [10670],
        2001: [12973],
        2002: [13752],
        2003: [14442],
        2004: [17313],
        2005: [19239],
        2006: [20805],
        2007: [22719],
        2008: [26355],
        2009: [28037],
        2010: [32461],
        2011: [32657],
        2012: [39317],
        2013: [42336],
        2014: [48128],
        2015: [52414],
        2016: [58474],
        2017:[61992],
        2018:[68429],
        2019:[74586],
        2020:[79182],
    });

    option = {
        baseOption: {
            timeline: {
                // y: 0,
                axisType: 'category',
                // realtime: false,
                // loop: false,
                autoPlay: true,
                // currentIndex: 2,
                playInterval: 1000,
                // controlStyle: {
                //     position: 'left'
                // },
                data: [
                    '1998', '1999', '2000',
                    '2001', '2002', '2003',
                    '2004', '2005', '2006',
                    '2007', '2008', '2009',
                    '2010', '2011', '2012',
                    '2013', '2014', '2015',
                    '2016','2017','2018','2019','2020',
                ],
            },
            title: {
                subtext: '数据来自国家统计局'
            },
            tooltip: {},
            legend: {
                x: 'right',
                data: ['煤', '原油', '天然气', '清洁能源'],
                selected: {},
                textStyle: {color: '#fff'},
            },
            calculable: true,
            grid: {
                top: 80,
                bottom: 100
            },
            xAxis: [
                {
                    'type': 'category',
                    'data': ['煤', '原油', '天然气', '清洁能源'],
                    splitLine: { show: false },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }

                }


            ],
            yAxis: [
                {
                    type: 'value',
                    name: '生产量(万吨标准煤)',
                    max: 300000,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series: [
                { name: '生产量', type: 'bar' },
                {
                    name: '生产量占比',
                    type: 'pie',
                    center: ['75%', '35%'],
                    radius: '28%'
                }
            ]
        },
        options: [
            {
                title: { text: '1998年能源生产量与结构',  textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['1998'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['1998sum'] },
                            { name: '原油', value: dataMap.dataYY['1998sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['1998sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['1998sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '1999年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['1999'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['1999sum'] },
                            { name: '原油', value: dataMap.dataYY['1999sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['1999sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['1999sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2000年能源生产量与结构' ,textStyle: {color: "#fff"}, },
                series: [
                    { data: dataMap.data['2000'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2000sum'] },
                            { name: '原油', value: dataMap.dataYY['2000sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2000sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2000sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2001年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2000'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2001sum'] },
                            { name: '原油', value: dataMap.dataYY['2001sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2001sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2001sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2002年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2002'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2002sum'] },
                            { name: '原油', value: dataMap.dataYY['2002sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2002sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2002sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2003年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2003'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2003sum'] },
                            { name: '原油', value: dataMap.dataYY['2003sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2003sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2003sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2004年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2004'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2004sum'] },
                            { name: '原油', value: dataMap.dataYY['2004sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2004sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2000sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2005年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2005'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2005sum'] },
                            { name: '原油', value: dataMap.dataYY['2005sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2005sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2005sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2006年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2006'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2006sum'] },
                            { name: '原油', value: dataMap.dataYY['2006sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2006sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2006sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2007年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2007'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2007sum'] },
                            { name: '原油', value: dataMap.dataYY['2007sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2007sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2007sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2008年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2008'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2008sum'] },
                            { name: '原油', value: dataMap.dataYY['2008sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2008sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2008sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2009年能源生产量与结构' ,textStyle: {color: "#fff"}, },
                series: [
                    { data: dataMap.data['2009'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2009sum'] },
                            { name: '原油', value: dataMap.dataYY['2009sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2009sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2009sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2010年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2010'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2010sum'] },
                            { name: '原油', value: dataMap.dataYY['2010sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2010sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2010sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2011年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2011'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2011sum'] },
                            { name: '原油', value: dataMap.dataYY['2011sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2011sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2011sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2012年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2012'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2012sum'] },
                            { name: '原油', value: dataMap.dataYY['2012sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2012sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2012sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2013年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2013'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2013sum'] },
                            { name: '原油', value: dataMap.dataYY['2013sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2013sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2013sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2014年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2014'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2014sum'] },
                            { name: '原油', value: dataMap.dataYY['2014sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2014sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2014sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2015年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2015'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2015sum'] },
                            { name: '原油', value: dataMap.dataYY['2015sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2015sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2015sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2016年能源生产量与结构' ,textStyle: {color: "#fff"}, },
                series: [
                    { data: dataMap.data['2016'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2016sum'] },
                            { name: '原油', value: dataMap.dataYY['2016sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2016sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2016sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2017年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2017'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2017sum'] },
                            { name: '原油', value: dataMap.dataYY['2017sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2017sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2017sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2018年能源生产量与结构'  ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2018'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2018sum'] },
                            { name: '原油', value: dataMap.dataYY['2018sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2018sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2018sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2019年能源生产量与结构' ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2019'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2019sum'] },
                            { name: '原油', value: dataMap.dataYY['2019sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2019sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2019sum'] }
                        ]
                    }
                ]
            },
            {
                title: { text: '2020年能源生产量与结构' ,textStyle: {color: "#fff"},},
                series: [
                    { data: dataMap.data['2020'] },
                    {
                        data: [
                            { name: '煤', value: dataMap.dataM['2020sum'] },
                            { name: '原油', value: dataMap.dataYY['2020sum'] },
                            { name: '天然气', value: dataMap.dataTRQ['2020sum'] },
                            { name: '清洁能源', value: dataMap.dataQJNY['2020sum'] }
                        ]
                    }
                ]
            },
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    /* ===*/
    var juniorservice = echarts.init(document.getElementById('juniorservice'));
    option = {
        
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color: ['#eaff00', '#22ac38','#F6731B','#61A0A8'],
        legend: {
            // right: '0',
            data: ['综合指数', '气候雄心', '低碳状况', '排放趋势'],
            textStyle: {
                color: '#00ffff'
            }
        },
        grid: {
            left: '8%',
            right: '4%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1e2b43'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#115372'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: "#fff"
                },
                alignWithLabel: true,
                interval: 0

            }
        },
        dataZoom: [{
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty',
            start: 0,
            x: '0',
            end: 60,
            handleStyle: {
                color: "#519cff",
                backgroundColor: '#519cff'
            },
            textStyle: {
                color: "#fff"
            },
            borderColor: "#519cff"
        }],
        yAxis: {
            type: 'category',
            data: [ '北京', '上海', '广东', ' 四川', '天津', '河南', '江苏',  '重庆','浙江', '吉林'],
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#1e2b43'
                }
            },

            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#115372'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#419aff"
                },
                lineStyle: {
                    color: '#519cff'
                },
                alignWithLabel: true,
                interval: 0
            }
        },
        series: [
            {
                name: "综合指数",
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        textStyle: {
                            color: '#333'
                        }
                    }

                },
                data: [78.7, 61.7, 61.6,57.31, 57.27,55.2, 54.4, 53.8, 53.0, 52.7]
            },
            {
                name: '气候雄心',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#00f0ff'
                        }

                    }
                },
                data: [90.4, 50.7, 53.8, 30.0, 36.4,28.5, 53.1, 35.7, 36.6,21.4]
            },
            {
                name: '低碳状况',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#00f0ff'
                        }

                    }
                },
                data: [81.2, 76.0, 78.3, 71.0, 67.4, 62.6,68.0, 70.5, 73.5, 67.4]
            },
            {
                name: '排放趋势',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#00f0ff'
                        }

                    }
                },
                data: [50.4, 55.3, 43.9, 84.7, 78.7, 94.0, 30.0, 56.8, 45.2,85.8]
            }
        ]
    };
    juniorservice.setOption(option);
    window.addEventListener("resize", function () {
        juniorservice.resize();
    });

    
    //中国碳排放地图
    var myEcharts = echarts.init(document.getElementById("mapadd"));
    var option = {
        backgroundColor: "rgb(1,20,57)",
        title: {  //标题样式
            text: '中国碳排放地图（2020年）',
            x: "center",
            y: "10px",
            textStyle: {
                fontSize: 25,
                color: "white"
            },

        },
        tooltip: {  //这里设置提示框
            trigger: 'item',  //数据项图形触发
            backgroundColor: "pink",  //提示框浮层的背景颜色。
            //字符串模板(地图): {a}（系列名称），{b}（区域名称），{c}（合并数值）,{d}（无）
            formatter: '地区：{b}<br/>碳排放：{c}万吨'
        },
        visualMap: {//视觉映射组件
            top: 'center',
            left: 'left',
            min: 3000,
            max: 80000,
            text: ['High', 'Low'],
            textStyle: {
                color: "rgb(230,232,236)"
            },
            realtime: false,  //拖拽时，是否实时更新
            calculable: true,  //是否显示拖拽用的手柄
            inRange: {
                color: ["rgb(121,191,255)", "rgb(37,62,252)",]
            }
        },
        series: [
            {
                name: '碳排放',
                type: 'map',
                mapType: 'china',
                layoutSize: '200%',
                itemStyle: {//地图区域的多边形 图形样式
                    normal: {//是图形在默认状态下的样式
                        label: {
                            show: true,//是否显示标签
                            textStyle: {
                                color: "rgb(230,232,236)"
                            }
                        }
                    },
                    zoom: 1,  //地图缩放比例,默认为1
                    emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                        label: { show: true }
                    }
                },
                top: "3%",//组件距离容器的距离
                data: [
                    { name: '北京', value: 13286.91 },
                    { name: '天津', value: 16077.81 },
                    { name: '上海', value: 22423.63 },
                    { name: '重庆', value: 13164.66 },
                    { name: '河北', value: 87193.96 },
                    { name: '河南', value: 46246.02 },
                    { name: '云南', value: 14616.23 },
                    { name: '辽宁', value: 62011.77 },
                    { name: '黑龙江', value: 25718.06 },
                    { name: '湖南', value: 23626.81 },
                    { name: '安徽', value: 35392.32 },
                    { name: '山东', value: 90899.04 },
                    { name: '新疆', value: 43282.45 },
                    { name: '江苏', value: 78861.82 },
                    { name: '浙江', value: 46914.22 },
                    { name: '江西', value: 22902.29 },
                    { name: '湖北', value: 23630.05 },
                    { name: '广西', value: 18472.61 },
                    { name: '甘肃', value: 15776.51 },
                    { name: '山西', value: 51695.70 },
                    { name: '内蒙古', value: 79288.16 },
                    { name: '陕西', value: 28689.51 },
                    { name: '吉林', value: 18124.66 },
                    { name: '福建', value: 24535.04 },
                    { name: '贵州', value: 22350.80 },
                    { name: '广东', value: 69350.40 },
                    { name: '青海', value: 3285.80 },
                    { name: '西藏', value: 0 },
                    { name: '四川', value: 22926.64 },
                    { name: '宁夏', value: 20488.15 },
                    { name: '海南', value: 4032.84 },
                    { name: '台湾', value: 0 },
                    { name: '香港', value: 0 },
                    { name: '澳门', value: 0 },
                    { name: '南海诸岛', value: 0 }
                ],
                // LayoutSize:11200,

            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myEcharts.setOption(option);
    window.addEventListener("resize", function () {
        myEcharts.resize();
    });

});
// function handleScreen(){
//     const m = detectZoom();
//     document.body.style.zoom = 100/Number(m);
// }
// function detectZoom () {
//       let ratio = 0,
//         screen = window.screen,
//         ua = navigator.userAgent.toLowerCase();
//       if (window.devicePixelRatio !== undefined) {
//         ratio = window.devicePixelRatio;
//       } else if (~ua.indexOf('msie')) {
//         if (screen.deviceXDPI && screen.logicalXDPI) {
//           ratio = screen.deviceXDPI / screen.logicalXDPI;
//         }
//       } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
//         ratio = window.outerWidth / window.innerWidth;
//       }
//       if (ratio) {
//         ratio = Math.round(ratio * 100);
//       }
//       return ratio;
// }
// window.onresize = function(){
//     handleScreen()
// }
