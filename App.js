import React from 'react';
import { Alert } from 'react-native'
import Loading from './Loading'
import Weather from './Weather'
import * as Location from 'expo-location'
import axios from 'axios'
const API_KEY = "5cc1b07dccbf2ea2c061526df5bffe05"

export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async (latitude, longitude) => {
    const { data: {main: {temp}, weather} } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${37.2336}&lon=${127.201}&APPID=${API_KEY}&units=metric`
    )
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp: temp,
    })
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude)
    } catch (err) {
      Alert.alert("Can not find you.", "So sad")
    }
  }
  componentDidMount() {
    this.getLocation()
  }
  render() {
    const { isLoading, temp, condition } = this.state
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
  }
}