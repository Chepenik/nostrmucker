import { useNostrHooks } from 'nostr-hooks';
import { RouterProvider } from 'react-router-dom';
import { StoicWisdomTipper } from '@/features/stoic-wisdom/stoicWisdomTipper';

import './index.css';

import { router } from '@/pages';

import { ThemeProvider } from '@/shared/components/theme-provider';
import { Toaster } from '@/shared/components/ui/toaster';

export const App = () => {
  useNostrHooks();

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <StoicWisdomTipper />
        <Toaster />
      </ThemeProvider>
    </>
  );
};
