import React from 'react';
import Directory from '../../components/Directory/Directory';
import Hedaer from '../../components/Header/Hedaer';

const HomePage = (props) => {
  console.log(props)
    return (
      <div className='homepage'>
        <Directory/>
      </div>
    )
};

export default HomePage;