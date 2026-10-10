// Each ember is one small glowing dot that rises and fades (see .ember in index.css).
// Positions and timings are fixed so the layout is the same on every load.
const embers = [
  { left: 8, size: 4, duration: 9, delay: 0, dx: 40 },
  { left: 15, size: 3, duration: 12, delay: 3, dx: -30 },
  { left: 22, size: 5, duration: 10, delay: 6, dx: 60 },
  { left: 30, size: 3, duration: 8, delay: 1, dx: -50 },
  { left: 38, size: 4, duration: 11, delay: 4, dx: 20 },
  { left: 46, size: 3, duration: 13, delay: 7, dx: -40 },
  { left: 54, size: 5, duration: 9, delay: 2, dx: 50 },
  { left: 62, size: 3, duration: 12, delay: 5, dx: -20 },
  { left: 70, size: 4, duration: 10, delay: 0.5, dx: 30 },
  { left: 77, size: 3, duration: 8, delay: 6.5, dx: -60 },
  { left: 84, size: 5, duration: 11, delay: 3.5, dx: 40 },
  { left: 91, size: 4, duration: 9, delay: 8, dx: -35 },
  { left: 50, size: 3, duration: 14, delay: 9, dx: 15 },
  { left: 26, size: 4, duration: 15, delay: 10, dx: -25 },
]

export default function Embers() {
  return (
    <>
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          aria-hidden="true"
          style={{
            left: `${e.left}%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            '--dx': `${e.dx}px`,
          }}
        />
      ))}
    </>
  )
}
