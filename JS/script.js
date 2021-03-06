
let tabcountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries=[];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList= 0;
let totalPopulationsFavorites = 0;

let numberFormat = null;

window.addEventListener('load', ()=> {

    tabCountries= document.querySelector('#tabCountries');
    tabFavorites= document.querySelector('#tabFavorites');
    countCountries=document.querySelector('#countCountries');
    countFavorites=document.querySelector('#countFavorites');

    totalPopulationList=document.querySelector('#totalPopulationList');
    totalPopulationsFavorites=document.querySelector('#totalPopulationFavorites');

   numberFormat = Intl.NumberFormat('pt-BR');

    fetchCountries();
})
async function fetchCountries (){
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();
    allCountries = json.map(country => {
        const {numericCode,translations,population,flag}=country;//utilizado para reduzir as informações do 'return'
        return { //vai trazer somente esses dados da API
            id:numericCode,
            name:translations.pt,
            population,
            flag
        };
    });
    render();
}
    function render(){
        renderCountryList();
        renderFavorites();
        renderSummary();
        handleCountryButtons()
}
function renderCountryList(){
    
};
function renderFavorites(){};
function renderSummary(){};
function handleCountryButtons(){};
