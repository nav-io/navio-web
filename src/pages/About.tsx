import React from 'react';
import { Users, Globe, Shield, Heart, Code, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  const communityStats = [
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      value: '50,000+',
      label: 'Community Members',
    },
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      value: '1,000+',
      label: 'Contributors',
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-blue-400" />,
      value: '100+',
      label: 'Local Communities',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0  bg-cover bg-fixed opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            About Navio
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            A community-driven blockchain built to empower individuals in defending their privacy.
          </p>
        </div>
      </section>

      {/* Community Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-800/50 rounded-xl border border-gray-700">
                <img
                  src="/FREEDOM.jpeg"
                  alt="Community collaboration"
                  className="rounded-lg w-l"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Privacy as a Fundamental Right
              </h2>
              <p className="text-gray-400 mb-8">
                Privacy is essential to human dignity, autonomy, and free thought. In a world where digital surveillance is increasingly pervasive, Navio asserts that individuals have an inalienable right to control their personal and financial information.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span>Navio stands against the erosion of privacy rights by governments, corporations, and other centralized entities. It aims to create a financial ecosystem where individuals are free from invasive tracking, profiling, and data exploitation.</span>
                </div>
              </div>
              <p className="text-gray-400 my-8 ">
                Centralized power structures are inherently vulnerable to corruption, censorship, and coercion. Decentralization promotes resilience, diversity of thought, and self-governance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span> Navio opposes monopolistic financial control by banks and regulatory bodies. By decentralizing its infrastructure, it empowers users to participate in a peer-to-peer system that resists censorship, ensuring financial inclusivity and fairness.</span>
                </div>
              </div>
              <p className="text-gray-400 my-8 ">
                Navio affirms the principle of self-ownership, the idea that individuals have full sovereignty over their lives, bodies, and assets. It supports the right to transact freely without undue interference.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span> Navio advocates for financial self-determination. By enabling unmediated transactions, it promotes economic sovereignty, providing users the freedom to choose how they manage and exchange their resources without external manipulation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Promotion of Free and Open Societies
              </h2>
              <p className="text-gray-400 mb-8">
                A truly free society is one where information and ideas can circulate without repression. Navio believes that financial freedom is central to this ideal.              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span> By operating as an uncensorable network, Navio provides a financial sanctuary for individuals in oppressive environments, enabling them to participate in the global economy even if local laws prohibit it.</span>
                </div>
              </div>
              <p className="text-gray-400 my-8 ">
                As a cypherpunk project, Navio operates under the ethos that cryptographic protocols, not institutional decrees, should govern the security and privacy of individuals.              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span> Navio champions the notion that code can serve as an incorruptible layer of protection for freedom. Rather than relying on institutional trust, Navio leverages cryptographic assurance, pushing back against top-down, policy-driven approaches to security.</span>
                </div>
              </div>
              <p className="text-gray-400 my-8 ">
                Anonymity is a form of self-expression and a necessary condition for individual and collective freedom. Navio supports the right to digital anonymity as a means of safeguarding personal and societal liberties.              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span> Navio resists efforts by states and corporations to compromise anonymity, advocating for digital spaces where individuals can express and exchange ideas without fear of retribution.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-800/50 rounded-xl border border-gray-700">
                <img
                  src="/SOCIETIES.jpeg"
                  alt="Community collaboration"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Milestones
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                year: '2014',
                title: 'Navajocoin',
                description:
                  'The project is born with the goal to create an untraceable cryptocurrency',
              },
              {
                year: '2016',
                title: 'Navcoin',
                description:
                  'Introduced optional privacy transactions',
              },
              {
                year: '2024',
                title: 'Navio',
                description: 'Launch of the Navio blockchain with full on chain privacy',
              },
            ].map((event, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-gray-800 last:border-0"
              >
                <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-2 text-sm text-blue-400">{event.year}</div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Get Involved */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Contribute Code',
                description:
                  'Help build the future of blockchain by contributing to our open-source codebase.',
              },
              {
                title: 'Join Discussions',
                description:
                  'Participate in technical discussions and help shape the future of Navio.',
              },
              {
                title: 'Build Local Communities',
                description:
                  'Start or join a local Navio community in your area.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-all border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
