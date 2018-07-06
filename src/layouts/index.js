import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import { I18nProvider, withI18n, Trans } from '@lingui/react'
import { navigateTo } from 'gatsby-link'
import { catalogs, prefix, deprefix, langFromPath } from '../i18n-config'
import logo from '../static/img/favicon.png';

const Layout = ({ children, lang, onLangChange , data, i18n }) => (
  <div>
    <Helmet
      title={lang === 'en' ? "Developer Platform" : "开发者平台"}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          rel: 'icon',
          href:logo,
          type:'image/x-icon'
        }
      ]
      }
    />
    <Header siteTitle={lang === 'en' ? "Developer Platform" : "开发者平台"} lang={lang} onLangClick={onLangChange} />
    <div
      style={{
        margin: '0 auto',
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

class LayoutIndex extends React.Component {
  onLangChange = (lang) => {
    navigateTo(prefix(lang) + deprefix(this.props.location.pathname))
  }

  render = () => {
    const lang = langFromPath(location.pathname)
    return (
      <I18nProvider language={lang} catalogs={catalogs}>
        <Layout {...this.props} lang={lang} onLangChange={this.onLangChange} />
      </I18nProvider>
    )
  }
}
export default withI18n()(LayoutIndex);
