import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, errorInfo) => {
    console.error('Error caught by boundary:', error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>Please refresh the page or try again later.</p>
      </div>
    );
  }

  return (
    <React.ErrorBoundary onError={handleOnError}>
      {children}
    </React.ErrorBoundary>
  );
}


function TestComponent() {
  throw new Error('Error occurred in TestComponent');
  return <div>This component should not render if an error occurs.</div>;
}

function App() {
  return (
    <div>
      <h1>Test Error Boundary</h1>
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
