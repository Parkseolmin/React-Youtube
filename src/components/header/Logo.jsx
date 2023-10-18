import React from 'react';

function Logo() {
    return (
        <h1 className='header__logo'>
            <a href='/'>
                <em aria-hidden='true'></em>
                <span>
                    web
                    <br />
                    youtube
                </span>
            </a>
        </h1>
    );
}

export default Logo;
