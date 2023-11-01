import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { FlameKindling } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export default function Navbar() {
  return (
    <div className="w-full border-b px-5 md:px-8 flex py-2 mb-7 items-center justify-between">
      <div className="flex items-center gap-1">
        <Button size="icon" variant="ghost" aria-label="Logo" title="logo">
          <FlameKindling className="text-violet-500" />
        </Button>

        <h1 className="text-xl font-semibold">Z-Word-Counter</h1>
      </div>
      <div className="flex justify-center items-center">
        <Button variant="ghost" size="icon">
          <a
            href="https://www.linkedin.com/in/muhammad-dariaz-zidane/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My Linkedin"
          >
            <LinkedInLogoIcon className="w-5 h-5 " />
          </a>
        </Button>
        <Button variant="ghost" size="icon">
          <a
            href="https://github.com/muhammaddariazzidane/WordCounter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My Github"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </a>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
