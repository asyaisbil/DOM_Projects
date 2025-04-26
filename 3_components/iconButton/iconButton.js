/*
  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/
function IconButton(btnText, btnColor, iconClass) {
    const button = document.createElement('button');
    const icon = document.createElement('i');
  
    // Icon'un class'larını ayırıp tek tek ekliyoruz
    iconClass.split(' ').forEach((cls) => icon.classList.add(cls));
  
    // Button class'ı (UX developerın istediği tasarıma uygun)
    button.classList.add('btn', `btn-${btnColor}`);
  
    // Iconu butona ekliyoruz
    button.appendChild(icon);
  
    // Icondan sonra text eklemek için
    button.appendChild(document.createTextNode(` ${btnText}`));
  
    return button;
  }
  
  // Butonları oluşturuyoruz
  const button1 = IconButton('Aç', 'blue', 'fa fa-folder-open');
  const button2 = IconButton('Düzenle', 'orange', 'fa fa-pen');
  const button3 = IconButton('Sil', 'red', 'fa fa-trash');
  
  // div#icon-buttons içerisine ekliyoruz
  const iconButtons = document.querySelector('#icon-buttons');
  iconButtons.appendChild(button1);
  iconButtons.appendChild(button2);
  iconButtons.appendChild(button3);
  
