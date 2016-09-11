import { SET_MENU , SET_MENU_ACTIVE ,BACK_PATH } from '../mutation-types'
let state = {
    backPath:'',
    index_nav: [],
    menu_active:{text:"",index:0},
}
const mutations = {
    [SET_MENU](state,index_nav){
        state.index_nav = index_nav;
    },
    [SET_MENU_ACTIVE](state, _index) {
        //底部导航激活
        state.menu_active = state.index_nav[_index]
    },
    [BACK_PATH](state,_path){
        //设置返回按钮跳转路径,router.afterEach设置
        state.backPath = {path:_path};
    },
}

export default {
  state,
  mutations
}