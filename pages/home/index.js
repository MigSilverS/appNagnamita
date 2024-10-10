import { View, Text, StyleSheet, ScrollView, Image, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import Swiper from 'react-native-swiper';
import { useLoadFonts } from "../fonts/index";
import suits from '../content/suits.json';
import banners from '../content/banner.json'; // Importação do JSON de banners
import imageMappings from "../content/imageMapping";
import { Header } from "../../components/header/header";

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
                <Header />

                {/* Banner */}
                <View style={styles.mainBanner}>
                    <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} autoplayTimeout={5} showsPagination={false}>
                        {banners.banners.map((banner, index) => (
                            <View key={index} style={styles.bannerSlide}>
                                <Image source={imageMappings[banner.image]} style={styles.bannerImage} />
                            </View>
                        ))}
                    </Swiper>
                </View>

                {/* Promotional Categories */}
                <View style={styles.promotionalSection}>
                    <TouchableOpacity style={styles.promoBox}>
                        <Text style={styles.promoText}>Escolhas casuais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.promoBox}>
                        <Text style={styles.promoText}>Ternos para Casamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.promoBox}>
                        <Text style={styles.promoText}>Para seu estilo pessoal</Text>
                    </TouchableOpacity>
                </View>

                {/* Product List */}
                <View style={styles.onSale}>
                    <Text style={styles.sectionTitle}>Nossos ternos a Venda</Text>
                    <View style={styles.productList}>
                        {suits.suits.map((item) => (
                            <View key={item.id} style={styles.slide}>
                                <Image source={imageMappings[item.image]} style={styles.suitImage} />
                                <View style={styles.suitDetails}>
                                    <Text style={styles.suitName}>{item.name}</Text>
                                    <Text style={styles.suitPrice}>{item.price}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Footer */}
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
        backgroundColor: 'white',
    },
    mainBanner: {
        height: 400,
        marginBottom: 20,
    },
    wrapper: {
        height: '100%',
    },
    bannerSlide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerImage: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
    },
    promotionalSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    promoBox: {
        width: '30%',
        height: 100,
        backgroundColor: '#0B2B40',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    promoText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Bodoni-Moda-SC',
    },
    onSale: {
        width: "100%",
    },
    sectionTitle: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Bodoni-Moda-SC-Bold',
        marginBottom: 20,
    },
    productList: {
        flexWrap: "wrap",
        justifyContent: 'center',
        gap: 50,
        flexDirection: "row",
    },
    slide: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
    },
    suitImage: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
    },
    suitDetails: {
        alignItems: 'center',
        marginTop: 10,
    },
    suitName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    suitPrice: {
        fontSize: 14,
        color: '#888',
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
