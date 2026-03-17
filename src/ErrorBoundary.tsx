import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
}

interface State {
  error: Error | null;
  componentStack: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null, componentStack: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(_error: Error, info: ErrorInfo) {
    this.setState({ componentStack: info.componentStack ?? null });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="card error">
          <h3>{this.props.label}</h3>
          <div className="stack-section">
            <h4>
              error.stack <span className="tag">JS engine</span>
            </h4>
            <pre>{this.state.error.stack}</pre>
          </div>
          <div className="stack-section">
            <h4>
              componentStack <span className="tag">React</span>
            </h4>
            <pre>{this.state.componentStack || "(empty)"}</pre>
          </div>
        </div>
      );
    }

    return (
      <div className="card">
        <h3>{this.props.label}</h3>
        {this.props.children}
      </div>
    );
  }
}
