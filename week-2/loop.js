let states =['Abia', 'Adamawa', 'Akwa-ibom', 'Anambra', 'Bauchi', 'bayelsa','benue','Borno']
let newStates=[];

for (let count =0; count <=states.length-1; count ++) {
    newStates[count]= states[count]; 'state'
}

document.write('<h1>' + newStates + '<h1>')


// display hello text five times
for (let count =0; count < 5; count++) {
    document.write('<h2>' + "Hello" + '<h2/>')
}

// for (let count =5; count <=6; count++){
//     document.write('<h1>' + states[states.length-1] + '<h1/>')
// }
