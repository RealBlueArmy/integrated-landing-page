import React, { useEffect, useState } from 'react'

const App = () => {
  const [status, setStatus] = useState('checking')
  const [players, setPlayers] = useState([])
  const [playerStats, setPlayerStats] = useState(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('https://api.mcsrvstat.us/3/integrated.bluearmy.uk:25565')
        if (!res.ok) throw new Error('Bad response')
        const data = await res.json()
        console.log('Integrated SMP status:', data)

        if (data?.online) {
          setStatus('online')
          setPlayerStats({
            ...(data.players || {}),
            version: data.version || data.software || '1.21.10',
          })
          const list = (data.players?.list || []).map((p) => p.name).filter(Boolean)
          setPlayers(list)
        } else {
          setStatus('offline')
          setPlayerStats(null)
          setPlayers([])
        }
      } catch (e) {
        setStatus('error')
        setPlayerStats(null)
        setPlayers([])
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  const statusLabel =
    status === 'online' ? 'Online' : status === 'offline' ? 'Offline' : status === 'checking' ? 'Checking…' : 'Error'

  const statusColor =
    status === 'online'
      ? 'bg-emerald-400'
      : status === 'offline'
      ? 'bg-red-500'
      : status === 'checking'
      ? 'bg-amber-400'
      : 'bg-neutral-500'

  return (
    <div className="relative min-h-screen bg-background text-neutral-50 flex flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_65%),radial-gradient(circle_at_bottom,_rgba(52,211,153,0.22),_transparent_95%)]" />

      <header className="relative z-10 border-b border-neutral-800/80 backdrop-blur bg-black/40">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center overflow-hidden">
              <img src="/wemmbuface.png" alt="Server logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-200 tracking-tight">Integrated SMP</p>
              <p className="text-xs text-neutral-500">Vanilla+ Survival Experience</p>
            </div>
          </div>
           <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-200 shadow-xs">
             <span className={`inline-flex h-1.5 w-1.5 rounded-full ${statusColor}`} />
             Server status ― {statusLabel}
           </div>

        </div>
      </header>

      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 md:flex-row md:items-center md:py-24">
            <section className="flex-1 space-y-6">
              <p className="sm:hidden inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-black/40 px-3 py-1 text-[11px] font-medium text-neutral-300 shadow-xs">
                <span className={`inline-flex h-1.5 w-1.5 rounded-full ${statusColor}`} />
                Server status ― {statusLabel}
              </p>
 
                <h1 className="text-balance text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl md:text-5xl">

                <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                  Vanilla+
                </span>{' '}
                survival
              </h1>

              <p className="max-w-xl text-sm text-neutral-400 sm:text-base">
                Integrated SMP keeps the core vanilla feel but adds a small waypoint system and graves, so you can teleport between
                key spots and recover your items without ruining the survival vibe.
              </p>

               <div className="flex flex-wrap items-center gap-3">
                 <button
                   type="button"
                   onClick={() => {
                     navigator.clipboard?.writeText('integrated.bluearmy.uk:25565').catch(() => {})
                   }}
                   className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-xs hover:bg-emerald-400 transition"
                 >
                   Copy IP: integrated.bluearmy.uk
                 </button>
                 <a
                   href="https://bluearmy.uk/discord"
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center justify-center rounded-lg border border-emerald-400/60 bg-emerald-500/5 px-4 py-2 text-sm font-semibold text-emerald-200 shadow-xs hover:bg-emerald-500/15 transition"
                 >
                   Join Discord
                 </a>
                 <div className="text-xs text-neutral-500">
                    Address: <span className="font-mono text-emerald-300">integrated.bluearmy.uk</span>
 
                   <span className="mx-2 text-neutral-700">|</span>
                   Java + Bedrock via proxy
                 </div>
               </div>


               <div className="mt-6 grid gap-4 text-xs text-neutral-400 sm:grid-cols-3 sm:text-[11px]">

                <div className="rounded-lg border border-neutral-800/80 bg-black/40 p-4 shadow-xs">
                  <p className="text-[11px] font-semibold text-neutral-300">Gameplay</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-neutral-400">
                    Semi‑vanilla survival with simple rules, trust‑based play, and a focus on building cool projects together.
                  </p>
                </div>
                <div className="rounded-lg border border-neutral-800/80 bg-black/40 p-4 shadow-xs">
                  <p className="text-[11px] font-semibold text-neutral-300">Extras</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-neutral-400">
                    Waypoints, graves, and a few QoL tweaks to keep things smooth without breaking the vanilla feel.
                  </p>
                </div>

                <div className="rounded-lg border border-neutral-800/80 bg-black/40 p-4 shadow-xs">
                  <p className="text-[11px] font-semibold text-neutral-300">Community</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-neutral-400">
                    Small, chill playerbase. Respect other players and their builds and you’ll fit in fine.
                  </p>
                </div>
              </div>
            </section>

             <aside className="mt-2 flex-1 md:mt-0">

              <div className="rounded-lg border border-neutral-800 bg-black/60 p-5 shadow-xs">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-neutral-300 uppercase">Server status</p>
                    <p className="mt-1 text-sm text-neutral-200 flex items-center gap-2">
                      <span className={`inline-flex h-2.5 w-2.5 rounded-full ${statusColor}`} />
                      {statusLabel}
                    </p>
                  </div>
                  <div className="text-right text-[11px] text-neutral-500">
                    <p className="font-medium text-neutral-300">Address</p>
                     <p className="font-mono text-xs text-emerald-300">integrated.bluearmy.uk</p>
                  </div>
                </div>

                <div className="mt-4 rounded-md border border-neutral-800/80 bg-neutral-950/60 p-3 text-xs">
                  <p className="text-[11px] font-semibold text-neutral-300 flex items-center justify-between">
                    Players online
                    <span className="font-mono text-emerald-300">
                      {status === 'online' && playerStats ? playerStats.online : '--'}/
                      {status === 'online' && playerStats ? playerStats.max : '?'}
                    </span>
                  </p>

                  {status === 'online' && playerStats && (
                    <p className="mt-1 text-[11px] text-neutral-400">
                      Version{' '}
                      <span className="font-mono text-xs text-emerald-300">Java {playerStats.version}</span>
                      <span className="mx-2 text-neutral-600">|</span>
                      <span className="font-mono text-xs text-emerald-300">Bedrock latest</span>
                    </p>
                  )}


                  {status === 'checking' && (
                    <p className="mt-2 text-[11px] text-neutral-500">Checking server status…</p>
                  )}

                  {status === 'error' && (
                    <p className="mt-2 text-[11px] text-red-400">Could not reach status API right now.</p>
                  )}

                  {status !== 'checking' && status !== 'error' && (
                    <>
                      {status === 'offline' && (
                        <p className="mt-2 text-[11px] text-neutral-500">Server appears to be offline.</p>
                      )}

                      {status === 'online' && (
                        <div className="mt-2 space-y-1 max-h-40 overflow-y-auto pr-1">
                          {players.length === 0 ? (
                            <p className="text-[11px] text-neutral-500">No one is on right now. Your base is safe.</p>
                          ) : (
                            players.map((name) => (
                              <div
                                key={name}
                                className="flex items-center justify-between gap-2 rounded-sm bg-black/60 px-2 py-1 text-[11px] text-neutral-200"
                              >
                                <span className="truncate">{name}</span>
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </>
                  )}
                 </div>

                  <div className="mt-4 text-[11px] text-neutral-500">
                    <p>Refreshes automatically every 30 seconds.</p>
                  </div>
 

 
                 <div className="mt-4 rounded-md border border-neutral-800/80 bg-neutral-950/60 p-3 text-xs">
                   <p className="text-[11px] font-semibold text-neutral-300">Current event</p>
                   <p className="mt-1 text-[11px] leading-relaxed text-neutral-400">
                     Ongoing building competition on Integrated SMP. Pick a spot, build something cool, and compete for 100 Robux.
                   </p>
                   <div className="mt-3 flex items-center justify-between gap-3">
                     <p className="text-[11px] text-neutral-500">More details and rules on the event page.</p>
                     <a
                       href="/event.html"
                       className="inline-flex items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-500/10 px-4 py-1 min-w-[96px] text-[10px] sm:text-[11px] font-medium text-emerald-200 hover:bg-emerald-500/20 transition"
                     >
                       More info
                     </a>


                   </div>
                 </div>
 
                </div>
              </aside>
            </div>
          </div>
        </main>
 
        <footer className="relative z-10 border-t border-neutral-900/80 bg-black/60">



        <div className="mx-auto flex max-w-5xl px-6 py-4 text-[11px] text-neutral-500 items-center justify-center">
          <p>Integrated SMP ― Vanilla+ Survival Experience</p>
        </div>
      </footer>
    </div>
  )
}

export default App
