let openedViaShortcut = false;

chrome.commands.onCommand.addListener((command) => {
  if (command === "open-search") {
    openedViaShortcut = true;
    chrome.windows.getCurrent().then(() => {
      chrome.action.openPopup();
      setTimeout(() => {
        openedViaShortcut = false;
      }, 1000);
    }).catch(error => {
      console.error('No active window found:', error);
      openedViaShortcut = false;
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkOpenedViaShortcut") {
    sendResponse({ openedViaShortcut: openedViaShortcut });
  }
});
