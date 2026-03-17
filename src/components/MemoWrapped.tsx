import { useState, memo } from "react";

export const MemoWrapped = memo(() => {
  const [shouldThrow, setShouldThrow] = useState(false);
  if (shouldThrow) {
    throw new Error("Boom!");
  }
  return (
    <>
      <p className="syntax">
        <code>memo(() =&gt; {"{}"})</code>
      </p>
      <p>
        Anonymous arrow inside <code>memo()</code> &mdash; React has no name to
        display. Shows as <code>&lt;Anonymous&gt;</code> in DevTools and
        component stacks.
      </p>
      <button onClick={() => setShouldThrow(true)}>Throw Error</button>
    </>
  );
})
