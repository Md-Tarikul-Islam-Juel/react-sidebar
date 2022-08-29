import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineRight } from 'react-icons/ai';
import { BsFillImageFill } from 'react-icons/bs';
import { FaRobot } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';
import { IoMdContact } from 'react-icons/io';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import './SideBar.css';

export default function SideBar() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <nav className={toggle ? 'close sidebar' : 'sidebar'}>
                <header className="header">
                    <div className="image-text">
                        <span className="image">TIJ</span>

                        <div className="text logo-text">
                            <span className="name">Tarikul Islam Juel</span>
                            <span className="profession">Web developer</span>
                        </div>
                    </div>

                    <AiOutlineRight
                        className="toggle"
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    />
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                                <Link to="/" className="a">
                                    <AiOutlineHome className="icon" />
                                    <span className="text nav-text">Home</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/" className="a">
                                    <BsFillImageFill className="icon" />
                                    <span className="text nav-text">Galary</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/" className="a">
                                    <FaRobot className="icon" />
                                    <span className="text nav-text">Project</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/" className="a">
                                    <ImBook className="icon" />
                                    <span className="text nav-text">Publications</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/" className="a">
                                    <IoMdContact className="icon" />
                                    <span className="text nav-text">Contact Me</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <Link to="/" className="a">
                                <RiLogoutCircleLine className="icon" />
                                <span className="text nav-text">Logout</span>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}
