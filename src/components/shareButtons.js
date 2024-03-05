// ShareButtons.js
import React from 'react';
import queryString from 'query-string';
import { Grid, IconButton } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const ShareButtons = ({ content }) => {
    const handleShare = (platform) => {
        switch (platform) {
            case 'twitter':
                shareOnTwitter();
                break;
            case 'linkedin':
                shareOnLinkedIn();
                break;
            case 'facebook':
                shareOnFacebook();
                break;
            case 'github':
                starGithub();
                break;
            default:
                break;
        }
    };

    const shareOnTwitter = () => {
        const text = encodeURIComponent(content);
        const url = `https://twitter.com/intent/tweet?text=${text}`;
        window.open(url, '_blank');
    };

    const shareOnLinkedIn = () => {
        const text = encodeURIComponent(content);
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${text}`;
        window.open(url, '_blank');
    };

    const shareOnFacebook = () => {
        const params = queryString.stringify({
            u: window.location.href,
            quote: content,
        });
        const url = `https://www.facebook.com/sharer/sharer.php?${params}`;
        window.open(url, '_blank');
    };

    const starGithub = () => {
        window.open('https://github.com/AsithaIndrajith/qml-deadlines', '_blank');
    }

    return (
        <Grid container direction='row' spacing={1}>
            <IconButton size='small' onClick={() => handleShare('twitter')} aria-label="X post">
                <XIcon />
            </IconButton>
            {/* <IconButton size='small' onClick={() => handleShare('linkedin')} aria-label="Linkedin post">
                <LinkedInIcon />
            </IconButton> */}
            {/* <IconButton size='small' onClick={() => handleShare('facebook')} aria-label="Facebook post">
                <FacebookIcon />
            </IconButton> */}
            <IconButton size='small' onClick={() => handleShare('github')} aria-label="Github star">
                <GitHubIcon />
            </IconButton>
        </Grid>
    );
};

export default ShareButtons;