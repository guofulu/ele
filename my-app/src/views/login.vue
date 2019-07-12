<template>
    <div>
        <h2>此为登录注册页面</h2>
    </div>
</template>

<script>
export default {
    name:"login",
    beforeRouteLeave(to,from,next){
        console.log(to,from)
        console.log("组建内部离开之前")
        next();
    }
}
</script>