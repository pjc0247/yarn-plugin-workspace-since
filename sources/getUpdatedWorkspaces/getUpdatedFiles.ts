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
    [
      'pr',
      'diff',
      process.env.GITHUB_PR_ID,
      '--name-only',
      '--repo',
      process.env.GITHUB_REPOSITORY,
    ],
    {
      cwd,
      shell: true,
    },
  );

  console.log([
    'pr',
    'diff',
    process.env.GITHUB_PR_ID,
    '--name-only',
    '--repo',
    process.env.GITHUB_REPOSITORY,
  ]);

  return stdout.split(`\n`);
}
