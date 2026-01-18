import React , {useState, useEffect } from "react";
import Web3Modal from "web3modal";
import  {ethers } from "ethers" ;

//Internal imports

import { dreamFundAddress, dreamFundABI } from "./context" ;
//Fetching Smart Contract 

const fetchContract= (signerOrProvider) => 
    new ethers.Contract(
        dreamFundAddress,
        dreamFundABI,
        signerOrProvider
    ) ;

export const DreamFundContext = React.createContext() ;
export const DreamFundProvider = ({children }) => {
    const titleData = "Welcome to Dream Fund " ;
    const [currentAccount , setCurrentAccount] = useState("") ;

    const createCampaign = async (campaign) => {
        const { title , description , amount , deadline, image} = campaign ;
        const web3Modal = new Web3Modal() ;
        const connection = await web3Modal.connect() ;
        const provider = new ethers.BrowserProvider(connection) ;
        const signer = await provider.getSigner() ;
        const contract = fetchContract(signer) ;

        console.log(currentAccount) ;
        try {
            const transaction = await contract.createCampaign(
                currentAccount,
                title,
                description,
                ethers.parseUnits(amount , 18),
                new Date(deadline).getTime() //deadline in milliseconds

            );
            await transaction.wait() ;

            console.log("Contract call successfull", transaction ) ;
        } catch (error) {
            console.log("Contract call failed", error) ;

        }

    };

    const getCampaigns = async () => {
        const provider = new ethers.JsonRpcProvider() ;
        const contract = fetchContract(provider) ;
         const campaigns = await contract.getCampaigns() ;

         const parsedCampaigns =  campaigns.map((campaign ,i) => ({
            owner:campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.formatEther(campaign.target.toString()),
            deadline :Number(campaign.deadline) ,
            amountCollected : ethers.formatEther(campaign.amountCollected.toString()),
            pId: i,
         }));

         return parsedCampaigns ;


     };
     
     const getUserCampaigns = async() => {
        const provider = new ethers.JsonRpcProvider() ;
        const contract = fetchContract(provider) ;

        const allCampaigns = await contract.getCampaigns() ;
        const accounts = await window.ethereum.request({
            method : "eth_accounts" ,

        });

        const currentUser = accounts[0] ;

        const filteredCampaigns = allCampaigns.filter(
            (campaign) =>  campaign.owner === "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
        );

        const userData = filteredCampaigns.map((campaign , i) => ({
            owner:campaign.owner,
            title: campaign.title,
            description : campaign.description,
            target: ethers.formatEther(campaign.target.toString()),
            deadline : Number(campaign.deadline) ,
            amountCollected : ethers.formatEther(
                    campaign.amountCollected.toString()
            ),
            pId : i
        }));
        return userData
     };

     const donate = async(pId , amount) => {
        const web3Modal = new Web3Modal() ;
        const connection = await web3Modal.connect() ;
        const provider = new ethers.BrowserProvider(connection) ;
        const signer= await provider.getSigner() ;
        const contract= fetchContract(signer) ;
        
        const campaignData =await contract.donateToCampaign(pId, {
        value : ethers.parseEther(amount),
        });

        await campaignData.wait() ;
        location.reload() ;

        return campaignData ;
     };

     const getDonations = async(pId) => {
        const provider = new ethers.JsonRpcProvider() ;
        const contract = fetchContract(provider) ;

        const donations = await contract.getDonators(pId) ;
        const numberOfDonations = donations[0].length ;

        const parsedDonations = [] ;
        
        for(let i = 0 ; i <numberOfDonations ; i++ ) {
            parsedDonations.push({
                donator : donations[0][i] ,
                donation :  ethers.formatEther(donations[1][i].toString()) ,

            });
     }
     return parsedDonations ;




};
 
//check if the wallet is connected 
 const checkIfWalletConnected = async () => {
    try {
        if(!window.ethereum) 
            return console.log("Install Metamask");

        const accounts = await window.ethereum.request({
            method : "eth_accounts" ,

        });
        if(accounts.length){
            setCurrentAccount(accounts[0]) ;

        }else{
            console.log("No accounts found") ;

        }
    } catch (error) {
        console.log("something went wrong while connecting to wallet") ;
    }
 };

 useEffect(() => { 
    checkIfWalletConnected() ;
 }, []) ;

 // connect wallet function 

 const connectWallet =  async() => {
    try {
        if(!window.ethereum ){
        return console.log("Install Metamask") ;

        }
         const accounts =  await window.ethereum.request({
            method : "eth_requestAccounts",
         });
         setCurrentAccount(accounts[0]) ;

    } catch (error) {
       console.log("Error while connecting to wallet") ;

    }
 };

 return (
    <DreamFundContext.Provider
    value={{
        titleData,
        currentAccount,
        createCampaign,
        getCampaigns,
        donate,
        getDonations,
        getUserCampaigns,   
        connectWallet,
    }}
    >
        {children}
    </DreamFundContext.Provider>
 );
};
