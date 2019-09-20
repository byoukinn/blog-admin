let dfs = (total, level = 0, callback) => {
    if (total.length) {
        for (var i of total) {
            dfs(i, level)
        }
    } else if (total.children) {
        dfs(total.children, level + 1)
        callback(total, level)
    } else {
        callback(total, level)
    }
}



export const stageList = (state) => {
    dfs(state.stateConfig, 0, function (item, i) {
        console.log(item, i)
    })
}