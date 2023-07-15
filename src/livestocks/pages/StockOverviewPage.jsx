import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"
// import trading from "../images/Trading.png"
export const StockOverviewPage = () => {
  return <div>
    <div className="text-center " >
      {/* <img src={trading} /> */}
      <h1>Stocks</h1>
    </div>
    <AutoComplete />
    <h2>Watchlist</h2>
    <StockList />
    <br></br>
    <br></br>
  </div>
}