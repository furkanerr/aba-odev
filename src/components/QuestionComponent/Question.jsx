
import { useState } from "react";
import styles from "./Question.module.css";
const Question = () => {
  let adim1, adim2, adim3,adim4,
  adim5, adim6, adim7,adim8,
  adim9, adim10, adim11,adim12,
  adim13, adim14, adim15,adim16,
  adim17, adim18, adim19,adim20,
  adim21, adim22, adim23,adim24,
      adim25, adim26, adim27,adim28,
      adim29, adim30, adim31,adim32,
      adim33, adim34, adim35,adim36,
      adim37, adim38, adim39,adim40,
      adim41, adim42, adim43,adim44,
      adim45, adim46, adim47,adim48,
      adim49, adim50, adim51,adim52,
      adim53, adim54, adim55,adim56,
      adim57, adim58, adim59,adim60,
      adim61, adim62, adim63,adim64,
      adim65, adim66, adim67,adim68,
      adim69, adim70, adim71;
    
     
let adims=[
adim1='bir katalanı 2.000 m2 den büyük mü?',
adim2='Toplam kapalı kullanım alanı 10.000m2’den büyük imalathane, atölye, depo, otel, motel, sağlık, toplanma veya eğitim binası mı?',//evet ise belge oluştur
adim3='orman içinde veya bitişiğinde mi?',
adim4='rafineri mi?',
adim5='İtfaiye araçlarının binaya yaklaşabildiği sonnoktadan binanın dış cephesindeki herhangi bir noktaya olan yatay uzaklık 45m’den fazla mı?', //evet ise yapılacaklar listesine ekle
adim6= 'fosil yakıtlı elektrik üretim tesisi mi?',
adim7='bina ile orman arazisi arasındaki eğim %40 dan fazla mı?',
adim8='500 MW üzeri elektrik üretim tesisi mi?',
adim9='binaya 500 m mesafede kendiliğinden yetişen orman örtüsü var mı?',
adim10='Binaya 300 m mesafede kendiliğinden doğal yetişen orman örtüsü var mı?',
adim11='2.000 m2 den büyük endüstriyel tesis mi?',
adim12='2.000 m2 den büyük depolama amaçlı tesis mi?',
adim13='Binaya 500 m mesafede parsel sınırı dışında 50m’den daha geniş karayolu, akarsu ve benzeri yangının ilerlemesini kesecek bir engel mevcut mu?',
//adim14='Binaya 300 m mesafede parsel sınırı dışında 50m’den daha geniş karayolu, akarsu ve benzeri yangının ilerlemesini kesecek bir engel mevcut mu?',
adim15='arazinin eğimi %40 ile %55 arasında mı?', //evet ise belge oluştur orman için ilave tedbire gerekli
adim16='arazinin eğimi %55 den fazla mı?', //evet ise belge oluştur orman için ilave tedbire gerekli
adim17='arazinin eğimi %0 ile %20 arasında mı?',  //evet ise belge oluştur orman için ilave tedbire gerekli
adim18='arazinin eğimi %20 ile %30 arasında mı?', //evet ise belge oluştur.orman için ilave tedbire gerekli
adim19='Arazinin eğimi %30 ile %40 arasında mı?', //evet ise belge oluştur orman için ilave tedbire gerekli
adim20='yapı çelik kostrüksiyon mu?',
adim21='çelik yapı alanı 5000 m2 den küçük tek katlı yapı mı?',
adim22='binanın başka bir bina ile ortak duvarı mevcut mu?',
adim23='çelik sıcağa karşı yalıtılmış mı?', //hayır ise yapılacaklar listesine ekle
adim24='diğer bina ile arasında yangına en az 90 dakika dayanıklı duvar var mı?', //hayır ise yapılacaklar listesine ekle
adim25='yapıda merkezi kazan dairesi var mı?',
adim26='kazan dairesi binanın diğer kısımlarından yangına 120 dakika dayanıklı duvar ve yangına 90 dakika dayanıklı kapı ile ayrılmış mı',//hayır ise yapılacaklar listesine ekle
adim27='yapıda kapalı otopark var mı?',
adim28='otopark binanın diğer kısımlarından yangına 60 dakika dayanıklı duvar ve yangına 30 dakika dayanıklı kapı ile ayrılmış mı?',  //hayır ise yapılacaklar listesine ekle
adim29='yapıda ana elektrik dağıtım odası mevcut mu?',
adim30='ana elektrik dağıtım odası binanın diğer kısımlarından yangına 60 dakika dayanıklı duvar ve yangına 30 dakika dayanıklı kapı ile ayrılmış mı?', //hayır ise yapılacaklar listesine ekle
adim31= 'bina içinde orta gerilim merkezi mevcut mu?',
adim32='orta gerili odası binanın diğer kısımlarından yangına 60 dakika dayanıklı duvar ve yangına 30 dakika dayanıklı kapı ile ayrılmış mı?',  //hayır ise yapılacaklar listesine ekle
adim33='bina içinde trafo var mı?',
adim34='trafo odası binanın diğer kısımlarından yangına 120 dakika dayanıklı duvar ve yangına 90 dakika dayanıklı kapı ile ayrılmış mı?', //hayır ise yapılacaklar listesine ekle
adim35='binada jeneratör odası var mı?',
adim36='trafo odası binanın diğer kısımlarından yangına 120 dakika dayanıklı duvar ve yangına 90 dakika dayanıklı kapı ile ayrılmış mı?', //hayır ise yapılacaklar listesine ekle
adim37='bakılan bina bina yüksekliği 30,50 m den fazla olan konut binası mı?',
adim38='bina 30,50 m yükseklikten sonra en fazla 3 katta bir ayrı zonlara ayrılmış mı?',  //hayır ise yapılacaklar listesine ekle
adim39='bakılan bina, bina yüksekliği 21,50 m den fazla olan konut harici bir bina mı?',
adim40='bina 21,50 m yükseklikten sonra en fazla 3 katta bir ayır zonlara ayrılmış mı?', //hayır ise yapılacaklar listesine ekle
// adim41='yapıda atrium var mı?',
// adim42='bakılan binada yürütülen faaliyet yüksek tehlike sınıfından mı?', //ev ise yapılması gerekenlere artrium kapat ekle
// adim43='atrium alanı 90 m2 den büyük mü?', //ev ise yapılması gerekenlere ekle
// adim44='bakılan yapının bina yüksekliği 21.50 m den fazla mı?',
// adim45='bakılan binanın yapı yüksekliği 30,50 m den fazla mı?',
// adim46='yapıda çöp, haberleşme, evrak ve teknik donanım gibi düşey tesisat şaft veya bacaları mevcut mu?',
// adim47='Çöp, haberleşme, evrak ve teknik donanım gibi,düşey tesisat şaft ve baca duvarlarının yangına en az 120 dakika vekapaklarının en az 90 dakika dayanıklı ve duman sızdırmaz özellikte mi?',//hayır ise yapılacaklar listesine ekle
// adim48='döşemeyi delen su, elektrik, havalandırma, ısıtma ve benzeri bir tesisat var mı?',//evet ise yapılacaklar listesine ekle
// adim49='bina yüksekliği 28,50 m den fazla mı?',
// adim50='dış cephe en az zor yanıcı malzemeden mi?', //hayır ise yapılacaklar listesine ekle
// adim51='dış cephe kaplaması var mı?',
// adim52='zemin kotundan itibaren 1,5 m mesafede hiç yanmaz malzeme ile tesis edilmiş mi?',   //hayır ise yapılacaklar listesine ekle
// adim53='binanın altlı üstü iki katının pencere gibi boşlukları arasında düşeyde en az 1 m yüksekliğinde yangına dayanıklı yapı malzemeleri ile dolu yüzey oluşturulmuş mu?',
// adim54='iki katın pencere gibi korunumsuz boşluklarının cephe iç kısmına en çok 2 m aralıklarla cepheye enfazla 1.5 m mesafede yağmurlama başlıkları yerleştirilmiş mi?', //hayır ise yapılacaklar listesine ekle
// adim55='bakılan binanın bina yüksekliği 6,5 m den fazla mı?',
// adim56='pencere ve benzeri boşlukların yan kenarları en az 15 cm üst kenarları ise en az 30 cm eninden hiç yanmaz malzeme ile tesis edilmiş mi?', //hayır ise yapılacaklar listesine ekle
// adim57='binanın bitişiğinde farklı yüksekliğe sahip bir bina mevcut mu?',
// adim58='alçak binanın çatı hizasındaki yüksek bina katınındış cephe kaplaması hiç yanmaz malzemeden mi?', //hayır ise yapılacaklar listesine ekle
// adim59='bina orman alanı içinde veya bitişiğinde mi?',
// adim60='binanın tüm dış cephesi hiç yanmaz malzemeden mi?', //hayır ise yapılacaklar listesine ekle
// adim61='balkon, çıkma, baca, teras ve benzeri eklentileri hiç yanmaz malzemeden mi tesis edilmiş?', //hayır ise yapılacaklar listesine ekle
// adim62='kapı ve pencere doğramaları yangına 30 dakika dayanıklı mı?', //hayır ise yapılacaklar listesine ekle
// adim63='kapı ve penceredeki camlar çift cam mı? ilave olarak da kırılmaz yada yangına 30 dakika dayanıklı cam mı?', //hayır ise yapılacaklar listesine ekle
// adim64='binanın çatı kaplamalarının, catı deresi, baca kenarı, yağmur oluğu ve borusu gibi malzemeleri hiç yanmaz malzemeden mi tesis edilmiş?',  //hayır ise yapılacaklar listesine ekle
// adim65='çatı taşıyıcı sistemi hiç yanmaz malzemeden mi tesis edilmiş?', //hayır ise yapılacaklar listesine ekle
// adim66='çatı kaplamaları altında kalan kısım en az zor alevlenici malzemeden mi?', //hayır ise yapılacaklar listesine ekle
// adim67='iç duvarlarda ısı ve ses yalıtımı ve benzeri bir kaplama var mı?',
// adim68='iç duvar kaplaması yapılan alan kapasitesi 100 kişiden fazla olan sinema,tiyatro, konferans salonu ve düğün salonu gibi bir kullanım alanı mı?',  //evet ise yapılacaklar listesine ekle
// adim69='binanın bina yüksekliği 21,50 m den fazla mı?', //evet ise yapılacaklar listesine ekle
// adim70='bina yüksekliği 21,50 m den fazla mı?', //evet ise yapılacaklar listesine ekle
// adim71='işyerinde çalışan sayısı 50 kişiden fazla mı?', //evet ise yapılacaklar listesine ekle
]
let graph = {
  adim1: [adim2,adim2],
  adim2 : [adim3, adim3],
  adim3 : [adim4,adim5],
  adim4: [adim6,adim7],
  adim6: [adim8,adim7],
  adim8 : [adim11,adim7],
  adim11: [adim12,adim7],
  adim7:[adim10,adim9],
  adim9:[adim15,adim16],
  adim14:[adim5,adim13],
  adim13:[adim17,adim5],
  adim17:[adim18,adim5],
  adim18:[adim19,adim5],
  adim19:[adim7,adim5],
  adim5:[adim20,adim20],
  adim20:[adim22,adim21],
  adim21:[adim23,adim22],
  adim22:[adim25,adim24],
  adim24:[adim25,adim25],
  adim25:[adim27,adim26],
  adim26:[adim27,adim27],
  adim27:[adim29,adim28],
  adim28:[adim29,adim29],
  adim29:[adim31,adim28],
  adim28:[adim31,adim31],
  adim31:[adim33,adim32],
  adim32:[adim33,adim33],
  adim33:[adim35,adim34],
  adim34:[adim35,adim35],
  adim35:[adim37,adim36],
  adim36:[adim37,adim37],
  adim37:[adim39,adim38],
  adim38:[adim41,adim41],
 // adim39:[]
  }
let [adim, setAdim] = useState(adims[0])
let [currentAdim, setCurrentAdim] = useState(1)
const [current, setCurrent] = useState('adim1')

// const [selected,setSelected] = useState()

const handleClick = (number) => {

 let selected = graph[current][number]

 let temp = adims.indexOf(selected)+1
console.log(selected)
 setCurrent(`adim${temp}`)
 setAdim(selected)

// console.log(temp)
console.log(graph[current][number])
}


  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <h1>{adim}</h1>
      </div>
      <div className={styles.answer1}>
        <h1 onClick={()=>{handleClick(1)}}>Evet</h1>
      </div>
      <div className={styles.answer2}>
        <h1 onClick={()=>{handleClick(0)}}>Hayır</h1>
      </div>
    </div>
  );
};

export default Question;
