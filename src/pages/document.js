import React,{Component} from 'react'
import Link from 'gatsby-link'


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
      <p>{location.hash}</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  }
}

export default GuidePage
