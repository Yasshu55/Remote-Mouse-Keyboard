const PORT = 8000
let serverIp = '';

if (typeof window !== 'undefined') {
  serverIp = `${window.location.hostname}:${PORT}`;
}

export const TOUCHPAD_URL = serverIp ? `ws://${serverIp}/real-time` : '';
export const TOUCHPAD_CLICK_URL = serverIp ?`http://${serverIp}/touchpad/click` : '';
export const TOUCHPAD_RIGHT_CLICK_URL = serverIp ?`http://${serverIp}/touchpad/right-click` : '';
export const TOUCHPAD_LEFT_CLICK_URL = serverIp ?`http://${serverIp}/touchpad/left-click` : '';
