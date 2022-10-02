import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState();

    useEffect(() => {
        setInterval(() => {
            let date = new Date();

            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();

            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();

            let xm = (hour >= 12) ? 'PM' : 'AM';

            if(hour === 0){
                hour = 12;
            }

            if(hour > 12){
                hour -= 12;
            }

            if(hour < 10){
                hour = '0' + hour;
            }

            if(minute < 10){
                minute = '0' + minute;
            }

            if(second < 10){
                second = '0' + second;
            }

            if(day < 10){
                day = '0' + day;
            }

            if(month < 10){
                month = '0' + month;
            }

            let currentTime = `${day}/${month}/${year} ${hour}:${minute}:${second} ${xm}`;

            setTimer(currentTime);
        }, 1000);
    }, []);

    return (
        <div>
            <h1>{timer}</h1>
        </div>
    );
}

export default Timer;