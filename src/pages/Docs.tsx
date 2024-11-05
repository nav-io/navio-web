import React from 'react';
import { Book, Code, Terminal, FileText, Cpu, Settings, Ghost } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Docs() {
  const sections = [
    {
      icon: <Book className="w-8 h-8 text-blue-400" />,
      title: "Getting Started",
      description: "Quick start guides and basic concepts",
      links: ["Installation", "Basic Concepts", "First Transaction"]
    },
    {
      icon: <Ghost className="w-8 h-8 text-blue-400" />,
      title: "Privacy Best Practices",
      description: "How to improve your privacy",
      links: ["Setting up your devices", "Transaction Best Practices", "Tools"]
    },
    {
      icon: <Terminal className="w-8 h-8 text-blue-400" />,
      title: "SDK Reference",
      description: "Complete SDK documentation and examples",
      links: ["Wallet SDK", "P2P SDK"]
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      title: "Node Operation",
      description: "Run and maintain a Navio node",
      links: ["Node Setup", "Troubleshooting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80')] bg-cover bg-fixed opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8">
            Comprehensive guides and documentation to help you transact using Navio.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gray-800/50 p-8 rounded-xl border border-gray-700 group-hover:border-blue-500/50 transition-all">
                  <div className="mb-6">{section.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                  <p className="text-gray-400 mb-6">{section.description}</p>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                          {link} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Quick Start Example
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
              <pre className="text-gray-300">
                <code>{`// Initialize Navio client
const navio = new NavioClient({
  network: 'mainnet',
  mnemonic: process.env.NAVIO_MNEMONIC
});

// Create a new transaction
const tx = await navio.createTransaction({
  to: 'nv1nzask43ukymzqgyk3...srcpxyljzum4g9v4vhqzccdns',
  amount: '1.0',
});

// Sign and send the transaction
const receipt = await tx.send();
console.log(\`Transaction hash: \${receipt.hash}\`);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Docs;