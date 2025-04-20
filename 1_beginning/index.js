const siteContent = {
    // BU NESNEYİ DEĞİŞTİRMEYİN
    title: 'Balboa',
    logo: '/Users/asyaisbil/Documents/JAVASCRIPT/Workintech/Sprint_5/Proje_1/Gorev_1/balboa.jpg',
    links: [
      {
        href: 'balboa.html',
        text: 'Balboa',
      },
      {
        href: 'videolar.html',
        text: 'Videolar',
      },
      {
        href: 'derslerimiz.html',
        text: 'Derslerimiz',
      },
      {
        href: 'iletisim.html',
        text: 'İletişim',
      },
    ],
  };


const titleItem = document.getElementsByTagName('title');
titleItem[0].textContent = siteContent.title;

const logoItem = document.getElementById('logo-img');
logoItem.src = siteContent.logo;

const linksItem = document.getElementsByTagName('a');
for (i = 0; i < linksItem.length; i++) {
linksItem[i].href = siteContent.links[i].href;
linksItem[i].textContent = siteContent.links[i].text;
}

