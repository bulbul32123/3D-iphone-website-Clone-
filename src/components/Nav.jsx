import Logo from '../assets/images/logo.svg';
import Search from '../assets/images/search.svg';
import Store from '../assets/images/store.svg';
import { NavDatas } from '../data/index';

export default function Nav() {
    return (
        <nav className='nav-wrapper'>
            <div className="nav-content">
                <ul className='list-styled'>
                    <li>
                        <img src={Logo} alt="Apple" />
                    </li>

                    { NavDatas.map((item) => (
                        <li key={item.id}>
                            <a  className='link-styled'>{ item.name }</a>
                        </li>
                    ))
                    }

                    <li>
                        <img src={Search} alt="Search" />
                    </li>
                    
                    <li>
                        <img src={Store} alt="Store" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
