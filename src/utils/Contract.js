import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import BSCWin from "../ABIs/BSCWin.json";

let myWeb3;
let BSCWinAddress;

async function getUserBalance() {
    if (myWeb3) {
        let userAddress = await myWeb3.eth.getAccounts();
        const BSCWinContract = new myWeb3.eth.Contract(BSCWin.abi, BSCWinAddress);
        let tokenBalance = await BSCWinContract.methods.balanceOf(userAddress[0]).call();
        let wei_amount = myWeb3.utils.toWei(tokenBalance.toString(),'gwei');
        let balance = myWeb3.utils.fromWei(wei_amount.toString());
        return parseInt(balance, 10).toFixed(2);
    } else {
        return 0;
    }
}

async function getBSCWinDrawAmount(){
    const web3 = new Web3("https://bsc-dataseed1.defibit.io/");
    const BSCWinContract = new web3.eth.Contract(BSCWin.abi, BSCWinAddress);
    let BSCWinDrawAmount = await BSCWinContract.methods.BSCWinDrawAmount().call();
    let amount = web3.utils.fromWei(BSCWinDrawAmount.toString());
    return parseInt(amount, 10).toFixed(2);
}

async function getAmountSent() {
    const web3 = new Web3("https://bsc-dataseed1.defibit.io/");
    const BSCWinContract = new web3.eth.Contract(BSCWin.abi, BSCWinAddress);
    let totalWinnings = await BSCWinContract.methods.totalBUSDGiven().call();

    let winnings = web3.utils.fromWei(totalWinnings.toString());

    return +winnings;
}

async function getWinners() {
    const web3 = new Web3("https://bsc-dataseed1.defibit.io/");
        const BSCWinContract = new web3.eth.Contract(BSCWin.abi, BSCWinAddress);
        let totalWinners = await BSCWinContract.methods.totalWinners().call();
        let winnerCount = 0
        let winnerList = [];
        if (totalWinners == 0) {
            return winnerList;
        }

        for (let i = totalWinners; i > 0; i--) {
            if (winnerCount == 5) {
                return;
            }
            let winner = await BSCWinContract.methods._winningUsers(i-1).call();
            let amount = await BSCWinContract.methods._winningAmount(i-1).call();
            amount = web3.utils.fromWei(amount.toString());
            winnerList.push({title: winner, value: parseInt(amount, 10).toFixed(2)});
            console.log(winnerList);
            winnerCount = winnerCount + 1;
        }

        return winnerList;
}

const loadWeb3 = async() => 
 new Promise((resolve, reject) => {
   // Wait for loading completion to avoid race conditions with web3 injection timing.
   let web3;
   async function web3Check() {
     // Modern dapp browsers...
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
         
          return resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        web3 = window.web3;
        console.log("Injected web3 detected.");
      
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");

        resolve(web3);
      }
   }
   web3Check().then((res) => {
       return res;
   });

 });



async function connectWallet() {
    const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
               56: 'https://bsc-dataseed1.defibit.io/'
            },
            network: 'binance',
          }
        }
    };
    const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required,
        theme: {
          background: "rgb(253, 250, 250)",
          main: "rgb(33, 37, 41)",
          secondary: "rgb(136, 136, 136)",
          border: "rgba(195, 195, 195, 0.14)",
          hover: "rgb(252,163,220)"
        }
    });
    let provider = await web3Modal.connect();

    const modalWeb3 = new Web3(provider);
    
    if (modalWeb3) {
        myWeb3 = modalWeb3;
    } else {
        myWeb3 = await loadWeb3();
    }

    if (!myWeb3 && window.ethereum && window.ethereum.isMetaMask) {
        window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    return await myWeb3.eth.getAccounts();
}

export {
    connectWallet,
    getUserBalance,
    getAmountSent,
    getWinners
}