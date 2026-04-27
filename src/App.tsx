import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Stake from './pages/Stake';
import Ecosystem from './pages/Ecosystem';
import Manifesto from './pages/Manifesto';
import Bridge from './pages/Bridge';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/swap" element={<Bridge />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
