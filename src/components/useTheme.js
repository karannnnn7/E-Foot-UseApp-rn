import React, { useState } from "react";

const useTheme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    };


    return { isDarkTheme, toggleTheme };
};

export default useTheme;