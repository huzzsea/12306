<template>
        <div class="header clearfix">
        <div class="logo leftfix">
            <img src="../assets/logo.png">
        </div>
        <div class="info rightfix clearfix">
            <div @click="jumpInfo" class="icon leftfix"><img src="../assets/info.svg"></div>
            <div @click="jumpInfo" class="name leftfix"><p>{{ username }}</p></div>
        </div>
        <div @click="changeBgGround" class="label rebook rightfix">
            <p>退/改签</p>
            <div class="border rebook"></div>
        </div>
        <div @click="changeBgGround" class="label ticket rightfix">
            <p>我的车票</p>
            <div class="border ticket"></div>
        </div>
        <div @click="changeBgGround" class="label news rightfix">
            <p>新闻</p>
            <div class="border news"></div>
        </div>
        <div @click="changeBgGround" class="label schedule rightfix">
            <p>时刻表</p>
            <div class="border schedule"></div>
        </div>
        <div @click="changeBgGround" class="label screen rightfix">
            <p>车站大屏</p>
            <div class="border screen"></div>
        </div>
        <div @click="changeBgGround" class="label home rightfix">
            <p>首页</p>
            <div class="border home"></div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            username:'肖锦坤',
            module:'',
            // ['home','screen','schedule','news','ticket','rebook']
        }
    },
    methods:{
        clearBgGround(){
            document.querySelectorAll('.header .label').forEach(label => {
                label.style.backgroundColor = 'white';
            });
            document.querySelectorAll('.border').forEach(border => {
                border.style.backgroundColor = 'white';
            });
        },
        changeBgGround(e){
            this.clearBgGround();
            var node = e.target;
            while(node.classList[0] !== 'label'){
                node = node.parentNode;
            }
            node.style.backgroundColor = '#E6F7FF';
            node.children[1].style.backgroundColor = '#1684FC';
            this.jumpModule(String(node.classList[1]))
        },
        jumpInfo(){
            this.clearBgGround();
            this.$router.push({path: '/info'})
        },
        jumpModule(path){
            this.$router.push({path: path});
        },
        setInitBgGround(){
            let url = location.pathname.split('/');
            let module = url[1];
            let list = ['home','screen','schedule','news','ticket','rebook'];
            if(list.includes(module)){
                this.module = module;
            }else{
                this.module = 'home'
            }
            switch(this.module){
                case 'home':
                    document.querySelectorAll('.header .home')[0].style.backgroundColor = '#E6F7FF';
                    document.querySelectorAll('.header .home')[1].style.backgroundColor = '#1684FC';
                    break;
                case 'screen':
                    document.querySelectorAll('.header .screen')[0].style.backgroundColor = '#E6F7FF';
                    document.querySelectorAll('.header .screen')[1].style.backgroundColor = '#1684FC';
                    break;
                case 'schedule':
                    document.querySelectorAll('.header .schedule')[0].style.backgroundColor = '#E6F7FF';
                    document.querySelectorAll('.header .schedule')[1].style.backgroundColor = '#1684FC';
                    break;
                case 'news':
                    document.querySelectorAll('.header .news')[0].style.backgroundColor = '#E6F7FF';
                    document.querySelectorAll('.header .news')[1].style.backgroundColor = '#1684FC';
                    break;
                case 'ticket':
                    document.querySelectorAll('.header .ticket')[0].style.backgroundColor = '#E6F7FF';
                    document.querySelectorAll('.header .ticket')[1].style.backgroundColor = '#1684FC';
                    break;
                case 'rebook':
                    document.querySelectorAll('.header .rebook')[0].style.backgroundColor = '#E6F7FF';
                    document.querySelectorAll('.header .rebook')[1].style.backgroundColor = '#1684FC';
                    break;
            }
        }
    },
    afterRouteUpdate(to, from, next){
        this.setInitBgGround();
        next();
    },
    mounted(){
        this.setInitBgGround();
    }
}
</script>

<style scoped>
    @import url(../assets/css/reset.css);
    @import url(../assets/css/info.css);
</style>