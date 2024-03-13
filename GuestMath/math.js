
let Ans=[];
for(let i=0;i<4;i++){
    let rnum=Math.floor(Math.random()*10);
    while(Ans.includes(rnum)){
        rnum=Math.floor(Math.random()*10);
    }
    Ans[i]=(rnum);
}
console.log(Ans);
function click1(){
    let inputText=document.querySelector("#inputText");
    inputText.value="請輸入4個不同的數字";
}
function Click(event){
    let inputText=document.querySelector("#inputText");
    inputText.value="";
    event.stopPropagation();
}
    var num=0
function keyIn(){
    const list=document.querySelector("#list");
    const inputText=document.querySelector("#inputText");
    const text=inputText.value;
    var test=false;
    for(let i=0;i<text.length;i++){
        for(let j=0;j<i;j++){
            if(text[i]==text[j])
            test=true;
            else
            test=false;
        }
    }
   
    //強迫輸入4個不同的數字
    if(text==="" || text.length!=4 ||isNaN(text)||test||text[0]==='+'||text[0]==='-'||text[0]==='.'||text[1]==='.'||text[2]==='.'||text[3]==='.'){
        alert("請輸入4個不同的數字");
        return;
    }
    var A=0;
    var B=0;
    for(let i=0;i<text.length;i++){
        if(text[i]==Ans[i]){
            A++;
        }
        else if(Ans.indexOf(parseInt(text[i]))!=-1){
            B++;
        }

    }
    const newItem=document.createElement("li");
    newItem.classList.add("item");
    const newKey=document.createElement("span");
    newKey.classList.add("key");
    const newAn=document.createElement("span");
    newAn.classList.add("an");
    newKey.innerText=text;
    newAn.innerText=A+'A'+B+'B';
    list.appendChild(newItem);
    newItem.appendChild(newKey)
    newItem.appendChild(newAn)

    num++;

    if(A===4){
    alert(`You win!\nThe answer is ${text}\nYou guest ${num} times`);
    location.reload();
    }
    else if(num>10){
        alert("Answer is "+Ans.join("")+"\nYou are stupid !");
        location.reload();
        }
}



const add=document.querySelector("#add");
add.addEventListener('click',keyIn);
const input=document.querySelector("#input");
input.addEventListener('submit',(e)=>{
    e.preventDefault();
})