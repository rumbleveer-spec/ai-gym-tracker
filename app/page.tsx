export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">💪 Gym Tracker AI</h1>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition">Get Started</button>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Gym Tracker AI</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">AI-powered productivity platform</p>
        <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition">Launch App</button>
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-3">Fast</h3>
            <p className="text-gray-600 dark:text-gray-300">Lightning-fast performance</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-3">AI-Powered</h3>
            <p className="text-gray-600 dark:text-gray-300">Smart recommendations</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold mb-3">Premium</h3>
            <p className="text-gray-600 dark:text-gray-300">Professional features</p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-gray-300 py-8 mt-24 text-center">
        <p>&copy; 2024 Gym Tracker AI. Built with Next.js & AI</p>
      </footer>
    </div>
  );
}
