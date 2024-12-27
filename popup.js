// Handle search icon click
document.getElementById('searchIcon').addEventListener('click', function () {
  const searchInput = document.getElementById('searchInput').value.trim();
  if (searchInput) {
    chrome.storage.sync.get(['endpoint'], function (result) {
      const baseUrl = result.endpoint || 'https://example.com'; // Default fallback
      const queryParam = encodeURIComponent(searchInput);
      const searchUrl = `${baseUrl}?q=${queryParam}`;
      chrome.tabs.create({ url: searchUrl });
    });
  }
});

// Handle Enter key in search input
document.getElementById('searchInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const searchInput = this.value.trim();
    if (searchInput) {
      chrome.storage.sync.get(['endpoint'], function (result) {
        const baseUrl = result.endpoint || 'https://example.com'; // Default fallback
        const queryParam = encodeURIComponent(searchInput);
        const searchUrl = `${baseUrl}?q=${queryParam}`;
        chrome.tabs.create({ url: searchUrl });
      });
    }
  }
});

// Settings Toggle
const settingsButton = document.getElementById('settingsButton');
const settingsContainer = document.querySelector('.settings-container');
const body = document.body;

settingsButton.addEventListener('click', function () {
  settingsContainer.classList.toggle('hidden');
  body.classList.toggle('settings-active'); // Toggle body height
});

// Save Endpoint
const saveButton = document.getElementById('saveEndpoint');
saveButton.addEventListener('click', function () {
  const endpoint = document.getElementById('endpointInput').value.trim();
  if (endpoint) {
    chrome.storage.sync.set({ endpoint: endpoint }, function () {
      console.log('Endpoint saved:', endpoint);
      // Hide settings view and return to search bar
      settingsContainer.classList.add('hidden');
      body.classList.remove('settings-active');
    });
  }
});

// Load saved endpoint
chrome.storage.sync.get(['endpoint'], function (result) {
  if (result.endpoint) {
    document.getElementById('endpointInput').value = result.endpoint;
  } else {
    document.getElementById('endpointInput').value = 'https://example.com';
  }
});