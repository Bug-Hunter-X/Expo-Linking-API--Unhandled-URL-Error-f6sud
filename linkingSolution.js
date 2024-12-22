//linkingSolution.js
import * as Linking from 'expo-linking';

async function handleDeepLink(url) {
  try {
    // Check if the URL is already being handled
    const isAlreadyHandled = await Linking.isURLHandled(url);
    if (isAlreadyHandled) {
      console.warn(`URL already handled: ${url}`);
      return;
    }
    // Open the URL if it's not already handled
    const result = await Linking.openURL(url);
    console.log('URL opened successfully:', result);
  } catch (error) {
    console.error('Error opening URL:', error);
    // Handle error gracefully (e.g., show an alert to the user)
  }
}

export default handleDeepLink;