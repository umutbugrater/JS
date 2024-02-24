
convertDecimalToBinary(25)

function convertDecimalToBinary(number){
    let binary="";
    while(true){
        binary+=(number%2);
        number=Math.floor(number/2);
        if(number==1){
            //Artık bölme yok döngüden çıkacağız
            binary+=1
            break;
        }
    }
    let result = reverse(binary);
    alert("Sonuç :"+result)
}

function reverse(binary){
    let reverseBinary="";
    for(let i = binary.length-1;i>=0;i--){
        reverseBinary+=binary.charAt(i)
    }
    return reverseBinary;
}