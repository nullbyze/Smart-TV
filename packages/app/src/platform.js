export const isWebOS = () => {
	if (typeof window === 'undefined') return false;
	return typeof window.PalmServiceBridge !== 'undefined' ||
		navigator.userAgent.includes('Web0S') ||
		navigator.userAgent.includes('webOS');
};

export const isTizen = () => {
	if (typeof window === 'undefined') return false;
	return typeof window.tizen !== 'undefined' ||
		navigator.userAgent.toLowerCase().includes('tizen');
};

export const getPlatform = () => {
	if (isWebOS()) return 'webos';
	if (isTizen()) return 'tizen';
	return 'unknown';
};
