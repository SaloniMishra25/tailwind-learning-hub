import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

// Import topics
import GettingStarted from "./components/topics/GettingStarted";
import Typography from "./components/topics/Typography";
import Background from "./components/topics/Backgrounds";
import Borders from "./components/topics/Borders";
import Spacing from "./components/topics/Spacing";
import Layout from "./components/topics/Layout";
import Transitions from "./components/topics/Transitions";
import TransformAnimation from "./components/topics/TransformAnimation";
import FlexboxGrid from "./components/topics/FlexboxGrid";
import Tables from "./components/topics/Tables";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        {/* Sidebar */}
        <Navigation />

        {/* Content */}
        <div className="ml-64 p-6 w-full">
          <Routes>
            <Route path="/" element={<GettingStarted />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/background" element={<Background />} />
            <Route path="/borders" element={<Borders />} />
            <Route path="/spacing" element={<Spacing />} />
            <Route path="/layout" element={<Layout />} />

            <Route path="/transitions" element={<Transitions />} />
            <Route path="/transform" element={<TransformAnimation />} />
            <Route path="/flexgrid" element={<FlexboxGrid />} />
            <Route path="/table" element={<Tables />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
