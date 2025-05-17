import React, { useState } from 'react';
const Theme_toggle = () => {

    const [isDark, setIsDark] = useState(false);

    const themeStyle = {
        backgroundColor: isDark ? 'orange' : 'beige',
        color: 'black',
        height: '100vh',
        textAlign: 'center',
        padding: '50px'
    };

    return (
        <div style={themeStyle}>
            <h1>{isDark ? 'Dark' : 'Light'} Mode</h1>
            <button onClick={() => setIsDark(!isDark)}>
                Toggle Theme
            </button>
        </div>
    );
};

export default Theme_toggle;