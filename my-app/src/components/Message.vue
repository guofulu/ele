<template>
    <div class="takeComment">
      <textarea name="textarea" class="takeTextField" id="tijiaoText" ref="context"></textarea>
      <div class="takeSbmComment">
        <input type="button" @click="insertWeibo()" class="inputs" value=""  />
      </div>
    </div>
</template>

<script>
export default {
    methods: {
        insertWeibo(){
            this.$http.post("http://10.9.24.193/weibo3",{
                context:this.$refs.context.value
            }).then(({data})=>{
                if(data.ok === 1) {
                    document.querySelector("#tijiaoText").value = "";
                }
                this.$bus.$emit("ok",data.ok)
            })
        }
    },
}



</script>