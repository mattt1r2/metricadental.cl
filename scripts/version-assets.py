"""Refresh CSS/JS URL versions before committing a change (Python standard library)."""
from pathlib import Path
import hashlib
import re

site = Path(__file__).resolve().parents[1] / 'site'
for name in ['styles.css', 'service-layout.css', 'script.js', 'servimat-analytics.js']:
    content = (site / name).read_bytes().replace(b'\r\n', b'\n')
    version = hashlib.sha256(content).hexdigest()[:12]
    for page in site.glob('*.html'):
        html = page.read_text(encoding='utf-8')
        pattern = r'(["\'])(/?)' + re.escape(name) + r'(?:\?v=[^"\']*)?(["\'])'
        html = re.sub(pattern, lambda match: match[1] + match[2] + name + '?v=' + version + match[3], html)
        page.write_text(html, encoding='utf-8')
    print(name, version)
