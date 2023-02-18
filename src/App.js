import React from 'react'
import "./App.css"
import { useState } from "react";
import { addTable, deleteTable } from './slice.js';
import { useSelector, useDispatch } from "react-redux";
import Table from './Table';

function App() {

// inputの文字の情報を取得
const [name, setName] = useState("");
const [unit, setUnit] = useState("");
// エラーの状態管理
const [errors, setErrors] = useState("");

 // useSelectorを使ってtablesの配列にアクセスする
const tableList = useSelector((state) => state.tables.tableList);
// 変数dispatchにuseDispatchを代入
const dispatch = useDispatch();

// 投稿ボタンを押したら投稿される処理
const addClick = () =>{
  // バリデーション処理
  if (!name && !unit)return setErrors("科目名と必須単位を入力してください");
  if (!name)return setErrors("科目名を入力してください");
  if (!unit)return setErrors("必須単位を入力してください");
  if (unit <= 0)return setErrors("必須単位は1以上の数値を入力してください");

// addTableをディスパッチする
  dispatch(addTable({name, unit}));

// 投稿したら中身を消す処理
  setUnit("");
  setName("");
};

// 科目と単位が入力されたらステートが更新される処理
const handleNameChange = (e) => {
  setName(e.target.value);
  setErrors("");
};

const handleUnitChange = (e) => {
  setUnit(e.target.value);
  setErrors("");
};
    
  return (
    
    <div className='App'>
      <div>
        <h1>calculation</h1>
      </div>
      <div className="addTable">
        {/* 文字を打ち込むたびにnameとunitに入力内容が入る*/}
        <input type="text" placeholder='科目名' onChange={handleNameChange} value={name}/>
        <input type="number" min="0" placeholder='必須単位' onChange={handleUnitChange} value={unit}/>
        {/* クリックしてaddClickを呼び出す + 投稿したらvalueを空にする */}
        <button onClick={() => addClick()}>追加</button>
        <p className="error">{errors}</p>
        <hr />
      </div>

      <div className='postList'>
        {/* 配列にidが割り振られているためmap関数で呼び出す */}
      {tableList.map((table) => (
      <div key={table.id} className="post">
      <Table subject = {table.name} unit = {table.unit}/>
      {/* クリックしてdeleteTableの処理をディスパッチする */}
      <button onClick={() => dispatch(deleteTable(table.id))}>削除</button>
      </div>
      ))}
      </div>
    </div>
  )
}

export default App;