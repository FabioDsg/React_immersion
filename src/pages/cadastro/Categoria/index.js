import React, {useState} from 'react';
import PageDafult from '../../../components/PageDafault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function NewCategory() {
  
  const initValues = {
    name: '',
    description: '',
    color: '#000',
  }
  const [values, setValues] = useState(initValues);
  const [categories, setCategories] = useState([]);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange(eventInfo){
    const {getAttribute, value} = eventInfo.target;
    setValue (
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value
      );
  }
  
  return (
    <PageDafult>
      <h1>New category: {values.name} </h1>

      <form onSubmit={function handleSubmit(eventInfo){
        eventInfo.preventDefault();
        setCategories([
          ...categories,
          values  
        ]);

        setValues(initValues)

      }}>
        
        <FormField
        label="Category name"
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        />
         <FormField
        label="Description"
        type="text"
        name="description"
        value={values.description}
        onChange={handleChange}
        />

        {/* <div>
        <label>
          Description:
          <textarea
            type="text"
            value={values.description}
            name="description"
            onChange={ handleChange}
          />
        </label>
        </div> */}

        <FormField
        label="Color"
        type="color"
        name="color"
        value={values.color}
        onChange={handleChange}
        />

        {/* <div>
        <label>
          Color:
          <input
            type="color"
            value={values.color}
            name="color"
            onChange={ handleChange}
          />
        </label>
        </div> */}

        <button>
          New
        </button>
      </form>
      
      <ul>
        {categories.map((category, indice) => 
        {
          return (
            <li key={`${category} ${indice}`}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">

        Home

        </Link>
    </PageDafult>
  )
}

  export default NewCategory;