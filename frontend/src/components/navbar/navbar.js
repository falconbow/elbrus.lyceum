import React, { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Input } from 'semantic-ui-react';
import './navbar.css'
import { loginModalOn } from '../../redux/actionCreators'
import Logo from '../../ElbrusBootCamp-logo-RGB.svg'
import Logout from '../logout/logout'
import Button from '@material-ui/core/Button';
import HomePage from '../homepage/homepage'

import ShowDays, { handleClose, } from '../days/days'


import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function Navbar() {

  const dispatch = useDispatch()

  const userStatus = useSelector((state) => state.userInfo.userStatus)
  const openLoginModal = () => {
    dispatch(loginModalOn())
  };

  let allDays = useSelector((state) => {
    return state.data.data.allDays
  })
  const [search, setSearch] = useState('')

  function mapDays() {

    allDays = allDays.filter((day) => {
      if ((day.tags).includes(search)) {
        return day
      }
    })
  }

  mapDays()
  const Searchbar = () => (
    <Input className="searchBar"
      icon={{ name: 'search', circular: true, link: false }}
      placeholder='Search by tag'
      id='searchBar'
      onChange={event => {
        setSearch(event.target.value)
        mapDays()
      }}
    />
  )

  return (
    <>
      <div className="App">
        {}
        <div></div>
        {/* NAVBAR */}
        <header className="navbar">
          <Link to='/'>
            <img src={Logo} alt="Tut budet logo" className="logo" />
          </Link>
          <p className='projectName'>.lectorium</p>
          {Searchbar()}
          {userStatus ?
            <Logout /> :
            <Button id="loginButton" className="dayButton" onClick={openLoginModal}>
              Login
          </Button>
          }
        </header>
        <div className='searchField'>
          <ShowDays props={allDays} />
        </div>
      </div>
    </>
  )
}

export default Navbar
