import React from "react";
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <React.Fragment>
      <Hero> 
        <Link to='/products' className='btn btn-primary btn-hero' >
          our products
        </Link>
       </Hero>
    </React.Fragment>
  );
}
