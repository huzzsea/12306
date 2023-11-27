<template>
    <div class="header clearfix">
        <div class="content clearfix">
            <div class="logo leftfix">
                <img src="../assets/logo-12306.png">
            </div>
            <div ref="head" class="head rightfix clearfix">
                <div class="icon leftfix"><img src="../assets/icon-head.png"></div>
                <div class="name leftfix"><p>{{ username }}</p></div>
            </div>
            <div ref="info" @click="changeBgGround" class="info rightfix clearfix">
                <div class="icon leftfix"><img src="../assets/icon_info.png"></div>
                <div class="promp leftfix"><p>个人中心</p></div>
            </div>
            <div ref="change" @click="changeBgGround" class="change rightfix clearfix">
                <div class="icon leftfix"><img src="../assets/icon_info.png"></div>
                <div class="promp leftfix">退/改签</div>
            </div>
            <div ref="myTicket" @click="changeBgGround" class="myTicket rightfix clearfix">
                <div class="icon leftfix"><img src="../assets/icon_info.png"></div>
                <div class="promp leftfix">我的车票</div>
            </div>
            <div ref="ticket" @click="changeBgGround" class="ticket rightfix clearfix">
                <div class="icon leftfix"><img src="../assets/icon_ticket.png"></div>
                <div class="promp leftfix"><p>车票</p></div>
            </div>
            <div ref="home" @click="changeBgGround" class="home rightfix clearfix">
                <div class="icon leftfix"><img src="../assets/icon_home.png"></div>
                <div class="promp leftfix"><p>首页</p></div>
            </div>
        </div>
        <div class="border clearfix">
            <div ref="infoBorder" class="info rightfix"></div>
            <div ref="changeBorder" class="change rightfix"></div>
            <div ref="myTicketBorder" class="myTicket rightfix"></div>
            <div ref="ticketBorder" class="ticket rightfix"></div>
            <div ref="homeBorder" class="home rightfix"></div>
        </div>
    </div>

    <div class="nav">
        <span>当前位置：个人中心 > </span>
        <span>乘车人信息</span>
    </div>

    <div class="main-content">
        <div class="search clearfix">
            <div class="textbox leftfix">
                <input type="text" name="passengerName" id="passengerName" placeholder="请输入乘客姓名">
            </div>
            <div class="button leftfix">
                <button>查询</button>
            </div>
        </div>
        <div class="header">
            <div class="content clearfix">
                <ul>
                    <li class="leftfix no">序号</li>
                    <li class="leftfix name">姓名</li>
                    <li class="leftfix type">证件类型</li>
                    <li class="leftfix number">证件号码</li>
                    <li class="leftfix phone">手机/电话</li>
                    <li class="leftfix status">核验状态</li>
                    <li class="leftfix operate">操作</li>
                </ul>
            </div>
        </div>
        <div class="body">
            <div class="operate clearfix">
                <div class="add leftfix">
                    <img src="../assets/icon_add.png">
                </div>
                <div class="addText leftfix">
                    <p>添加</p>
                </div>
                <div class="delete leftfix">
                    <img src="../assets/icon_delete.png">
                </div>
                <div class="deleteText leftfix">
                    <p>批量删除</p>
                </div>
            </div>
            <div class="date">
                <div class="content clearfix">
                    <div class="left leftfix clearfix">
                        <div class="checkbox leftfix"><input type="checkbox"></div>
                        <div class="no leftfix"><p>1</p></div>
                    </div>
                    <div class="right leftfix clearfix">
                        <div class="name leftfix"><p>陈增旭</p></div>
                        <div class="type leftfix"><p>中国居民身份证</p></div>
                        <div class="number leftfix"><p>4303***********132</p></div>
                        <div class="phone leftfix"><p>(+86)186****0151</p></div>
                        <div class="status leftfix"><img src="../assets/icon_status.png"></div>
                        <div class="operate leftfix clearfix">
                            <img src="../assets/icon_delete.png" class="delete leftfix">
                            <img src="../assets/icon_update.png" class="update rightfix">
                        </div>
                    </div>
                </div>
                <div class="content clearfix">
                    <div class="left leftfix clearfix">
                        <div class="checkbox leftfix"><input type="checkbox"></div>
                        <div class="no leftfix"><p>1</p></div>
                    </div>
                    <div class="right leftfix clearfix">
                        <div class="name leftfix"><p>陈增旭</p></div>
                        <div class="type leftfix"><p>中国居民身份证</p></div>
                        <div class="number leftfix"><p>4303***********132</p></div>
                        <div class="phone leftfix"><p>(+86)186****0151</p></div>
                        <div class="status leftfix"><img src="../assets/icon_status.png"></div>
                        <div class="operate leftfix clearfix">
                            <img src="../assets/icon_delete.png" class="delete leftfix">
                            <img src="../assets/icon_update.png" class="update rightfix">
                        </div>
                    </div>
                </div>
                <div class="content clearfix">
                    <div class="left leftfix clearfix">
                        <div class="checkbox leftfix"><input type="checkbox"></div>
                        <div class="no leftfix"><p>1</p></div>
                    </div>
                    <div class="right leftfix clearfix">
                        <div class="name leftfix"><p>陈增旭</p></div>
                        <div class="type leftfix"><p>中国居民身份证</p></div>
                        <div class="number leftfix"><p>4303***********132</p></div>
                        <div class="phone leftfix"><p>(+86)186****0151</p></div>
                        <div class="status leftfix"><img src="../assets/icon_status.png"></div>
                        <div class="operate leftfix clearfix">
                            <img src="../assets/icon_delete.png" class="delete leftfix">
                            <img src="../assets/icon_update.png" class="update rightfix">
                        </div>
                    </div>
                </div>
                <div class="content clearfix">
                    <div class="left leftfix clearfix">
                        <div class="checkbox leftfix"><input type="checkbox"></div>
                        <div class="no leftfix"><p>1</p></div>
                    </div>
                    <div class="right leftfix clearfix">
                        <div class="name leftfix"><p>陈增旭</p></div>
                        <div class="type leftfix"><p>中国居民身份证</p></div>
                        <div class="number leftfix"><p>4303***********132</p></div>
                        <div class="phone leftfix"><p>(+86)186****0151</p></div>
                        <div class="status leftfix"><img src="../assets/icon_status.png"></div>
                        <div class="operate leftfix clearfix">
                            <img src="../assets/icon_delete.png" class="delete leftfix">
                            <img src="../assets/icon_update.png" class="update rightfix">
                        </div>
                    </div>
                </div>
                <div class="content clearfix">
                    <div class="left leftfix clearfix">
                        <div class="checkbox leftfix"><input type="checkbox"></div>
                        <div class="no leftfix"><p>1</p></div>
                    </div>
                    <div class="right leftfix clearfix">
                        <div class="name leftfix"><p>陈增旭</p></div>
                        <div class="type leftfix"><p>中国居民身份证</p></div>
                        <div class="number leftfix"><p>4303***********132</p></div>
                        <div class="phone leftfix"><p>(+86)186****0151</p></div>
                        <div class="status leftfix"><img src="../assets/icon_status.png"></div>
                        <div class="operate leftfix clearfix">
                            <img src="../assets/icon_delete.png" class="delete leftfix">
                            <img src="../assets/icon_update.png" class="update rightfix">
                        </div>
                    </div>
                </div>
                <div class="content clearfix">
                    <div class="left leftfix clearfix">
                        <div class="checkbox leftfix"><input type="checkbox"></div>
                        <div class="no leftfix"><p>1</p></div>
                    </div>
                    <div class="right leftfix clearfix">
                        <div class="name leftfix"><p>陈增旭</p></div>
                        <div class="type leftfix"><p>中国居民身份证</p></div>
                        <div class="number leftfix"><p>4303***********132</p></div>
                        <div class="phone leftfix"><p>(+86)186****0151</p></div>
                        <div class="status leftfix"><img src="../assets/icon_status.png"></div>
                        <div class="operate leftfix clearfix">
                            <img src="../assets/icon_delete.png" class="delete leftfix">
                            <img src="../assets/icon_update.png" class="update rightfix">
                        </div>
                    </div>
                </div>
                <div class="content clearfix">
                    <div class="left leftfix clearfix">
                        <div class="checkbox leftfix"><input type="checkbox"></div>
                        <div class="no leftfix"><p>1</p></div>
                    </div>
                    <div class="right leftfix clearfix">
                        <div class="name leftfix"><p>陈增旭</p></div>
                        <div class="type leftfix"><p>中国居民身份证</p></div>
                        <div class="number leftfix"><p>4303***********132</p></div>
                        <div class="phone leftfix"><p>(+86)186****0151</p></div>
                        <div class="status leftfix"><img src="../assets/icon_status.png"></div>
                        <div class="operate leftfix clearfix">
                            <img src="../assets/icon_delete.png" class="delete leftfix">
                            <img src="../assets/icon_update.png" class="update rightfix">
                        </div>
                    </div>
                </div>
                <div class="content clearfix">
                    <div class="left leftfix clearfix">
                        <div class="checkbox leftfix"><input type="checkbox"></div>
                        <div class="no leftfix"><p>1</p></div>
                    </div>
                    <div class="right leftfix clearfix">
                        <div class="name leftfix"><p>陈增旭</p></div>
                        <div class="type leftfix"><p>中国居民身份证</p></div>
                        <div class="number leftfix"><p>4303***********132</p></div>
                        <div class="phone leftfix"><p>(+86)186****0151</p></div>
                        <div class="status leftfix"><img src="../assets/icon_status.png"></div>
                        <div class="operate leftfix clearfix">
                            <img src="../assets/icon_delete.png" class="delete leftfix">
                            <img src="../assets/icon_update.png" class="update rightfix">
                        </div>
                    </div>
                </div>
                <div class="content clearfix">
                    <div class="left leftfix clearfix">
                        <div class="checkbox leftfix"><input type="checkbox"></div>
                        <div class="no leftfix"><p>1</p></div>
                    </div>
                    <div class="right leftfix clearfix">
                        <div class="name leftfix"><p>陈增旭</p></div>
                        <div class="type leftfix"><p>中国居民身份证</p></div>
                        <div class="number leftfix"><p>4303***********132</p></div>
                        <div class="phone leftfix"><p>(+86)186****0151</p></div>
                        <div class="status leftfix"><img src="../assets/icon_status.png"></div>
                        <div class="operate leftfix clearfix">
                            <img src="../assets/icon_delete.png" class="delete leftfix">
                            <img src="../assets/icon_update.png" class="update rightfix">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            username:'肖锦坤'
        }
    },
    methods:{
        clearBgGround(){
            this.$refs.info.style.backgroundColor = 'white';
            this.$refs.myTicket.style.backgroundColor = 'white';
            this.$refs.ticket.style.backgroundColor = 'white';
            this.$refs.home.style.backgroundColor = 'white';
            this.$refs.change.style.backgroundColor = 'white';
            this.$refs.infoBorder.style.backgroundColor = 'white';
            this.$refs.myTicketBorder.style.backgroundColor = 'white';
            this.$refs.ticketBorder.style.backgroundColor = 'white';
            this.$refs.homeBorder.style.backgroundColor = 'white';
            this.$refs.changeBorder.style.backgroundColor = 'white';
        },
        changeBgGround(e){
            this.clearBgGround();
            var list = ['info','myTicket','ticket','home','change'];
            var node = e.target;
            while(!list.includes(node.classList[0])){
                node = node.parentNode;
            }
            node.style.backgroundColor = '#E6F7FF';
            console.log(node.classList[0]);
            console.log(typeof node.classList[0]);
            switch(node.classList[0]){
                case 'info':
                    this.$refs.infoBorder.style.backgroundColor = '#1684FC';
                    break;
                case 'myTicket':
                    this.$refs.myTicketBorder.style.backgroundColor = '#1684FC';
                    break;
                case 'ticket':
                    this.$refs.ticketBorder.style.backgroundColor = '#1684FC';
                    break;
                case 'home':
                    this.$refs.homeBorder.style.backgroundColor = '#1684FC';
                    break;
                case 'change':
                    this.$refs.changeBorder.style.backgroundColor = '#1684FC';
                    break;
            }
        }
    }
}
</script>

<style scoped>
    @import url(../assets/css/reset.css);
    @import url(../assets/css/info.css);
</style>