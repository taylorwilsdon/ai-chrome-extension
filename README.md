# AI Chrome Extension

## Overview
The AI Chrome Extension is a browser extension for Chrome that allows you to quickly start a chat session using a keyboard shortcut (`Cmd+Shift+O`). The chat endpoint can be configured via a settings interface accessible by clicking the gear icon in the extension popup.

## Features
- **Keyboard Shortcut**: Start a chat session with `Cmd+Shift+O`.
- **Configurable Endpoint**: Set your preferred chat endpoint via the settings interface.
- **Local Storage**: Endpoint configuration is stored in local storage for persistence.

## Installation
1. **Download the Extension**:
   - Clone the repository:
     ```bash
     git clone https://github.com/your-username/ai-chrome-extension.git
     ```
   - Navigate to the project directory:
     ```bash
     cd ai-chrome-extension
     ```

2. **Load the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle switch in the top right corner.
   - Click "Load unpacked" and select the project directory.

## Usage
1. **Start a Chat Session**:
   - Press `Cmd+Shift+O` to open the chat interface.

2. **Configure the Endpoint**:
   - Click the gear icon in the extension popup.
   - If running open-webui locally, http://localhost:3000 would be your endpoint.
   - Enter your desired chat endpoint URL.
   - Click "Save" to apply the changes.

## Contributing
Contributions are welcome but it really ain't all that. Feel free to steal and do whatever you please. If you do want to contribute for some reason, please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Open a pull request to the main repository.

## License
This project is licensed under the Apache License. Do with it as you please! 