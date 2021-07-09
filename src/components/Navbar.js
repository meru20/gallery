import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light' >
      <Link className='navbar-brand' to='/'>
        <img src='https://www.graphicsprings.com/filestorage/stencils/a8791152380afe4415fe6f45abf4e26d.png' width ='70' height='50'></img>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav ml-auto'>
          <Link className='nav-link' to='/'>
            Lipstick
          </Link>

          <Link className='nav-link' to='/products/:productid'>
            Details
          </Link>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;