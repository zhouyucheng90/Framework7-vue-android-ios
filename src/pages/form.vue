<template>
  <f7-page>
    <f7-list style="margin:0;">
    <f7-list-item title="项目名称">{{ listDetail.title }}</f7-list-item>
    <f7-list-item title="客户姓名">{{ member_name }}</f7-list-item>
    <f7-list-item title="预计金额">{{ listDetail.forecast_deals_amount }}</f7-list-item>
    <f7-list-item title="预计成交时间">{{ listDetail.forecast_deals_time }}</f7-list-item>
    <f7-list-item title="创建时间">{{ listDetail.create_time }}</f7-list-item>
    <f7-list-item title="成交进度">{{ listDetail.b_status_plan }} % {{ listDetail.b_status_name }}</f7-list-item>
    <f7-list-item title="选择商品">{{ listDetail.forecast_deals_time }}</f7-list-item>
    <f7-list-item title="跟进记录" :link="'/goods/'+listDetail.id">({{ listDetail.fllow_record_count }})</f7-list-item>
    <f7-list-item title="参与人">
    <span v-for="(item, index) in listDetail.fllow_user" :key="index">{{ item.name }}</span>
    </f7-list-item>
  </f7-list>

  </f7-page>
</template>

<script>
import {getUserDetail}  from '@/api/myapp'
export default {
  data(){
    return {
      listDetail: {},
      member_name:'',
      list:{
        id:this.$f7route.params.business_id
      }
    }
  },
  created(){
      this.getDetail();
  },
  methods: {
    getDetail(){
        getUserDetail(this.list).then(res => {
        if(res.code == true){
          this.listDetail = res.data || {};
          this.member_name = this.listDetail.member_user.name;
        }
      })
    }
  }
}
</script>
<style>
.list li{
  margin:10px 0;
  background-color: #fff;
}
.ios .list ul{
  background-color:#efeff4;
}
</style>