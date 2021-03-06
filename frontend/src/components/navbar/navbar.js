import React, { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'semantic-ui-react';
import './navbar.css';
import { loginModalOn, searchFlag, clearMessages } from '../../redux/actionCreators';
import Logo from '../../ElbrusBootCamp-logo-RGB.svg';
import Logout from '../logout/logout';
import Button from '@material-ui/core/Button';
import ShowDays from '../days/days';
import { Link } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();

  const userStatus = useSelector((state) => state.userInfo.userStatus);
  const openLoginModal = () => {
    dispatch(clearMessages());
    dispatch(loginModalOn());
  };
  const flag = useSelector((state) => {
    return state.data.flag
  })

  let allDays = useSelector((state) => {
    return state.data.data.allDays
  })
  const [search, setSearch] = useState('');

  function mapDays() {
    console.log(allDays);
    allDays = allDays.filter((day) => {
      let check = false;
      day.tags.forEach((tag) => {
        if (tag.toLowerCase().includes(search.toLowerCase())) {
          check = true;
        }
      });
      if (check === true) {
        return day;
      };
    })

    if (allDays.length > 0 && allDays.length !== 26) {
      dispatch(searchFlag(true));
    }
    else {
      dispatch(searchFlag(false));
    }
    console.log(flag);
  }

  mapDays()
  const Searchbar = () => (
    <Input className="searchBar"
      icon={{ name: 'search', circular: true, link: false }}
      placeholder='Search by tag'
      id='searchBar'
      onChange={event => {
        setSearch(event.target.value);
        mapDays();
      }}
    />
  );

  return (
    <>
      <div className="App">
        <header className="navbar">
          <Link to='/'>
            <img src={Logo} alt="Tut budet logo" className="logo" />
          </Link>
          <p className='projectName'>.лекторий</p>
          {userStatus ? Searchbar() : <></>}
          {userStatus === 'chieftain' &&
            <Link to='/chieftain'>
              <div className="ButtonAdminInterface">
                <Button id="ButtonAdminInterface">
                  Я тут главный
                </Button>
              </div>
            </Link>
          }
          {userStatus ?
            <Logout /> :
            <Button id="loginButton" className="dayButton" onClick={openLoginModal}>
              Login
            </Button>
          }
        </header>
      </div>
      {flag === true ?
        <>
          <div className='phaseContainer'>
            <ShowDays props={allDays} />
          </div>
        </>
        :
        <>
        </>
      }
    </>
  )
}

export default Navbar
