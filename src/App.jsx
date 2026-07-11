import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import TrackRecord from './pages/TrackRecord';
import Contact from './pages/Contact';
import WomenInTrade from './pages/WomenInTrade';
import News from './pages/News';
import ArticleAfCFTA from './pages/ArticleAfCFTA';
import ArticleECOWAS from './pages/ArticleECOWAS';
import ArticleFinance from './pages/ArticleFinance';
import ArticleT2T from './pages/ArticleT2T';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/track-record" element={<TrackRecord />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/women-in-trade" element={<WomenInTrade />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/afcfta" element={<ArticleAfCFTA />} />
        <Route path="/news/ecowas" element={<ArticleECOWAS />} />
        <Route path="/news/finance" element={<ArticleFinance />} />
        <Route path="/news/t2t" element={<ArticleT2T />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
