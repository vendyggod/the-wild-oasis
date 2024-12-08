import { GlobalStyles } from './styles/';
import { AppRoutes } from './app/routes/';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './services/apis/query-client';
import { Toaster } from 'react-hot-toast';
import { toastContainerStyles, toastStyles } from './styles/';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <AppRoutes />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={toastContainerStyles}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: toastStyles,
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
