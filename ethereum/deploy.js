// deploy code will go here

const HDWalletProvider=require('@truffle/hdwallet-provider');
const Web3=require('web3');
//const {interface , bytecode}=require('./compile');
const compiledFactory=require('./build/EventFactory.json');

const provider=new HDWalletProvider(
    'extend sister stable wood frown next illness bullet agent coffee transfer bacon',
    'https://sepolia.infura.io/v3/5155cea9c4e64a61a936191776a8de32'
);
const web3=new Web3(provider);

//a function just to use asynchronous and await ...
const deploy = async() =>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from acc : ',accounts[0]);

    const results = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data:compiledFactory.bytecode})
    .send({from:accounts[0],gas:'1000000'});
    
    //we want to see where our contract gets deployed to :
    //console.log(interface);
    console.log('contract deployed to : ',results.options.address);
    //to prevent hanging of our deployement :
    provider.engine.stop();
};
deploy();