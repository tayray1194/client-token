
// LOGIC to connect metamask
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    console.log('Install MetaMask')
    document.querySelector('#ethereum-button')
        .innerHTML = "a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn' target='_blank'>Install MetaMask</a>";
    document.querySelector('.intro').style.display = 'none';
}


const ethEnabled = async () => {
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        console.log('web3.js initialized');
        return true;
    }
    console.log('web3.js NOT initialized');
    return false;
}

//======================================================================================================================
//
// TODO - create handles for HTML elements
//
//======================================================================================================================
// form fields
const tokenAddressInput = document.querySelector('#Token-Address');
const ChangeBuyTaxMarketingInput = document.querySelector('#Change-Buy-Tax-Marketing');
const ChangeBuyTaxLiquidityInput = document.querySelector('#Change-Buy-Tax-Liquidity');
const ChangeSellTaxMarketingInput = document.querySelector('#Change-Sell-Tax-Marketing');
const ChangeSellTaxBurnInput = document.querySelector('#Change-Sell-Tax-Burn');
const ChangeMarketingWalletInput = document.querySelector('#Change-Marketing-Wallet');
const ChangeLiquidityWalletInput = document.querySelector('#Change-Liquidity-Wallet');
const MarketingWalletAddressLabel = document.querySelector('#Marketing-Wallet-Address-Label');
const LiquidityWalletAddressLabel = document.querySelector('#Liquidity-Wallet-Address-Label');
const BuyTaxMarketingLabel = document.querySelector('#Buy-Tax-Marketing-Label');
const BuyTaxLiquidityLabel = document.querySelector('#Buy-Tax-Liquidity-Label');
const SellTaxMarketingLabel = document.querySelector('#Sell-Tax-Marketing-Label');
const SellTaxBurnLabel = document.querySelector('#Sell-Tax-Burn-Label');
const CheckTotalSupplyLabel = document.querySelector('#Check-Total-Supply-Label');
const CheckTotalCirculationLabel = document.querySelector('#Check-Total-Circulation-Label');
const CheckTotalBurnedLabel = document.querySelector('#Check-Total-Burned-Label');



// buttons
const ChangeBuyTaxMarketingButton = document.querySelector('#Change-Buy-Tax-Marketing-Button');
const ChangeBuyTaxLiquidityButton = document.querySelector('#Change-Buy-Tax-Liquidity-Button');
const ChangeSellTaxMarketingButton = document.querySelector('#Change-Sell-Tax-Marketing-Button');
const ChangeSellTaxBurnButton = document.querySelector('#Change-Sell-Tax-Burn-Button');
const ChangeMarketingWalletButton = document.querySelector('#Change-Marketing-Wallet-Button');
const ChangeLiquidityWalletButton = document.querySelector('#Change-Liquidity-Wallet-Button');
const CheckMarketingWalletButton = document.querySelector('#Check-Marketing-Wallet-Button');
const CheckLiquidityWalletButton = document.querySelector('#Check-Liquidity-Wallet-Button');
const CheckTransferTaxButton = document.querySelector('#Check-Transfer-Tax-Button');
const CheckTotalSupplyButton = document.querySelector('#Check-Total-Supply-Button');
const CheckTotalCirculationButton = document.querySelector('#Check-Total-Circulation-Button');
const CheckTotalBurnedButton = document.querySelector('#Check-Total-Burned-Button');






//======================================================================================================================
//
// TODO - create a button on the site that says "Connect to Metamask" and has id = 'ethereum-button'
//
//======================================================================================================================
const ethereumButton = document.querySelector('#ethereum-button');


ethereumButton.addEventListener('click', () => {
    // Will start the MetaMask extension
    getAccounts();
});

async function getAccounts() {

    // fetch contract ABI's
    const _tokenABI = await fetch("./js/abis/clientToken.json")
        .then(response => {
            console.log('Loaded tokenABI');
            return response.json();
        })
        .catch(function (err) {
            console.log(err);
        });
    const tokenABI = _tokenABI["abi"];

    //======================================================================================================================
    //
    // TODO - register event listeners for buttons inside of getAccounts function
    //
    //======================================================================================================================

    ChangeBuyTaxMarketingButton.addEventListener('click',  () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const _buyTaxMarketing = ChangeBuyTaxMarketingInput.value;
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);

        let tx_builder = tokenContract.methods.setBuyTaxMarketingPercentage(_buyTaxMarketing);
        let encoded_tx = tx_builder.encodeABI();
        let transactionObject = {
            data: encoded_tx,
            from: account,
            to: _tokenAddress
            };

        console.log('Sending setBuyTaxMarketingPercentage transaction...');
        web3.eth.sendTransaction(transactionObject)
            .then(function(receipt){
                console.log('setBuyTaxMarketingPercentage transaction receipt received!');
                console.log(receipt);
            });
    });

    ChangeBuyTaxLiquidityButton.addEventListener('click',  () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const _buyTaxLiquidity = ChangeBuyTaxLiquidityInput.value;
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);

        let tx_builder = tokenContract.methods.setBuyTaxLiquidityPercentage(_buyTaxLiquidity);
        let encoded_tx = tx_builder.encodeABI();
        let transactionObject = {
            data: encoded_tx,
            from: account,
            to: _tokenAddress
        };

        console.log('Sending setBuyTaxLiquidityPercentage transaction...');
        web3.eth.sendTransaction(transactionObject)
            .then(function(receipt){
                console.log('setBuyTaxLiquidityPercentage transaction receipt received!');
                console.log(receipt);
            });
    });

    ChangeSellTaxMarketingButton.addEventListener('click',  () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const _sellTaxMarketing = ChangeSellTaxMarketingInput.value;
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);

        let tx_builder = tokenContract.methods.setSellTaxMarketingPercentage(_sellTaxMarketing);
        let encoded_tx = tx_builder.encodeABI();
        let transactionObject = {
            data: encoded_tx,
            from: account,
            to: _tokenAddress
        };

        console.log('Sending setSellTaxMarketingPercentage transaction...');
        web3.eth.sendTransaction(transactionObject)
            .then(function(receipt){
                console.log('setSellTaxMarketingPercentage transaction receipt received!');
                console.log(receipt);
            });
    });

    ChangeSellTaxBurnButton.addEventListener('click',  () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const _sellTaxBurn = ChangeSellTaxBurnInput.value;
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);

        let tx_builder = tokenContract.methods.setSellTaxBurnPercentage(_sellTaxBurn);
        let encoded_tx = tx_builder.encodeABI();
        let transactionObject = {
            data: encoded_tx,
            from: account,
            to: _tokenAddress
        };

        console.log('Sending setSellTaxBurnPercentage transaction...');
        web3.eth.sendTransaction(transactionObject)
            .then(function(receipt){
                console.log('setSellTaxBurnPercentage transaction receipt received!');
                console.log(receipt);
            });
    });

    ChangeMarketingWalletButton.addEventListener('click',  () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const _marketingAddress = web3.utils.toChecksumAddress(ChangeMarketingWalletInput.value);
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);

        let tx_builder = tokenContract.methods.SetMarketingWallet(_marketingAddress);
        let encoded_tx = tx_builder.encodeABI();
        let transactionObject = {
            data: encoded_tx,
            from: account,
            to: _tokenAddress
        };

        console.log('Sending SetMarketingWallet transaction...');
        web3.eth.sendTransaction(transactionObject)
            .then(function(receipt){
                console.log('SetMarketingWallet transaction receipt received!');
                console.log(receipt);
            });
    });

    ChangeLiquidityWalletButton.addEventListener('click',  () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const _liquidityAddress = web3.utils.toChecksumAddress(ChangeLiquidityWalletInput.value);
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);

        let tx_builder = tokenContract.methods.SetLiquidityWallet(_liquidityAddress);
        let encoded_tx = tx_builder.encodeABI();
        let transactionObject = {
            data: encoded_tx,
            from: account,
            to: _tokenAddress
        };

        console.log('Sending SetLiquidityWallet transaction...');
        web3.eth.sendTransaction(transactionObject)
            .then(function(receipt){
                console.log('SetLiquidityWallet transaction receipt received!');
                console.log(receipt);
            });
    });

    CheckMarketingWalletButton.addEventListener('click', async () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);
        const _marketingWallet = await tokenContract.methods.marketingWalletAddress().call({from: account});
        MarketingWalletAddressLabel.innerHTML = 'Marketing Wallet Address: ' + _marketingWallet;

    });

    CheckLiquidityWalletButton.addEventListener('click', async () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);
        const _liquidityWallet = await tokenContract.methods.liquidityWalletAddress().call({from: account});
        LiquidityWalletAddressLabel.innerHTML = 'Liquidity Wallet Address: ' + _liquidityWallet;

    });

    CheckTransferTaxButton.addEventListener('click',  async () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);
        const transferTax = await tokenContract.methods.transferTaxPercentages().call();

        BuyTaxMarketingLabel.innerHTML = 'Buy Tax Marketing: ' + transferTax[0];
        BuyTaxLiquidityLabel.innerHTML = 'Buy Tax Liquidity: ' + transferTax[1];
        SellTaxMarketingLabel.innerHTML = 'Sell Tax Marketing: ' + transferTax[2];
        SellTaxBurnLabel.innerHTML = 'Sell Tax Burn: ' + transferTax[3];

    });

    CheckTotalSupplyButton.addEventListener('click', async () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);
        const _totalSupply = await tokenContract.methods.totalSupply().call();
        CheckTotalSupplyLabel.innerHTML = 'Total Supply: ' + _totalSupply;

    });

    CheckTotalCirculationButton.addEventListener('click', async () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);
        const _totalCirculation = await tokenContract.methods.totalInCirculation().call();
        CheckTotalCirculationLabel.innerHTML = 'Total in Circulation: ' + _totalCirculation;

    });

    CheckTotalBurnedButton.addEventListener('click', async () => {

        const _tokenAddress = web3.utils.toChecksumAddress(tokenAddressInput.value);
        const tokenContract = new web3.eth.Contract(tokenABI, _tokenAddress);
        const _totalBurned = await tokenContract.methods.totalBurned().call();
        CheckTotalBurnedLabel.innerHTML = 'Total Burned: ' + _totalBurned;

    });

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    ethereumButton.innerHTML = account;

    let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    if (web3) {
        console.log('web3');
    } else { console.log('NO web3'); }


    const BN = web3.utils.BN;
    const balance = await web3.eth.getBalance(account);



}
