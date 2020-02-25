<template>
      <div class="tab-bar-item" @click="itemindex" >
                <slot v-if="isshow" name="item-icon"></slot>
                <slot v-else name="item-active-icon"></slot>
                <div :style="activeStyle">
                    <slot  name="item-text"></slot> 
               
                </div>
              
      </div>
</template>


<script>
import router from '../../../router/index'
export default {
    data(){
        return{
            // isshow:true
        }
    },
    props:{
        path:{
            type:String,
            value:''
        },
        activeColor:{
            type:String,
            default:' #FD7992'
        }
    },
    computed:{
      isshow(){
          return this.$route.path.indexOf(this.path) == -1
      },
      activeStyle(){
          return !this.isshow ? {color:this.activeColor} : {}
      }
    },
    methods:{
        itemindex(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style scode>
    .tab-bar-item{
    text-align: center;
    flex: 1;
    font-size: 13px;
    /* line-height: 49px; */
    height: 49px;

    }
    .tab-bar-item img{
        height: 24px;
        width: 24px;
        margin-top: 3px;
    }
    .tab-bar-item div{
        margin-top: -3px
    }

</style>
