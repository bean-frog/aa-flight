# aa-flight
query flight information from aboard an american airlines flight
--
I was bored on an American Airlines flight and decided to poke around with the network devtools on aainflight.com. </br>
Turns out, the endpoint they use to show you flight progress has a lot more data that they dont show you. </br>
I dont include every data point in this script but its very easy to add more if you want. </br>
The endpoint is only accessible while connected to the aainflight.com wifi network, so you have to be on the plane to use the script. </br>

## To use
- make sure you have nodejs and the dependencies installed before you board, unless you're fine with paying $20 for internet access.
- to install dependencies use `npm install`
- `node fetchinfo.js` will fetch the data once and exit
- `node fetchinfo-continuous.js` will clear the screen and fetch every few seconds.
	- in the future, i might consolidate these two scripts and use a cli flag to determine which to use.

## To add more data points
- find the api endpoint url in the script and paste it into your browser. this will return some json containing everything.
- in the script, scroll down to the `lines` array. Add a new item to the array. the `data` object holds the returned flight data, so jiust use `data.someKey` to add the value of someKey to the line.
- run the script again
