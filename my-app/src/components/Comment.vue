<template>
    <div class="commentOn">
      <div class="noContent" v-if="contextList.length<=0">暂无留言</div>

      <div class="messList">
        <div class="reply" v-for="item in contextList">
          <p class="replyContent">{{item.context}}</p>
          <p class="operation">
            <span class="replyTime">{{item.addTime}}</span>
            <span class="handle">
                    	<a href="javascript:;" @click="upWeibo(item._id,1)" class="top">{{item.topNum}}</a>
                        <a href="javascript:;" @click="upWeibo(item._id,2)"  class="down_icon">{{item.downNum}}</a>
                        <a href="javascript:;" @click="deleteWeibo(item._id)" class="cut">删除</a>
                    </span>
          </p>
        </div>
      </div>
      <div class="page">
        <a href="javascript:;" v-for="i in pageSum" @click="getWeibe(i)" :class="{active:i === pageIndex}">{{i}}</a>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contextList:[],
            pageIndex:1,
            pageSum:1
        }
    },
    mounted() {
        this.getWeibe();
        this.$bus.$on("ok",(v)=>{
            if(v === 1){
                this.getWeibe()
            }
        })
    },
    methods: {
        getWeibe(pageIndex=1){
            this.$http.get("http://10.9.24.193/weibo3",{
                params:{
                    pageIndex
                }
            })
        .then(({data})=>{
            console.log(data)
             this.contextList = data.contextList;
             this.pageSum = data.pageSum;
             this.pageIndex = data.pageIndex
        })
        },
        upWeibo(id,type){
            this.$http.put("http://10.9.24.193/weibo3/"+id,{
                type
            }).then(({data})=>{
                 console.log("put",data)
                if(data.ok === 1){
                    console.log(this.pageIndex)
                    this.getWeibe(this.pageIndex);
                }
            })
        },
        deleteWeibo(id){
            this.$http.delete("http://10.9.24.193/weibo3/"+id)
            .then(({data})=>{
                if(data.ok === 1) this.getWeibe(this.pageIndex)
            })
        }
    },
}
</script>