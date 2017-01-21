export const contents = state => {
    //console.log(state)
    for (var i = 0; i < state.contents.length; i++) {
        if(state.contents[i].id===state.choicelang){
            return state.contents[i]
        }
    }
}
