import { useEffect, useState } from "react";
import axios from "axios";
import SentimentChart from "../component/SentimentChart";
import SentimentCard from "../component/SentimentCard";
import GreedMeterInfo from "../component/GreeMeterInfo";
import CoinsTable from "../component/CoinsTable";

const Home = () => {
  const [sentiment, setSentiment] = useState(null);
  const [sentimentHistory, setSentimentHistory] = useState([]);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loadingSentiment, setLoadingSentiment] = useState(true);
  const [loadingCoins, setLoadingCoins] = useState(true);


  // fetch data from api
  useEffect(() => {
    axios
      .get("https://api.alternative.me/fng/")
      .then((res) => setSentiment(res.data.data[0]))
      .finally(() => setLoadingSentiment(false));

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&sparkline=true"
      )
      .then((res) => setCoins(res.data))
      .finally(() => setLoadingCoins(false));

    axios
      .get("https://api.alternative.me/fng/?limit=30&format=json")
      .then((res) => setSentimentHistory(res.data.data.reverse()));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex flex-col">
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-md z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-green-400 text-2xl font-bold cursor-pointer">
            GreedMeter
          </div>
          <ul className="hidden md:flex space-x-8 text-gray-300 font-semibold">
            <li>
              <a href="/" className="hover:text-green-400 transition">
                Exit
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <header className="mt-18 bg-gray-950/80 backdrop-blur-md py-6 px-4 md:px-8 shadow">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 tracking-tight">
            GreedMeter
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-1">
            Track Fear & Greed in Crypto Markets
          </p>
        </div>
      </header>

      <main className="max-w-7xl w-full mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 flex flex-col gap-6">
          <SentimentCard sentiment={sentiment} loading={loadingSentiment} />
          <GreedMeterInfo />
          <section className="bg-gray-800/50 rounded-2xl shadow p-5 border border-gray-700">
            <SentimentChart data={sentimentHistory} />
          </section>
        </div>

        <section className="md:w-2/3 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            🚀 Top Coins
          </h2>
          <CoinsTable
            coins={coins}
            search={search}
            setSearch={setSearch}
            loadingCoins={loadingCoins}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
