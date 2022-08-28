// https://www.omnicalculator.com/chemistry/solution-dilution

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const initialconcentrationRadio = document.getElementById('initialconcentrationRadio');
const initialvolumeRadio = document.getElementById('initialvolumeRadio');
const finalconcentrationRadio = document.getElementById('finalconcentrationRadio');
const finalvolumeRadio = document.getElementById('finalvolumeRadio');

let initialconcentration;
let initialvolume = v1;
let finalconcentration = v2;
let finalvolume = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

initialconcentrationRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial volume';
  variable2.textContent = 'Final concentration';
  variable3.textContent = 'Final volume';
  initialvolume = v1;
  finalconcentration = v2;
  finalvolume = v3;
  result.textContent = '';
});

initialvolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial concentration';
  variable2.textContent = 'Final concentration';
  variable3.textContent = 'Final volume';
  initialconcentration = v1;
  finalconcentration = v2;
  finalvolume = v3;
  result.textContent = '';
});

finalconcentrationRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial concentration';
  variable2.textContent = 'Initial volume';
  variable3.textContent = 'Final volume';
  initialconcentration = v1;
  initialvolume = v2;
  finalvolume = v3;
  result.textContent = '';
});

finalvolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial concentration';
  variable2.textContent = 'Initial volume';
  variable3.textContent = 'Final concentration';
  initialconcentration = v1;
  initialvolume = v2;
  finalconcentration = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(initialconcentrationRadio.checked)
    result.textContent = `Initial concentration = ${computeInitialconcentration().toFixed(2)}`;

  else if(initialvolumeRadio.checked)
    result.textContent = `Initial volume = ${computeInitialvolume().toFixed(2)}`;

  else if(finalconcentrationRadio.checked)
    result.textContent = `Final concentration = ${computeFinalconcentration().toFixed(2)}`;

  else if(finalvolumeRadio.checked)
    result.textContent = `Final volume = ${computeFinalvolume().toFixed(2)}`;
})

// calculation

function computeInitialconcentration() {
  return (Number(finalconcentration.value) * Number(finalvolume.value)) / Number(initialvolume.value);
}

function computeInitialvolume() {
  return (Number(finalconcentration.value) * Number(finalvolume.value)) / Number(initialconcentration.value);
}

function computeFinalconcentration() {
  return (Number(initialconcentration.value) * Number(initialvolume.value)) / Number(finalvolume.value);
}

function computeFinalvolume() {
  return (Number(initialconcentration.value) * Number(initialvolume.value)) / Number(finalconcentration.value);
}