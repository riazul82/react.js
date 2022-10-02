import React, { useState, useEffect } from 'react';

const TimerII = () => {
    const [date, setDate] = useState('dd/mm/yyyy');
    const [time, setTime] = useState('HH:MM:SS XM');

    useEffect(() => {
        setInterval(() => {
            const dt = new Date();

            let day = dt.getDate();
            let month = dt.getMonth() + 1;
            let year = dt.getFullYear();

            let hour = dt.getHours();
            let minute = dt.getMinutes();
            let second = dt.getSeconds();

            let xm = (hour >= 12) ? 'PM' : 'AM';

            hour = (hour > 12) ? hour - 12 : hour;
            hour = (hour === 0) ? 12 : hour;

            hour = (hour < 10) ? '0' + hour : hour;
            minute = (minute < 10) ? '0' + minute : minute;
            second = (second < 10) ? '0' + second : second;

            day = (day < 10) ? '0' + day : day;
            month = (month < 10) ? '0' + month : month;

            const newDate = `${day}/${month}/${year}`;
            const newTime = `${hour}:${minute}:${second} ${xm}`;

            setDate(newDate);
            setTime(newTime);

        }, 1000);

    }, [date, time]);

    return (
        <div>
            <p>{ time } { date }</p>
        </div>
    );
}

export default TimerII;