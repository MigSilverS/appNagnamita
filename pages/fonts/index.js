import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const loadFonts = async () => {
    try {
        await Font.loadAsync({
            'Bodoni-Moda-SC': require('../../assets/fonts/BodoniModaSC-VariableFont_opsz,wght.ttf'),
            'Bodoni-Moda-SC-Bold': require('../../assets/fonts/BodoniModaSC_9pt-Bold.ttf'),
        });
    } catch (error) {
        console.error('Erro ao carregar fontes:', error);
    }
};

export const useLoadFonts = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        loadFonts().then(() => setFontsLoaded(true));
    }, []);

    return fontsLoaded;
};
