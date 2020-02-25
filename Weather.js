import React from "react"
import propTypes from "prop-types"
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions = {
    Haze: {
        iconName:"weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Thunderstorm: {       
        iconName:"weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"]
    },
    Rain: {
        iconName:"weather-rainy",
        gradient:["#89F7FE", "#005BEA"]
    },
    Snow: {
        iconName:"weather-snowy",
        gradient:["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere: {
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"]
    },
    Clear: {
        iconName:"weather-sunny",
        gradient:["#FF7300", "#FEF253"]
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
    },
    Mist: {
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"]
    },
    Dust: {
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"]
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={Styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={Styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color="white" 
                />
                <Text style={Styles.temp}>{temp}°</Text>
            </View>
            <View style={{...Styles.halfContainer, ...Styles.textContainer}}>
                <Text style={Styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={Styles.subTitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}


Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired,
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color:"white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color:"white",
        fontWeight: "600",
        fontSize: 24        
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems:"flex-start"
    }
})