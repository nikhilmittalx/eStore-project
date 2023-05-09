import React from 'react';
import '../pages/Style.css'
import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='containCat' id='categories'>
      <div className='grid gap-2 md:grid-cols-3 mb-2'>
        <Categorie
          name='tshirt'
          image='https://picsum.photos/id/221/640/480'
        />
        <Categorie
          name='shoes'
          image='https://res.cloudinary.com/diyixgmes/image/upload/v1683619950/NIKE_Men_s_Dunk_High_Pro_SB_305050_373_Pine_Green_Metallic_Gold_Sneaker_nkrzht.jpg'
        />
        <Categorie
          name='jeans'
          image='https://picsum.photos/id/271/640/480'
        />
      </div>
      <div className='grid gap-2 md:grid-cols-2'>
        <Categorie
          name='hoodies'
          image='https://picsum.photos/id/214/640/480'
        />
        <Categorie
          name='others'
          image='https://res.cloudinary.com/diyixgmes/image/upload/v1683619951/Titan_Analog_Black_Dial_Men_s_Watch_hdxd4p.jpg'
        />
      </div>
    </section>
  );
};

export default Categories;
