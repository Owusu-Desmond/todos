import { NavLink } from 'react-router-dom';

const Nav = () => (
  <aside className="side-nav">
    <ul className="side-nav-list">
      <li className="side-nav-item">
        <NavLink to="/" activeClassName="active">
          <span>Todo List</span>
        </NavLink>
      </li>
      <li className="side-nav-item">
        <NavLink to="/about" activeClassName="active">
          <span>About</span>
        </NavLink>
      </li>
    </ul>
  </aside>
);

export default Nav;
