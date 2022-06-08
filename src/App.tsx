import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/NewGame';
import { Board } from './pages/Board';
import { UserContextProvider } from './contexts/UserContext';
import { styled } from "./stitches.config";

const ResponsiveContainer = styled('div', {
  width: '100%',
  margin: 'auto',
  maxWidth: '700px',
  height: '100vh',
  display: 'flex',
  padding: '2rem',
  boxSizing: 'border-box'
})

function App() {
  return (
    <ResponsiveContainer>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="board" element={<Board />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ResponsiveContainer>
  );
}

export default App;
