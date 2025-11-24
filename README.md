# ethereum-hoodie-dapp
#  CyberVault DApp  
A decentralized secure-record storage system built on the Ethereum blockchain.  
CyberVault allows users to **upload, store, and retrieve logs/messages** in a tamper-proof, blockchain-backed environment.

---

##  About the Project

CyberVault is a Web3-powered decentralized application (DApp) designed for:
- Secure message logging  
- Immutable on-chain record storage  
- Blockchain-based audit logs  
- Simple UI for reading + writing messages  

This DApp uses:
- **Solidity Smart Contract**
- **Ethers.js v5.7**
- **MetaMask Wallet Connection**
- **HTML/CSS/JS Frontend**
- **Neon Cyber UI Design (Orbitron Font)**

The smart contract is deployed on Ethereum and interacts using Ethers.js.

---

##  Features
###  **Secure Logging**
Store any string message permanently on the blockchain.  
Every message becomes an immutable entry.

###  **Retrieve Logs**
Fetch all messages ever stored, or get only the latest one.

###  **Auto Wallet Detection**
The DApp automatically checks if MetaMask is installed and connected.

###  **Blockchain Write Operation**
Upload secure records using the `setMessage()` function.

### **Blockchain Read Operation**
Retrieve logs using:
- `getAllMessages()`
- `getLatestMessage()`

###  **Modern Neon Cyber UI**
With:
- Orbitron font  
- Neon green glow  
- Animated transitions  
- Futuristic dark theme  

---

##  Smart Contract

###  **Contract Name:** `MessageDapp`

### Solidity Code:
```solidity
function setMessage(string memory _message) public;
function getAllMessages() public view returns (string[] memory);
function getLatestMessage() public view returns (string memory);
