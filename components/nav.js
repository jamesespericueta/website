import Link from 'next/link'
import Index from '../pages'
import styled from 'styled-components'

const NavContainer = styled.nav`
    background: #333;
    color: #eee;
    padding: .5em;
    border: 0em;
    margin: 0em;
    display: flex;
    justify-content: center;

    .botguy{
        margin-right: auto;
    }
    a{
        text-decoration: none;
        color: white;
        font-size: 1.5em;
    }
`;

const Nav = () => (
    <NavContainer>
        <div className="botguy">
            <Link href="/">
                <a>Rockville Robotics</a>
            </Link>
        </div>

    </ NavContainer>
);

export default Nav;