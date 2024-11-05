import React from 'react';
import {
  Shield,
  Lock,
  Fingerprint,
  Globe,
  ArrowRight,
  Github,
  Twitter,
  Database,
  Network,
  Eye,
  Cpu,
  Cloud,
  Layers,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="relative m-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-800/50 rounded-xl border border-gray-700">
                <img
                  src="/navio_header_final-p-2000.jpg"
                  alt="Navio Blockchain"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r mt-12 from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Welcome to Navio
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Empower your privacy. Embrace your freedom.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg transition-all group mt-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:text-white transition-all">
                  Mainnet coming soon!
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>

              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Private Proof of Stake Blockchain
              </h2>
              <p className="text-gray-400 mb-6">
                Leveraging BLS (Boneh–Lynn–Shacham) signatures and Confidential
                Transactions to enable privacy-focused and secure value
                transfers within a decentralized network. While BLS signatures
                provide compact, aggregated verifications that enhance anonymity
                by allowing multiple signatures to be combined into one,
                Confidential Transactions obscure transaction amounts, revealing
                only necessary details to authorized participants.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">
                  Fair and sustainable consensus
                </h3>
                <p className="text-gray-400">
                  Validators are chosen through a Proof of Private Stake (PoPS) mechanism,
                  ensuring efficiency and scalability, while preserving the
                  anonymity of the validators and their stake.
                </p>
              </div>
            </div>

          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-24">
            {[
              {
                icon: <Layers className="w-8 h-8 text-blue-400" />,
                title: 'Atomic Confidential Swaps',
                description:
                  'Perform fully private swaps between NAV and other tokens',
              },
              {
                icon: <Eye className="w-8 h-8 text-blue-400" />,
                title: 'On-Chain Privacy',
                description: 'Complete privacy for the sender and the receiver',
              },
              {
                icon: <Network className="w-8 h-8 text-blue-400" />,
                title: 'Private Tokens and NFTs',
                description:
                  'Tokenize real world assets without sacrificing your privacy',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  <div className="relative bg-gray-800/50 rounded-xl border border-gray-700">
                    <img
                      src="/navio_header_final-p-2000.jpg"
                      alt="Navio Blockchain"
                      className="rounded-lg w-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-1 gap-16 items-center mt-24">
            <div>

              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Designed for esquisite user experience
              </h2>
              <p className="text-gray-400">
                Navio is designed to deliver a seamless and efficient user experience, with a particular focus on low fees and rapid confirmation times. Transactions on the Navio network are confirmed in under two minutes, with fees kept to mere fractions of a cent, making it an ideal choice for fast and affordable value transfers.
              </p>
            </div>
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
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

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/AUTONOMOUS.jpeg')] bg-cover bg-center opacity-30"></div>
        <div className="relative">
          <div className="absolute inset-0  rounded-2xl blur-xl"></div>
          <div className="relative  rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join us in our mission
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Fighting for your privacy rights!
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all">
              Join discord
            </button>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}

export default App;
