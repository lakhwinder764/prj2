import React, { useState } from 'react';
import { ColorModeContext, useMode } from './Theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AppBar from './components/Common/AppBar';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Common/Sidebar';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [disp, setdisp] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} disp={disp} />
          <main className="content">
            <AppBar setIsSidebar={setIsSidebar} setdisp={setdisp} disp={disp} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
