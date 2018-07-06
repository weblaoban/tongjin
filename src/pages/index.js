import React from 'react'
import Link from 'gatsby-link'
import {NavLink} from 'react-router-dom'
import Style from  '../styles/index.module.css';
import { Trans, withI18n } from '@lingui/react'
import '../styles/iconfont/iconfont.css';
import { navigateTo } from 'gatsby-link'
import { catalogs, prefix, deprefix, langFromPath } from '../i18n-config'

const guide = [
  [{title:'简介',href:'/guide/#1'},
  {title:'开发配置中心',href:'/guide/#2'}],
  [{title:'管理平台使用指南',href:'/guide/#3'},
  {title:'交易',href:'/guide/#4'}],
  [{title:'用户',href:'/guide/#5'},
  {title:'商户层级',href:'/guide/#6'},
  {title:'余额',href:'/guide/#7'}],
  [{title:'订单',href:'/guide/#8'},
  {title:'优惠券',href:'/guide/#9'},
  {title:'分润',href:'/guide/#10'}],
  ];

const document = [
  {title:'cURL',href:'/document/#1'},
  {title:'PHP',href:'/document/#2'},
  {title:'Java',href:'/document/#3'},
  {title:'Ruby',href:'/document/#4'},
  {title:'Node.js',href:'/document/#5'},
  {title:'Python',href:'/document/#6'},
  {title:'Go',href:'/document/#7'},
  {title:'C#',href:'/document/#8'},
];

const download = [
  {title:'Server SDK',href:'/download/#1'},
  {title:'Client SDK',href:'/download/#2'},
  {title:'壹收款 SDK',href:'/download/#3'},
  {title:'其他平台 SDK',href:'/download/#4'},
];



class IndexPage extends React.Component {
  onLangChange = (lang) => {
    navigateTo(prefix(lang) + deprefix(this.props.location.pathname));
  }
  render(){
    const {i18n} = this.props;
    const lang = langFromPath(location.pathname);
    return (
      <div className={Style.container}>
        <ul className={`${Style.clear} ${Style.section}`}>
          <li>
            <div className={Style.title}><i className="iconfont icon-icon25"></i>开发指南</div>
            <div className={Style.content}>
              {guide.map((item,index)=>{
                return  <div key={index} className={Style.item}>
                  {item.map((v,i)=>{
                    return <Link key={i} to={v.href}>
                      {v.title}
                    </Link>
                  })}
                </div>
              })}
            </div>
            <div className={Style.footer}>
              <Link to={i18n.t`/guide`}>
                <Trans>all</Trans>
              </Link>
            </div>
          </li>
          <li>
            <div className={Style.title}><i className="iconfont icon-api"></i>API文档</div>
            <div className={Style.content}>
              {document.map((item,index)=>{
                return <NavLink key={index} to={item.href}>
                  {item.title}
                </NavLink>
              })}
            </div>
            <div className={Style.footer}>
              <Link to={i18n.t`/document`}>
                <Trans>all</Trans>
              </Link>
            </div>
          </li>
          <li>
            <div className={Style.title}><i className="iconfont icon-sdk"></i>SDK下载</div>
            <div className={Style.content}>
              {download.map((item,index)=>{
                return <NavLink key={index} to={item.href}>
                  {item.title}
                </NavLink>
              })}
            </div>
            <div className={Style.footer}>
              <Link to={i18n.t`/download`}>
                <Trans>all</Trans>
              </Link>
            </div>
          </li>
        </ul>
        <div className={Style.bottom}>
          <p><Trans>platform</Trans></p>
          <div className={Style.connect}>
            <Link  to={i18n.t`/contract`}>
              Contract us
            </Link>
            <Link to={i18n.t`/about`}>
              About us
            </Link>
            <Link to={i18n.t`/help`}>
              Help
            </Link>
            <a style={{ color: 'yellow', marginRight: '10px', textDecoration: lang === 'en' ? 'underline' : 'none', cursor: 'pointer' }}  onClick={(e) => {if(lang === 'en')return;this.onLangChange('en')}}>
              en
            </a>
            <a style={{ color: 'yellow', marginRight: '10px', textDecoration: lang === 'zh' ? 'underline' : 'none', cursor: 'pointer' }}  onClick={(e) => {if(lang === 'zh')return;this.onLangChange('zh')}
            }>
              zh
            </a>
          </div>

        </div>
      </div>
    )
  }
}



export default withI18n()(IndexPage)
