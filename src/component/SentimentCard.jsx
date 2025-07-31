import Skeleton from "react-loading-skeleton";

const sentimentColors = {
  "Extreme Fear": "border-red-600 bg-red-900/50",
  Fear: "border-red-500 bg-red-800/50",
  Neutral: "border-yellow-500 bg-yellow-800/50",
  Greed: "border-green-500 bg-green-800/50",
  "Extreme Greed": "border-green-600 bg-green-900/50",
};

const SentimentCard = ({ sentiment, loading }) => {
  const bgClass = sentimentColors[sentiment?.value_classification] || "border-gray-600 bg-gray-800/50";

  return (
    <section
      className={`rounded-3xl p-6 border-4 shadow-xl transition duration-300 ${bgClass}`}
      aria-label="Market Sentiment"
    >
      {loading ? (
        <Skeleton height={280} borderRadius={24} />
      ) : sentiment ? (
        <>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Market Sentiment:
            <span className="text-yellow-300 font-bold">{sentiment.value_classification}</span>
          </h2>
          <p className="text-6xl font-extrabold text-center mb-2">{sentiment.value}</p>
          <p className="text-xs text-gray-400 text-center">
            Last update:
            {new Date(sentiment.timestamp * 1000).toLocaleString(undefined, {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </p>
        </>
      ) : (
        <p className="text-red-400 text-center">Unable to load sentiment data.</p>
      )}
    </section>
  );
};

export default SentimentCard;
