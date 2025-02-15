import '../style/navbar.scss';
import Select from '../page/select';  // Select komponentini import qilish
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown holatini boshqarish
    const dropdownRef = useRef(null); // Dropdown elementiga ishora
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Agar bosilgan joy dropdown ichida bo'lmasa, dropdownni yopamiz
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        // Faqat dropdown ochilganda listener qo'shish
        if (isDropdownOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => document.removeEventListener("click", handleClickOutside);
    }, [isDropdownOpen]);

    const toggleDropdown = (event) => {
        event.stopPropagation(); // Tugma bosilganda event yuqoriga ketmasligi uchun
        setIsDropdownOpen(prevState => !prevState); // Dropdownni ochish yoki yopish
    };

    return (
        <div className={`boss ${isScrolled ? "scrolled" : ""}`}>
            <div className="home">
                <div className="icon">
                    <a href="">Animedia.Tv</a>

                    {/* Katalog tugmasi */}
                    <button onClick={toggleDropdown} ref={dropdownRef}>
                        Katalog <i className="fa-solid fa-chevron-down"></i>
                    </button>

                    {/* Dropdown faqat `isDropdownOpen` true bo‘lsa ochiladi */}
                    {isDropdownOpen && <Select />}
                </div>

                <div className="car">
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Qidiruv" />
                    </div>

                    <div className="profile">
                        <a href=""><i className="fa-regular fa-bookmark"></i></a>
                        <div className="kirish">
                            <Link to="/login"><i className="fa-regular fa-circle-user"></i> Kirish</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
