import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';

import { CallForPapersContext } from '../context/callForPapers';

import Countdown from './countdown';

export default function CallForPaperList() {
    const { callForPapers } = React.useContext(CallForPapersContext);

    return (
        <List>
            {callForPapers.map((callForPaper, key) => (
                <React.Fragment key={key}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <ListItemText
                                primary={<Link color="inherit" target='_blank' rel="noopener" href={callForPaper.link}>
                                    {callForPaper.title}
                                </Link>}
                                secondary={
                                    <React.Fragment>
                                        <Typography variant='button' display="block">
                                            {callForPaper['publishingType']}
                                        </Typography>
                                        <Typography variant='body1' display="block">
                                            {callForPaper['publishingTitle']}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Countdown deadline={callForPaper.submissionDeadline} />
                            <Typography>Deadline: {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(callForPaper.submissionDeadline))}</Typography>
                        </Grid>
                    </Grid>
                    <Divider variant="inset" component="li" />
                </React.Fragment >
            ))
            }
        </List >
    );
}