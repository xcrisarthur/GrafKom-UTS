/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TableData from "./pages/tableData";
import ChartData from "./pages/chartData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tableData" element={<TableData/>}/>
        <Route path="/chartData" element={<ChartData/>}/>
        {/* <Route path="*" element={<TableData/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
