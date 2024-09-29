import { View, Text, StyleSheet, ScrollView, Image, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import { useLoadFonts } from "../fonts/index";
import Swiper from 'react-native-swiper';

const logo = require("../../assets/img/Nagnamita.png");
const banner = require("../../assets/img/banner.jpeg");
const largeImage = require("../../assets/img/foto1.jpeg");
const smallImage1 = require("../../assets/img/foto2.jpeg");
const smallImage2 = require("../../assets/img/foto3.jpeg");
const smallImage3 = require("../../assets/img/foto4.jpeg");
const smallImage4 = require("../../assets/img/foto5.jpeg");

const suits = [
    {
        image: require("../../assets/img/suit1.png"),
        name: "Terno 2 Toni Sem Forro Gold - Marrom",
        price: "R$ 3.999,90",
    },
    {
        image: require("../../assets/img/suit2.png"),
        name: "Terno Super 120'S Slim Liso Gold - Cinza",
        price: "R$ 4.999,90",
    },
    {
        image: require("../../assets/img/suit3.png"),
        name: "Terno Super 120'S Slim Liso Gold - Preto",
        price: "R$ 4.999,90",
    },
    {
        image: require("../../assets/img/suit4.png"),
        name: "Terno Xadrez Brooksgold - Azul Claro",
        price: "R$ 4.599,90",
    },
    {
        image: require("../../assets/img/suit5.png"),
        name: "Terno Super 120'S Slim Liso Gold - Preto",
        price: "R$ 4.999,90",
    },
    {
        image: require("../../assets/img/suit6.png"),
        name: "Terno Marzoto Super 150’S Slim Cetim - Preto",
        price: "R$ 6.999,90",
    },
];

export default function Home() {
    const fontsLoaded = useLoadFonts();

    if (!fontsLoaded) {
        return (
            <View>
                <Text>Carregando fontes...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar />
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image source={logo} style={styles.logo} />
                    <View style={styles.menu}>
                        <TouchableOpacity><Text style={styles.menuItem}>Ternos</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.menuItem}>Coleções</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.menuItem}>Essenciais</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={styles.mainBanner}>
                    <Image source={banner} style={styles.bannerImage} />
                    <Text style={styles.bannerText}>Classe é uma escolha</Text>
                </View>

                <View style={styles.latestCollection}>
                    <Text style={styles.sectionTitle}>Últimas Coleções</Text>
                    <View style={styles.imageContainer}>
                        <View style={styles.largeImageContainer}>
                            <TouchableOpacity>
                                <Image source={largeImage} style={styles.largeImage} />
                                <View style={styles.textOverlay}>
                                    <Text style={styles.textOverlayText}>Compre já seu terno</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.smallImagesContainer}>
                            <Image source={smallImage1} style={styles.smallImage} />
                            <Image source={smallImage2} style={styles.smallImage} />
                            <Image source={smallImage3} style={styles.smallImage} />
                            <Image source={smallImage4} style={styles.smallImage} />
                        </View>
                    </View>
                </View>

                <View style={styles.onSale}>
                    <Text style={styles.sectionTitle}>Nossos Ternos à Venda</Text>
                    <View style={styles.carouselContainer}>
                        <Swiper style={styles.swiper} showsPagination={true}>
                            {suits.map((suit, index) => (

                                <View key={index} style={styles.slide}>
                                    <Image source={suit.image} style={styles.suitImage} />
                                    <TouchableOpacity>
                                        <Text style={styles.suitName}>{suit.name}</Text>
                                        <Text style={styles.suitPrice}>{suit.price}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </Swiper>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>© 2024 Nagnamita. Todos os direitos reservados.</Text>
                    <View style={styles.socialIcons}>
                        <Text style={styles.icon}>📱</Text>
                        <Text style={styles.icon}>📧</Text>
                        <Text style={styles.icon}>🌐</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#0B2B40',
    },
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
    mainBanner: {
        height: 400,
    },
    bannerImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
    },
    bannerText: {
        paddingTop: "65%",
        paddingLeft: "2%",
        color: 'white',
        fontSize: 42,
        textAlign: 'left',
        fontFamily: "Bodoni-Moda-SC",
    },
    sectionTitle: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: "Bodoni-Moda-SC",
        marginVertical: 50,
        color: 'white',
    },
    latestCollection: {
        paddingHorizontal: 10,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    largeImageContainer: {
        width: '50%',
        position: 'relative',
    },
    largeImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    textOverlay: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    textOverlayText: {
        color: 'white',
        fontSize: 18,
        fontFamily: "Bodoni-Moda-SC",
    },
    smallImagesContainer: {
        width: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    smallImage: {
        width: '50%',
        height: 150,
        resizeMode: 'cover',
    },
    carouselContainer: {
        backgroundColor: '#cabcba',
        height: 500,
        borderRadius: 10,
        overflow: 'hidden',
    },
    wrapper: {
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    suitImage: {
        width: '100%',
        height: '75%',
        resizeMode: 'contain',
    },
    suitName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    suitPrice: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
    },
    footer: {
        backgroundColor: '#0B2B40',
        padding: 20,
        alignItems: 'center',
    },
    footerText: {
        color: 'white',
        marginBottom: 10,
    },
    socialIcons: {
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 15,
        fontSize: 24,
        color: 'white',
    },
});
