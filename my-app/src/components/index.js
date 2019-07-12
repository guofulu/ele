import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'

const components = {
    One,
    Two,
    Three
}
export default {
    install(Vue){
        for(let key in components){
            Vue.component(key,components[key]);
        }
    }
}
