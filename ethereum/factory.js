import web3 from './web3';
import EventFactory from './build/EventFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(EventFactory.interface),
    '0x48B25A56C43a3B068bc2Dcfa4ab92Dd8187Abc0C'
);

export default instance;