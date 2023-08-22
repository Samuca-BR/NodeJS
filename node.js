var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Como a maioria dos jovens de Mondstadt, Noelle sempre sonhou em ser uma cavaleira de Favonius quando crescesse,Ela pode não ter o que é preciso para ser uma cavaleira ainda, mas está aprendendo. Trabalhando como empregada doméstica no quartel-general dos Cavaleiros, ela está constantemente fazendo anotações sobre o que constitui o discurso cavalheiresco, a conduta cavalheiresca e os costumes cavalheirescos.Ela mantém firme sua crença de que um dia se juntará a eles - ela só precisa continuar se esforçando ao máximo em tudo o que faz.');
}).listen(8080);