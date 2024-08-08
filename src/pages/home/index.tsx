import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { StoicWisdomTipper } from '@/features/stoic-wisdom/stoicWisdomTipper';
import { ModeToggle } from '@/shared/components/mode-toggle';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Separator } from '@/shared/components/ui/separator';

import { Login } from './example-components/login';
import { ZapMe } from './example-components/zap-me';

export const HomePage = () => {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Stoic Wisdom</CardTitle>
          <CardDescription className="text-center">Discover timeless insights from Stoic philosophers</CardDescription>
        </CardHeader>

        <Separator />

        <CardContent className="mt-6 flex flex-col gap-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <ZapMe />
            <Login />
            <Button 
              onClick={() => setShowQuote(!showQuote)}
              variant="outline"
              className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
            >
              {showQuote ? "Hide Wisdom" : "Reveal Wisdom"}
            </Button>
          </div>
          {showQuote && <StoicWisdomTipper />}
        </CardContent>

        <Separator />

        <CardFooter className="mt-6 flex items-center gap-2">
          <p className="text-xs text-gray-500">
            Made with <span className="text-red-500">💜</span> by The Binmucker
          </p>

          <Button variant="outline" size="icon" asChild className="ml-auto">
            <a href="https://github.com/chepenik" target="_blank" rel="noreferrer">
              <GitHubLogoIcon />
            </a>
          </Button>

          <ModeToggle />
        </CardFooter>
      </Card>
    </div>
  );
};