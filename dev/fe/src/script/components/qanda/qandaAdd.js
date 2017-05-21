import React from 'react'

import { Input } from 'antd';
import { Button } from 'antd';
import Axios from '../../utils/axios.util';
import Content from './qandaDetailContent';

class qandAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // columns: [],
      question: {},
      answers: [],
      CommentNodes: [1,2,3],
      tagData:[{tag:"HTML/CSS"},
              {tag:"JavaScript"},
              {tag:"HTML5"},
              {tag:"CSS3"},
              {tag:"VUE"},
              {tag:"HTML/CSS"},
              {tag:"JavaScript"},
              {tag:"HTML5"},
              {tag:"CSS3"},
              {tag:"VUE"},
              {tag:"HTML/CSS"},
              {tag:"JavaScript"},
              {tag:"HTML5"},
              {tag:"CSS3"},
              {tag:"VUE"}],
      isSelected:[],
      num:0
    }
    // 获取数
    // this.getData();
  };

  getData() {
    Axios.post('/api/qanda/detail', {
      uid: 34,
      id: this.props.params.id
    }, (res)=>{
      console.log(res.data.data);

    })
  };

//选择不超过三个标签
  selectTag(item,id){
    if(this.state.num <3){
      if(this.state.isSelected[id].istrue){
        this.state.isSelected[id].istrue = false
        this.state.num = this.state.num-1
      }else{
        this.state.isSelected[id].istrue = true
        this.state.num = this.state.num +1
      }
    }else{
      if(this.state.isSelected[id].istrue){
        this.state.isSelected[id].istrue = false
        this.state.num = this.state.num-1
      }
    }
    this.setState({
      isSelected:this.state.isSelected
    })
  }

  render() {

    let tagLi = this.state.tagData.map((value,index)=>{
      this.state.isSelected.push({id:index,istrue:false,tag:value.tag})
      return (
        <li><i className={this.state.isSelected[index].istrue?"active":"" }tagId={index} onClick={this.selectTag.bind(this,value,index)}>{value.tag}</i></li>
      )
    })

    return (
      <div className="m-qanda-detail">
          <div className="section">
            <p className="q-title">提问</p>
            <div className="reply">
              <Input placeholder="标题" ref="inputTitle"/>
              <Input type="textarea" rows={4} placeholder="提问内容哦" ref="inputContent"/>
              <div className="select-question">
                <p>选择问题分类，最多可以选3个</p>
                <ul>
                  {tagLi}
                </ul>
              </div>
              <div className="btn-box">
                <Button type="primary" className="primary" onClick={this.reply.bind(this)}>发布</Button>
              </div>
            </div>
          </div>
          <div className="stopImage">
            <img src="/images/stop_images.png"/>
          </div>
      </div>
    )
  }

  reply(){
    let title = this.refs.inputTitle.refs.input.value
    let content = this.refs.inputContent.refs.input.value
  //取出问题标签
    let tags=[]
    this.state.isSelected.map((value,index)=>{
      if(value.istrue){
        tags.push(value.tag)
      }
        return
    })
    console.log(tags)
    Axios.post('/api/qanda/add', {
      uid: 4, // 用户ID [数值：必填]
      tag: tags, // 问题标签 [字符串：必填] html, css, 原生js, angular, vue,其他等等
      title: title, //标题 [字符串：必填]
      content: content // 回帖内容：[字符串：必填]
    }, (res)=>{
      console.log(res);
    })
  }


}

export default qandAdd;
