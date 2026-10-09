const photoFiles = import.meta.glob('../assets/players/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

function findPhoto(id) {
  const match = Object.entries(photoFiles).find(
    ([path]) => path.split('/').pop().split('.')[0].toLowerCase() === id
  )
  return match ? match[1] : null
}

const statNames = {
  PAC: 'Pace',
  SHO: 'Shooting',
  PAS: 'Passing',
  DRI: 'Dribbling',
  DEF: 'Defending',
  PHY: 'Physical',
}

// TODO: replace the names, positions and numbers with the coach's real ratings (0-99)
const players = [
  { id: 'u7', category: 'Under 7', name: 'RICKY', position: 'CB', overall: 85, stats: { PAC: 90, SHO: 85, PAS: 78, DRI: 60, DEF: 97, PHY: 90 } },
  { id: 'u9', category: 'Under 9', name: 'MUGO', position: 'CB', overall: 83, stats: { PAC: 91, SHO: 85, PAS: 75, DRI: 65, DEF: 90, PHY: 97 } },
  { id: 'u11', category: 'Under 11', name: 'ETHAN', position: 'ST', overall: 84, stats: { PAC: 87, SHO: 89, PAS: 78, DRI: 90, DEF: 58, PHY: 78 } },
  { id: 'u13', category: 'Under 13', name: 'TITO', position: 'CDM', overall: 85, stats: { PAC: 78, SHO: 78, PAS: 89, DRI: 69, DEF: 90, PHY: 90 } },
  { id: 'u15', category: 'Under 15', name: 'MAL', position: 'ST', overall: 82, stats: { PAC: 83, SHO: 86, PAS: 78, DRI: 90, DEF: 60, PHY: 60 } },
  { id: 'u17', category: 'Under 17', name: 'JUNIOR', position: 'AMF', overall: 87, stats: { PAC: 85, SHO: 90, PAS: 78, DRI: 90, DEF: 60, PHY: 90 } },
]

function Players() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-green-700">Our players</p>
        <h3 className="mt-2 text-3xl font-extrabold uppercase md:text-4xl">
          Rising <span className="text-green-700">stars</span>
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600">
          FIFA RANKINGS.<br />PAC - pace · SHO - shooting · PAS - passing · DRI - dribbling · DEF - defending · PHY - physique.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        {players.map((player, index) => {
          const photo = findPhoto(player.id)

          return (
            <div
              key={player.category}
              className={`mx-auto flex max-w-5xl flex-col items-center gap-4 md:items-stretch ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="w-44 shrink-0 rounded-2xl bg-gradient-to-b from-lime-300 to-lime-500 p-3 text-green-950 shadow-lg sm:w-48 md:w-52">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-3xl font-extrabold leading-none md:text-4xl">{player.overall}</div>
                    <div className="text-xs font-bold md:text-sm">{player.position}</div>
                  </div>
                  <span className="rounded bg-green-950 px-2 py-1 text-[10px] font-bold uppercase text-lime-300 md:text-xs">
                    {player.category}
                  </span>
                </div>

                {photo ? (
                  <img
                    src={photo}
                    alt={player.name}
                    className="mt-3 aspect-[3/4] w-full rounded-xl object-cover shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl"
                  />
                ) : (
                  <div className="mt-3 flex aspect-[3/4] items-center justify-center rounded-xl bg-white/40 text-sm">
                    [PHOTO]
                  </div>
                )}

                <div className="mt-3 text-center text-base font-extrabold uppercase md:text-lg">{player.name}</div>
              </div>

              <div className="grid w-full max-w-3xl flex-1 content-center gap-x-6 gap-y-3 rounded-2xl bg-green-950 p-4 text-white sm:grid-cols-2 sm:p-5">
                {Object.entries(player.stats).map(([key, value]) => (
                  <div key={key} title={statNames[key]}>
                    <div className="flex justify-between text-xs font-bold sm:text-sm">
                      <span className="text-lime-300">{key}</span>
                      <span>{value}</span>
                    </div>
                    <div className="mt-1 h-2 rounded bg-green-800">
                      <div className="h-2 rounded bg-lime-400" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Players