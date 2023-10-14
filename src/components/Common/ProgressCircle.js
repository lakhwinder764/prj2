import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../Theme';

const ProgressCircle = ({ progress = '0.65', size = '40' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 45%, transparent 26%),
            conic-gradient(rgba(245, 0, 161, 0.71) 0deg 70deg,rgba(56, 3, 225, 0.8) 0deg ${angle}deg, ${colors.blueAccent[900]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      flexWrap="wrap"
    >
      <Typography variant="h3" fontWeight="bold">
        65%
      </Typography>
      <Typography variant="subtitle2" fontWeight="bold" mt={-1}>
        Total New
      </Typography>
      <Typography variant="subtitle2" fontWeight="bold" mt={-1}>
        Customers
      </Typography>
    </Box>
  );
};

export default ProgressCircle;
