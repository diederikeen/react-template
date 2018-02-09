import React from 'react';
import { Link } from 'react-router-dom'

class Index extends React.Component{

  render(){
    return(
      <div>
        <h1>Hello Index!</h1>
        <Link to="/blog">Blog</Link>
      </div>

    )
  }
};

export default Index;