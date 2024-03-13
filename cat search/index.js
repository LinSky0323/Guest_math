import {fetchCat, fetchOption} from "./api.js"
import { addTypeOptions, canLoad, clear, closeDrawer, closeTypeOptions, loadMore, notLoad, reOrder, renderCat, renderOption } from "./dom.js";

const catList=[];
const pageSize=12;
let order="DESC";
let page=1;
let selectOptions=[];

async function loadCat(limit,page,order,breedIds=[]){   //抓貓
    const list=await fetchCat(limit,page,order,breedIds);
    
    catList.push(...list);
    console.log(list);
    renderCat(list)
    if(list.length<limit){
        notLoad();
        return false;
    }
    return true;
}

function checkOption(e){
    const changeOption=e.target;
    if(changeOption.checked){
        selectOptions.push(changeOption.value);
    }else{
        selectOptions=selectOptions.filter((item)=>item !== changeOption.value);
    }

    clear();
    canLoad();
    page=1;
    loadCat(pageSize,page,order,selectOptions);
}

async function loadOption(){
    const option=await fetchOption();
    renderOption(option, checkOption);
    
    
}


function addListeners(){
    addTypeOptions();
    closeTypeOptions();
    reOrder((e)=>{
        order=e.target.value;
        clear();
        canLoad();
        page=1;
        loadCat(pageSize,page,order,selectOptions)
    })
    loadMore((e)=>{
        page+=1;
        loadCat(pageSize,page,order,selectOptions)
    })
    closeDrawer()
}


document.addEventListener("DOMContentLoaded",async ()=>{
     loadOption();
     await loadCat(pageSize,page,order,selectOptions);
     addListeners();
})