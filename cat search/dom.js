import { createCard, createOptions,createState,createTag } from "./create.js";

export function renderCat(catList){
    const columns=[
        document.querySelector("#col1"),
        document.querySelector("#col2"),
        document.querySelector("#col3")
    ]

    for (let i=0;i<catList.length;i++){
        const column=i % columns.length;
        const item=catList[i];
        const card=createCard(item);
        card.addEventListener("click",((e)=>{
            setDrawer(item);
            openDrawer();
        }))
        columns[column].appendChild(card);


    }
}
export function setDrawer(item){
    const img=document.querySelector("#drawer_image");
    img.src=item.url;
    const name=document.querySelector("#item__name");
    name.innerHTML=item.breeds[0].name;
    const origin=document.querySelector("#origin_text");
    origin.innerHTML=item.breeds[0].origin;
    const life=document.querySelector("#item_age_num");
    life.innerHTML=item.breeds[0].life_span;
    const kg=document.querySelector("#item_weight_num")
    kg.innerHTML=item.breeds[0].weight.metric;
    const temparament=document.querySelector("#personality_tag");
    temparament.innerHTML="";
    const Tlist=item.breeds[0].temperament.split(",");
    for(const i of Tlist){
        const tags=createTag(i);
        temparament.appendChild(tags);
    }

    const scoreListings = [
        {
          key: "intelligence",
          displayName: "智力"
        },
        {
          key: "affection_level",
          displayName: "親密度"
        },
        {
          key: "energy_level",
          displayName: "活力"
        },
        {
          key: "child_friendly",
          displayName: "兒童友善"
        },
        {
          key: "dog_friendly",
          displayName: "親近狗狗"
        },
        {
          key: "indoor",
          displayName: "喜歡在家"
        },
        {
          key: "health_issues",
          displayName: "遺傳疾病"
        },
        {
          key: "shedding_level",
          displayName: "掉毛量"
        },
        {
          key: "social_needs",
          displayName: "社交需求"
        },
        {
          key: "stranger_friendly",
          displayName: "陌生人友善"
        },
        {
          key: "rare",
          displayName: "稀有度"
        }
      ];

    const state=document.querySelector("#item_box3");
    state.innerHTML="";
    for(const {key,displayName} of scoreListings){
        const states=createState(displayName,item.breeds[0][key]);
        state.appendChild(states);
    }
}

export function openDrawer(){
    const drawer=document.querySelector("#drawer");
    drawer.classList.add("open");
}
export function addTypeOptions(){
    const button=document.querySelector("#type_selector");
    const option=document.querySelector("#type_item");

    button.addEventListener("click",()=>{
        option.classList.toggle("hidden");
    })
}
export function closeTypeOptions(){
    document.addEventListener("click",e=>{
    const button=document.querySelector("#type_selector");
    const option=document.querySelector("#type_item");
    const inButton=button.contains(e.target);
    const inOption=option.contains(e.target);

    if(!inButton && !inOption){
        option.classList.add("hidden")
    }
    })
}

export function renderOption(breed,checkOption){
    const option=document.querySelector("#type_item");
    option.innerHTML="";
    for(let item of breed){
        const options=createOptions(item,checkOption);
        option.appendChild(options);
    }
}

export function clear(){
    const columns=[
        document.querySelector("#col1"),
        document.querySelector("#col2"),
        document.querySelector("#col3")
    ]
    for(let column of columns){
        column.innerHTML="";
    }
}

export function reOrder(handle){
    const order=document.querySelector("#order_selector");
    order.addEventListener("change",handle);
}

export function loadMore(handle){
    const loadMore=document.querySelector("#load_more");
    loadMore.addEventListener("click",handle);
}

export function notLoad(){
    const loadMore=document.querySelector("#load_more");
    loadMore.disabled=true;
}
export function canLoad(){
    const loadMore=document.querySelector("#load_more");
    loadMore.disabled=false;
}

export function closeDrawer(){
    document.addEventListener("click",(e)=>{
        const drawer=document.querySelector("#drawer");
        const inDrawer=e.target.closest(".drawer");
        const inCard=e.target.closest(".card");
        if(!inDrawer && !inCard){
            drawer.classList.remove("open");
        }
    })
}