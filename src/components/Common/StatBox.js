import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../../Theme';

const StatBox = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
  progressIcon,
  color,
  newColor,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="15px" display="flex">
      <Box display="flex" justifyContent="space-between">
        <Box
          width={100}
          height={100}
          backgroundColor={newColor}
          borderRadius={32}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" ml={2}>
        <Typography variant="subtitle" color="grey">
          {subtitle}
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>

        <Box display="flex" alignItems="center">
          {progressIcon}
          <Typography variant="h5" sx={{ color: color }}>
            {increase}
          </Typography>
          <Typography variant="subtitel2">this month</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
