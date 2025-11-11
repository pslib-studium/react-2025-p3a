import { Component, type ReactNode } from 'react';

class MyErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Nastala chyba při načítání dat.</p>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;