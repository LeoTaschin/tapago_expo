// colors.js

export const colors = {
    // Cores principais
    verdePrimary: '#00B907',
    verdeSecundary: '#4CAF50',

    // Cores neutras
    cinzaClaro: '#E0E0E0',
    cinzaEscuro: '#616161',
    preto: '#000000',
    branco: '#FFFFFF',

    // Cores de fundo
    backgroundLight: '#FFFFFF',
    backgroundDark: '#121212',

    // Cores de erro
    erroVermelho: '#E53935',
    erroLaranja: '#FFB300',

    // Modos de cor (light e dark)
    lightMode: {
        background: backgroundLight,
        text: preto,
        subtext: cinzaEscuro,
    },
    darkMode: {
        background: backgroundDark,
        text: branco,
        subtext: cinzaClaro,
    },
};
