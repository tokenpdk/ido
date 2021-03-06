import React, { useEffect, useReducer } from 'react'

import { ethers } from 'ethers';
import king from '../asset/king.jpg';
import question from '../asset/question.jpg';
import pdkSougou from '../asset/pdk-sougou.png';
import pdkSvg from '../asset/pdk.svg';
import pay from '../asset/pay.gif';
import styles from './index.module.css';

import { isConnected2MetaMask, sendTransaction } from '../utils/eth-utils';
import CONSTANTS from '../constants';

window.ethers = ethers;

// let transaction = {
//   to: CONSTANTS.myAddr,
//   value: ethers.utils.parseEther(String('0.011')),
// };

// const provider = new ethers.providers.Web3Provider(window.ethereum)
// const signer = provider.getSigner()
// try {
//   const tx = signer.sendTransaction(transaction).then((res) => {
//     alert(res);
//   });
//   console.log(tx);
// }
// catch (error) {
//   alert(JSON.stringify(error));
// }


const web3Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_isWeb3':
      return { ...state, isWeb3: action.isWeb3 }
    case 'SET_isEnabled':
      return { ...state, isEnabled: action.isEnabled }
    case 'SET_account':
      return { ...state, account: action.account }
    case 'SET_provider':
      return { ...state, provider: action.provider }
    case 'SET_network':
      return { ...state, network: action.network }
    case 'SET_signer':
      return { ...state, signer: action.signer }
    case 'SET_balance':
      return { ...state, balance: action.balance }
    default:
      throw new Error(`Unhandled action ${action.type} in web3Reducer`)
  }
}

const dappReducer = (state, action) => {
  switch (action.type) {
    case 'SET_isConnecting':
      return { ...state, isConnecting: action.isConnecting }
    default:
      throw new Error(`Unhandled action ${action.type} in dappReducer`)
  }
}

const initialDappState = {
  isConnecting: false,
}

const initialWeb3State = {
  isWeb3: false,
  isEnabled: false,
  account: ethers.constants.AddressZero,
  provider: null,
  signer: null,
  network: null,
  balance: '0',
}


function App() {
  const [web3State, web3Dispatch] = useReducer(web3Reducer, initialWeb3State);
  const [dappState, dappDispatch] = useReducer(dappReducer, initialDappState);

  window.web3State = web3State;
  window.dappState = dappState;

  const handleOnConnect = () => {
    if (!web3State.isEnabled)
      dappDispatch({ type: 'SET_isConnecting', isConnecting: true })
  }

  // Check if Web3 is injected
  useEffect(() => {
    if (typeof ethereum !== 'undefined') {
      web3Dispatch({ type: 'SET_isWeb3', isWeb3: true })
    } else {
      web3Dispatch({ type: 'SET_isWeb3', isWeb3: false })
    }
  }, [])

  // Check if already connected to MetaMask
  useEffect(() => {
    const isConnected = async () => {
      const account = await isConnected2MetaMask()
      if (account) {
        web3Dispatch({ type: 'SET_isEnabled', isEnabled: true })
        web3Dispatch({ type: 'SET_account', account: account })
      } else {
        web3Dispatch({ type: 'SET_isEnabled', isEnabled: false })
      }
    }
    if (web3State.isWeb3) {
      isConnected()
    }
  }, [web3State.isWeb3])

  //If not connected to metamask connect with button
  useEffect(() => {
    const connect2MetaMask = async () => {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        web3Dispatch({ type: 'SET_isEnabled', isEnabled: true })
        web3Dispatch({ type: 'SET_account', account: accounts[0] })
      } catch (e) {
        web3Dispatch({
          type: 'SET_account',
          account: ethers.constants.AddressZero,
        })
        web3Dispatch({ type: 'SET_isEnabled', isEnabled: false })
      } finally {
        dappDispatch({ type: 'SET_isConnecting', isConnecting: false })
      }
    }

    if (web3State.isWeb3 && dappState.isConnecting && !web3State.isEnabled) {
      connect2MetaMask()
    }
  }, [web3State.isWeb3, dappState.isConnecting, web3State.isEnabled])

  // Connect to provider
  useEffect(() => {
    const connect2Provider = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        web3Dispatch({ type: 'SET_provider', provider: provider })
        const signer = provider.getSigner()
        web3Dispatch({ type: 'SET_signer', signer: signer })
        // https://docs.ethers.io/v5/api/providers/provider/#Provider-getBalance
        const network = await provider.getNetwork()
        web3Dispatch({ type: 'SET_network', network: network })
        // https://docs.ethers.io/v5/api/providers/provider/#Provider-getBalance
        const _balance = await provider.getBalance(web3State.account)
        // https://docs.ethers.io/v5/api/utils/display-logic/#utils-formatEther
        const balance = ethers.utils.formatEther(_balance)
        web3Dispatch({ type: 'SET_balance', balance: balance })
      } catch (e) {
        web3Dispatch({ type: 'SET_network', network: initialWeb3State.network })
        web3Dispatch({ type: 'SET_balance', balance: initialWeb3State.balance })
      }
    }

    if (
      web3State.isEnabled &&
      web3State.account !== ethers.constants.AddressZero
    ) {
      connect2Provider()
    }
  }, [web3State.isEnabled, web3State.account])

  const donate = async () => {
    if (web3State.balance < 0.011) {
      alert('???????????????HT??????');
      return;
    }

    let transaction = {
      to: CONSTANTS.myAddr,
      value: ethers.utils.parseEther(String('0.011')),
    };

    try {
      const tx = await sendTransaction(
        web3State.signer,
        web3State.provider,
        transaction,
      );

      if (tx) {
        alert('??????????????????');
      }
      else {
        alert('?????????');
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  return (
    <div className={styles.idoWarper}>
      <div className={styles.imgWarper}>
        <div><img src={king} alt="king" /></div>
        <div><img src={question} alt="king" /></div>
      </div>

      <div>
        <section>
          <h3>???????????????</h3>
          <div>
            <img src={pdkSvg} alt="" className={styles.logo} />
          </div>
          <div>????????????????????????????????????????????????????????????????????????????????????????????????????????????</div>
          <div>???????????????PDK?????????????????????????????????</div>
          <div>???????????????????????????????????????????????????</div>
          <div>
            <img src={pdkSougou} alt="" className={styles.pdkSougou} />
          </div>
        </section>

        <section>
          <h3>???????????????</h3>
          <div>????????????????????????????????????????????????????????????????????????????????????????????????</div>
          <div>????????????PDK???????????????????????????????????????PDK???</div>
          <div>???????????????1????????????????????????????????????????????????????????????0????????????????????????</div>
          <div>???????????????1???????????????????????????????????????????????????</div>
        </section>

        <section>
          <h3>????????????</h3>
          <div>?????????????????????1HT???</div>
          <div>?????????????????????</div>
          <div>????????????????????????HT???????????????????????????1HT????????????????????????????????????????????????????????????</div>
          <div>?????????????????????0.011HT????????????????????????????????????????????????????????????????????????????????????</div>
          <div>?????????????????????????????????????????????????????????????????????</div>
          <div>??????HT?????????????????????50%????????????LP??????</div>
          <div>???????????????LP??????????????????????????????????????????????????????</div>
          <div>???????????????????????????????????????1000HT?????????????????????lp????????????</div>
          <div>???????????????1000HT??????LP????????????????????????????????????????????????????????????</div>
          <div>??????????????????????????????????????????????????????????????????????????????????????????1???PDK???</div>
          <div>?????????????????????0.011HT???????????????????????????????????????????????????????????????</div>
        </section>

        <section>
          <h3>???????????????</h3>
          <div>?????????????????????????????????????????????0.01???????????????0.001??????????????????</div>
          <div>????????????????????????????????????????????????????????????????????????</div>
          <div>?????????????????????????????????????????????????????????????????????????????????????????????</div>
          <div>?????????????????????????????????????????????LP?????????????????????<br />????????????????????????????????????????????????</div>
        </section>

        <section>
          <h3>??????????????????</h3>
          <div>?????????</div>
          <div>?????????????????????fork????????????????????????????????????</div>
          <div>???????????????????????????DOG??????????????????????????????????????????????????????</div>
          <div>???????????????+????????????????????????</div>
        </section>

        <section>
          <h3>?????????????????????</h3>
          <div>???????????????????????????</div>
          <div>???????????????????????????????????????????????????????????????????????????</div>
          <div>????????????????????????????????????????????????????????????</div>
          <div>?????????????????????????????????</div>
          <div>??????????????????????????????????????????????????????????????????</div>
          <div>????????????????????????????????????</div>
          <div>?????????????????????</div>
        </section>

        <section>
          <h3>??????</h3>
          <div>
            <img src={pay} alt="pay" />
          </div>
          <br />
          <div>?????????: {CONSTANTS.myAddr}</div>

          {
          web3State.isEnabled &&
          web3State.network !== null &&
          web3State.account !== ethers.constants.AddressZero && (
            <div>
              <div>????????????: {web3State.balance}HT</div>
              <br />
              <div className={styles.button} onClick={donate}>?????? 0.011 HT</div>
            </div>
          )}

          {!web3State.isEnabled && (
            <div className={styles.button} onClick={handleOnConnect}>????????????</div>
          )}
        </section>
      </div>

      <div className={styles.createAt}>
        ?????????????????????2021???04???22??????<br />
        ???????????????????????? tokenpdk@gmial.com
      </div>
    </div>
  );
}

export default App;
