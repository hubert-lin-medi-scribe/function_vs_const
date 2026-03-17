import { useState, memo } from "react";

export const MemoNamed = memo(function MemoNamed() {
  const [shouldThrow, setShouldThrow] = useState(false);
  if (shouldThrow) {
    throw new Error("Boom!");
  }
  return (
    <>
      <p className="syntax">
        <code>memo(function MemoNamed() {"{}"})</code>
      </p>
      <p>
        Named function inside <code>memo()</code> &mdash; the name is preserved
        in both <code>error.stack</code> and React's <code>componentStack</code>
        . No downsides, just slightly more verbose.
      </p>
      <button onClick={() => setShouldThrow(true)}>Throw Error</button>
    </>
  );
});
