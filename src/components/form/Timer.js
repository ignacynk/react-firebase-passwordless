import React from 'react';
import { useStopwatch } from "react-timer-hook";

import { 
    FormLabel,
} from '@chakra-ui/react'

export const Timer = ({ register }) => {
    // TEST TIMER WITH RANDOM STARTING TIMER VALUE
    // const stopwatchOffset = new Date();
    // stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + 12300);
    const {
      seconds,
      minutes,
      hours,
    } = useStopwatch({ 
        autoStart: true,
        // TEST TIMER - LOOK ABOVE
        // offsetTimestamp: stopwatchOffset,
    });
    return (
<>
        <div style={{position: "fixed", bottom: '1vh', right: '1vw', display: 'inline-flex', zIndex: 1000}}>
            <input 
                name='time.seconds'
                value={seconds}
                ref={register} 
                style={{display: "none"}}
            />
            <input 
                name='time.minutes'
                value={minutes}
                ref={register} 
                style={{display: "none"}}
            />
            <input 
                name='time.hours'
                value={hours}
                ref={register} 
                style={{display: "none"}}
            />
            <FormLabel htmlFor="timer">
                Czas w formularzu: {hours !== 0 ? `${hours}:` : null}
                {minutes < 10 && minutes !==0 ? `0${minutes}` : `${minutes}`} 
                :{seconds < 10 ? `0${seconds}` : `${seconds}`} 
            </FormLabel>
        </div>
</>
    );
  }