import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import LocationGPSicon from '../../assets/icons/location-gps.svg';
import ThermostatIcon from '../../assets/icons/thermostat.svg';
import WindIcon from '../../assets/icons/wind.svg';
import HumidityIcon from '../../assets/icons/humidity.svg';

import Rainycloud from '../../assets/images/rainy-cloud.png';
import Rainy from '../../assets/images/rain.png';
import Lightining from '../../assets/images/lighting.png';
import Thunder from '../../assets/images/thunder.png';

export default function Home() {
    const navigation = useNavigation();

    const currentDate = new Date().toLocaleString('en-IN', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    const weatherData = [
        { time: "14.00", temp: "32°", image: Rainycloud },
        { time: "15.00", temp: "30°", image: Rainy },
        { time: "16.00", temp: "28°", image: Lightining },
        { time: "17.00", temp: "27°", image: Thunder },
        { time: "18.00", temp: "26°", image: Lightining },
        { time: "19.00", temp: "25°", image: Rainy },
        { time: "20.00", temp: "27°", image: Rainycloud },
        { time: "21.00", temp: "26°", image: Rainy },
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleItemPress = (index) => {
        setSelectedIndex(index);
    };

    const handleLocationPress = () => {
        navigation.navigate('Widget', { location: 'Kochi, Kerala' });
    };

    return (
        <LinearGradient colors={['#080745', '#075B94']} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.location}>Kochi, Kerala</Text>
                <TouchableOpacity onPress={handleLocationPress}>
                    <LocationGPSicon width={24} height={24} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.date}>{currentDate}</Text>

            <View style={styles.weatherImage}>
                <Image source={Lightining} style={styles.weatherImageStyle} />
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <View style={styles.statRow}>
                        <Text style={styles.statText}>Temp</Text>
                        <ThermostatIcon width={24} height={24} style={styles.shorticon} />
                    </View>
                    <Text style={styles.statValue}>28°</Text>
                </View>
                <View style={styles.stat}>
                    <View style={styles.statRow}>
                        <Text style={styles.statText}>Wind</Text>
                        <WindIcon width={24} height={24} style={styles.shorticon} />
                    </View>
                    <Text style={styles.statValue}>7.90 km/h</Text>
                </View>
                <View style={styles.stat}>
                    <View style={styles.statRow}>
                        <Text style={styles.statText}>Humidity</Text>
                        <HumidityIcon width={24} height={24} style={styles.shorticon} />
                    </View>
                    <Text style={styles.statValue}>84%</Text>
                </View>
            </View>

            <View style={styles.todayContainer}>
                <Text style={styles.todayText}>Today</Text>
                <TouchableOpacity 
                    style={styles.viewAllButton} 
                    onPress={() => navigation.navigate('Viewall')}
                >
                    <Text style={styles.buttonText}>View All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                {weatherData.map((item, index) => (
                    <TouchableOpacity 
                        style={styles.scrollItem} 
                        key={index} 
                        onPress={() => handleItemPress(index)}
                    >
                        <View style={[styles.firstItem, selectedIndex === index && styles.selectedItem]}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.firstItemText}>{item.time}</Text>
                                <Text style={styles.firstItemTemp}>{item.temp}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 14,
        marginTop: 46,
        marginBottom: 16,
    },
    location: {
        fontSize: 26,
        fontWeight: '400',
        textAlign: 'center',
        flex: 1,
        color: '#FFFFFF',
    },
    icon: {
        marginLeft: 8,
    },
    date: {
        fontSize: 14,
        marginLeft: -18,
        textAlign: 'center',
        marginBottom: 16,
        color: '#FFFFFF',
    },
    weatherImage: {
        height: 230,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    weatherImageStyle: {
        width: 230,
        height: 230,
        resizeMode: 'contain',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
        marginTop: 26,
    },
    stat: {
        alignItems: 'center',
    },
    statRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statText: {
        fontSize: 16,
        marginRight: 4,
        color: '#808080',
    },
    shorticon: {
        marginLeft: 4,
    },
    statValue: {
        fontSize: 17,
        marginLeft: -4,
        marginTop: 4,
        color: '#FFFFFF',
    },
    todayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
        marginTop: 26,
    },
    todayText: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    viewAllButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    buttonText: {
        color: '#007BFF',
        fontWeight: '300',
    },
    scrollContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    scrollItem: {
        marginRight: 10,
    },
    firstItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2B2D42',
        borderRadius: 12,
        paddingVertical: 9,
        paddingHorizontal: 13,
    },
    selectedItem: {
        backgroundColor: '#007BFF',
    },
    image: {
        width: 48,
        height: 50,
        marginRight: 8,
    },
    textContainer: {
        justifyContent: 'center',
    },
    firstItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    firstItemTemp: {
        fontSize: 14,
        color: '#FFFFFF',
    },
});
