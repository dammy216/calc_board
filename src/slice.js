import { createSlice } from "@reduxjs/toolkit";

// スライスを作る
export const tableSlice = createSlice({
    name: "tables",
    // 初期値
    initialState:{
        tableList: [],
    },
    
    reducers:{
        // 名前と投稿する内容を投稿する処理
        addTable:(state, action) =>{
            state.tableList.push({id: Math.random(), name: action.payload.name, unit: action.payload.unit});
        },
         // 名前と投稿した内容を削除する処理
        deleteTable:(state, action) =>{
            state.tableList = state.tableList.filter(post => post.id !== action.payload);
        },
    },
});

// postsのaddTableとdeleteTableの処理をエクスポート
export const {addTable, deleteTable} = tableSlice.actions;
export default tableSlice.reducer;