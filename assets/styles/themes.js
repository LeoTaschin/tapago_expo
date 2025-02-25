import { colors } from './colors'; // Importe suas cores aqui

const getTheme = (isDarkMode) => {
    return {
        backgroundColor: isDarkMode ? colors.darkMode.background : colors.lightMode.background,
        textColor: isDarkMode ? colors.darkMode.text : colors.lightMode.text,
        subtextColor: isDarkMode ? colors.darkMode.subtext : colors.lightMode.subtext,
    };
};

export default getTheme;
