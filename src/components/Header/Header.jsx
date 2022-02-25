import PropTypes from 'prop-types'
import { HiMenu, HiOutlineBell } from "react-icons/hi";
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = ({logo}) => {
  return (
    <header>
      <span> <HiMenu/> </span>
      <a href='/' className='logo'>{logo}</a>
      <span className="notifications"><HiOutlineBell/> </span>
    </header>
  )
}
Header.defaultProps = {
  logo:"Dashboard",
}

Header.propTypes = {
  logo: PropTypes.string,
}
export default Header