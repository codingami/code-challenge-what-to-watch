import React from 'react';

const Header = () => {
    return (
        <form>
            <label htmlFor = "header-search">
                <span className = "visually-hidden">Search Movies</span>
            </label>
            <input
                type = "text"
                id = "header-search"
                placeholder = "Search Movies"
                name = "s"
            />
            <button type = "submit">Search Movies</button>
        </form>
    )
};

export default Header;