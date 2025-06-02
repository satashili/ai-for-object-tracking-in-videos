import React from 'react';

const PresentationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Agentic AI for Object Tracking in Videos
          </h1>
          <p className="text-xl text-gray-600 text-center mt-2">
            Research Progress and Open Source Projects
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Background Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-500 pb-2">
            Background
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is Agentic AI?</h3>
              <div className="bg-indigo-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Agentic AI</strong> is an emerging artificial intelligence paradigm with:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">✓</span>
                    Autonomously formulate plans and strategies
                  </li>
                  <li className="flex items-center">
                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">✓</span>
                    Use multiple tools and resources
                  </li>
                  <li className="flex items-center">
                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">✓</span>
                    Perform complex reasoning and decision-making
                  </li>
                  <li className="flex items-center">
                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">✓</span>
                    Intelligently interact with environments
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Traditional vs Agent-based Methods</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-semibold text-red-800">Traditional Methods</h4>
                  <p className="text-red-700 text-sm">Rely on end-to-end trained deep learning models, requiring large amounts of annotated data</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-semibold text-green-800">Agent-based Methods</h4>
                  <p className="text-green-700 text-sm">Combine multiple tools and reasoning capabilities to handle complex scenarios more flexibly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Scenarios</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: "🏙️", title: "Smart Cities", desc: "Traffic monitoring, crowd management" },
                { icon: "🏭", title: "Industrial", desc: "Equipment monitoring, safety management" },
                { icon: "🛒", title: "Retail", desc: "Customer behavior analysis, theft prevention" },
                { icon: "🏥", title: "Healthcare", desc: "Patient monitoring, behavior analysis" },
                { icon: "⚽", title: "Sports", desc: "Athlete tracking, match analysis" }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Progress Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">
            Research Progress
          </h2>
          
          <div className="space-y-8">
            {/* Research Item 1 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                1. Reinforcement Learning-based Active Object Tracking
              </h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3">TrackAgent (ICVS 2023)</h4>
                <p className="text-gray-700 mb-3">
                  Transforms 6DOF object pose tracking into a reinforcement learning decision task, achieving 3D point cloud frame-by-frame alignment through learning agents.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">Reinforcement Learning</span>
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">3D Point Cloud</span>
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">Active Tracking</span>
                </div>
              </div>
            </div>

            {/* Research Item 2 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                2. Multi-Agent and Embodied Tracking Systems
              </h3>
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-3">CSAOT (AAMAS 2025)</h4>
                <p className="text-gray-700 mb-3">
                  Employs multiple coordinated reinforcement learning agents for object tracking, using mixture-of-experts strategies to decide camera movements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">Multi-Agent</span>
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">Active Vision</span>
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">Mixture of Experts</span>
                </div>
              </div>
            </div>

            {/* Research Item 3 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-2">
                3. Vision-Language Guided Tracking
              </h3>
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-3">MemVLT (NeurIPS 2024)</h4>
                <p className="text-gray-700 mb-3">
                  Uses text descriptions to guide video object tracking, achieving 69.4% success AUC on the MGIT dataset (+8.4% improvement).
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm">Vision-Language</span>
                  <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm">Memory Mechanism</span>
                  <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm">Text Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Projects Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-purple-500 pb-2">
            Open Source Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* VideoAgent */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-indigo-900">VideoAgent</h3>
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">ECCV 2024</span>
              </div>
              
              <p className="text-gray-700 mb-4">
                The first memory-augmented multimodal agent for video understanding, achieving performance comparable to Gemini 1.5 Pro.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-indigo-800 mb-3">Core Technical Features</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-indigo-100">
                    <h5 className="font-semibold text-indigo-700 text-sm">Memory Construction Stage</h5>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• Temporal Memory: 2-second video segments</li>
                      <li>• Object Memory: Detection, tracking, re-ID</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-indigo-100">
                    <h5 className="font-semibold text-indigo-700 text-sm">Inference Stage</h5>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• Segment description recall</li>
                      <li>• Visual question answering</li>
                      <li>• Object memory queries</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <a href="https://github.com/YueFan1014/VideoAgent" className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm">
                  <span className="mr-2">📖</span> GitHub Repository
                </a>
                <a href="https://videoagent.github.io/" className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm">
                  <span className="mr-2">🌐</span> Project Homepage
                </a>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="mr-2">🚀</span> Gradio Interactive Demo Available
                </div>
              </div>
            </div>

            {/* VLM-R1 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-green-900">VLM-R1</h3>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">2025</span>
              </div>
              
              <p className="text-gray-700 mb-4">
                A stable and generalizable R1-style Large Vision-Language Model using reinforcement learning for visual understanding tasks.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-green-800 mb-3">Technical Advantages</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "R1-style Reasoning",
                    "RL Optimization", 
                    "Enhanced Generalization",
                    "Multi-task Support",
                    "Training Stability",
                    "Multi-node Support"
                  ].map((feature, index) => (
                    <div key={index} className="bg-white rounded-lg p-2 border border-green-100 text-center">
                      <span className="text-xs font-medium text-green-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-green-800 mb-2">Supported Tasks</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">REC</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">OVD</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">Math</span>
                </div>
              </div>

              <div className="space-y-2">
                <a href="https://github.com/om-ai-lab/VLM-R1" className="flex items-center text-green-600 hover:text-green-800 text-sm">
                  <span className="mr-2">📖</span> GitHub Repository
                </a>
                <div className="flex items-center text-green-600 text-sm">
                  <span className="mr-2">🤗</span> HuggingFace Demos Available
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="mr-2">⚡</span> Complete Training Scripts & Data
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Thank You for Your Attention
            </h3>
            <p className="text-gray-600">
              Agentic AI is revolutionizing video object tracking with autonomous reasoning and flexible tool integration
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">Autonomous AI</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">Video Tracking</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm">Open Source</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PresentationPage; 