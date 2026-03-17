import { useState } from 'react'

export const ArrowComponent = () => {
  const [shouldThrow, setShouldThrow] = useState(false)
  if (shouldThrow) {
    throw new Error('Boom!')
  }
  return (
    <>
      <p className="syntax">
        <code>const ArrowComponent = () =&gt; {'{}'}</code>
      </p>
      <p>Arrow assigned to <code>const</code> &mdash; modern engines infer the name, so this <em>usually</em> works. But see the next two cases.</p>
      <button onClick={() => setShouldThrow(true)}>Throw Error</button>
    </>
  )
}

