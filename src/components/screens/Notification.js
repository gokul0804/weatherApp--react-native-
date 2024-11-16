import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

// Sample images for notifications
import StormImage from '../../assets/images/thunder.png'; // Replace with your actual image path
import RainImage from '../../assets/images/rain.png'; // Replace with your actual image path
import AlertImage from '../../assets/images/rain.png'; // Replace with your actual image path
import WindImage from '../../assets/images/snow.png'; // Add a new image path
import HeatImage from '../../assets/images/rain.png'; // Add a new image path
import SnowImage from '../../assets/images/snow.png'; // Add a new image path

export default function Details() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
                {/* Notification Item */}
                <View style={styles.notification}>
                    <View style={styles.imageContainer}>
                        <Image source={StormImage} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.topicContainer}>
                            <Text style={styles.topic}>A Storm is approaching</Text>
                        </View>
                        <Text style={styles.description}>
                            A high frequency storm is likely to approach your city with a magnitude of 6.0. 
                            It is likely to deal damage to weak structures. Please stay safe indoors or under shelter.
                        </Text>
                    </View>
                </View>

                <View style={styles.notification}>
                    <View style={styles.imageContainer}>
                        <Image source={RainImage} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.topicContainer}>
                            <Text style={styles.topic}>Heavy Rainfall Expected</Text>
                        </View>
                        <Text style={styles.description}>
                            Heavy rainfall is expected in the area, with possible flash floods. 
                            Please avoid unnecessary travel and stay safe.
                        </Text>
                    </View>
                </View>

                <View style={styles.notification}>
                    <View style={styles.imageContainer}>
                        <Image source={AlertImage} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.topicContainer}>
                            <Text style={styles.topic}>Weather Alert Issued</Text>
                        </View>
                        <Text style={styles.description}>
                            A weather alert has been issued for your area. Please stay tuned for updates 
                            and take necessary precautions.
                        </Text>
                    </View>
                </View>

                <View style={styles.notification}>
                    <View style={styles.imageContainer}>
                        <Image source={WindImage} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.topicContainer}>
                            <Text style={styles.topic}>Strong Winds Expected</Text>
                        </View>
                        <Text style={styles.description}>
                            Strong winds are anticipated, which may cause disruptions. Secure loose objects outdoors.
                        </Text>
                    </View>
                </View>

                <View style={styles.notification}>
                    <View style={styles.imageContainer}>
                        <Image source={HeatImage} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.topicContainer}>
                            <Text style={styles.topic}>Heat Wave Alert</Text>
                        </View>
                        <Text style={styles.description}>
                            A heat wave is expected this week. Stay hydrated and avoid outdoor activities during peak hours.
                        </Text>
                    </View>
                </View>

                <View style={styles.notification}>
                    <View style={styles.imageContainer}>
                        <Image source={SnowImage} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.topicContainer}>
                            <Text style={styles.topic}>Snowfall Warning</Text>
                        </View>
                        <Text style={styles.description}>
                            Heavy snowfall is predicted. Prepare for travel disruptions and keep warm.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#1E3A78', // Match your app's background color
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
    },
    scrollContainer: {
        marginBottom: 20,
    },
    scrollContent: {
        paddingBottom: 20, // Additional padding at the bottom
    },
    notification: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Align items at the top
        backgroundColor: '#075B94', // Dark background for notifications
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
    },
    imageContainer: {
        backgroundColor: '#07072A', // Background color for the circular effect
        borderRadius: 25, // Half of the width/height for a perfect circle
        padding: 10, // Padding around the image
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 25,
        height: 25,
    },
    textContainer: {
        flex: 1,
        marginBottom: 10,
    },
    topicContainer: {
        marginTop: 10,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18, // Space between topic and description
    },
    topic: {
        fontSize: 18,
        fontWeight: 400,
        color: '#FFFFFF',
        lineHeight: 22, // Adjust line height for better spacing
        marginBottom: 10, 
    },
    description: {
        marginLeft: -40,
        fontSize: 15,
        color: '#CCCCCC', // Lighter text color for description
        marginBottom: 0, // Remove bottom margin to keep spacing tight
    },
});
