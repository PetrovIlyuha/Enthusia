import {useEffect} from 'react'
import useSWR from 'swr'

export const accountsHandler = (web3, provider) => () => {
  const {mutate, data, ...rest} = useSWR(() => web3 ? "web3/accounts" : null, async () => {
    const accounts = await web3.eth.getAccounts();
    return accounts[0]
  })

  const adminAddresses = {
    "0xb985af9891865758a206dcf5f9ab01f8b7fabe30d1b5923915db56dd33071b1d": true
  }
  useEffect(() => {
    provider &&
    provider.on('accountsChanged', (accounts) => {
      // console.log("account has changed to -> ", accounts[0])
      return mutate(accounts[0] ?? null);
    })
  }, [])
  return {isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]), data, mutate, ...rest};
};
