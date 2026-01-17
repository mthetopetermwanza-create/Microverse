import './globals.css'
import { Stars, Zap, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Microverse - Pocket-Sized Metaverse',
  description: 'Build infinite worlds in minutes. Deploy in seconds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌌</text></svg>" />
      </head>
      <body>
        {/* Floating cosmic elements */}
        <div className="fixed top-10 left-10 w-4 h-4 rounded-full bg-purple-500/30 pulse-glow" />
        <div className="fixed top-1/4 right-20 w-6 h-6 rounded-full bg-pink-500/20 float" />
        <div className="fixed bottom-1/3 left-1/4 w-8 h-8 rounded-full bg-cyan-500/15 pulse-glow" style={{animationDelay: '1s'}} />
        
        {/* Main nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg cosmic-gradient">
                <Stars className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">MICROVERSE</h1>
                <p className="text-sm text-gray-400">Pocket-Sized Metaverse</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                Explore Worlds
              </button>
              <button className="px-6 py-2 rounded-lg cosmic-gradient hover:opacity-90 transition font-semibold">
                <Sparkles className="w-4 h-4 inline mr-2" />
                Create World
              </button>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen pt-24">
          {children}
        </main>
        
        {/* Performance badge */}
        <div className="fixed bottom-6 left-6 cosmic-border rounded-full px-4 py-2 text-sm">
          <Zap className="w-4 h-4 inline mr-2 text-yellow-400" />
          <span className="font-mono">~50ms • 3.2KB • ∞ Worlds</span>
        </div>
      </body>
    </html>
  )
}
