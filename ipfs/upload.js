require('dotenv').config();
const PinataSDK = require("pinata-web3").PinataSDK

async function run() {
const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: "coffee-useful-lungfish-973.mypinata.cloud",
});

const upload = await pinata.upload.json({
  name: "Logo",
  description: "Company logo",
  image: "ipfs://bafkreibi3eq4qycgkccpxntpeyet53yijacibob7kdz3u5vv2npfs5qjhe",
  external_url: "https://pinata.cloud"
})

console.log(upload);

process.exit(0);

}

run();