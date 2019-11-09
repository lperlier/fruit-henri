import React from 'react'
import { Link } from "gatsby"

import useMenu from 'hooks/use-menu';

import s from './Navbar.module.scss';

export const Navbar = (props) => {

  const menu = useMenu();

  return (
    <nav className={s.Nav}>
      <ul className={s.Nav__Main}>
        {menu.map(link => {

          let linkClass = s.Nav__link;
          if (link.type === 'button') linkClass = s.Nav__button;

          return (
            <li key={link.id} className={s.Nav__item}>
              <Link to={link.url} className={linkClass} activeClassName={ s.Nav__link__Active } onClick={props.onClick}>{link.title}</Link>
            </li>
          )

        })}
      </ul>
    </nav>
  )
}
