const downloadFileOriginKeys = () => {
    const link = document.createElement("a");

    function makeid(length) {
var result           = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
   result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
}

var numarGenerariDorit;
var key;
key= "";

var numarCaractereKey=18;
numarGenerariDorit = document.getElementById("keysNumberOrigin").value;
for (var numarGenerari =1 ; numarGenerari <= numarGenerariDorit; numarGenerari++)
{

i=0;
while(i<= numarCaractereKey)
{

var numar = makeid(1);


   i++;
       if (i%5==0){ key= key + "-";}
       else key= key + numar
       
  

}
key=key + "\r\n";
}
    const content = document.querySelector("textarea").value= key;
    
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "OriginKeys.txt";
    link.click();
    URL.revokeObjectURL(link.href);
 };

