const dns=require('dns');
dns.lookup('maddevs.io',(err,address,family)=>{
	console.log('Address: ',address);
	console.log('family',family);
})