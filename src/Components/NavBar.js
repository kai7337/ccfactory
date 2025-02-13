import '../Styles/NavBar.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Track last Y position

    // Handle scroll event to show or hide navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                // User is scrolling down and past 50px, hide the navbar
                setIsVisible(false);
            } else {
                // User is scrolling up, show the navbar
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        // Add event listener on mount
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleItemClick = (y_axis, event) => {
        event.preventDefault();

        window.scrollTo({
            top: y_axis,
            behavior: 'smooth'
        });
    };

    return (

        <div className={`NavBar ${!isVisible ? 'hidden' : ''}`}>
            <ul>
                <li><Link to="/"><a>Home</a></Link></li>
                <li><Link to="/About"><a>About</a></Link></li>
                <li><Link to="/People"><a>People</a></Link></li>
                <li><Link to="/Contact"><a>Contact</a></Link></li>
            </ul>
        </div>

    );
}

export default NavBar;
