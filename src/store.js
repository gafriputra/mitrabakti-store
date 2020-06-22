// let getKeranjang = JSON.parse(localStorage.getItem('keranjang'));

export default{
    state: {
        keranjang: [],

    },
    getters: {
        keranjang(state) {
            return state.keranjang
        } 
    },
    mutations: {
        getKeranjang(state, add){
            state.keranjang = add
        },
        addKeranjang(state, add){            
            const found = state.keranjang.find(element => element.id == add.id);
            if(found) {
                found.jumlah = found.jumlah + 1;
            }else{
                 state.keranjang.push(add)
            }

            const parsed = JSON.stringify(state.keranjang);
            localStorage.setItem('keranjang', parsed);
        },
        deleteItem(state, id){
            state.keranjang.splice(id , 1);
            
            const parsed = JSON.stringify(state.keranjang);
            localStorage.setItem('keranjang', parsed);
        },
        deleteAllItem(state) {
            state.keranjang = [];
            localStorage.removeItem('keranjang');
        }
    },
    actions: {
        getKeranjang({commit}, add) {
            commit('getKeranjang', add)
        },
        addKeranjang({commit}, add ){
            commit('addKeranjang', add)
        },
        deleteItem({commit}, id){
            commit('deleteItem', id)
        },
        deleteAllItem({commit}){
            commit('deleteAllItem')
        }
    }
};