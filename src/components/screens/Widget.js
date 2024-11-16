import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home = () => {
    const [backgroundColor, setBackgroundColor] = useState('#1E3A78'); // Default background color

    const widgets = [
        {
            location: "Kochi, Kerala",
            weather: "Thunder",
            temperature: "29°",
            image: require('../../assets/images/thunder.png'), // Replace with your actual image path
            style: styles.firstWidget,
            bgColor: '#4f5ba152', // Background color for this widget
        },
        {
            location: "Wayanad, Kerala",
            weather: "Snow",
            temperature: "10°",
            image: require('../../assets/images/snow.png'), // Replace with your actual image path
            style: styles.secondWidget,
            bgColor: '#A0C1D6', // Background color for this widget
        },
        {
            location: "Kozhikode, Kerala",
            weather: "Raining",
            temperature: "21°",
            image: require('../../assets/images/rain.png'), // Replace with your actual image path
            style: styles.thirdWidget,
            bgColor: '#5ab9e9', // Background color for this widget
        },
        {
            location: "Kollam, Kerala",
            weather: "Cloudy",
            temperature: "27°",
            image: require('../../assets/images/rainy-cloud.png'), // Replace with your actual image path
            style: styles.fourthWidget,
            bgColor: '#4f80a182', // Background color for this widget
        },
    ];

    const handleWidgetPress = (bgColor) => {
        setBackgroundColor(bgColor); // Update the background color state
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.title}>Widgets</Text>
            {widgets.map((widget, index) => (
                <TouchableOpacity key={index} style={[styles.widget, widget.style]} onPress={() => handleWidgetPress(widget.bgColor)}>
                    <>
                        <Image source={widget.image} style={styles.image} />
                        <View style={styles.widgetInfo}>
                            <Text style={styles.location}>{widget.location}</Text>
                            <Text style={styles.weather}>{widget.weather}</Text>
                        </View>
                        <Text style={styles.temperature}>{widget.temperature}</Text>
                    </>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 16,
    },
    widget: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16, // Rounded corners for all sides
        padding: 28, // Increased padding
        marginBottom: 16,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    widgetInfo: {
        flex: 1,
        marginLeft: 16,
    },
    location: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    weather: {
        fontSize: 16,
        color: '#808080', // Grey color for weather
    },
    temperature: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    firstWidget: {
        backgroundColor: '#1E3A78',
    },
    secondWidget: {
        backgroundColor: '#A0C1D6', // Light background
    },
    thirdWidget: {
        backgroundColor: '#5ab9e9', // Slightly transparent white background
    },
    fourthWidget: {
        backgroundColor: '#4f80a182', // Solid light gray background for fourth widget
    },
});

export default Home;
