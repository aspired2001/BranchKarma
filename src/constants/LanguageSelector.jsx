// LanguageSelector.js
import React from 'react';
import PropTypes from 'prop-types';

function LanguageSelector({ onChangeLanguage }) {
    const handleLanguageChange = (e) => {
        onChangeLanguage(e.target.value);
    };

    return (
        <select onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
        </select>
    );
}

// Prop types validation
LanguageSelector.propTypes = {
    onChangeLanguage: PropTypes.func.isRequired,
};

export default LanguageSelector;
