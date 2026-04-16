const countries = [
    { code: "COL", name: "Colombia", lat: 4.57, lng: -74.29 },
    { code: "PER", name: "Peru", lat: -9.19, lng: -75.01 }
  ];
  
  exports.getAllCountries = () => countries;
  
  exports.getCountryByCode = (code) =>
    countries.find(c => c.code === code);
  
  exports.getCountryByName = (name) =>
    countries.filter(c =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
  
  exports.getDistance = (from, to) => {
    const c1 = countries.find(c => c.name === from);
    const c2 = countries.find(c => c.name === to);
  
    if (!c1 || !c2) return null;
  
    const dx = c1.lat - c2.lat;
    const dy = c1.lng - c2.lng;
  
    return Math.sqrt(dx * dx + dy * dy);
  };