import React, { Component } from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import SearchItems from '../searchitem/SearchItems'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        searchNavigate(event.target.value);
    }
     const searchNavigate=(param)=>{
    param.trim().length>0? navigate(`/search/${param}`):navigate(`/movies`)
     }
    
      return (
        <div className={style.mainContainer}>
          <div className={style.mainContent}>
            <nav className={style.nav}>
              <ul className={style.navigation}>
                <li className={style.navigationTab}><Link to="/">Home</Link></li>
                <li className={style.navigationTab}><Link to="/tvshow">Tv Shows</Link></li>
                <li className={style.navigationTab}><Link to="/movies">Movies</Link></li>
                <li className={style.navigationTab}><Link to="newpopuler">New & Populer</Link></li>
                <li className={style.navigationTab}><Link to="aboutus">About us</Link></li>
              </ul>
            </nav>
            <div className={style.searchBar} >
          <input
            type="text"
            className={style.searchBox}
            value={searchQuery}
            name="search"
            id=""
            placeholder="Title, people, genres"
            onChange={handleSearch}
          />
          <FaSearch className={style.searchIcon} />
        </div>
        <div className={style.sgin}>
          <a>Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Header;





// export default class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchBox: ''
//         }
//     }
//     search = (event) => {
//         this.setState({
//             searchBox: event.target.value
//         })
//     }
//     render() {
//         return (
//             <div className={style.mainContainer}>
//                 <div className={style.mainContent}>
//                     <nav className={style.nav}>
//                         <ul className={style.navigation}>
//                             <li className={style.navigationTab}><Link to="/">Home</Link></li>
//                             <li className={style.navigationTab}><Link to="/tvshow">Tv Shows</Link></li>
//                             <li className={style.navigationTab}><Link to="/movies">Movies</Link></li>
//                             <li className={style.navigationTab}><Link to="newpopuler">New & Populer</Link></li>
//                             <li className={style.navigationTab}><Link to="aboutus">About us</Link></li>

//                         </ul>
//                     </nav>
//                     <div className={style.searchBar}>

//                         <input type="text" className={style.searchBox} value={this.state.searchBox} name="search" id="" placeholder='Title,pepole,genres' onChange={this.search} />
//                         <FaSearch className={style.searchIcon} />
//                     </div>
//                     <div className={style.sgin}>
//                         <a>Log In</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
