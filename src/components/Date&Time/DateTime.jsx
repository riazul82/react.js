import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const DateTime = () => {
    const [dateTime, setDateTime] = useState('dd/mm/yyyy HH:MM XM');

    useEffect(() => {
        setInterval(() => {
            const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();

            let xm = (hour >= 12) ? 'PM' : 'AM';

            if(hour > 12) {
                hour -= 12;
            }

            if(hour < 10) {
                hour = '0' + hour;
            }

            if(minute < 10) {
                minute = '0' + minute;
            }

            if(second < 10) {
                second = '0' + second;
            }

            if(day < 10) {
                day = '0' + day;
            }

            if(month < 10) {
                month = '0' + month;
            }

            const date_time = `${day}/${month}/${year} ${hour}:${minute}:${second} ${xm}`;

            setDateTime(date_time);

        }, 1000);
    }, [dateTime]);

    return (
        <div>
            <h1>{dateTime}</h1>
        </div>
    );
}

export default DateTime;