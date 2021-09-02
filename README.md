# about
This is a script that will create bogus tips to prolifewhistleblower.com, a Texan anonymous tip line for reporting abortions. Hopefully these fake tips help make the system useless.

# Installation
Install dependencies
```sh
npm install
```

Done!

## Running the script
**There's two way of running the script.**

The website appears to be firewalled for many. In most cases, it's recommended that you simply use a VPN to get around it, which serves two purposes: It allows you to get around the firewall, and it prevents their system from "blacklisting" your IP. 

Therefore, **if the firewall is not a problem to you**, simply run...
```sh
node .
```

Otherwise, **if you are being firewalled and don't have a VPN**, use https://proxysite.one to access the website at https://prolifewhistleblower.com/anonymous-form/

Once you do that, you can run the script to give you a bogus story in text format, which you can copy/paste onto the website yourself, like so:

```sh
node . text
```

# Modifying the dataset
Modifying the dataset is crucial. It is technically very easy for the website maintainers to find the template answers published here and clean it from their database.
Therefore it's recommended that upon cloning this repo for usage, you replace the existing template answers with your own answers.
All data is generated and pulled from `./answer_generator` and is easily modifiable.

# contributing
Feel free to contribute by adding more fake answers and improving the execution of the script.
