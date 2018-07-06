import React,{Component} from 'react'
import Link from 'gatsby-link'

import Style from '../styles/guide.module.css'

const catalog = [
  {title:'简介',href:'/guide/#1'},
    {title:'开发配置中心',href:'/guide/#2'},
  {title:'管理平台使用指南',href:'/guide/#3'},
    {title:'交易',href:'/guide/#4'},
  {title:'用户',href:'/guide/#5'},
    {title:'商户层级',href:'/guide/#6'},
    {title:'余额',href:'/guide/#7'},
  {title:'订单',href:'/guide/#8'},
    {title:'优惠券',href:'/guide/#9'},
    {title:'分润',href:'/guide/#10'},
];
class GuidePage extends Component{
  constructor(props){
    super(props);
    this.state={
      currentIndex:1,//目录
      currentNavigation:0,//导航
    }
  }
  componentWillMount(){
    const index = parseInt(location.hash.substring(1));
    this.setState({
      currentIndex:index||1
    });
  }

  componentWillReceiveProps(props){
    const index = parseInt(props.location.hash.substring(1));
    this.setState({
      currentIndex:index||1
    });
  }

  componentDidMount(){
    this.refs.content.addEventListener('scroll', this.scroll);
  }

  scroll = () => {
    console.log(this.refs.content.scrollTop);
  }
  changeIndex = (currentNavigation) => {
    this.setState({
      currentNavigation
    })
  }

  render(){
    const { currentNavigation, currentIndex } = this.state;
    return <div style={{flex:'1'}}>
      <div className={Style.guide}>
        <ul className={Style.contain}>
          <li onClick={()=>{this.changeIndex(0)}} className={currentNavigation===0?Style.active:''}>概述和基础</li>
          <li onClick={()=>{this.changeIndex(1)}} className={currentNavigation===1?Style.active:''}>Server端接入</li>
          <li onClick={()=>{this.changeIndex(2)}} className={currentNavigation===2?Style.active:''}>Client端接入</li>
          <li onClick={()=>{this.changeIndex(3)}} className={currentNavigation===3?Style.active:''}>Webhooks、测试和联调</li>
        </ul>
      </div>
      <div className={Style.container}>
         <div className={Style.catalog}>
           {catalog.map((item,index)=>{
             return <Link to={item.href} key={index} className={`${Style.item} ${currentIndex===(index+1)?Style.itemActive:''}`}>{item.title}</Link>
           })}
         </div>
        <div className={Style.content} ref="content">
          <div className="ss" style={{height:'10000px',width:'100%',background:'white'}}>11111</div>
        </div>
        <div className={Style.navigation}></div>
      </div>
    </div>
  }
}

export default GuidePage
