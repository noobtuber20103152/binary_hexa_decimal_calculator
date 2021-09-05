function decToOctal(n) {
  let octalNum = new Array(100);
  let i = 0;
  while (n != 0) {
    octalNum[i] = n % 8;
    n = Math.floor(n / 8);
    i++;
  }
  let s="";
  for (let j = i - 1; j >= 0; j--)s+=octalNum[j];

  return s;
}
function OctToBin(octnum)
{
   let  i = 0;
 
    let binary = "";
 
    while (octnum[i]) {
        switch (octnum[i]) {
        case '0':
            binary += "000";
            break;
        case '1':
            binary += "001";
            break;
        case '2':
            binary += "010";
            break;
        case '3':
            binary += "011";
            break;
        case '4':
            binary += "100";
            break;
        case '5':
            binary += "101";
            break;
        case '6':
            binary += "110";
            break;
        case '7':
            binary += "111";
            break;
        default:
            cout << "\nInvalid Octal Digit "
                 << octnum[i];
            break;
        }
        i++;
    }
 
    return binary;
}
function convert() {
  if (
    document.getElementById("select1").value == "Decimal" &&
    document.getElementById("select2").value == "Binary"
  ) {
    let m = document.getElementById("decimal");
    let y = document.getElementById("binary");
    let x = parseInt(m.value);
    let bin = 0;
    let r,
      i = 1,
      s = 1;
    while (x != 0) {
      r = x % 2;
      x = parseInt(x / 2);
      bin = bin + r * i;
      i = i * 10;
    }
    y.value = `${bin}`;
    console.log(`Binary: ${bin}`);
  }
   else if (
    document.getElementById("select1").value == "Decimal" &&
    document.getElementById("select2").value == "1"
  ) {
    let m = document.getElementById("decimal");
    let y = document.getElementById("binary");
    let x = parseInt(m.value);
    y.value = decToOctal(x);
    console.log('hello');
  }
  else if(document.getElementById("select1").value == "Decimal" &&
  document.getElementById("select2").value == "2"){
    let m = document.getElementById("decimal");
    let y = document.getElementById("binary");
    y.value=m.value;
    console.log("fsadf");
  }
  else if(document.getElementById("select1").value == "1" &&
  document.getElementById("select2").value == "2"){
    let m = document.getElementById("decimal");
    let y = document.getElementById("binary");
    let len = m.value.length;
    for(let i=0; i<len; i++){
      if(m.value[i]>'1'){
        alert("Invalid binary number");
        m.value="";
        y.value="";
        break;
      }
    }
    
    var binary = m.value;
    var decimal = parseInt(binary, 2);
    y.value = decimal;
    console.log("hello")
  }
  else if(document.getElementById("select1").value == "1" &&
  document.getElementById("select2").value == "Binary"){
    let m = document.getElementById("decimal");
    let y = document.getElementById("binary");
    let len = m.value.length;
    for(let i=0; i<len; i++){
      if(m.value[i]>'1'){
        alert("Invalid binary number");
        m.value="";
        y.value="";
        break;
      }
    }
    y.value = m.value;
  }
  else if(document.getElementById("select1").value == "1" &&
  document.getElementById("select2").value == "1"){
    let m = document.getElementById("decimal");
    let y = document.getElementById("binary");
    let len = m.value.length;
    for(let i=0; i<len; i++){
      if(m.value[i]>'1'){
        alert("Invalid binary number");
        m.value="";
        y.value="";
        break;
      }
    }
    var binary =m.value;
var octal = parseInt(binary, 2).toString(8);
y.value=octal;
  }
  else if(document.getElementById("select1").value == "2" &&
  document.getElementById("select2").value == "Binary"){
    let m = document.getElementById("decimal");
    let y = document.getElementById("binary");
    let len = m.value.length;
    for(let i=0; i<len; i++){
      if(m.value[i]>'7'){
        alert("Invalid octal number");
        m.value="";
        y.value="";
        break;
      }
    }
    let ans = OctToBin(m.value);
    y.value = ans;
  }
  else if(document.getElementById("select1").value == "2" &&
  document.getElementById("select2").value == "2"){
    let m = document.getElementById("decimal");
    let y = document.getElementById("binary");
    let len = m.value.length;
    for(let i=0; i<len; i++){
      if(m.value[i]>'7'){
        alert("Invalid octal number");
        m.value="";
        y.value="";
        break;
      }
    }
    let octal = m.value;
    let ans = parseInt(octal,8)
     y.value = ans;
  }
  else if(document.getElementById("select1").value == "2" &&
  document.getElementById("select2").value == "1"){
    let m = document.getElementById("decimal");
    let y = document.getElementById("binary");
    let len = m.value.length;
    for(let i=0; i<len; i++){
      if(m.value[i]>'7'){
        alert("Invalid octal number");
        m.value="";
        y.value="";
        break;
      }
    }
    y.value = m.value;
  }
}
