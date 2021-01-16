import { useState } from 'react';
import navStyles from '../Layout/Layout.module.css'
import Link from 'next/link';

const NavCollapse = ({ listItem, burgerVisability, setBurgerVisability }) => {
    const [open, setopen] = useState(false);
    return (
        <div>
            <li className={`${open ? navStyles.active : ''}`}>
                <p onClick={() => setopen(!open)}>{listItem.propertyName}</p>
                <div className={navStyles.NavList}>
                    {
                        listItem.cities.map((item,idx) => (
                            <Link href={`/projects/${listItem.isCommercial ? 'commerial' : 'noncommerial'}/${item.name.replace(' ','_')}`} key={idx}>
                                <div className={navStyles.NavListItem} onClick={() => {
                                    setBurgerVisability(!burgerVisability)
                                    setopen(!open)
                                }}>{item.name}</div>
                            </Link>
                        ))
                    }
                </div>
            </li>
        </div>
    )
}
export default NavCollapse