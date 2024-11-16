import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Downarrow from '../../assets/icons/down-arrow.svg'; // Import your SVG icon
import Rainycloud from '../../assets/images/rainy-cloud.png';
import Rainy from '../../assets/images/rain.png';
import Lightining from '../../assets/images/lighting.png';
import Thunder from '../../assets/images/thunder.png';

const Viewall = () => {
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

    const getUpcomingWeather = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const fixedTemperatures = ["25°", "23°", "20°", "24°", "28°"]; // Fixed temperatures

        return Array.from({ length: 5 }, (_, i) => {
            const nextDay = new Date(today);
            nextDay.setDate(today.getDate() + i + 1);
            return {
                day: days[nextDay.getDay()],
                date: nextDay.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
                temp: fixedTemperatures[i], // Use fixed temperatures
                image: i % 2 === 0 ? Rainy : Rainycloud // Alternate images for demonstration
            };
        });
    };

    const upcomingWeather = getUpcomingWeather();

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showDays, setShowDays] = useState(false);
    const [selectedDay, setSelectedDay] = useState(1); // Default to 1 day

    const handleItemPress = (index) => {
        setSelectedIndex(index);
    };

    const toggleDays = () => {
        setShowDays(!showDays);
    };

    const handleDayPress = (day) => {
        setSelectedDay(day);
        setShowDays(false); // Close days menu after selection
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forecast Report</Text>
            <Text style={styles.todayText}>Today</Text>

            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContentContainer}
            >
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

            <View style={styles.nextForecastContainer}>
                <Text style={styles.nextForecastText}>Next Forecast</Text>
                <TouchableOpacity style={styles.dayButton} onPress={toggleDays}>
                    <Text style={styles.buttonText}>{selectedDay} day</Text>
                    <Downarrow width={24} height={24} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {showDays && (
                <View style={styles.daysContainer}>
                    {Array.from({ length: 4 }, (_, i) => (
                        <TouchableOpacity 
                            key={i} 
                            style={styles.dayTouchable} 
                            onPress={() => handleDayPress(i + 1)} // Set selected day
                        >
                            <Text style={styles.dayText}>{`${i + 1} day`}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}

            <View style={styles.forecastContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {upcomingWeather.slice(0, selectedDay).map((item, index) => (
                        <View key={index} style={styles.forecastItem}>
                            <View style={styles.leftSide}>
                                <Text style={styles.dayText}>{item.day}</Text>
                                <Text style={styles.dateText}>{item.date}</Text>
                            </View>
                            <Text style={styles.tempText}>{item.temp}</Text>
                            <Image source={item.image} style={styles.forecastImage} />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#1E3A78',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 8,
    },
    todayText: {
        color: '#FFFFFF',
        fontSize: 20,
        marginBottom: 8,
        alignSelf: 'flex-start',
    },
    scrollContainer: {
        marginTop: 16,
        maxHeight: 80,
    },
    scrollContentContainer: {
        alignItems: 'center',
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
    nextForecastContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 8,
        justifyContent: 'space-between',
    },
    nextForecastText: {
        color: '#FFFFFF',
        fontSize: 20,
        marginRight: 8,
    },
    dayButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2B2D42',
        borderRadius: 12,
        padding: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        marginRight: 8,
    },
    icon: {
        width: 24,
        height: 24,
    },
    daysContainer: {
        marginTop: 8,
        backgroundColor: '#2B2D42',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    dayTouchable: {
        paddingVertical: 8,
    },
    dayText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginVertical: 2,
    },
    forecastContainer: {
        marginTop: 16,
        maxHeight: 400, // Optional: Set a maximum height for the scrollable area
    },
    forecastItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2B2D42',
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
    },
    leftSide: {
        flex: 1,
    },
    dateText: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    tempText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginRight: 20,
    },
    forecastImage: {
        width: 50,
        height: 50,
    },
});

export default Viewall;
