import './Header.scss';
import logo from './blasicon4.png';
import { Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    const title = () => {
        return (
            <div className="username">
                <span>ベイシス株式会社 DX推進部</span>
                <br />
                <span>韓廷旻&nbsp;&nbsp;(管理者)</span>
            </div>
        );
    };

    return (
        <Navbar className="navbar justify-content-between">
            <div className="logo">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" className="logo" />
                </Navbar.Brand>
            </div>
            <div className="dropdown">
                <NavDropdown title={title()}>
                    <NavDropdown.Item href="#action/3.1" className="item">
                        お知らせ
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="divider" />
                    <NavDropdown.Item href="#action/3.1" className="item">
                        プロフィール
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="divider" />
                    <NavDropdown.Item href="#action/3.1" className="item">
                        ログアウト
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
        </Navbar>
    );
};

export default Header;
