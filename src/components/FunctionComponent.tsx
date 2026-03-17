import { useState } from 'react'

export function FunctionComponent() {
  const [shouldThrow, setShouldThrow] = useState(false)
  if (shouldThrow) {
    throw new Error('Boom!')
  }
  return (
    <>
      <p className="syntax">
        <code>function FunctionComponent() {'{}'}</code>
      </p>
      <p>Function declaration &mdash; the name is part of the syntax, so it <strong>always</strong> appears in stack traces.</p>
      <button onClick={() => setShouldThrow(true)}>Throw Error</button>
    </>
  )
}
