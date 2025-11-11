import {Suspense} from 'react';
import Fetcher from './Fetcher';
import MyErrorBoundary from './MyErrorBoundary';
import ErrorFallback from './Fallback';
import { ErrorBoundary } from 'react-error-boundary';

const DrinksDisplay = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<div>Loading drinks...</div>}>
                <Fetcher />
            </Suspense>
        </ErrorBoundary>
    )
};

export default DrinksDisplay;