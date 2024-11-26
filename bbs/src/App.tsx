import React from 'react';
import {Component} from "react";
import BoardList from './BoardList';
import Slide from './Slide';
import Write from './Write';

class App extends Component{

  state = {
    isModifyMode:false,
    isComplete:true,
    boardId:0,
  }

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
  }

render(){
  return (
    <>
    <Slide/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <BoardList
            isComplete={this.state.isComplete}
            handleModify={this.handleModify}
            renderComplete={this.renderComplete}
            />
            <Write
            isModifyMode={this.state.isModifyMode}
            boardId={this.state.boardId}
            handleCancel={this.handleCancel}
            />
            </div>
          </div>
        </div>
    </>
      );
}


}

export default App;
