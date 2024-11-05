import React from 'react';
import { Cpu, Server, Network, Lock, Database, Code } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Technology() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-fixed opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Our Technology
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Discover the cutting-edge technology powering Navio's next-generation blockchain platform.
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 text-center">
              <p className="text-blue-200">
                <span className="font-semibold">Token Distribution:</span> As we transition to the new Navio blockchain, existing Navcoin holders will receive Navio tokens at a 1:1 ratio. Detailed distribution mechanics and timeline will be announced soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Architecture Overview
              </h2>
              <p className="text-gray-400 mb-8">
                Navio's architecture is built on four fundamental pillars: security, scalability, privacy, and interoperability. Our unique approach combines cutting-edge cryptography with innovative consensus mechanisms.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Server className="w-6 h-6 text-blue-400" />
                  <span>Distributed node network</span>
                </div>
                <div className="flex items-center gap-4">
                  <Database className="w-6 h-6 text-blue-400" />
                  <span>Sharded database architecture</span>
                </div>
                <div className="flex items-center gap-4">
                  <Code className="w-6 h-6 text-blue-400" />
                  <span>Smart contract optimization</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80" 
                  alt="Technology Architecture"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Technical Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Consensus Layer</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Proof of Stake (PoS)</li>
                <li>• Byzantine Fault Tolerance</li>
                <li>• Validator Network</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Execution Layer</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• WebAssembly Runtime</li>
                <li>• Smart Contract Engine</li>
                <li>• State Management</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Network Layer</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• P2P Protocol</li>
                <li>• Sharding</li>
                <li>• Cross-Chain Bridge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Research Papers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Zero-Knowledge Proofs in Blockchain",
                authors: "Dr. Sarah Chen, Dr. Michael Rodriguez",
                date: "2024",
                link: "#"
              },
              {
                title: "Post-Quantum Cryptography Implementation",
                authors: "Dr. James Wilson, Dr. Emily Chang",
                date: "2024",
                link: "#"
              }
            ].map((paper, index) => (
              <div key={index} className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-all">
                <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                <p className="text-gray-400 mb-2">{paper.authors}</p>
                <p className="text-gray-500 mb-4">{paper.date}</p>
                <a href={paper.link} className="text-blue-400 hover:text-blue-300 transition-colors">
                  Read Paper →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Technology;