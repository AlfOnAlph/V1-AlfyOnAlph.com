import { getDefaultAlephiumWallet } from '@alephium/get-extension-wallet';
import { MessageHasher, SignMessageResult, SignUnsignedTxResult } from '@alephium/web3';

export const silentConnectWallet = async (
  onDisconnected: () => Promise<void>
) => {
  try {
    const alephium = await getDefaultAlephiumWallet();
    if (!alephium) {
      console.warn("No Alephium wallet available.");
      return undefined;
    }
    return await alephium.enableIfConnected({ onDisconnected, networkId: 'mainnet' });
  } catch (error) {
    console.error("Error during silent login :", error);
    return undefined;
  }
};

export const connectWallet = async (
  onDisconnected: () => Promise<void>
) => {
  try {
    const alephium = await getDefaultAlephiumWallet();
    if (!alephium) {
      console.warn("No Alephium wallet available.");
      return undefined;
    }
    return await alephium.enable({ onDisconnected, networkId: 'mainnet' });
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const disconnectWallet = async () => {
  try {
    const alephium = await getDefaultAlephiumWallet();
    if (!alephium) {
      console.warn("No Alephium wallet available for logout.");
      return undefined;
    }
    return await alephium.disconnect();
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
