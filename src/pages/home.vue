<template>
    <div class="header clearfix">
        <div class="logo leftfix">
            <img src="../assets/logo-12306.png" alt="#">
        </div>
        <div class="message rightfix">
            <a href="#">{{ username }}</a>
        </div>
        <div class="head rightfix">
            <img src="../assets/icon-head.png" alt="#">
        </div>
        <div class="bar rightfix">
            <ul class="list clearfix">
                <li><a href="#">首页</a></li>
                <li><a href="#">车站大屏</a></li>
                <li><a href="#">时刻表</a></li>
                <li><a href="#">新闻</a></li>
                <li><a href="#">我的车票</a></li>
                <li><a href="#">退/改签</a></li>
            </ul>
        </div>
    </div>

    <div class="main-content clearfix">
        <div class="search rightfix">
            <div class="up">
                <form action="#">
                    <div class="start clearfix">
                        <div class="label leftfix"><p>出发地</p></div>
                        <div class="input leftfix">
                            <input type="text" name="address_start" id="address_start">
                        </div>
                    </div>
                    <div class="end clearfix">
                        <div class="label leftfix"><p>到达地</p></div>
                        <div class="input leftfix">
                            <input type="text" name="address_end" id="address_end">
                        </div>
                    </div>
                    <div class="date clearfix">
                        <div class="label leftfix"><p>出发日期</p></div>
                        <div class="input leftfix">
                            <input type="date">
                        </div>
                    </div>
                    <div class="common clearfix">
                        <div class="label leftfix"><strong>常用查询</strong></div>
                        <div class="content leftfix">
                            <ul>
                                <li class="rightfix">南京南-长沙</li>
                                <li class="rightfix">南京南-南昌西</li>
                                <li class="rightfix">南昌-赣州</li>
                            </ul>
                        </div>
                    </div>
                    <div class="history clearfix">
                        <div class="label leftfix"><strong>历史查询</strong></div>
                        <div class="content leftfix">
                            <ul>
                                <li class="rightfix">南京南-长沙</li>
                                <li class="rightfix">南京南-南昌西</li>
                                <li class="rightfix">南昌-赣州</li>
                            </ul>
                        </div>
                    </div>
                    <div class="button">
                        <span>查询</span>
                    </div>
                </form>
            </div>
            <div class="down">
                <div class="top clearfix">
                    <div class="message leftfix"><p>近七日出行信息</p></div>
                    <div class="more rightfix"><a href="#">更多</a></div>
                </div>
                <div class="content">
                    <div class="date clearfix">
                        <p class="leftfix">11月20日</p>
                        <p class="leftfix">计划5天后出发</p>
                        <p class="rightfix">检票口：3A</p>
                    </div>
                    <div class="time clearfix">
                        <p class="start leftfix">13:41</p>
                        <div class="train-info leftfix">
                            <div class="train-no"><p>G1864</p></div>
                            <div class="icon"><img src="../assets/arrow.png"></div>
                            <div class="time"><p>历时6小时22分钟</p></div>
                        </div>
                        <p class="end rightfix">20:03</p>
                    </div>
                    <div class="address clearfix">
                        <p class="leftfix">阳泉北</p>
                        <p class="rightfix">南京南</p>
                    </div>
                </div>
                <div class="bottom clearfix">
                    <div class="info leftfix"><button>查看详情</button></div>
                    <div class="change leftfix"><button>改签</button></div>
                    <div class="quit rightfix"><button>退票</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            username:'肖锦坤',
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
    @import url(../assets/css/reset.css);
    @import url(../assets/css/index.css);
</style>