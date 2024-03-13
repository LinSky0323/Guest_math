export function createCard(item){
    const card=document.createElement("div");
    card.className=("card");
    const img=document.createElement("img");
    img.className=("card_image");
    const card_id=document.createElement("p");
    img.src=item.url;
    card_id.innerHTML=item.breeds.map(breed=>breed.name).join(", ");
                
    card.appendChild(img);
    card.appendChild(card_id);

    return card;
}

export function createOptions(item,checkOption){
    const option=document.createElement("div");
    option.className="type_item_options";
    const imput=document.createElement("input");
    imput.type="checkbox";
    imput.value=item.id;
    const label=document.createElement("label");
    label.className="options";
    label.innerText=item.name;
    imput.addEventListener("change",checkOption)
    const br =document.createElement("br");

    option.appendChild(imput);
    option.appendChild(label);
    option.appendChild(br);    
    return option;
}
export function createTag(item){
    const tag=document.createElement("span");
    tag.className="tags";
    tag.innerHTML=item;
    return tag;
}

export function createState(displayName,score){
    const property=document.createElement("div");
    property.className=("property");
    const title=document.createElement("p");
    title.className=("property_title");
    title.innerHTML=`${displayName}: `;
    const bar=document.createElement("div");
    bar.className=("property_line");
    const fill=document.createElement("div");
    fill.className=("property_line_full");
    fill.style.width=`${score*20}%`;
    
    bar.appendChild(fill);
    property.appendChild(title);
    property.appendChild(bar);

    return property;
}