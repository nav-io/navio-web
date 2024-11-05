import React from 'react';
import {
  Shield,
  Zap,
  Cpu,
  Network,
  Lock,
  Layers,
  Workflow,
  Boxes,
  Scale,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Features() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: 'Battle tested cryptography protocols',
      description:
        'Our novel cryptographic protocol BLSCT is a fusion of diverse protocols like Confidential Transactions and BLS signatures.',
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-400" />,
      title: 'Low fees and fast confirmation times',
      description:
        'Transactions are confirmed below 2 minutes with fees in the order of fractions of cents.',
    },
    {
      icon: <Network className="w-12 h-12 text-blue-400" />,
      title: 'Cross-Chain Bridge',
      description:
        'Seamlessly connect with other blockchain networks through our community bridges.',
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      title: 'Privacy First',
      description:
        'Full on-chain privacy, protecting the transaction details from observers, both for the sender and the receiver.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80')] bg-cover bg-fixed opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Revolutionary Features
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Experience the next generation of blockchain technology with our
            cutting-edge features designed for the future of decentralized
            finance.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gray-800/50 p-8 rounded-xl border border-gray-700 group-hover:border-blue-500/50 transition-all">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">
                Transaction Processing
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• 4 MB blocks</li>
                <li>• 2 min block time</li>
                <li>• Network layer coin mixing</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Security</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Private Proof of Stake protocol</li>
                <li>• Based on Bitcoin codebase</li>
                <li>• Experienced development team</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">And more</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Private tokens and NFTs</li>
                <li>• Atomic private swaps</li>
                <li>• Light wallet support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Features;
