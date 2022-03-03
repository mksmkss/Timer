//ReactNative component CopilotDemo
import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


const style = StyleSheet.create( {
    container: {    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    con: {
        alignItems: 'center',
    },
});

const Demo = () => {
  const [time, setTime] = React.useState(20);
  const [isTimerStart, setIsTimerStart] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(true);

    return(
    <View style={style.container}>
       <CountdownCircleTimer
    isPlaying={isPlaying}
    duration={time}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
    initialRemainingTime={15}
    size={200}
  >
    {({ remainingTime }) => 
    <View style={style.con}>
      <Text>{`remaining${remainingTime}`}</Text>
    </View>}
  </CountdownCircleTimer>
    </View>
    );
};


export default Demo;