require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name remember rural slow inner praise army gas'; 
let testAccounts = [
"0x57aba45e3b273c7c1983680040bba47d6c2558822ea17c03d77306d954fe7b14",
"0xde8cb25b24b6177f4cd395d42594a336403fa39a332e6c8f5e87f57ebf4cef65",
"0x932cfb7cbd518b988543d6fa292ea27ba53869018af197c3956ffaea6ed69b42",
"0xa0483c31fd4300df70d1108b9a71fe857f7e5b85981a09491388a7bfd573f3a2",
"0x4fdd0fca61c3a4a024308ad0372f5e37884d53aa9cbf2286f4e23f39dd66baf6",
"0x88232b2601bcb8db7daa66882ce6bbd9edef76adb1e006654f95ba817c04d4ec",
"0x8ad29a634e1558823443d70971b5907c38ac493b0366cefdbe24a49347c69a00",
"0xc7c502c73b3ed04b520cc7a7422960360a35ca7a6138c87bddfce6b39aed67a7",
"0x9eea68dd360d4ee84db7d1eec35078c8a51f387b7bf9756f946f32bc94a3602e",
"0x9bd39f38a17b6e45c21ac63d08dcbe632151c2941e73d95439810db93fee4257"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
