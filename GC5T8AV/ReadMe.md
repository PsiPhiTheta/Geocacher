Stage 1

- hint (in source): a simple substitution cipher, autosolvable via https://www.boxentriq.com/code-breaking/
- username: from geocache user (vulnerable form feedback exploit) 
- password: from top 25 most used passwords

Stage 2

- hint (in source): a simple substitution cipher, autosolvable via https://www.boxentriq.com/code-breaking/ with manual addition of spaces
- web parameter tampering attack: direct modification within chrome of hidden variable to spoof the server request

Stage 3 

- hint (in source): vigenere cipher, autodetected the ciphering via autodetection on https://www.boxentriq.com/code-breaking/vigenere-cipher then autosolving within vigenere solver (key is a related word to the problem)
- cookie manipulation attack: direct modification within chrome for priviledge escalation

Stage 4 

- hint (in source): vigenere cipher, autodetected the ciphering via autodetection on https://www.boxentriq.com/code-breaking/vigenere-cipher then autosolving within vigenere solver, same key as stage 3
- brute force tools tried: hydra, callow, www_brute (none worked without username field, none support cookies)
- wrote own brute force scripts:

v 0.1 - Python, checks without padding 0s, is too slow as synchronous requests
v 0.2 - NodeJS, async requests and padding 0s, batches of 400 to avoid throttling 

For v 0.2 set up:
create folder
create server.js blank file

```
npm init
npm install express
npm install node-fetch
npm start
```

Stage 5

--> head to coordinates :)
