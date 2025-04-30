import { useState, useEffect, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error: Error | null;
}

const ErrorBoundary = ({ children }: Props) => {
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    error: null
  });

  useEffect(() => {
    const handleError = (error: Error) => {
      setErrorState({
        hasError: true,
        error
      });
    };

    window.addEventListener('error', (event) => handleError(event.error));
    return () => window.removeEventListener('error', (event) => handleError(event.error));
  }, []);

  if (errorState.hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-4">
            {errorState.error?.message || 'An unexpected error occurred'}
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setErrorState({ hasError: false, error: null })}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary; 