import { Typography } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';

const Countdown = ({ deadline }) => {

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    const calculateTimeRemainingCallback = useCallback(calculateTimeRemaining, [deadline]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemainingCallback());
        }, 1000);

        return () => clearInterval(interval);
    }, [calculateTimeRemainingCallback]);

    function calculateTimeRemaining() {
        const now = new Date();
        const endTime = new Date(deadline);

        const timeDiff = endTime - now;
        if (timeDiff <= 0) {
            // Deadline has passed
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return (
        <div>
            <Typography display="block">
                {`${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`}
            </Typography>
        </div>
    );
};

export default Countdown;