import React from 'react'

const Event = () => {
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
              <p className="text-xs text-neutral-500">Current building competition</p>
            </div>
          </div>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-neutral-700 px-3 py-1 text-[11px] font-medium text-neutral-200 hover:border-emerald-400/70 hover:text-emerald-200 transition"
          >
            ← Back to main
          </a>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-8">
          <section className="space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-black/40 px-3 py-1 text-[11px] font-medium text-neutral-300 shadow-xs">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Integrated SMP ― Current event
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
              Building competition ― 100 Robux prize
            </h1>
            <p className="max-w-2xl text-sm text-neutral-400 sm:text-base">
              Pick a spot on the server, build something you are proud of, and submit it for judging. Best overall build
              wins 100 Robux and a shoutout in the community.
            </p>
          </section>

          <section className="grid gap-4 text-xs text-neutral-300 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-800/80 bg-black/50 p-4 shadow-xs">
              <p className="text-[11px] font-semibold text-neutral-200">Event details</p>
              <ul className="mt-2 space-y-1 text-[11px] text-neutral-400">
                <li><span className="text-neutral-300">Type:</span> Building competition</li>
                <li><span className="text-neutral-300">Prize:</span> 100 Robux</li>
                <li><span className="text-neutral-300">Theme:</span> Anything that fits Integrated SMP vibe</li>
                <li><span className="text-neutral-300">Server:</span> integrated.bluearmy.uk</li>
              </ul>
            </div>

            <div className="rounded-lg border border-neutral-800/80 bg-black/50 p-4 shadow-xs">
              <p className="text-[11px] font-semibold text-neutral-200">How to enter</p>
              <ol className="mt-2 list-decimal space-y-1 pl-4 text-[11px] text-neutral-400">
                <li>Join the server at <span className="font-mono text-emerald-300">integrated.bluearmy.uk</span>.</li>
                <li>Claim or pick a spot and start building.</li>
                <li>Take screenshots of your finished build.</li>
                <li>Submit your entry in the Discord event channel.</li>
              </ol>
            </div>
          </section>

          <section className="grid gap-4 text-xs text-neutral-300 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-800/80 bg-black/50 p-4 shadow-xs">
              <p className="text-[11px] font-semibold text-neutral-200">Rules</p>
              <ul className="mt-2 space-y-1 text-[11px] text-neutral-400">
                <li>No griefing or messing with other players builds.</li>
                <li>Build must be made on Integrated SMP during the event period.</li>
                <li>Keep it reasonably family friendly.</li>
                <li>Working in small teams is allowed, but prize is 100 Robux total.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-neutral-800/80 bg-black/50 p-4 shadow-xs">
              <p className="text-[11px] font-semibold text-neutral-200">Judging</p>
              <ul className="mt-2 space-y-1 text-[11px] text-neutral-400">
                <li>Builds are judged on creativity, execution, and how well they fit the server vibe.</li>
                <li>Staff will pick a winner and a couple of honourable mentions.</li>
                <li>Results will be announced in Discord.</li>
              </ul>
              <a
                href="https://bluearmy.uk/discord"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200 hover:bg-emerald-500/20 transition"
              >
                Open Discord
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-neutral-900/80 bg-black/60">
        <div className="mx-auto flex max-w-5xl px-6 py-4 text-[11px] text-neutral-500 items-center justify-between">
          <p>Integrated SMP ― Building competition</p>
          <a
            href="/"
            className="text-[11px] text-neutral-400 hover:text-emerald-300 transition"
          >
            Back to main
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Event
