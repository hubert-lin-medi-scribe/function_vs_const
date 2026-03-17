import { type ReactNode } from "react"

export function UserProfile({ id }: { id: string }) {
  return <div className="profile">{id}</div>
}

export function Dashboard() {
  return <main><h1>Dashboard</h1></main>
}

export function SearchBar() {
  return <input type="search" placeholder="Search…" />
}

export function Modal({ children }: { children: ReactNode }) {
  return <div className="modal-overlay"><div className="modal">{children}</div></div>
}

export function DataTable({ rows }: { rows: string[][] }) {
  return (
    <table>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
        ))}
      </tbody>
    </table>
  )
}

export function Avatar({ src }: { src: string }) {
  return <img className="avatar" src={src} alt="" />
}
