import Link from 'next/link'
import Index from '../pages'
import styled from 'styled-components'

const NavContainer = styled.nav`
    background: black;
    color: #eee;
    padding: .5em;
    border: 0em;
    margin: 0em;
    display: flex;
    position: sticky;
    align-items: center;
    border-radius: 15px;



    .botguy{
        margin-right: auto;
    }
    .links{
        margin-left: auto;
        display: flex;
    }
    .link{
        text-decoration: none;
        color: white;
    }
    .logo{
        text-decoration: none;
        color: white;
        font-size: 1.5em;
    }
    ul{
        list-style: none;
    }
    a{
        padding: .5em;
    }
`;

const Nav = () => (
    <NavContainer>
        <div className="botguy">
            <Link href="/">
                <a className="logo">Rockville Robotics</a>
            </Link>
        </div>
        <ul className="links">
            <li>
                <Link href="/">
                    <a className="link">Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a className="link">About Me</a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a className="link">Projects</a>
                </Link>
            </li>
        </ul>
        
    </ NavContainer>
);

export default Nav;
