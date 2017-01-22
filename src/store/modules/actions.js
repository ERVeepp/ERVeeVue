import * as types from '../mutation-types'
//直接输出变量
/*export const increment= (context,data)=>{
    context.commit(types.CHANGE_LANG,data)
}*/

//输出一个对象
/*export default{
    increment(context,data){
        context.commit(types.CHANGE_LANG,data)
    }
}*/

//先声明一个变量
const increment= (context,data)=>{
    context.commit(types.CHANGE_LANG,data)
}

//需要输出的对象里面包含的变量
export default{
    increment
}
