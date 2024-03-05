import { Link, Typography } from '@mui/material';
import React from 'react';
import ShareButtons from './shareButtons';

const PageDetails = () => {

    return (
        <React.Fragment>
            <Typography marginTop={2} variant="h5" gutterBottom>
                Quantum Machine Learning Journal & Conferences Deadlines
            </Typography>
            <ShareButtons content={"Quantum Computing Journal & Conferences Deadlines. https://asithaindrajith.github.io/qml-deadlines/"} />
            <Typography>Countdowns to Quantum Machine Learning (QML) journal and conference deadlines.</Typography>
            <Typography>To add/update a conference, {" "}
                <Link color="inherit" target='_blank' href='https://github.com/AsithaIndrajith/qml-deadlines/pulls'>send in a pull request.</Link>
            </Typography>
            <Typography>
                Last update: March 6, 2024
            </Typography>
            <Typography>
                Inspired by: <Link color="inherit" target='_blank' href='https://sec-deadlines.github.io/'>Security and Privacy Conference Deadlines</Link>
            </Typography>
        </React.Fragment>
    )
}

export default PageDetails;