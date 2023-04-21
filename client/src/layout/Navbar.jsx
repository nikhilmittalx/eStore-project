import React from 'react';

import { Badge } from '@mui/material';
import { Search, ShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory  } from 'react-router-dom';
import { logout } from '../store/auth-actions';

const Navbar = () => {
  const user1 = useSelector((store)=> store.auth.currentUser)
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  let totalQuantity = 0;
  cart.products.map((p)=> totalQuantity+=(p.quantity))
  const logoutHandler = async () => {
    dispatch(logout());
    history.push('/');
  };
  return (
    <nav className='grid grid-cols-2 p-4 border-b font-semibold h-18'>
      <h1 className='font-bold text-3xl uppercase flex items-center justify-start px-4 tracking-wider'>
      <Link to='/'>StyleZone</Link>
      </h1>
      <div className='flex justify-end items-center px-4 text-md md:text-lg'>
        <Link to='/aboutus' className='uppercase px-4 py-2'>
          About Us
        </Link>
        {user1 ? (null) : (
          <Link to='/signup' className='uppercase px-4 py-2'>
          Sign up
        </Link>
        )}
        {
          user1 ? (
          <div onClick={logoutHandler} className='uppercase px-4 py-2' style={{"cursor":"pointer"}}>
          logout
          </div>
        ) : (
          
          <Link to='/login' className='uppercase px-4 py-2'>
            login
          </Link>
        )
        }
        
        {user1 ? (
          <Link to='/cart'>
          <Badge
            badgeContent={totalQuantity}
            color='primary'
            className='cursor-pointer'
          >
            <ShoppingCart />
          </Badge>
        </Link>
        ) : (null)}
        
      </div>
    </nav>
  );
};

export default Navbar;
