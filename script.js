const products=[
{name:"Minimal Desk Organizer",category:"Home & Kitchen",price:"₹699",mrp:"₹999",discount:"30% OFF",image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85"},
{name:"Portable Bluetooth Speaker",category:"Gadgets",price:"₹1,299",mrp:"₹1,999",discount:"35% OFF",image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85"},
{name:"Insulated Travel Bottle",category:"Travel",price:"₹799",mrp:"₹1,199",discount:"33% OFF",image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85"},
{name:"Wireless Charging Stand",category:"Gadgets",price:"₹1,499",mrp:"₹2,299",discount:"35% OFF",image:"https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=85"},
{name:"Compact Kitchen Storage Set",category:"Home & Kitchen",price:"₹899",mrp:"₹1,399",discount:"36% OFF",image:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85"},
{name:"Travel Tech Organizer",category:"Travel",price:"₹649",mrp:"₹999",discount:"35% OFF",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85"},
{name:"Adjustable Laptop Stand",category:"Gadgets",price:"₹1,099",mrp:"₹1,599",discount:"31% OFF",image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85"},
{name:"Reusable Lunch Box Set",category:"Lifestyle",price:"₹599",mrp:"₹899",discount:"33% OFF",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"},
{name:"Compact LED Reading Light",category:"Lifestyle",price:"₹449",mrp:"₹699",discount:"36% OFF",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85"}
];
const grid=document.getElementById("productGrid");
function render(filter="All"){const list=filter==="All"?products:products.filter(p=>p.category===filter);grid.innerHTML=list.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="badge">${p.discount}</span></div><div class="product-body"><span class="product-category">${p.category}</span><h3>${p.name}</h3><div class="price"><strong>${p.price}</strong><del>${p.mrp}</del></div><a class="product-button" href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer sponsored">VIEW ON AMAZON ↗</a></div></article>`).join("");}
render();
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");render(btn.dataset.filter);}));
document.querySelectorAll(".category-card").forEach(card=>card.addEventListener("click",()=>{const category=card.dataset.category;document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===category));render(category);}));
