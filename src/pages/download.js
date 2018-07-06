import React,{Component} from 'react'
import Link from 'gatsby-link'
import Style from  '../styles/download.module.css'

const serverList = [
  {name:'PHP',version:'1.11=.2',href:'/'},
  {name:'JAVA',version:'1.11=.2',href:'/'},
  {name:'Node.js',version:'1..2',href:'/'},
  {name:'Go',version:'1..2',href:'/'},
  {name:'Python',version:'1..2',href:'/'},
  {name:'Ruby',version:'1..2',href:'/'},
  {name:'C#',version:'1..2',href:'/'},
];

const clientList = [
  {name:'IOS',version:'1.1.2',href:'/'},
  {name:'Android',version:'1.1.2',href:'/'},
  {name:'HTML5',version:'1.1.2',href:'/'},
];

class GuidePage extends Component{
  constructor(props){
    super(props);
    this.state={
      currentIndex:1
    }
  }
  componentWillMount(){
    const index = parseInt(location.hash.substring(1));
    this.setState({
      currentIndex:index
    })
  }
  render(){
    return <div>
      <div className={Style.banner}>
        <div className={Style.contain}>
          <div className={Style.left} style={{width:'911px'}}>
            <h2>UQPAY开发工具包（SDK）</h2>
            <p>欢迎使用优钱付 | UAPAY开发者工具包（SDK）。您可以编写代码调用SDK来实现对UAPAY产品和服务的访问 。我们为您准备了
            SDK《使用说明》，以便您了解如何获取、安装和调用阿里云SDK。</p>
          </div>
          <div className={Style.right} style={{marginTop:'25px'}}>
            <i className="iconfont icon-sdk" style={{fontSize:'100px',color:'#4EC8FA'}}></i>
          </div>
        </div>
      </div>
      <div className={Style.contain}>
        <div className={Style.title}>Server SDK</div>
        <ul  className={`${Style.clear} ${Style.server}`}>
          {serverList.map((item,index)=>{
             return <li key={index}>
                <p>{item.name}<span>{item.version}</span></p>
               <a href={item.href}>前往下载</a>
             </li>
            }
          )}
        </ul>
        <div className={Style.title}>Client SDK</div>
        <ul  className={`${Style.clear} ${Style.server}`}>
          {clientList.map((item,index)=>{
              return <li key={index}>
                <p>{item.name}<span>{item.version}</span></p>
                <a href={item.href}>前往下载</a>
              </li>
            }
          )}
        </ul>
      </div>
    </div>
  }
}

export default GuidePage
