import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const logo = require("../../assets/img/Nagnamita.png");

export const Header = () => (
    <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.menu}>
            <TouchableOpacity><Text style={styles.menuItem}>Ternos</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.menuItem}>Coleções</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.menuItem}>Essenciais</Text></TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        elevation: 10,
        backgroundColor: '#0B2B40',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        zIndex: 1,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'center',
    },
    menu: {
        flexDirection: 'row',
    },
    menuItem: {
        marginHorizontal: 8,
        fontSize: 16,
        color: 'white',
        fontFamily: "Bodoni-Moda-SC",
    },

})