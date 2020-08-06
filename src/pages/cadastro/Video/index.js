import React from 'react';
import PageDafult from '../../../components/PageDafault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
      <PageDafult>
        <h1>Add new video</h1>

        <Link to="/cadastro/categoria"> 
        
          New Category

        </Link>
      </PageDafult>
    )
  }

  export default CadastroVideo;