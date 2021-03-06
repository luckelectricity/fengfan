import React,{Component} from 'react'
import { Table, Icon , Pagination , Button} from 'antd'
import axios from '../../../utils/axios.util'
import { message } from 'antd'
import Management from './management'



class VideoClassify extends Component{
  constructor(props){
    super(props)
    this.state={
      info:{
        title:"视频管理/分类管理",
        tip:"分类添加",
        listUri:"/api/classify/list",
        addUri:"/api/classify/add",
        removeUri:"/api/classify/remove"
      }
    }
  }


  render(){
    return (
      <div className="m-classify management">
        <Management info={this.state.info} tag={"classify"}></Management>
      </div>
    )
  }


}

export default VideoClassify
