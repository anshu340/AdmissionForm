import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admission from './Admission';
import ThankYou from './Thankyou';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admission" element={<Admission />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
