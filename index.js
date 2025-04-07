console.log('funguju!');

const zadanyCas = Number(prompt('zadej za jak dlouho mam zazvonit!'));

setTimeout(() => {
  const alarmElm = document.querySelector('.alarm');
  alarmElm.classList.add('alarm--ring');
  const audioElm = document.querySelector('audio');
  audioElm.play();
}, zadanyCas * 1000);


const buttonElm = document.querySelector('button');

const stopAlarm = () => {
  const alarmElm = document.querySelector('.alarm');
  alarmElm.classList.remove('alarm--ring');
  const audioElm = document.querySelector('audio');
  audioElm.pause();
  buttonElm.textContent ='konec!';
}

buttonElm.addEventListener("click", stopAlarm);

/*Využijte funkci setTimeout ke splnění následujících úkolů.

Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.
Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.
Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.*/
