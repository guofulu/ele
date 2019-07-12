<template>
    <div>
        <h2>此为购物车页</h2>
    </div>
</template>

<script>
export default {
    name:"cart",
    // beforeRouteEnter(to,from,next){
    //     console.log(to,from)
    //     console.log("组件内部拦截")
    //     next({
    //         path:"/login",
    //         query:{
    //             a:1,
    //             b:2
    //         }
    //     })
    // },
    beforeRouteUpdate(to,from,next){
        console.log("接收数据的组建")
        next();
    }
}
</script>