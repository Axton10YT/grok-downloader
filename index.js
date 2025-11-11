export default {
  async fetch(request) {
    const repo = 'Axton10YT/grok-downloader';
    const apiUrl = `https://api.github.com/repos/${repo}/releases/latest`;

    const releaseRes = await fetch(apiUrl, {
      headers: { 'User-Agent': 'Grok-Worker' }
    });

    if (!releaseRes.ok) {
      return new Response('Failed to fetch latest release info', { status: 500 });
    }

    const releaseData = await releaseRes.json();
    const asset = releaseData.assets.find(a => a.name.endsWith('.exe'));

    if (!asset) {
      return new Response('No installer found in latest release.', { status: 404 });
    }

    return Response.redirect(asset.browser_download_url, 302);
  }
}

