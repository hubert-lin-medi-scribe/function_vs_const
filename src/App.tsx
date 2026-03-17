import "./App.css";
import { ErrorBoundary } from "./ErrorBoundary";
import { FunctionComponent } from "./components/FunctionComponent";
import { ArrowComponent } from "./components/ArrowComponent";
import { MemoWrapped } from "./components/MemoWrapped";
import { MemoNamed } from "./components/MemoNamed";

export function App() {
  return (
    <main>
      <h1>function vs const</h1>
      <p className="subtitle">
        Click each button to throw an error, then compare the stack traces.
        <br />
        Look for the <strong>component name</strong> (or lack thereof) in each
        trace.
      </p>

      <div className="grid">
        <ErrorBoundary label="1. function Declaration">
          <FunctionComponent />
        </ErrorBoundary>

        <ErrorBoundary label="2. const Arrow">
          <ArrowComponent />
        </ErrorBoundary>

        <ErrorBoundary label="3. memo() with Anonymous Arrow">
          <MemoWrapped />
        </ErrorBoundary>

        <ErrorBoundary label="4. memo() with Named Function (fix)">
          <MemoNamed />
        </ErrorBoundary>
      </div>
    </main>
  );
}
