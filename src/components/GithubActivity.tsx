import { GitHubCalendar } from 'react-github-calendar';
import { siteConfig } from '@/data/siteConfig';
import { useTheme } from '@/contexts/ThemeContext';

export default function GithubActivity() {
  const { theme } = useTheme();

  const monoTheme = {
    light: ['#e8e8e8', '#c0c0c0', '#909090', '#606060', '#303030'],
    dark:  ['#1c1c1c', '#2e2e2e', '#4a4a4a', '#6b6b6b', '#a0a0a0'],
  };

  const tooltipText = (a: { date: string; count: number; level: number }) =>
    a.count === 0
      ? `No contributions on ${a.date}`
      : `${a.count} contribution${a.count !== 1 ? 's' : ''} on ${a.date}`;

  return (
    <section id="github-activity" className="w-full flex justify-center px-4 lg:px-0 mb-6">
      <div className="max-w-2xl w-full">

        <h2 className="text-4xl font-light text-text-primary mb-4 font-instrumentserif">
          GitHub Activity
        </h2>

        <div className="overflow-x-auto hide-scrollbar w-full">
          <GitHubCalendar
            username={siteConfig.socials.github.username}
            theme={monoTheme}
            colorScheme={theme === 'dark' ? 'dark' : 'light'}
            blockSize={10}
            blockMargin={3}
            blockRadius={2}
            fontSize={11}
            style={{ color: 'var(--color-text-secondary)' }}
            tooltips={{
              activity: {
                text: tooltipText,
                placement: 'top',
                withArrow: true,
              },
            }}
          />
        </div>

      </div>
    </section>
  );
}
