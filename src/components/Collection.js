import React, { useEffect, useState } from 'react';
import client from '../sanityClient';
import "../style/Collection.css";

const Collection = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "category"]{
        name,
        slug
      }`;
      const result = await client.fetch(query);
      setCategories(result);
    };

    fetchCategories();
  }, []);

  console.log("onCategorySelect:", onCategorySelect); // Debug

  return (
    <div className="collection">
      <h2>Categories</h2>
      <ul>
        <li onClick={() => onCategorySelect('all')}>All</li>
        {categories.map((category) => (
          <li key={category.slug.current} onClick={() => onCategorySelect(category.slug.current)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collection;
