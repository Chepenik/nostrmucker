import React, { useState, useEffect } from 'react';
import { useNostrHooks } from 'nostr-hooks';
import { Button } from '@/shared/components/ui/button';

const stoicQuotes = [
  { author: "Marcus Aurelius", quote: "You have power over your mind - not outside events. Realize this, and you will find strength." },
  { author: "Seneca", quote: "We suffer more often in imagination than in reality." },
  { author: "Epictetus", quote: "It's not what happens to you, but how you react to it that matters." },
  { author: "Marcus Aurelius", quote: "The happiness of your life depends upon the quality of your thoughts." },
  { author: "Seneca", quote: "Luck is what happens when preparation meets opportunity." },
  { author: "Epictetus", quote: "Don't explain your philosophy. Embody it." },
  { author: "Marcus Aurelius", quote: "The best revenge is to be unlike him who performed the injustice." },
];

export const StoicWisdomTipper: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(stoicQuotes[0]);
  const [tipAmount, setTipAmount] = useState(0);
  const [showTip, setShowTip] = useState(false);
  useNostrHooks();

  const getRandomQuote = () => {
    const randomQuote = stoicQuotes[Math.floor(Math.random() * stoicQuotes.length)];
    setCurrentQuote(randomQuote);
  };

  useEffect(getRandomQuote, []);

  const handleTip = () => {
    if (tipAmount > 0) {
      console.log(`Tipping ${tipAmount} sats for the quote: "${currentQuote.quote}" by ${currentQuote.author}`);
      setTipAmount(0);
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800">
      <p className="text-xl mb-4 font-serif italic">"{currentQuote.quote}"</p>
      <p className="text-right font-bold mb-6">- {currentQuote.author}</p>
      <div className="flex flex-wrap justify-between gap-4">
        <Button onClick={getRandomQuote} variant="outline" className="flex-grow">New Quote</Button>
        <Button onClick={() => setShowTip(!showTip)} variant="outline" className="flex-grow">
          {showTip ? "Hide Tip" : "Show Tip"}
        </Button>
      </div>
      {showTip && (
        <div className="mt-6">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={tipAmount}
            onChange={(e) => setTipAmount(Number(e.target.value))}
            className="w-full mb-2"
          />
          <div className="text-center mb-4">{tipAmount} sats</div>
          <Button onClick={handleTip} disabled={tipAmount === 0} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
            Tip {tipAmount} sats
          </Button>
        </div>
      )}
    </div>
  );
};