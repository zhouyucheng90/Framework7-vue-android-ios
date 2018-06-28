<template>
  <f7-page>
    <f7-list-item v-for="(item, index) in goodsDetail" v-show="!goodslen" :key="index" style="list-style-type: none;margin: 10px 0;margin-top: 5px;padding: 13px;background-color: #fff;">
        <p class="mg2">{{item.user_name}}&nbsp;&nbsp;{{item.position}}&nbsp;&nbsp;{{item.organization_name}}&nbsp;&nbsp;{{item.create_time}}</p>
        <p class="mg2">{{item.content}}</p>
        <img width="100" height="100" :src="image.url" v-for="(image, index) in item.images" @click="openPhotoBrowser(image.url)"/>
    </f7-list-item>
     <f7-list-item v-show="goodslen" style="list-style-type: none;margin: 0;margin-top: 5px;padding: 5px;background-color: #fff;">
        <p class="mg2"><i class="material-icons top7">report</i>暂无跟进记录</p>
    </f7-list-item>
    <f7-photo-browser
    ref="pb"
    :photos="photos"
    theme="dark"
    @open="onOpen" ></f7-photo-browser>
  </f7-page>
</template>

<script>
import { getGoodList } from '@/api/myapp'
export default {
  data(){
    return {
      goodsDetail: [],
      goodslen:true,
      list:{
        business_id:this.$f7route.params.id
      },
      photos: [
          {
            url:''
        }
      ]
    }
  },
  created(){
      this.goodsList();
  },
  methods: {
    goodsList(){
        getGoodList(this.list).then(res => {
        if(res.code == true){
          this.goodsDetail = res.data.list || [];
          if(this.goodsDetail.length == 0){
            this.goodslen = true;
          }else{
            this.goodslen = !this.goodslen;
          }
        }
      })
    },
    openPhotoBrowser: function (imgs) {
        this.photos[0].url = imgs;
        this.$refs.pb.open();
    },
    onOpen: function () {
      console.log('Photo Browser is opened')
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
    top: 6px;
    left: -4px;
}
.mg2{
    margin: 10px 0;
    padding-left: 10px;
}
</style>