import { Link } from "react-router-dom";

const GreedMeterInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md shadow-lg py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 tracking-tight drop-shadow-md">
            GreedMeter Explained
          </h1>
          <Link
            to="/"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md text-sm font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
        <section className="bg-gray-800/50 rounded-2xl p-8 shadow-xl border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-6 text-green-400">
            What is the GreedMeter?
          </h2>
          <p className="text-gray-200 text-base leading-relaxed mb-6">
            The GreedMeter, based on the Crypto Fear & Greed Index, is a tool that measures the emotional sentiment of the cryptocurrency market. It provides a daily snapshot of whether investors are feeling fearful or greedy, scored on a scale from 0 (Extreme Fear) to 100 (Extreme Greed). This index helps investors understand market psychology and make informed decisions.
          </p>

          <h2 className="text-2xl font-semibold mb-6 text-green-400">
            How is the GreedMeter Calculated?
          </h2>
          <p className="text-gray-200 text-base leading-relaxed mb-6">
            The Fear & Greed Index is calculated using a combination of several market indicators, each weighted to reflect its impact on market sentiment. These indicators include:
          </p>
          <ul className="list-disc list-inside text-gray-200 text-base mb-6">
            <li>
              <span className="font-semibold">Market Volatility (25%):</span> Measures the current volatility of major cryptocurrencies like Bitcoin, compared to historical averages. High volatility often signals fear.
            </li>
            <li>
              <span className="font-semibold">Market Momentum/Volume (25%):</span> Analyzes trading volume and price momentum. Surging volumes with rising prices indicate greed, while low volumes may suggest fear.
            </li>
            <li>
              <span className="font-semibold">Social Media Sentiment (15%):</span> Tracks sentiment on platforms like X, looking at the tone and volume of crypto-related discussions.
            </li>
            <li>
              <span className="font-semibold">Surveys (15%):</span> Incorporates results from investor sentiment surveys, when available, to gauge market mood.
            </li>
            <li>
              <span className="font-semibold">Dominance (10%):</span> Examines the market share of major cryptocurrencies (e.g., Bitcoin dominance). A rise in dominance may indicate fear, as investors flock to safer assets.
            </li>
            <li>
              <span className="font-semibold">Trends (10%):</span> Analyzes Google Trends data for crypto-related search terms, reflecting public interest and sentiment.
            </li>
          </ul>
          <p className="text-gray-200 text-base leading-relaxed mb-6">
            These factors are aggregated and normalized to produce a single score, updated daily, which is then classified into five categories: Extreme Fear (0-24), Fear (25-44), Neutral (45-55), Greed (56-75), and Extreme Greed (76-100).
          </p>

          <h2 className="text-2xl font-semibold mb-6 text-green-400">
            What is the GreedMeter Useful For?
          </h2>
          <p className="text-gray-200 text-base leading-relaxed mb-6">
            The GreedMeter serves as a contrarian indicator for crypto investors, helping them navigate market cycles. Its key uses include:
          </p>
          <ul className="list-disc list-inside text-gray-200 text-base mb-6">
            <li>
              <span className="font-semibold">Identifying Market Extremes:</span> Extreme Fear may signal undervaluation and potential buying opportunities, while Extreme Greed can indicate overvaluation and possible corrections.
            </li>
            <li>
              <span className="font-semibold">Timing Investments:</span> Investors can use the index to gauge when sentiment is overly pessimistic or optimistic, aiding in strategic entry or exit points.
            </li>
            <li>
              <span className="font-semibold">Understanding Market Psychology:</span> The index provides insight into the emotional drivers of market movements, helping investors avoid irrational decisions.
            </li>
            <li>
              <span className="font-semibold">Risk Management:</span> By highlighting periods of high greed or fear, the GreedMeter helps investors adjust their risk exposure accordingly.
            </li>
          </ul>
          <p className="text-gray-200 text-base leading-relaxed">
            While the GreedMeter is a valuable tool, it should be used alongside other fundamental and technical analysis for well-rounded investment decisions. It’s a guide to market sentiment, not a definitive predictor of price movements.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GreedMeterInfo;