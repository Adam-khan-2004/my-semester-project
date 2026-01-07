function openTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

const placesData = {
    galai:{name:"Galai Meadows",elevation:"9,000–10,000 ft",reach:"Pickup jeeps from Karg",stay:"Tourist huts",desc:"Green meadows",map:"https://maps.google.com/?q=34.86499,73.19256"},
    sukai:{name:"Sukai Sar",elevation:"15,400 ft",reach:"Jeep + trek",stay:"Shamsher",desc:"Fairy lake",map:"https://maps.google.com/?q=34.916,73.236"},
    choro:{name:"Choro Meadows",elevation:"8,000–12,000 ft",reach:"Jeep + trek",stay:"Locals",desc:"Meadows & waterfalls",map:"https://maps.google.com/?q=34.846992,73.344153"},
    kopra:{name:"Kopra Meadows",elevation:"7,500 ft",reach:"Jeep",stay:"Locals",desc:"Shared valley",map:"https://maps.google.com/?q=34.59466,72.93779"},
    busaro:{name:"Busaro Sar",elevation:"9,800 ft",reach:"1 hr trek",stay:"Chail",desc:"Red lake",map:"https://maps.google.com/?q=34.77,73.06"},
    pokal:{name:"Pokal Allai",elevation:"4,000 ft",reach:"Local transport",stay:"Ujras",desc:"Historic capital",map:"https://maps.google.com/?q=34.8127,73.20665"},
    rashang:{name:"Rashang Waterfall",elevation:"5,000 ft",reach:"1 hr walk",stay:"Nearby bazaar",desc:"Waterfall",map:"https://maps.google.com/?q=34.8194,73.125"},
    dam:{name:"Allai Dam",elevation:"—",reach:"40 mins",stay:"—",desc:"Local dam",map:"https://maps.google.com/?q=34.85857,73.02099"}
};

function openPlace(key){
    const p=placesData[key];
    document.getElementById("placeContent").innerHTML=`
        <h2>${p.name}</h2>
        <p><b>Elevation:</b> ${p.elevation}</p>
        <p><b>Reach:</b> ${p.reach}</p>
        <p><b>Stay:</b> ${p.stay}</p>
        <p>${p.desc}</p>
        <button class="map-btn" onclick="window.open('${p.map}','_blank')">📍 Google Maps</button>
    `;
    document.getElementById("placeInfo").classList.add("show");
}

function closePlace(){
    document.getElementById("placeInfo").classList.remove("show");
}
