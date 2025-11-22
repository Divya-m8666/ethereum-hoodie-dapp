// Contract address from Remix
const CONTRACT_ADDRESS = "0x9C17c4e34F0B01c3eEc48C5F19fA36B9506063A0";

const CONTRACT_ABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "_value", "type": "uint256" }
    ],
    "name": "setValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getValue",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const connectBtn = document.getElementById("connectBtn");
const accountInfo = document.getElementById("accountInfo");
const networkInfo = document.getElementById("networkInfo");
const valueInput = document.getElementById("valueInput");
const setBtn = document.getElementById("setBtn");
const storedValueEl = document.getElementById("storedValue");
const statusEl = document.getElementById("status");

let provider;
let signer;
let contract;

connectBtn.addEventListener("click", async () => {
  if (!window.ethereum) {
    alert("MetaMask not detected.");
    return;
  }

  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    const network = await provider.getNetwork();

    accountInfo.textContent = "Connected: " + accounts[0];
    networkInfo.textContent = `Network: ${network.name} (Chain ID: ${network.chainId})`;

    statusEl.textContent = "Loading stored value…";
    await loadStoredValue();

  } catch (error) {
    console.error(error);
    statusEl.textContent = "Connection failed.";
  }
});

setBtn.addEventListener("click", async () => {
  if (!contract) return alert("Connect wallet first!");

  const value = valueInput.value.trim();
  if (!value) return alert("Enter a number");

  try {
    statusEl.textContent = "Waiting for MetaMask…";
    const tx = await contract.setValue(value);
    await tx.wait();

    statusEl.textContent = "Transaction confirmed ✓";
    valueInput.value = "";
    await loadStoredValue();

  } catch (error) {
    console.error(error);
    statusEl.textContent = "Transaction failed.";
  }
});

async function loadStoredValue() {
  if (!contract) return;

  try {
    const value = await contract.getValue();
    storedValueEl.textContent = value.toString();
    statusEl.textContent = "Value loaded ✓";

  } catch (error) {
    console.error(error);
    statusEl.textContent = "Failed to load value.";
  }
}
