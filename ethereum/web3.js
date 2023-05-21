
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and Metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} 
else {
    // We are on the server or the user doesn't have Metamask.
    const provider = new Web3.providers.HttpProvider(
    'https://sepolia.infura.io/v3/5155cea9c4e64a61a936191776a8de32'
);
    web3 = new Web3(provider);
};

export default web3;
