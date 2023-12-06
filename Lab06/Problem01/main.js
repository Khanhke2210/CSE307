document.addEventListener('DOMContentLoaded', function () {
    str = "1234";
    document.getElementById('11').innerText = parseInt(str);
    document.getElementById('12').innerText = parseFloat(str);
    document.getElementById('13').innerText = Number(str);
    document.getElementById('14').innerText = +str;
    document.getElementById('15').innerText = str | 0;
    
    str = "1234abc";
    document.getElementById('21').innerText = parseInt(str);
    document.getElementById('22').innerText = parseFloat(str);
    document.getElementById('23').innerText = Number(str);
    document.getElementById('24').innerText = +str;
    document.getElementById('25').innerText = str | 0;

    str = "0.15";
    document.getElementById('31').innerText = parseInt(str);
    document.getElementById('32').innerText = parseFloat(str);
    document.getElementById('33').innerText = Number(str);
    document.getElementById('34').innerText = +str;
    document.getElementById('35').innerText = str | 0;

    str = "3.14ivan";
    document.getElementById('41').innerText = parseInt(str);
    document.getElementById('42').innerText = parseFloat(str);
    document.getElementById('43').innerText = Number(str);
    document.getElementById('44').innerText = +str;
    document.getElementById('45').innerText = str | 0;

    str = "Infinity";
    document.getElementById('51').innerText = parseInt(str);
    document.getElementById('52').innerText = parseFloat(str);
    document.getElementById('53').innerText = Number(str);
    document.getElementById('54').innerText = +str;
    document.getElementById('55').innerText = str | 0;

    str = "99999999999999999999";
    document.getElementById('61').innerText = parseInt(str);
    document.getElementById('62').innerText = parseFloat(str);
    document.getElementById('63').innerText = Number(str);
    document.getElementById('64').innerText = +str;
    document.getElementById('65').innerText = str | 0;
});