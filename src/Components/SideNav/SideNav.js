import './SideNav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
function SideNav() {
  return (
    <section className='SideNav'>
        <nav>
            <ul>
                <li><a href='#'><FontAwesomeIcon icon={faHome} /> Home</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faMobileAlt} /> Mobile Phones</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faHeadphones} /> Mobile Accessories</a></li>
            </ul>
        </nav>
    </section>
  );
}

export default SideNav;
