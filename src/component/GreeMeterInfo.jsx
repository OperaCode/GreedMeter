import { Link } from "react-router-dom";

const GreedMeterInfo = () => {
  return (
    <section className="bg-gray-800/50 text-gray-200 rounded-2xl p-5 shadow-lg border border-gray-700 hover:shadow-xl transition">
      <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
        💡 What is GreedMeter?
      </h3>
      <p className="text-sm leading-snug text-gray-300 mb-4">
        A quick snapshot of market emotion — from{" "}
        <span className="text-red-400 font-medium">Extreme Fear</span> to{" "}
        <span className="text-green-400 font-medium">Extreme Greed</span>.
        It helps spot overbought or undervalued conditions.
      </p>
      <div className="flex gap-3 text-xs mb-4">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-600 rounded-full" />
          Greed
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          Neutral
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-600 rounded-full" />
          Fear
        </span>
      </div>
      <Link
        to="/greedmeter-info"
        className="inline-block px-3 py-1.5 bg-green-500 text-white text-xs rounded hover:bg-green-600 transition"
      >
        Learn More
      </Link>
    </section>
  );
};

export default GreedMeterInfo;
