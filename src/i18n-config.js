const languages = [ 'en', 'zh' ]
const catalogs = {
  en: { messages: require('./locale/en/messages.json') },
  zh: { messages: require('./locale/zh/messages.json') }
}

const defaultLanguage = 'en'

const prefix = (lang) => (lang == defaultLanguage ? '/' : '/' + lang)
const deprefix = (pathname) => (pathname.startsWith('/zh/') ? pathname.substr(4) : pathname)
const langFromPath = (pathname) => (pathname.startsWith('/zh/') ? 'zh' : 'en')

exports.defaultLanguage = defaultLanguage
exports.languages = languages
exports.catalogs = catalogs
exports.prefix = prefix
exports.deprefix = deprefix
exports.langFromPath = langFromPath
