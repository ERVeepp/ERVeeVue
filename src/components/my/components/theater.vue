<template>
  <div id="context"></div>
</template>
<script>
import theaterJS from 'theaterjs';
export default {
    data(){
        return{
            flage:true
        }
    },
    props: ['choicelang','contents'],
    methods:{
        theater:function(){
            var vm=this
            vm.flage=false
            /* global theaterJS */
            var theater = theaterJS({
                autoplay:true,
                locale:"detect",
                minSpeed:{
                    erase:80,
                    type:80
                },
                maxSpeed:{
                    erase:450,
                    type:450
                }
            })
            theater.on('type:start, erase:start', function () {
                // add a class to actor's dom element when he starts typing/erasing
                var actor = theater.getCurrentActor()
                actor.$element.classList.add('is-typing')
            })
            theater.on('type:end, erase:end', function () {
                // and then remove it when he's done
                var actor = theater.getCurrentActor()
                actor.$element.classList.remove('is-typing')
            })
            theater.addActor(
                'context',
                {
                    speed:1,
                    accuracy:1
                }
            )
            //
            var text=vm.contents.con.one.d
            theater.addScene('context:'+text,function(){
                vm.flage=true
            })
        }
    },
    mounted:function(){
        var vm=this
        let lang=localStorage.getItem("lang")
        if(!lang){
            vm.theater()
        }
    },
    watch:{
        choicelang:function(){
            var vm=this
            if(vm.flage){
                vm.theater()
            }
        }
    }
}
</script>

<style media="screen">
    #context{
        font-size: 40px;
    }
    /*制作光标*/
    #context:after {
        content: "";
        width: 6px;
        height: 46px;
        vertical-align: -8px;
        margin-left: 5px;
        background-color: #fff;
        display: inline-block;
        animation: blink .4s infinite alternate;
    };
    /*闪烁光标*/
    @keyframes blink{
        0%{
            opacity:0
        }to{
            opacity:1
        }
    }
    @-webkit-keyframes blink{
        0%{
            opacity:0
        }to{
            opacity:1
        }
    }
</style>
