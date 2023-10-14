import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { tokens } from '../../Theme';
import { PiHandWavingFill } from 'react-icons/pi';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Topbar = ({ setdisp, disp }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        sx={{
          '@media(min-width: 600px)': {
            display: 'none',
          },
        }}
      >
        <IconButton
          type="button"
          sx={{ p: 1, pr: 0 }}
          onClick={() => setdisp(!disp)}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
      <Box display="flex" py={1} pr={1} pl={0} alignItems="center">
        <Typography variant="h4" fontWeight="bold">
          Hello lakhwinder
        </Typography>
        <PiHandWavingFill
          style={{
            width: 30,
            height: 30,
            color: '#E8BEAC',
          }}
        />
        <Typography variant="h4" fontWeight="bold">
          {' '}
          ,{' '}
        </Typography>
      </Box>
      <Box display="flex">
        <TextField
          placeholder="Search"
          color="primary"
          sx={{
            background: colors.primary[400],
            pt: 1,
            pl: 2,
            height: 45,
          }}
          fullWidth
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </Box>
    </Box>
  );
};

export default Topbar;
