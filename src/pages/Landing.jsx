

import React from "react";
import image from "../assets/coin.jpg"

const features = [
  {
    title: "Real-Time Sentiment",
    description:
      "Get live updates on the crypto market mood using the Fear & Greed Index.",
    icon: (
      <svg
        className="w-8 h-8 text-green-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Top Coin Insights",
    description:
      "Track price and 24h change of the most popular cryptocurrencies.",
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h4l3 6 4-12 3 6h4"
        />
      </svg>
    ),
  },
  {
    title: "Actionable Alerts",
    description:
      "Stay ahead with notifications when market sentiment shifts dramatically.",
    icon: (
      <svg
        className="w-8 h-8 text-red-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
  },
];

const Landing = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-md z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-green-400 text-2xl font-bold cursor-pointer">
            GreedMeter
          </div>
          <ul className="hidden md:flex space-x-8 text-gray-300 font-semibold">
            <li>
              <a
                href="#how-it-works"
                className="hover:text-green-400 transition"
              >
                How It Works
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-green-400 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#cta" className="hover:text-green-400 transition">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10"
      >
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-extrabold text-green-400 tracking-tight">
            GreedMeter
          </h1>
          <p className="text-xl text-gray-300 max-w-lg">
            Your real-time crypto market sentiment tracker powered by the Fear &
            Greed Index.
          </p>
          <a href="/home">
            <button className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-8 py-3 rounded-md transition">
              Get Started
            </button>
          </a>
        </div>
        <div className="flex-1">
          {/* Placeholder for hero image */}
          <img
            src={image}
            alt="Crypto Sentiment Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-800 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-green-400 text-5xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Fetch Sentiment Data</h3>
            <p className="text-gray-300">
              We retrieve live Fear & Greed Index scores from a trusted API.
            </p>
          </div>
          <div>
            <div className="text-yellow-400 text-5xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">
              Display Market Insights
            </h3>
            <p className="text-gray-300">
              Show key token prices and sentiment in a clean dashboard.
            </p>
          </div>
          <div>
            <div className="text-red-400 text-5xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Notify & Empower</h3>
            <p className="text-gray-300">
              Provide actionable alerts so users stay ahead of market shifts.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {features.map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center space-y-4 hover:bg-gray-700 transition cursor-default"
            >
              {icon}
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-400 py-16 px-6 text-gray-900 text-center rounded-t-3xl">
        <h2 className="text-4xl font-bold mb-4">
          Ready to track the market sentiment?
        </h2>
        <button className="bg-gray-900 hover:bg-gray-800 text-green-400 font-semibold px-10 py-4 rounded-md transition">
          Start Now
        </button>
      </section>
    </div>
  );
};

export default Landing;
