import React from 'react'
import { Link } from "gatsby"
import { graphql, StaticQuery } from 'gatsby'

import s from './Navbar.module.scss';

const Navbar = ({ data }) => (
  
  <>
    <nav className={s.Nav}>
      <ul className={s.Nav__Main}>
        {data.allMainMenuJson.edges.map(link => {
          
          let linkClass = s.Nav__link;
          if (link.node.type === 'button') linkClass = s.Nav__button;
          
          return (
            <li key={link.node.id} className={s.Nav__item}>
              <Link to={link.node.url} className={linkClass} activeClassName={ s.Nav__link__Active } partiallyActive={true}>{link.node.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  </>
  
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMainMenuJson {
          edges {
            node {
              id
              type
              url
              title
              type
            }
          }
        }
      }
    `}
    render={data => <Navbar data={data} {...props} />}
  />
)