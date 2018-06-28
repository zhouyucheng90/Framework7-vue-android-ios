<template>
  <f7-page>
    <f7-searchbar
      disable-link-text="取消"
      placeholder="搜索商品编码或者名称"
      :clear-button="true"
    ></f7-searchbar>
    
    <div class="block" style="margin:0;padding:5px 0;background-color: #fff;">
        <div class="row">
          <div class="col" >默认查看<i class="material-icons" style="position: absolute;">arrow_drop_down</i></div>
          <div class="col">商机金额</div>
          <div class="col">筛选</div>
        </div>
    </div>
    <f7-list-item v-for="(item, index) in plantOptions" :key="index" :link="'/form/'+item.id" style="list-style-type: none;margin: 0;margin-top: 5px;padding: 5px;background-color: #fff;">
        <p class="mg2"><i class="material-icons top7">apps</i>{{item.no_code}}</p>
        <p class="mg2"><i class="material-icons top7">local_offer</i>{{item.title}}</p>
        <p class="mg2"><i class="material-icons top7">person</i>{{item.create_user.name}}</p>
        <p class="mg2"><i class="material-icons top7">local_atm</i>{{item.member_user.name}}</p>
        <div class="row" style="padding: 10px;color: #bbb;border-top: solid 1px #efeff4;">
          <p class="col-33">跟进人：<span v-for="user in item.fllow_user">{{user.name}}</span></p>
          <p class="col-66" style="text-align: right;">最近跟进时间：{{item.last_fllow_time}}</p>
        </div>
    </f7-list-item>
  </f7-page>
</template>

<script>
import { getUserList } from '@/api/myapp'
export default {
  data(){
    return {
      plantOptions: []
    }
  },
  created(){
      this.getUserList()
  },
  computed: {
      
    },
    methods: {
        getUserList(){
            getUserList().then(res => {
          if(res.code == true){
            var a = res.data.list;
            this.plantOptions = a;
          }
        })
        },
        resetList(id){
          console.log(id);
        }
    }
}
</script>
<style>
div[class*="col"] {
  text-align: center;
  color: #000;
  padding: 5px;
  font-size: 16px;
}
.top7{
    position: relative;
    top: .3em;
    left: -.3em;
}
.mg2{
    margin: 10px 0;
    padding-left: 20px;
}
</style>