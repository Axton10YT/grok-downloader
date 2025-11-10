export default {
  async fetch(request) {
    const fileUrl = 'https://axton10yt.github.io/grok-downloader/Grok%20Setup%201.0.0.exe';

    const response = await fetch(fileUrl);

    return new Response(response.body, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename="Grok Setup 1.0.0.exe"',
        'Content-Length': response.headers.get('Content-Length')
      }
    });
  }
}
