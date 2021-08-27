
exports.sample = items => (items[Math.floor(Math.random() * items.length)]);

exports.rndInt = (a, b) => Math.floor(Math.random() * b) + a;

exports.delay = millis => new Promise((resolve) => {
  setTimeout(_ => resolve(), millis)
});

exports.typofy = (s) => {return s.split('').map(function(d){if((r=Math.random)(b='qwertyuiop0asdfghjkl000zxcvbnm')>.02)return d
if((c=r(x=(d>'`'?b:(b=b.toUpperCase())).indexOf(d))*(/[a-z]/i.test(d)+2))<2)return c>1?d+d:''
for(a=0;!a;)a=b[x+[11,-11,1,-1][~~(r()*4)]]
return a}).join('')} 