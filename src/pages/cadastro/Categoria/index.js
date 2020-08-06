import React from 'react';
import PageDafult from '../../../components/PageDafault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageDafult>
      <h1>New category</h1>

      <form>

        <label>
          Category name:
          <input
            type="text"
          />
        </label>

        <button>
          New
        </button>
      </form>

      <Link to="/">

        Home

        </Link>
    </PageDafult>
  )
}

  export default CadastroCategoria;