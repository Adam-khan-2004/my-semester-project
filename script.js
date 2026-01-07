function openTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

/* PLACE DATA */
const placesData = {
    galai:{name:"Galai Meadows",elevation:"9,000–10,000 ft",reach:"Pickup jeeps from Karg/Banna Bazaar",stay:"Tourist huts (no food)",desc:"Large green meadows surrounded by mountains.",map:"https://maps.google.com/?q=34.86499365767122,73.19256987762462"},
    sukai:{name:"Sukai Sar",elevation:"15,400 ft",reach:"Jeep to Shamsher + 5–6 hrs trek",stay:"Stay in Shamsher",desc:"Fairy lake, icy peak, Hindu Kush views.",map:"https://maps.google.com/?q=34.916,73.236"},
    choro:{name:"Choro Meadows",elevation:"8,000–12,000 ft (up to 13,500 ft)",reach:"2–3 days journey from Allai Valley, jeep till Shaheed Kandao then trek",stay:"No hotels, stay with locals or mosque",desc:"Beautiful Allai meadows connecting to Kohistan.",map:"https://maps.google.com/?q=34.846992,73.344153"},
    kopra:{name:"Kopra Meadows",elevation:"7,500 ft",reach:"Jeep from Karg Bazaar to Omeri/Kotki then 4–5 hrs trek OR 2–3 hrs by jeep",stay:"No hotels, stay with locals or mosque",desc:"Green meadows shared with Chail Valley.",map:"https://maps.google.com/?q=34.594660,72.937790"},
    chail:{name:"Chail Valley",elevation:"7,500 ft",reach:"Same route as Kopra, jeep or trekking",stay:"No hotels, stay with locals or mosque",desc:"Beautiful meadows with views of Allai and Battagram.",map:"https://maps.google.com/?q=34.77,73.06"},
    busaro:{name:"Busaro Sar (Red Lake / Sra Danda)",elevation:"9,800 ft",reach:"1 hour trek from Chail Meadows",stay:"No hotels, stay in Chail with locals",desc:"Small red-colored lake caused by bacterial fungi.",map:"https://maps.google.com/?q=34.77,73.06"},
    pokal:{name:"Pokal Allai",elevation:"4,000 ft",reach:"Accessible by local transport from Allai Valley",stay:"No hotels, ujras available for stay",desc:"Historic capital with rice fields and springs.",map:"https://maps.google.com/?q=34.8127,73.20665"},
    rashang:{name:"Rashang Nalla Waterfall (Kachal Waterfall)",elevation:"5,000 ft",reach:"Pickup or local transport from Karg to Rashang, then 1 hr walk/trek",stay:"No hotels, food groceries available in Rashang Bazaar",desc:"Beautiful waterfall near trout fish farming ponds.",map:"https://maps.google.com/?q=34.8194,73.125"},
    dam:{name:"Allai Dam",elevation:"Not specified",reach:"40 minutes from Banna Bazaar by rickshaw, jeep or local transport",stay:"No hotels nearby",desc:"A simple local dam used for water storage.",map:"https://maps.google.com/?q=34.85857,73.02099"}
};

function openPlace(key){
    const p=placesData[key];
    document.getElementById("placeContent").innerHTML=`
        <h2>${p.name}</h2>
        <p><b>Elevation:</b> ${p.elevation}</p>
        <p><b>How to Reach:</b> ${p.reach}</p>
        <p><b>Stay:</b> ${p.stay}</p>
        <p>${p.desc}</p>
        <button class="map-btn" onclick="window.open('${p.map}','_blank')">📍 View on Google Maps</button>
    `;
    document.getElementById("placeInfo").classList.add("show");
}

function closePlace(){ document.getElementById("placeInfo").classList.remove("show"); }
