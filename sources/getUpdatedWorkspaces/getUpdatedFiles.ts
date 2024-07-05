import execa from 'execa';

export async function getUpdatedFiles({
  from,
  to,
  cwd = process.cwd(),
}: {
  from: string;
  to: string;
  cwd?: string;
}) {
  const { stdout } = await execa(
    'gh',
    ['pr', 'diff', process.env.PR, '--name-only', '--repo', process.env.GITHUB_REPOSITORY],
    {
      cwd,
      shell: true,
    },
  );

  return stdout.split(`\n`);
}
