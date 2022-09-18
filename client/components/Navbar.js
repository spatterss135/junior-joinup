import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  height: 80px;
  background: #262728;
`;

export default function Navbar() {
  return (
  <header className="flex-row px-1">
    <nav>
    <Link href="/">
    <a>
    <h1>jr.JoinUp()</h1>
    </a>
    </Link>
      <ul className="flex-row nav-bar">
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/resources">
            <a>resources</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>profile</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  );
};
