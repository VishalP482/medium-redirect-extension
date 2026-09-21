chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  // Only handle the main page, not iframes
  if (details.frameId !== 0) {
    return;
  }

  const url = new URL(details.url);

  if (url.hostname === "medium.com" && url.pathname.length > 1) {
    const targetUrl = `https://freedium-mirror.cfd/${details.url}`;

    chrome.tabs.update(details.tabId, {
      url: targetUrl
    });
  }
});


chrome.action.onClicked.addListener(async (tab) => {
    console.log("object", tab.url)
  if (!tab.url) return;

  const url = new URL(tab.url);

  if (url.hostname === "medium.com" && url.pathname.length > 1) {
    const targetUrl = `https://freedium-mirror.cfd/${tab.url}`;

    await chrome.tabs.update(tab.id, {
      url: targetUrl
    });
  }
});