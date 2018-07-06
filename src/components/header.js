import React from 'react'
import Link from 'gatsby-link'
import {NavLink} from 'react-router-dom'
import {Trans, withI18n } from '@lingui/react'
import logo from '../static/img/favicon.png';
const Header = (props) => {
  const prefix =props.lang === 'en' ? '/' : '/zh/';
  return (
  <div
    style={{
      background: '#262626',
      height:'64px',
      padding:'0 4px',
      borderBottom:'1px solid #333'
    }}
  >
    <div
      style={{
        margin: '0 auto',
      }}
    >
      <div style={{float:'left'}}>
        <img src={logo} alt="" style={{height:'64px',display:'block',float:'left'}}/>
        <h1 style={{margin: 0,fontSize:'16px',lineHeight: '64px',fontWeight: 500,paddingLeft:'24px',borderLeft:'1px solid #333',float:'left'}}>
          <Link
            to={prefix}
            style={{
              color: '#999',
              textDecoration: 'none',
            }}
          >
            {props.siteTitle}
          </Link>
        </h1>
      </div>
      <div style={{float:'right'}} >
        <NavLink
          to={prefix+'guide'}
          activeStyle={{
            color:'#fff'
          }}
          style={{
            color: '#999',
            textDecoration: 'none',
            lineHeight:'64px',
            padding:'0 30px'
          }}
        >
          <Trans>开发指南</Trans>
        </NavLink>
        <NavLink
          to={prefix+'document'}
          activeStyle={{
            color:'#fff'
          }}
          style={{
            color: '#999',
            textDecoration: 'none',
            lineHeight:'64px',
            padding:'0 30px'
          }}
        >
          API文档
        </NavLink>
        <NavLink
          to={prefix+'download'}
          activeStyle={{
            color:'#fff'
          }}
          style={{
            color: '#999',
            textDecoration: 'none',
            lineHeight:'64px',
            padding:'0 30px'
          }}
        >
          SDK下载
        </NavLink>
      </div>
    </div>
  </div>
)}

export default withI18n()(Header)
