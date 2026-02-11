# Dream Fund

Dream Fund is a decentralized crowdfunding platform built with Next.js, React, and Ethereum smart contracts. It enables users to create fundraising campaigns, donate ETH to support causes, and transparently track campaign progress—all powered by blockchain technology.

## Features

- **Create Campaigns:** Start your own fundraising campaign with a title, description, target amount, and deadline.
- **Donate ETH:** Support campaigns by donating ETH directly from your wallet.
- **View Campaigns:** Browse all listed campaigns and see details such as target, amount raised, and days left.
- **Track Your Campaigns:** View campaigns you have created and monitor their progress.
- **Real-Time Updates:** Instantly see new campaigns and donations as they happen.
- **Wallet Integration:** Connect your MetaMask wallet using Web3Modal for secure transactions.
- **Modern UI:** Responsive and clean interface built with React and Tailwind CSS.

## Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Blockchain:** Ethereum, Solidity (Smart Contracts)
- **Web3:** ethers.js, Web3Modal

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dream-fund.git
   cd dream-fund
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start a local Ethereum node (using Hardhat):**
   ```bash
   npx hardhat node
   ```

4. **Deploy the smart contract:**
   ```bash
   npx hardhat run --network localhost scripts/deploy.js
   ```
   - Copy the deployed contract address and ABI.
   - Update the frontend configuration in `src/Context/context.js` with the new address and ABI.

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Connect your wallet:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.
   - Connect MetaMask to the `Localhost 8545` network.
   - Import one of the pre-funded accounts from Hardhat into MetaMask for testing.

## Usage

- **Create a Campaign:** Fill out the campaign form on the homepage and submit.
- **Donate:** Click on a campaign card and donate any amount of ETH.
- **Track Progress:** See live updates on campaign funding and your own campaigns.

## License

This project is licensed under the MIT License.

---
