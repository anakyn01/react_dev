import React from 'react';
import {Component} from "react";
import BoardList from './BoardList';
import Slide from './Slide';
import Write from './Write';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './include/Header';
import Python from './Python';
import Profile from './Profile';
import Skill from './Skill';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{

  state = {
    isModifyMode:false,
    isComplete:true,
    boardId:0,
  };

  handleModify = (checkList: any) => {
    if(checkList.length == 0){//수정할 게시글이 선택되지 않았다면
      alert("수정할 게시글을 선택하세요");
    }else if(checkList.length > 1){
      alert("하나의 게시글만 선택하세요");
    }

    this.setState({//무조건 하나만 선택
      isModifyMode:checkList.length == 1,
    });

    this.setState({
      boardId:checkList[0] || 0,
    });
  };

  handleCancel = () => {
this.setState({
  isModifyMode:false,
  isComplete:false,
  boardId:0,
})
}

  renderComplete = () => {
this.setState({
isComplete:true,
});
};

render(){
  return (
    <>
    <Header/>
              <BrowserRouter>
              <Routes>
                <Route path="/" element={
                  <BoardList
                  isComplete={this.state.isComplete}
                  handleModify={this.handleModify}
                  renderComplete={this.renderComplete}
                  />
                }>
                </Route>
            <Route path="/write" element={
            <Write
            isModifyMode={this.state.isModifyMode}
            boardId={this.state.boardId}
            handleCancel={this.handleCancel}
            />
            }>
            </Route>
            <Route path="/python" element={<Python/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/skill" element={<Skill/>}/>
            </Routes>
            </BrowserRouter>

    </>
      );
}


}

export default App;
