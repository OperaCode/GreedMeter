import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinsTable = ({ coins, search, setSearch, loadingCoins }) => {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-[600px] rounded-3xl shadow-xl border border-gray-700/50 overflow-hidden flex flex-col bg-gray-800/50">
      {/* Search */}
      <div className="px-4 pt-4">
        <input
          type="search"
          aria-label="Search coins"
          placeholder="Search coins..."
          className="mb-4 p-3 w-full rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-sm transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          spellCheck="false"
          autoComplete="off"
        />
      </div>

      {/* Table */}
      <div className="overflow-y-auto flex-grow">
        <table className="w-full text-left text-gray-100 border-collapse table-fixed">
          <thead className="bg-gray-900/80 uppercase text-gray-400 tracking-wide sticky top-0 z-10">
            <tr>
              <th className="p-4 w-2/5">Name</th>
              <th className="p-4 w-1/5">Price (USD)</th>
              <th className="p-4 w-1/5">24h Change</th>
              <th className="p-4 w-1/5">7d Trend</th>
            </tr>
          </thead>
          <tbody>
            {loadingCoins ? (
              [...Array(8)].map((_, i) => (
                <tr key={i} className="border-t border-gray-700 bg-gray-900/50 animate-pulse">
                  <td className="p-4 flex items-center gap-4">
                    <Skeleton circle width={32} height={32} />
                    <Skeleton width={120} height={20} />
                  </td>
                  <td className="p-4"><Skeleton width={80} height={20} /></td>
                  <td className="p-4"><Skeleton width={50} height={20} /></td>
                  <td className="p-4"><Skeleton width={80} height={20} /></td>
                </tr>
              ))
            ) : filteredCoins.length > 0 ? (
              filteredCoins.map((coin) => (
                <tr
                  key={coin.id}
                  className="border-t border-gray-700 hover:bg-gray-700/50 transition cursor-pointer"
                >
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={coin.image}
                      alt={`${coin.name} logo`}
                      className="w-8 h-8 rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-base">{coin.name}</p>
                      <p className="text-xs text-gray-400 uppercase">{coin.symbol}</p>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-base">
                    ${coin.current_price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td
                    className={`p-4 font-semibold text-base ${
                      coin.price_change_percentage_24h >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td className="p-4">
                    {coin.sparkline_in_7d?.price ? (
                      <Sparklines
                        data={coin.sparkline_in_7d.price}
                        limit={30}
                        width={100}
                        height={24}
                        margin={6}
                      >
                        <SparklinesLine
                          color={
                            coin.price_change_percentage_24h >= 0
                              ? "limegreen"
                              : "red"
                          }
                          style={{ strokeWidth: 2, fill: "none" }}
                        />
                      </Sparklines>
                    ) : (
                      <span className="text-gray-500 text-sm">No data</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-12 text-center text-gray-400 text-base">
                  No coins match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinsTable;
