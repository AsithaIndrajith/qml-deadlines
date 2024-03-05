import React from 'react';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';

const Footer = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} <Link color="inherit" target="_blank" href="https://asithaindrajith.live/">
                Asitha
            </Link>. All rights reserved.
        </Typography>
    );
};

export default Footer;