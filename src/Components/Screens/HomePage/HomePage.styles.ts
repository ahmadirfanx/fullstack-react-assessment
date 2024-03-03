import { SxProps, Theme } from '@mui/material';

export const mainBoxStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
    paddingTop: '64px',
};

export const buttonStyle: SxProps<Theme> = {
    mt: 4,
    mb: 2,
};

export const footerTextStyle: SxProps<Theme> = {
    mt: 'auto',
    mb: 2,
    display: 'flex',
    alignItems: 'center'
};

export const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};