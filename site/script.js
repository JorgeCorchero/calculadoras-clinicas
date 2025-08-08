document.addEventListener('DOMContentLoaded',()=>{
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Utilidades comunes
function round2(n){return Math.round(n*100)/100}
function getNumber(id){return parseFloat(document.getElementById(id).value)}

// Cockcroft–Gault
function calcCG(){
  const edad = getNumber('edad');
  const peso = getNumber('peso');
  const creat = getNumber('creat');
  const sexo = document.getElementById('sexo').value;
  if (isNaN(edad)||isNaN(peso)||isNaN(creat)) return;
  let crcl = ((140 - edad) * peso) / (72 * creat);
  if (sexo === 'F') crcl = crcl * 0.85;
  document.getElementById('resultado-cg').textContent = round2(crcl) + ' mL/min';
}

// CHA2DS2-VASc
function calcCHA2DS2VASC(){
  const checks = Array.from(document.querySelectorAll('[data-cha]:checked')).map(el=>parseInt(el.value));
  const score = checks.reduce((a,b)=>a+b,0);
  document.getElementById('resultado-cha').textContent = score + ' puntos';
}

// HAS-BLED
function calcHASBLED(){
  const checks = Array.from(document.querySelectorAll('[data-has]:checked')).map(el=>parseInt(el.value));
  const score = checks.reduce((a,b)=>a+b,0);
  document.getElementById('resultado-has').textContent = score + ' puntos';
}

// FIB-4
function calcFIB4(){
  const edad = getNumber('edad-f');
  const ast = getNumber('ast');
  const alt = getNumber('alt');
  const plaquetas = getNumber('plaquetas');
  if ([edad,ast,alt,plaquetas].some(isNaN) || alt===0 || plaquetas===0) return;
  const fib4 = (edad * ast) / (plaquetas * Math.sqrt(alt));
  document.getElementById('resultado-fib4').textContent = round2(fib4);
}
