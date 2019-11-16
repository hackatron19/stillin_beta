import Insurance from './contracts/Insurance.json';

const options = {
  contracts : [Insurance],
  web3:{
    fallback: {
      type:"ws",
      url: "ws://127.0.0.1:9545",
    },
  }
};

export default options;
