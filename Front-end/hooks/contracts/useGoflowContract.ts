import * as wagmi from 'wagmi';
import { useProvider, useSigner } from 'wagmi';
import { makeNum } from '../../lib/number-utils';
import type { BigNumber } from 'ethers';
import GoflowContract from '../../../Hardhat/artifacts/contracts/OurToken.sol/Goflow.json';

export enum TokenEvent {
  Transfer = 'Transfer',
  Mint = 'Mint',
}

export type Amount = BigNumber;

const useGoflowContract = () => {

  const { data: signer } = useSigner();
  const provider = useProvider();

  const contract = wagmi.useContract({
    addressOrName: '0xAB727F0187083A348C097D9bE73be58adF2f676e',
    contractInterface: GoflowContract.abi,
    signerOrProvider: signer || provider,
  });

  // Get a user's balance and convert to readable number
  const getBalance = async (address: string): Promise<string> => {
    const userBalanceBN = await contract.balanceOf(address);
    return makeNum(userBalanceBN);
  };

  // "We have to approve before we can move" with transferFrom
  const approve = async (address: string, amount: BigNumber): Promise<void> => {
    const tx = await contract.approve(address, amount);
    await tx.wait();
  };

  const mint = async (amount: BigNumber): Promise<void> => {
    const tx = await contract.mint(amount);
    await tx.wait();
  };

  return {
    contract,
    chainId: contract.provider.network?.chainId,
    mint,
    approve,
    getBalance,
  };
};

export default useGoflowContract;
