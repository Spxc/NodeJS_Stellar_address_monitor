# NodeJS Stellar Address Monitor

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) [![Node.js CI](https://github.com/Spxc/NodeJS_Stellar_address_monitor/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Spxc/NodeJS_Stellar_address_monitor/actions/workflows/node.js.yml)

## Description

This Node.js application is designed to monitor Stellar addresses for activity and provide notifications when transactions occur. It can be used to keep track of your Stellar account and receive alerts when new transactions are detected.

## Features

- Monitor one or more Stellar addresses.
- Receive notifications (e.g., email, SMS) for new transactions.
- Easily configure and customize monitoring settings.

## Installation

To install and run the NodeJS Stellar Address Monitor, follow these steps:

1. Clone this repository

   ```bash
   git clone https://github.com/Spxc/NodeJS_Stellar_address_monitor.git
   ```
2. Change to the project directory

   ```bash
   cd NodeJS_Stellar_address_monitor
   ```
3. Install dependencies

   ```bash
   npm install
   ```
4. Setup `.env`

   ```bash
   ASSET_CODE=""
   ASSET_ISSUER=""
   AMOUNT_THRESHOLD=""
   ```
4. Add accounts to monitor by adding them into  `./data/addresses.json`

   ```bash
    [
        "GABAAAA",
        "GABBBBB",
        "GABCCCC"
    ]
   ```
5. (Optional): Run unit tests

   ```bash
    npm test
   ```
6. Run the monitor

   ```bash
    npm start
   ```

## Usage
To use the NodeJS Stellar Address Monitor, configure it with the addresses you want to monitor and set up your desired firebase project. The application will periodically check for new transactions and send notifications when they are detected and within the parameters.

## Configuration
You can customize the monitoring settings by editing the `.env`, `./data/addresses.json` and  `./data/tokens.json` file. Modify the addresses to monitor, notification options, and other settings as needed.

You can find example of the configuration files by looking at 
- `.sample.env` (environment file)
- `./data/addresses.sample.json` (addresses to monitor)
- `./data/tokens.sample.json` (tokens to push the notifications to)

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
If you would like to contribute to this project, please open an issue or submit a pull request. We welcome contributions from the community.

## Contact
If you have any questions or need assistance, feel free to contact the project maintainer at [no-thanks@nameless.cloud].

## Acknowledgments
We would like to thank the Stellar Development Foundation and the open-source community for their contributions to the Stellar ecosystem.
