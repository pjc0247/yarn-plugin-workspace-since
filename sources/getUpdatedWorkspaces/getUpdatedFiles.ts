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
  const { stdout } = await execa('gh', ['pr', 'diff', process.env.GITHUB_PR_URL, '--name-only'], {
    cwd,
    shell: true,
  });

  console.log(['pr', 'diff', process.env.GITHUB_PR_ID, '--name-only']);

  return stdout.split(`\n`);
}
