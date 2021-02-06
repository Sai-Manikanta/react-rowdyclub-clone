import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../img/Logowhite.png';
import logoBlack from '../img/LogoBlack.png';
import cartWhite from '../img/cart-white.png';
import cartBlack from '../img/cart-black.png';

const Header = ({ theme }) => {
    const [displayLinks, setDisplayLinks] = useState(false);

    return ( 
        <header className="container" style={{backgroundColor: theme === 'white' ? '#C03332' : 'white' }}>
            <div className="logo-nav">
                <Link className="logo" to="/">
                    <img src={ theme == 'white' ? logoWhite : logoBlack } alt="logo" className="logo-img" />
                </Link>
                <nav>
                    <Link to="/shop" className="shop" style={{ color: theme == 'white' ? 'white' : '#C03332' }}>Shop</Link>
                    <Link to="/cart">
                        <img src={ theme == 'white' ? cartWhite : cartBlack } alt="cart" className="cart" />
                    </Link>
                    <button className="bars" onClick={() => setDisplayLinks(!displayLinks)} style={{ backgroundColor: displayLinks && 'black' }}>
                        <div className="bar" style={{ backgroundColor: displayLinks || theme == 'white' ? '#fff' : '#151515' }}></div>
                        <div className="bar" style={{ backgroundColor: displayLinks || theme == 'white' ? '#fff' : '#151515' }}></div>
                        <div className="bar" style={{ backgroundColor: displayLinks || theme == 'white' ? '#fff' : '#151515' }}></div>
                    </button>
                </nav>
            </div>
            <div className="hidden-links" style={{ display: displayLinks ? 'flex' : 'none' }}>
                <button onClick={() => setDisplayLinks(!displayLinks)} className="close-btn">X</button>
                <div className="left">
                    <Link to="/collections/new-drops">NEW DROPS</Link>
                    <Link to="/collections/bottoms">BOTTOMS</Link>
                    <Link to="/collections/rowdy-gear">ROWDY GEAR</Link>
                    <Link to="/collections/rowdy-x-toffle">Rowdy X Toffle</Link>
                </div>
                <div className="right">
                    <Link to="/collections/tees">TEES</Link>
                    <Link to="/collections/sweatshirts">SWEATSHIRTS</Link>
                    <Link to="/collections/slashed-prices">SLASHED PRICES</Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;