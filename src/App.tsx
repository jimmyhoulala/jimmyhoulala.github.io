import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import ResearchPage from "./pages/ResearchPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<WorkExperiencePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
