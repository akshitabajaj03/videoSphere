import './App.css';
import { BrowsweRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';

import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from './components'

const App=()=> (
  <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
       <Navbar/>
       <Routes>
        <Route exact path="/videoSphere" element={<Feed/>} />
        <Route exact path="/video/:id" element={<VideoDetails/>} />
        <Route exact path="/channel/:id" element={<ChannelDetails/>} />
        <Route exact path="/search/:searchTerm" element={<SearchFeed/>} />
       </Routes>
      </Box>
  </BrowserRouter>
);

export default App;
