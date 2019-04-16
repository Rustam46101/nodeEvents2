let eventServ=require('events').EventEmitter;
let http=require('http');
let fs=require('fs');

let eventserv=new eventServ;
//let json=JSON.parse(fs.readFileSync('serv.json',"utf8"));

/*eventserv.on('req1',function(string,string2){
        http.createServer(function(request,response){
            response.writeHead(200,{'Content-type':'text/html'});
            response.end(fs.readFileSync(string,"utf8"));
        }).listen(string2);
});*/
eventserv.on('req2',function(json){
    fs.writeFileSync("serv.json","");
    let data="";
    let mas=[{elem:"{"},{elem:"\"port\":"},{elem:json+","},{elem:"\"link1\":\"about.html\","},{elem:"\"link2\":\"about2.html\""},{elem:"}"}];
    for(let i=0;i<mas.length;i++)
    {
        let a="\"port\":";
        if(`${mas[i]["elem"]}\n`==a)
            data+=`${mas[i]["elem"]}`;
        data+=`${mas[i]["elem"]}`;
    }
    fs.appendFileSync("serv.json",data);

   
});



//eventserv.emit('req1',json['link1'],json['port']);
//eventserv.emit('req1',json['link2'],3001);
eventserv.emit('req2',"5000");


