'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold">ClickByClick</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Changelog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign in</Button>
            <Button className="bg-black hover:bg-gray-800">Get started</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#" className="block text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">How it works</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Changelog</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Pricing</a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost">Sign in</Button>
              <Button className="bg-black hover:bg-gray-800">Get started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
