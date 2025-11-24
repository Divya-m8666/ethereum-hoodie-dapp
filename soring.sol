// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageDapp {
    string[] public messages;

    // Store a new message
    function setMessage(string memory _message) public {
        messages.push(_message);
    }

    // Read all messages
    function getAllMessages() public view returns (string[] memory) {
        return messages;
    }

    // Optional: Get latest message only
    function getLatestMessage() public view returns (string memory) {
        if (messages.length == 0) return "";
        return messages[messages.length - 1];
    }
}
