(() => {
  const root = document.querySelector('[data-maturion-chat]');
  if (!root) return;

  const launcher = root.querySelector('.maturion-launcher');
  const panel = root.querySelector('.maturion-panel');
  const close = root.querySelector('.maturion-close');
  const form = root.querySelector('.maturion-form');
  const input = root.querySelector('#maturion-input');
  const log = root.querySelector('.maturion-panel-body');
  const status = root.querySelector('[data-maturion-status]');
  const endpoint = root.dataset.endpoint || '';
  const history = [];

  function setOpen(open) {
    panel.hidden = !open;
    launcher.setAttribute('aria-expanded', String(open));
    if (open) input.focus();
  }

  function addMessage(kind, text) {
    const article = document.createElement('article');
    article.className = `maturion-message maturion-message-${kind}`;
    const label = kind === 'user' ? 'You' : 'Maturion';
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `<strong>${label}:</strong> `;
    paragraph.append(document.createTextNode(text));
    article.append(paragraph);
    log.append(article);
    log.scrollTop = log.scrollHeight;
  }

  function extractAnswer(data) {
    if (!data || typeof data !== 'object') return '';
    return data.answer || data.message || data.response || data.text || '';
  }

  async function sendMessage(message) {
    if (!endpoint) {
      addMessage('ai', 'The public Maturion gateway is not connected yet. Please use the Contact page for now.');
      return;
    }

    status.textContent = 'Maturion is thinking...';
    const payload = {
      message,
      history: history.slice(-8),
      context: {
        source: 'apw-public-website',
        page: window.location.pathname,
        title: document.title
      }
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error(`Gateway returned ${response.status}`);
    const data = await response.json();
    const answer = extractAnswer(data) || 'I received the request, but the gateway returned an empty response.';
    history.push({ role: 'user', content: message }, { role: 'assistant', content: answer });
    addMessage('ai', answer);
  }

  launcher.addEventListener('click', () => setOpen(panel.hidden));
  close.addEventListener('click', () => setOpen(false));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;
    input.value = '';
    addMessage('user', message);

    try {
      await sendMessage(message);
      status.textContent = endpoint ? 'Gateway configured.' : 'Gateway pending.';
    } catch (error) {
      console.error(error);
      addMessage('ai', 'I could not reach the Maturion gateway. Please try again later or contact APGI directly.');
      status.textContent = 'Gateway unavailable.';
    }
  });
})();
