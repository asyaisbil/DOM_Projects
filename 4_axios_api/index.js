import axios from 'axios';

// Aşağıdaki Fonksiyonu değiştirmeyin

export async function ipAdresimiAl() {
  return await axios({
    method: 'get',
    url: 'https://apis.ergineer.com/ipadresim',
  }).then(function (response) {
    return response.data;
  });
}

/*


 ADIM 1: Aşağdıdaki getData() fonskiyonunda axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız:
 https://apis.ergineer.com/ipgeoapi/{ipAdresiniz}


 Fonksiyon gelen data'yı(obje) geri dönmeli
  NOT: ipAdresinizi ipAdresimiAl fonksiyonu ile alabilirsiniz.


 NOT2: gelen datayı browser'da network tab'ından inceleyin.
 (network tab'ından inceleyemezseniz get isteklerinin URL'ini browser'dan açıp da kontrol edebilirsiniz. 😉)


 Bu data Adım 2'de oluşturacağınız component'de argüman olarak kullanılıyor, önden içindeki verilere(key-Value ikililerine) bakmanız iyi olur).
*/

export async function getData(obj) {
  const ip = await ipAdresimiAl();

  return await axios({
    method: 'get',
    url: `https://apis.ergineer.com/ipgeoapi/${ip}`,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

/*
 ADIM 2: Aşağıdaki cardOlustur fonskiyonunu argüman olarak sadece 1 nesne alacak şekilde tanımlayın.


 Bu fonksiyonda DOM metotlarını ve özelliklerini kullanarak, aşağıdaki element'i oluşturup dönün.


 Not: Ülke Bayrağını bu linkten alabilirsiniz:
 'https://flaglog.com/codes/standardized-rectangle-120px/{ülkeKodu}.png';
  <div class="card">
   <img src={ülke bayrağı url} />
   <div class="card-info">
     <h3 class="ip">{ip adresi}</h3>
     <p class="ulke">{ülke bilgisi (ülke kodu)}</p>
     <p>Enlem: {enlem} Boylam: {boylam}</p>
     <p>Şehir: {şehir}</p>
     <p>Saat dilimi: {saat dilimi}</p>
     <p>Para birimi: {para birimi}</p>
     <p>ISP: {isp}</p>
   </div>
 </div>
*/

export function cardOlustur(nesne) {
  const card = document.createElement('div');
  card.classList.add('card');

  const ulkeBayragi = document.createElement('img');
  ulkeBayragi.src = `https://flaglog.com/codes/standardized-rectangle-120px/${nesne['ülkeKodu']}.png`;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const ipAdresi = document.createElement('h3');
  ipAdresi.classList.add('ip');
  ipAdresi.textContent = nesne.sorgu;

  const ulkeKodu = document.createElement('p');
  ulkeKodu.classList.add('ulke');
  ulkeKodu.textContent = `${nesne['ülke']} (${nesne['ülkeKodu']})`;

  const enlemBoylam = document.createElement('p');
  enlemBoylam.textContent = `Enlem: ${nesne.enlem} Boylam: ${nesne.boylam}`;

  const sehir = document.createElement('p');
  sehir.textContent = `Şehir: ${nesne['şehir']}`;

  const saatDilimi = document.createElement('p');
  saatDilimi.textContent = `Saat dilimi: ${nesne.saatdilimi}`;

  const paraDilimi = document.createElement('p');
  paraDilimi.textContent = `Para birimi: ${nesne.parabirimi}`;

  const isp = document.createElement('p');
  isp.textContent = `ISP: ${nesne.isp}`;

  cardInfo.appendChild(ipAdresi);
  cardInfo.appendChild(ulkeKodu);
  cardInfo.appendChild(enlemBoylam);
  cardInfo.appendChild(sehir);
  cardInfo.appendChild(saatDilimi);
  cardInfo.appendChild(paraDilimi);
  cardInfo.appendChild(isp);

  ulkeBayragi.appendChild(cardInfo);

  card.appendChild(ulkeBayragi);
  card.appendChild(cardInfo);

  return card;
}
