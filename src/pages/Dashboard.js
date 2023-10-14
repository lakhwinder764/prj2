import { Box } from '@mui/system';
import React from 'react';
import {
  Typography,
  useTheme,
  Grid,
  TextField,
  InputAdornment,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { monthlyData } from '../data/newMochData';
import { tokens } from '../Theme';
import { CgNotes } from 'react-icons/cg';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { BsBucket } from 'react-icons/bs';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdAccountBalanceWallet } from 'react-icons/md';
import StatBox from '../components/Common/StatBox';
import ProgressCircle from '../components/Common/ProgressCircle';

const Dashboard = () => {
  console.info('Dashboard');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" flexWrap="wrap"></Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="$198k"
              subtitle="Earnings"
              newColor="rgba(79, 255, 145, 0.27)"
              progressIcon={
                <ArrowUpwardIcon
                  sx={{
                    color: 'rgba(27, 108, 54, 1)',
                    fontSize: '16px',
                  }}
                />
              }
              increase="37.8%"
              color="rgba(27, 108, 54, 1)"
              icon={
                <CurrencyExchangeIcon
                  sx={{
                    color: 'rgba(27, 108, 54, 1)',
                    fontSize: '46px',
                  }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="$2.4k"
              subtitle="Orders"
              increase="2%"
              newColor="rgba(207, 191, 242, 0.8)"
              progressIcon={
                <ArrowDownwardIcon
                  sx={{
                    color: 'rgba(236, 0, 0, 0.8)',
                    fontSize: '16px',
                  }}
                />
              }
              color="rgba(236, 0, 0, 0.8)"
              icon={
                <CgNotes
                  style={{
                    color: 'rgba(68, 5, 215, 0.8)',
                    width: '50px',
                    height: '50px',
                  }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="$2.4k"
              subtitle="Balance"
              increase="2%"
              newColor="rgba(198, 226, 251, 0.8)"
              progressIcon={
                <ArrowDownwardIcon
                  sx={{
                    color: 'rgba(236, 0, 0, 0.8)',
                    fontSize: '16px',
                  }}
                />
              }
              color="rgba(236, 0, 0, 0.8)"
              icon={
                <MdAccountBalanceWallet
                  style={{
                    color: 'rgba(4, 136, 252, 0.8)',
                    width: '50px',
                    height: '50px',
                  }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="$89k"
              subtitle="Total Sales"
              newColor="rgba(251, 178, 180, 0.8)"
              progressIcon={
                <ArrowUpwardIcon
                  sx={{
                    color: 'rgba(27, 108, 54, 1)',
                    fontSize: '16px',
                  }}
                />
              }
              increase="11%"
              color="rgba(27, 108, 54, 1)"
              icon={
                <BsBucket
                  style={{
                    color: 'rgba(222, 0, 7, 0.8)',
                    fontSize: '46px',
                  }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                py: { xs: 1, md: 1 },
                px: { xs: 1, md: 2 },
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={colors.grey[100]}
                >
                  Overview
                </Typography>
                <Typography variant="subtitle" color={colors.grey[800]}>
                  Monthly Earning
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography
                  sx={{
                    color: colors.grey[700],
                  }}
                >
                  Quarterly
                </Typography>
                <MdKeyboardArrowDown
                  style={{
                    width: 30,
                    height: 30,
                    color: colors.grey[700],
                    marginLeft: '10px',
                  }}
                />
              </Box>
            </Box>

            <Box height="300px" mt="-20px">
              <Box display="flex" flexGrow={1} justifyContent="space-around">
                {monthlyData?.map((item) => (
                  <Box
                    display="flex"
                    flexDirection="column-reverse"
                    alignItems="center"
                  >
                    <Typography variant="subtitle" mt={1.5}>
                      {item?.month}
                    </Typography>
                    <Box
                      height={`${item?.value}px`}
                      backgroundColor={item?.color}
                      mt={4}
                      pt={3}
                      sx={{
                        width: { xs: 10, sm: 20, md: 30, lg: 40 },
                      }}
                      borderRadius={2}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            mt="25px"
          >
            <Typography variant="h3" fontWeight="bold" pt={2} pl={2}>
              Customers
            </Typography>
            <Typography
              variant="subtitle"
              sx={{
                color: colors.grey[700],
              }}
              pt={2}
              pl={2}
            >
              Customers that buy products
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={4.8}
            >
              <ProgressCircle size="200" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                py: { xs: 1, md: 1 },
                px: { xs: 1, md: 2 },
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={colors.grey[100]}
                >
                  Product Sell
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                // flexGrow={1}
                justifyContent="space-between"
              >
                <TextField
                  placeholder="Search"
                  color="primary"
                  sx={{
                    background: colors.primary[400],
                    pt: 1,
                    pl: 2,
                    height: 45,
                  }}
                  // fullWidth
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
                <Typography
                  sx={{
                    color: colors.grey[700],
                  }}
                >
                  Last 30 days
                </Typography>
                <MdKeyboardArrowDown
                  style={{
                    width: 30,
                    height: 30,
                    color: colors.grey[700],
                    marginLeft: '10px',
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              flexGrow={1}
              alignItems="center"
              sx={{
                py: { xs: 1, md: 1 },
                px: { xs: 1, md: 2 },
              }}
            >
              <Box>
                <Typography variant="h6" color={colors.grey[700]}>
                  Product Name
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                flexGrow={1}
              >
                <Typography
                  sx={{
                    color: colors.grey[700],
                    pr: { xs: 3.5, md: 8 },
                  }}
                >
                  Stock
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[700],
                    pr: { xs: 3.5, md: 8 },
                  }}
                >
                  Price
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[700],
                  }}
                >
                  Total Sales
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider flexItem />
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              flexGrow={1}
              alignItems="center"
              sx={{
                py: { xs: 1, md: 1 },
                px: { xs: 1, md: 2 },
              }}
            >
              <Box
                display="flex"
                sx={{
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'flex-start', md: 'center' },
                }}
              >
                <img
                  alt="no img"
                  src="/ocean1.jpg"
                  width={65}
                  height={45}
                  style={{
                    borderRadius: '4px',
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{
                    ml: { xs: 0, md: 3 },
                    mt: { xs: 3, md: 0 },
                  }}
                >
                  <Typography variant="h5" fontWeight="bold">
                    Abstract 3D
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: colors?.grey[700],
                    }}
                  >
                    lorem ipsum dotor sim amet constructor finally done
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                flexGrow={1}
              >
                <Typography
                  fontWeight="bold"
                  sx={{
                    pr: { xs: 3, md: 5 },
                  }}
                >
                  32 in Stock
                </Typography>
                <Typography
                  fontWeight="bold"
                  sx={{
                    pr: { xs: 5.3, md: 10 },
                  }}
                >
                  $45.99
                </Typography>
                <Typography
                  fontWeight="bold"
                  sx={{
                    pr: { xs: 3, md: 3 },
                  }}
                >
                  20
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              flexGrow={1}
              alignItems="center"
              sx={{
                py: { xs: 1, md: 1 },
                px: { xs: 1, md: 2 },
              }}
            >
              <Box
                display="flex"
                sx={{
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'flex-start', md: 'center' },
                }}
              >
                <img
                  src="/ocean2.jpg"
                  width={65}
                  height={45}
                  style={{
                    borderRadius: '4px',
                  }}
                  alt="no img"
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{
                    ml: { xs: 0, md: 3 },
                    mt: { xs: 3, md: 0 },
                  }}
                >
                  <Typography variant="h5" fontWeight="bold">
                    Sarphens Illustration
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: colors?.grey[700],
                    }}
                  >
                    lorem ipsum dotor sim amet constructor finally done
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                flexGrow={1}
              >
                <Typography
                  fontWeight="bold"
                  sx={{
                    pr: { xs: 3, md: 5 },
                  }}
                >
                  32 in Stock
                </Typography>
                <Typography
                  fontWeight="bold"
                  sx={{
                    pr: { xs: 5.3, md: 10 },
                  }}
                >
                  $45.99
                </Typography>
                <Typography
                  fontWeight="bold"
                  sx={{
                    pr: { xs: 3, md: 3 },
                  }}
                >
                  20
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
