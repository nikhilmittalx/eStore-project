import React from 'react';
import '../pages/Style.css'
import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='containCat' id='categories'>
      <div className='grid gap-2 md:grid-cols-3 mb-2'>
        <Categorie
          name='Clothes'
          image='https://picsum.photos/id/221/640/480'
        />
        <Categorie
          name='Shoes'
          image='https://picsum.photos/id/21/640/480'
        />
        <Categorie
          name='Electronics'
          image='https://picsum.photos/id/271/640/480'
        />
      </div>
      <div className='grid gap-2 md:grid-cols-2'>
        <Categorie
          name='Furniture'
          image='https://picsum.photos/id/214/640/480'
        />
        <Categorie
          name='Others'
          image='https://picsum.photos/id/291/640/480'
        />
      </div>
    </section>
  );
};

export default Categories;
