

let  hazirlanacak =[];
let yapilacaklar=[];
let ormanİlaveTedbirleri=[];

let adim1 ={
    hazırlanacklar:'Kat planları',
    yapılacaklar:'Kat planları katlara asılamlı.'
}
let adim2 ={
    hazırlanacklar:'kaçış yollarını, kaçış merdivenlerini, varsaitfaiye asansörünü, yangın dolaplarını, itfaiye su alma-verme ağızlarını,yangın pompaları ve jeneratörün yeri işlenmiş yangın tahliye projelerinin hazırlanacak evraklar kısmına eklenmesi ',
    yapılacaklar:'kaçış yollarını, kaçış merdivenlerini, varsaitfaiye asansörünü, yangın dolaplarını, itfaiye su alma-verme ağızlarını,yangın pompaları ve jeneratörün yeri işlenmiş yangın tahliye projelerinin bina girişinde acil durumlarda kolayca ulaşılabilecek bir yerde bulundurulması gerekli.'
}
let adim5={
    yapilacaklar:`  itfaiye araçlarının yaklaşabildiği son nokta ile yatayda bina dış cephesine olan uzaklık 45 m den fazla olmayacak şekilde gerekli düzenlemeler yapılması gerek `
}
let adim15 ={
    ormanTedbirleri:
    `Dış yangın bölgelerinde yapı cephesinden
    itibaren;
    
    BİNANIN AŞAĞI YÖNÜNDE:
    
    a) 3 m mesafe içerisinde yanıcı malzeme ve bitki bulundurulmaz, bu alan çakıl, betongibi yanmaz malzeme ile kaplanır.
    
    b) 3-20 mmesafe içerisinde yanıcı malzeme bulundurulmaz, ağaçlandırma yapılmaz. Yapıcephesinden 3,5 m mesafeye kadar olan alan çakıl, beton gibi yanmaz malzemeile kaplanır.
    
    c) 20-60 mmesafe içerisinde varsa ağaç araları 3 m’den az olamaz, tabi zeminden 2 m’ye kadar olan dallar temizlenir, zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.
    
        ç) 60-200 m mesafe içerisinde tabi
    zeminden 2 m’ye kadar olan ağaç dalları temizlenir, zemin yüzeyi her altıayda bir kuru nebattan temizlenir.    
    
    BİNANIN DİĞER YÖNLERİNDE
    
    a) 2,25 mmesafe içerisinde yanıcı malzeme ve bitki bulundurulmaz, bu alan çakıl, beton gibi yanmaz malzeme ile kaplanır.
    
    b) 2,25-15 m mesafe içerisinde yanıcı malzeme bulundurulmaz, ağaçlandırma yapılmaz. Yapı cephesinden 3,5 m mesafeye kadar olan alan çakıl, beton gibi yanmaz malzeme ile kaplanır.
    
    c) 15-45 m
    mesafe içerisinde varsa ağaç araları 3 m’den az olamaz, tabi zeminden       2 m’ye kadar olan dallar temizlenir, zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.
    
    ç) 45-150 m mesafe içerisinde tabi zeminden 2 m’ye kadar olan ağaç dalları temizlenir, zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.
     
    `
}
let adim16={
    ormanTedbirleri:`

    Dış yangın bölgelerinde yapı cephesinden itibaren;
    
    BİNANINAŞAĞI YÖNÜNDE:
    
    a) 6 m mesafe içerisinde yanıcı malzeme ve bitki bulundurulmaz, bu alan çakıl, beton gibi yanmaz malzeme ile kaplanır.
    
    b) 6-40 m mesafe içerisinde yanıcı malzeme bulundurulmaz, ağaçlandırma yapılmaz. Yapı cephesinden 3,5 m mesafeye kadar olan alan çakıl, beton gibi yanmaz malzeme ile kaplanır. 
    
    c) 40-120 m mesafe içerisinde varsa ağaç araları 3 m’den az olamaz, tabi zeminden 2 m’ye kadar olan dallar temizlenir,
    zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.
    
    ç) 120-400 m mesafe içerisinde tabi zeminden 2 m’ye kadar olan ağaç dalları temizlenir, zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.    
    
    BİNANIN DİĞER YÖNLERİNDE:
    
    a) 3 m mesafe içerisinde yanıcı malzeme ve bitki bulundurulmaz, bu alan çakıl, beton gibi yanmaz malzeme ile kaplanır.
    
    b) 3-20 m mesafe içerisinde yanıcı malzeme bulundurulmaz, ağaçlandırma yapılmaz. Yapı cephesinden 3,5 m mesafeye kadar olan alan çakıl, beton gibi yanmaz malzeme ile kaplanır.
    
    c) 20-60 m mesafe içerisinde varsa ağaç araları 3 m’den az olamaz, tabi zeminden 2 m’ye kadar olan dallar temizlenir,
    zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.
    
    ç) 60-200 m mesafe içerisinde tabi zeminden 2 m’ye kadar olan ağaç dalları temizlenir, zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.
    
    `
}
let adim17={
    ormanTedbirleri:`
    Dış yangın bölgelerinde yapı cephesinden itibaren;
    
    a) 1,5 m mesafe içerisinde yanıcı malzeme ve bitki bulundurulmaz, bu alan çakıl, beton gibi yanmaz malzeme ile kaplanır.
    
    b) 1,5-10 m mesafe içerisinde yanıcı malzeme bulundurulmaz, ağaçlandırma yapılmaz.
    
    c) 10-30 mmesafe içerisinde varsa ağaç araları 3 m’den az olamaz, tabi zeminden 2 m’ye kadar olan dallar temizlenir,
    zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.
    
    ç) 30-100
    m mesafe içerisinde tabi zeminden 2 m’ye kadar olan ağaç dalları temizlenir,
    zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.
    `
}
let adim18={
    ormanTedbirleri:`
Dış yangın bölgelerinde
yapı cephesinden itibaren;

a) 1,5 m mesafe içerisinde
yanıcı malzeme ve bitki bulundurulmaz, bu alan çakıl, beton gibi yanmaz malzeme ile kaplanır.

b) 1,5-10 m mesafe içerisinde yanıcı malzeme bulundurulmaz, ağaçlandırma yapılmaz. Yapı cephesinden 3,5 m mesafeye kadar olan alan çakıl, beton gibi yanmaz malzeme ile kaplanır.

c) 10-30 m mesafeiçerisinde varsa ağaç araları 3 m’den az olamaz, tabi zeminden 2 m’ye kadar olan dallar temizlenir, zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.

ç) 30-100 m mesafe içerisinde tabi zeminden 2 m’ye kadar olan ağaç dalları temizlenir, zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.

`
}
let adim19={
    ormanTedbirleri:`
    Dış yangın bölgelerinde yapı cephesinden itibaren;
    
    BİNANINAŞAĞI YÖNÜNDE:
    
    a) 3 m mesafe içerisinde yanıcı malzeme ve bitki bulundurulmaz, bu alan çakıl, beton gibi yanmaz malzeme ile kaplanır.
    
    b) 3-20 m mesafe içerisinde yanıcı malzeme bulundurulmaz, ağaçlandırma yapılmaz. Yapı cephesinden 3,5 m mesafeye kadar olan alan çakıl, beton gibi yanmaz malzeme ile kaplanır.
    
    c) 20-60 mmesafe içerisinde varsa ağaç araları 3 m’den az olamaz, tabi zeminden 2 m’ye kadar olan dallar temizlenir,
    zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.
    
    ç) 60-200 m mesafe içerisinde tabi zeminden 2 m’ye kadar olan ağaç dalları temizlenir, zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.    
    
    BİNANIN DİĞER YÖNLERİNDE
    
    a) 2,25 m mesafe içerisinde yanıcı malzeme ve bitki bulundurulmaz, bu alan çakıl, beton gibi yanmaz malzeme ile kaplanır.
    
    b) 2,25-15 m mesafe içerisinde yanıcı malzeme bulundurulmaz, ağaçlandırma yapılmaz. Yapı cephesinden 3,5 m mesafeye kadar olan alan çakıl, beton gibi yanmaz malzeme ile kaplanır.
    
    c) 15-45 m mesafe içerisinde varsa ağaç araları 3 m’den az olamaz, tabi zeminden 2 m’ye kadar olan dallar temizlenir,
    zemin yüzeyi her altı ayda bir kuru nebattan temizlenir.
    
    ç) 60-200 m mesafe içerisinde tabi zeminden 2 m’ye kadar olan ağaç dalları temizlenir, zemin yüzeyi her altı ayda bir kuru nebattan temizlenir
    
    `
}
let adim23={
    yapilacaklar:`  Çeliğin sıcaktan uygun şekilde yalıtılması gerektiğini, Yalıtımın, yangına dayanıklı püskürtme sıva ile sıvama, yangına dayanıklı boya ile boyama, yangına dayanıklı
    malzemeler ile çevreyi sarma, kutuya alma ve kütlesel yalıtım şeklinde yapılabilabilir. `
}
let adim24={
    yapılacaklar:`  komşu bina ile arasında yangına en az 90 dakika dayanıklı duvar olması gerekli.`
}
let adim26 ={
    yapılacaklar:`  kazan dairesinin binanın diğer kısımlarında yangına 120 dakika dayanıklı yapı malzemeleri ve yangına 90 dakika dayanıklı ve kendi kendine kapanan kapılarla ayrılması gerekli. `
}

let adim28={
yapılacaklar:`  otoparkın  binanın diğer kısımlarında yangına 60 dakika dayanıklı yapı malzemeleri ve yangına 30 dakika dayanıklı ve kendi kendine kapanan kapılarla ayrılması gerekli. `
}
let adim30={
    yapılacaklar:`  ana elektrik dağıtım odasının binanın diğer kısımlarında yangına 60 dakika dayanıklı yapı malzemeleri ve yangına 30 dakika dayanıklı ve kendi kendine kapanan kapılarla ayrılması gerekli.  `
}
let adim32={
    yapılacaklar:` orta gerilim odasının binanın diğer kısımlarında yangına 60 dakika dayanıklı yapı malzemeleri ve yangına 30 dakika dayanıklı ve kendi kendine kapanan kapılarla ayrılması gerekli. `
}

let adim34={
    yapılacaklar:`  trafo odasının binanın diğer kısımlarında yangına 120 dakika dayanıklı yapı malzemeleri ve yangına 90 dakika dayanıklı ve kendi kendine kapanan kapılarla ayrılması gerekli.  `
}

let adim38={
    yapılacaklar:`  yapının 30,50 m yüksekliğinden sonraki kısımlarının her üç katta bir ayrı bir yangın zonu olacak şekilde kompartıman alanlarına ayrılması gerekli.  `

}
let adim40={
    yapılacaklar:`  yapının 21,50 m yüksekliğinden sonraki kısımlarının her üç katta bir ayrı bir yangın zonu olacak şekilde kompartıman alanlarına ayrılması gerekli. `
}
let adim42={
  yapılacaklar:` atriumun kapatılması gerekli. `
}
let adim43={
    yapılacaklar:` atrium boşluklarının çevresi her katta en az 45 cm yüksekliğinde duman perdesi ile çevrelenmesi ve yağmurlama sistemi ile korunan binalarda duman perdesinden 15 ila 30 cm uzaklıkta, aralarındaki mesafe en çok 2 m olacak şekilde yağmurlama başlığı yerleştirilmesi ile doğal veya mekanik olarak duman kontrolü yapılması gerekli. `
}
let adim47={
    yapılacaklar:`  Çöp, haberleşme, evrak ve teknik donanım gibi, düşey tesisat şaft ve baca duvarlarının yangına en az 120 dakika ve kapaklarının en az 90 dakika dayanıklı ve duman sızdırmaz özellikte olması gerekli. `
}
let adim48={
    yapılacaklar:` tesisat çevresi, açıklık
    kalmayacak şekilde en az döşeme yangın dayanım süresi kadar, yangın ve duman
    geçişine karşı yalıtılması gerekli. `
}
let adim52={
    yapılacaklar:` zemin kotu üzerindeki 1,5 m
    mesafenin hiç yanmaz malzeme ile kaplanması gerekli. `
}

let adim50 ={
    yapılacaklar:` dış cephenin en az zor yanıcı malzeme ile tesis edilmesi gerekli. `
}

let adim54={
    yapılacaklar:` alevlerin bir kattan diğer bir kata geçmesini engellemek için iki katın pencere gibi korumasız boşlukları arasında, düşeyde en az 100 cm yüksekliğinde yangına dayanıklı cephe elamanıyla dolu yüzey oluşturulmalı veya cephe iç kısmına en çok 2 m aralıklarla cepheye en fazla 1.5 m mesafede yağmurlama başlıkları yerleştirilerek cephe otomatik yağmurlama sistemi ile korunması gerekli.`
}
let adim56 ={
    yapılacaklar:` pencere ve benzeri boşlukların yan kenarları en az 15 cm ve üst kenarları en az 30 cm eninde hiç yanmaz malzeme ile kaplanması gerekli. `
}

let adim58={
    yapılacaklar:` alçak binanın çatı
    hizasındaki yüksek binaya ait dış cephe kaplamasının hiç yanmaz malzemeden
    olması gerekli. `
}
let adim60={
    yapılacaklar:` binanın tüm dış cephesinin yanmaz malzemeden tesis edilmesi gerekli. `
}
let adim61={
    yapılacaklar:` binanın balkon çıkma baca teras ve benzeri eklentilerinin hiç yanmaz malzemeden tesis edilmesi gerekli. `
}
let adim62={
    yapılacaklar:`  kapı ve pencere doğramalarının yangına 30 dakika dayanıklı olarak tesis edilmesi gerekli. `
}
let adim63={
    yapılacaklar:` kapı ve penceredeki camların çift cam şeklinde ve ya kırılmaz ya da yangına en az 30 dakika dayanıklı cam olması gerekli. `
}
let adim64={
    yapılacaklar:`  binanın çatı kaplamalarının baca kenarlarının yağmur oluğu ve benzeri borularının hiç yanmaz malzemeden tesis edilmesi gerekli. `
}
let adim65={
    yapılacaklar:`  yapılacaklar listesine çatı taşıyıcı sisteminin hiç yanmaz malzemeden tesis edilmesi gerekli. `
}
let adim66={
    yapılacaklar:` çatı kaplamaları altında kalan kısmın en az zor alevlenici olarak tesisi edilmesi gerekli. `
}
let adim68={
    yapılacaklar:`  iç duvar kaplamalarının en az zor alevlenici malzemeden tesis edilmesi gerekli. `
}
let adim69={
    yapılacaklar:` iç duvar kaplamalarının en az zor alevlenici malzemeden tesis edilmesi gerekli. `
}
let adim70={
    yapılacaklar:` iç duvar kaplamalarının en az zor alevlenici malzemeden tesis edilmesi gerekli. `
}
let adim71={
    yapılacaklar:` acil durum ekiplerinin
    görevleri ile isim ve adres listelerinin bin içinde kolayca görülebilecek bir
    yerde asılı olarak bulundurulması gerekli, hazırlanacak evraklar
    listesine acil durum ekipleri listesinin ve ekipteki personelin yangın güvenlik
    eğitim belgelerinin hazırlanması gereli. `
}
function documentMethod(adim,answer) {
   
 if(adim === 'adim1' && answer === 'Evet'){
   hazirlanacak= [...hazirlanacak,adim1.hazırlanacklar]
   yapilacaklar=  [...yapilacaklar,adim1.yapılacaklar]
 }
 if(adim === 'adim2' && answer === 'Evet'){
    hazirlanacak= [...hazirlanacak,adim2.hazırlanacklar]
    yapilacaklar=  [...yapilacaklar,adim2.yapılacaklar]
 }
 if(adim === 'adim15' && answer === 'Evet'){
    ormanİlaveTedbirleri=  [...ormanİlaveTedbirleri,adim15.ormanTedbirleri]
 }
 if(adim === 'adim5' && answer === 'Evet'){
    
    yapilacaklar=  [...yapilacaklar,adim5.yapilacaklar]
 }
 if(adim === 'adim16' && answer === 'Evet'){
    
    ormanİlaveTedbirleri=  [...ormanİlaveTedbirleri,adim16.ormanTedbirleri]
 }
 if(adim === 'adim17' && answer === 'Evet'){
    
    ormanİlaveTedbirleri=  [...ormanİlaveTedbirleri,adim17.ormanTedbirleri]
 }
 if(adim === 'adim18' && answer === 'Evet'){
    
    ormanİlaveTedbirleri=  [...ormanİlaveTedbirleri,adim18.ormanTedbirleri]
 }
 if(adim === 'adim19' && answer === 'Evet'){
    
    ormanİlaveTedbirleri=  [...ormanİlaveTedbirleri,adim19.ormanTedbirleri]
 }
 if(adim === 'adim23' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim23.yapilacaklar]
 }
 if(adim === 'adim24' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim24.yapılacaklar]
 }
 if(adim === 'adim26' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim26.yapılacaklar]
 }
 if(adim === 'adim28' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim28.yapılacaklar]
 }
 if(adim === 'adim30' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim30.yapılacaklar]
 }
 if(adim === 'adim32' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim32.yapılacaklar]
 }
 if(adim === 'adim34' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim34.yapılacaklar]
 }
 if(adim === 'adim38' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim38.yapılacaklar]
 }
 if(adim === 'adim40' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim40.yapılacaklar]
 }

 if(adim === 'adim42' && answer === 'Evet'){
    
    yapilacaklar=  [...yapilacaklar,adim42.yapılacaklar]
 }
 if(adim === 'adim43' && answer === 'Evet'){
    
    yapilacaklar=  [...yapilacaklar,adim43.yapılacaklar]
 }

 if(adim === 'adim47' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim47.yapılacaklar]
 }
 if(adim === 'adim48' && answer === 'Evet'){
    
    yapilacaklar=  [...yapilacaklar,adim48.yapılacaklar]
 }
 if(adim === 'adim52' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim52.yapılacaklar]
 }
 if(adim === 'adim50' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim50.yapılacaklar]
 }
 if(adim === 'adim54' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim54.yapılacaklar]
 }
 if(adim === 'adim56' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim56.yapılacaklar]
 }
 if(adim === 'adim58' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim58.yapılacaklar]
 }
 if(adim === 'adim60' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim60.yapılacaklar]
 }
 if(adim === 'adim61' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim61.yapılacaklar]
 }
 if(adim === 'adim62' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim62.yapılacaklar]
 }
 if(adim === 'adim63' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim63.yapılacaklar]
 }
 if(adim === 'adim64' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim64.yapılacaklar]
 }
 if(adim === 'adim65' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim65.yapılacaklar]
 }
 if(adim === 'adim66' && answer === 'Hayır'){
    
    yapilacaklar=  [...yapilacaklar,adim66.yapılacaklar]
 }
 if(adim === 'adim68' && answer === 'Evet'){
    
    yapilacaklar=  [...yapilacaklar,adim68.yapılacaklar]
 }
 if(adim === 'adim69' && answer === 'Evet'){
    
    yapilacaklar=  [...yapilacaklar,adim69.yapılacaklar]
 }
 if(adim === 'adim70' && answer === 'Evet'){
    
    yapilacaklar=  [...yapilacaklar,adim70.yapılacaklar]
 }
 if(adim === 'adim71' && answer === 'Evet'){
    
    yapilacaklar=  [...yapilacaklar,adim71.yapılacaklar]
 }
}




export  {documentMethod,hazirlanacak,yapilacaklar,ormanİlaveTedbirleri};