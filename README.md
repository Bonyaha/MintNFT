# Mint NFT 

- removed import `"@openzeppelin/contracts/utils/Counters.sol";` from contract, because it gived me an error. Instead I used uint256 _tokenIdCounter state variable
- used pinata service for storing image and metadata
- used pinata-web3 package for this
- you can use this format of URL to check it: https://testnets.opensea.io/assets/<CHAIN>/<CONTRACT_ADDRESS>/<TOKEN_ID> so your last deployment would be https://testnets.opensea.io/assets/sepolia/0x912B771DAa41470395D60e1c943aA828DDC88372/0