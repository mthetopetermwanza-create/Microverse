'use client'

import { useState, useEffect } from 'react'
import { Globe, Users, Rocket, Zap, Sparkles, Infinity, Cloud, Star, Lock, Unlock, Gamepad2, Music, Video, Trophy, MessageSquare } from 'lucide-react'

export default function Microverse() {
  const [selectedWorld, setSelectedWorld] = useState(0)
  const [deployProgress, setDeployProgress] = useState(0)
  const [onlineUsers, setOnlineUsers] = useState(4287)
  
  // Simulate live user count
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(prev => prev + Math.floor(Math.random() * 10) - 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  // Simulate deployment
  useEffect(() => {
    if (deployProgress < 100) {
      const timer = setTimeout(() => {
        setDeployProgress(prev => Math.min(prev + 10, 100))
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [deployProgress])

  const celebrityWorlds = [
    {
      id: 1,
      name: "NEO-TOKYO",
      celebrity: "Cyberpunk Idol HANA",
      theme: "neon",
      users: 1242,
      features: ["VR Club", "Rhythm Arena", "Neon Fashion"],
      color: "from-purple-500 to-pink-500",
      icon: <Music className="w-8 h-8" />,
      locked: false
    },
    {
      id: 2,
      name: "CELESTIAL REALM",
      celebrity: "R&B Star NOVA",
      theme: "cosmic",
      users: 856,
      features: ["Floating Studio", "Gravity Lounge", "Star Map"],
      color: "from-blue-500 to-cyan-400",
      icon: <Star className="w-8 h-8" />,
      locked: false
    },
    {
      id: 3,
      name: "CHAMPION'S ARENA",
      celebrity: "Pro Gamer ZERO",
      theme: "gaming",
      users: 2104,
      features: ["Esports Coliseum", "Training Dojo", "Loot Vault"],
      color: "from-green-500 to-emerald-400",
      icon: <Gamepad2 className="w-8 h-8" />,
      locked: false
    },
    {
      id: 4,
      name: "VIP LOUNGE",
      celebrity: "A-LIST",
      theme: "exclusive",
      users: 85,
      features: ["Private Gallery", "Backstage Access", "IRL Events"],
      color: "from-yellow-500 to-orange-500",
      icon: <Lock className="w-8 h-8" />,
      locked: true
    }
  ]

  const worldFeatures = [
    { icon: <Globe />, title: "Instant Worlds", desc: "Deploy in 60 seconds" },
    { icon: <Users />, title: "Live Interaction", desc: "Real-time with fans" },
    { icon: <Rocket />, title: "Zero Config", desc: "No setup required" },
    { icon: <Infinity />, title: "Infinite Scale", desc: "Grows with you" },
    { icon: <Cloud />, title: "Always Online", desc: "99.9% uptime" },
    { icon: <Sparkles />, title: "Magic UX", desc: "Feels like magic" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            BETA NOW LIVE
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Build Your
          <span className="block mt-2 cosmic-gradient bg-clip-text text-transparent glow-text">
            Pocket Universe
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          A complete metaverse platform that fits in a tweet. 
          Deploy celebrity worlds in minutes, not months.
        </p>

        {/* Deploy Button with Progress */}
        <div className="inline-block">
          <button 
            onClick={() => setDeployProgress(0)}
            className="relative px-8 py-4 rounded-2xl cosmic-gradient text-xl font-bold hover:scale-105 transition-transform"
          >
            <Sparkles className="w-5 h-5 inline mr-3" />
            {deployProgress === 0 ? 'DEPLOY YOUR WORLD →' : 'DEPLOYING...'}
          </button>
          
          {deployProgress > 0 && (
            <div className="mt-4 w-64 mx-auto bg-white/10 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300"
                style={{ width: `${deployProgress}%` }}
              />
            </div>
          )}
          
          {deployProgress === 100 && (
            <div className="mt-4 text-green-400 font-semibold">
              ✅ World deployed! Visit: yourworld.microverse.app
            </div>
          )}
        </div>
      </div>

      {/* Live Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
        <div className="cosmic-border rounded-xl p-6">
          <div className="text-3xl font-bold cosmic-gradient bg-clip-text text-transparent">
            {onlineUsers.toLocaleString()}
          </div>
          <div className="text-gray-400">Live Users</div>
        </div>
        <div className="cosmic-border rounded-xl p-6">
          <div className="text-3xl font-bold cosmic-gradient bg-clip-text text-transparent">
            247
          </div>
          <div className="text-gray-400">Active Worlds</div>
        </div>
        <div className="cosmic-border rounded-xl p-6">
          <div className="text-3xl font-bold cosmic-gradient bg-clip-text text-transparent">
            4.2s
          </div>
          <div className="text-gray-400">Avg Deploy Time</div>
        </div>
        <div className="cosmic-border rounded-xl p-6">
          <div className="text-3xl font-bold cosmic-gradient bg-clip-text text-transparent">
            ∞
          </div>
          <div className="text-gray-400">Possible Worlds</div>
        </div>
      </div>

      {/* Featured Worlds */}
      <h2 className="text-3xl font-bold mb-8">Featured Universes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {celebrityWorlds.map((world, index) => (
          <div 
            key={world.id}
            onClick={() => setSelectedWorld(index)}
            className={`cosmic-border rounded-2xl p-6 cursor-pointer transition-all hover:scale-105 ${
              selectedWorld === index ? 'ring-2 ring-purple-500' : ''
            } ${world.locked ? 'opacity-60' : ''}`}
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${world.color} flex items-center justify-center mb-4`}>
              {world.icon}
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold">{world.name}</h3>
                <p className="text-gray-400 text-sm">{world.celebrity}</p>
              </div>
              {world.locked ? (
                <Lock className="w-5 h-5 text-gray-500" />
              ) : (
                <div className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded">
                  {world.users} online
                </div>
              )}
            </div>
            
            <div className="space-y-2 mt-4">
              {world.features.map((feat, i) => (
                <div key={i} className="text-sm text-gray-300 flex items-center">
                  <div className="w-1 h-1 rounded-full bg-current mr-2" />
                  {feat}
                </div>
              ))}
            </div>
            
            <button className={`w-full mt-6 py-2 rounded-lg ${
              world.locked 
                ? 'bg-gray-800 text-gray-400' 
                : 'cosmic-gradient hover:opacity-90'
            }`}>
              {world.locked ? 'UNLOCK AT LEVEL 25' : 'ENTER WORLD'}
            </button>
          </div>
        ))}
      </div>

      {/* Micro-Features */}
      <h2 className="text-3xl font-bold mb-8">Why It's Atomic</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {worldFeatures.map((feature, index) => (
          <div key={index} className="cosmic-border rounded-xl p-4 text-center">
            <div className="w-12 h-12 rounded-lg cosmic-gradient flex items-center justify-center mx-auto mb-3">
              {feature.icon}
            </div>
            <h4 className="font-semibold mb-1">{feature.title}</h4>
            <p className="text-sm text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* World Preview */}
      {celebrityWorlds[selectedWorld] && (
        <div className="cosmic-border rounded-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 shimmer" />
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold">
                Preview: {celebrityWorlds[selectedWorld].name}
              </h3>
              <p className="text-gray-400">
                Experience {celebrityWorlds[selectedWorld].celebrity}'s universe
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10">
                <Video className="w-5 h-5 inline mr-2" />
                Tour
              </button>
              <button className="px-4 py-2 rounded-lg cosmic-gradient">
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Join Chat
              </button>
            </div>
          </div>
          
          {/* World Interface Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 cosmic-border rounded-xl p-6">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎮</div>
                  <p className="text-gray-400">Live Interactive Zone</p>
                  <div className="inline-flex gap-2 mt-4">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="cosmic-border rounded-xl p-4">
                <h4 className="font-semibold mb-2">Live Activity</h4>
                <div className="space-y-2">
                  {['SuperFan_42 joined', 'Team_Alpha won tournament', 'New item unlocked'].map((activity, i) => (
                    <div key={i} className="text-sm text-gray-300 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="cosmic-border rounded-xl p-4">
                <h4 className="font-semibold mb-2">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm">
                    🎵 Play Music
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm">
                    🏆 Challenge
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm">
                    🎁 Gift Shop
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm">
                    📸 Selfie Mode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* One-Click Deploy Section */}
      <div className="text-center cosmic-border rounded-2xl p-12">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Launch Your Universe?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          No coding. No servers. No complexity. Just infinite possibilities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-xl cosmic-gradient text-lg font-bold">
            <Rocket className="w-5 h-5 inline mr-3" />
            Deploy Free World
          </button>
          <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-lg">
            View Demo Video
          </button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <Trophy className="w-4 h-4 inline mr-2" />
          30-day free trial • No credit card required • Cancel anytime
        </div>
      </div>
    </div>
  )
}
