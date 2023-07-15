import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StockOverviewPage } from "./pages/StockOverviewPage"
import { StockDetailPage } from "./pages/StockDetailPage"
// import './App.css'
import { WatchListContextProvider } from "./context/watchListContext"


export default function Livestocks() {
  return (
    <main className="container">
      <WatchListContextProvider>
        
      <StockOverviewPage />

            {/* <Route path="/" element={<StockOverviewPage />} /> */}
            {/* <Route path="/detail/:symbol" element={<StockDetailPage />} /> */}
          
      </WatchListContextProvider>
    </main>
  )
}
