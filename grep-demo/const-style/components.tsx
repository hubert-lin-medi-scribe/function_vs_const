import { memo, type ReactNode } from "react"

export const UserProfile = ({ id }: { id: string }) => {
  return <div className="profile">{id}</div>
}

export const Dashboard = () => {
  return <main><h1>Dashboard</h1></main>
}

export const SearchBar = () => {
  return <input type="search" placeholder="Search…" />
}

export const Modal = ({ children }: { children: ReactNode }) => {
  return <div className="modal-overlay"><div className="modal">{children}</div></div>
}

export const DataTable = memo(({ rows }: { rows: string[][] }) => {
  return (
    <table>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
        ))}
      </tbody>
    </table>
  )
})

export const Avatar = memo(({ src }: { src: string }) => {
  return <img className="avatar" src={src} alt="" />
})
