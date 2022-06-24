import { useState } from "react";
import styles from "./Question.module.css";
import jsPDF from "jspdf";
import 'jspdf-autotable'
import { documentMethod, hazirlanacak,yapilacaklar,ormanİlaveTedbirleri } from "../../utils/documentMethod";
const Question = () => {
  let adim1,
    adim2,
    adim3,
    adim4,
    adim5,
    adim6,
    adim7,
    adim8,
    adim9,
    adim10,
    adim11,
    adim12,
    adim13,
    adim14,
    adim15,
    adim16,
    adim17,
    adim18,
    adim19,
    adim20,
    adim21,
    adim22,
    adim23,
    adim24,
    adim25,
    adim26,
    adim27,
    adim28,
    adim29,
    adim30,
    adim31,
    adim32,
    adim33,
    adim34,
    adim35,
    adim36,
    adim37,
    adim38,
    adim39,
    adim40,
    adim41,
    adim42,
    adim43,
    adim44,
    adim45,
    adim46,
    adim47,
    adim48,
    adim49,
    adim50,
    adim51,
    adim52,
    adim53,
    adim54,
    adim55,
    adim56,
    adim57,
    adim58,
    adim59,
    adim60,
    adim61,
    adim62,
    adim63,
    adim64,
    adim65,
    adim66,
    adim67,
    adim68,
    adim69,
    adim70,
    adim71;

    // generate pdf file with the yapılacaklar array
function generateYapilacaklarPdf(yapilacaklar){
  var doc = new jsPDF('p', 'pt');
  doc.setFontSize(14);
  var col = ["Adım", "Yapılacaklar"];
  var rows = [];
  var options = {            
    margin: { horizontal: 5 },
    bodyStyles: { valign: 'top' },
    styles: { overflow: 'linebreak',rowPageBreak: 'auto',minCellHeight:20,fontSize:7},
    
    headStyles: {
        fillColor: [51, 122, 183],
        textColor: [255],
        halign: 'center'
    }, 
             
    theme: 'grid'
};
  for (var i = 0; i < yapilacaklar.length; i++) {
      var temp = [i+1, yapilacaklar[i]];
      rows.push(temp);
  }
  doc.autoTable(col, rows,options);
  doc.save('yapilacaklar.pdf');
}
// generate pdf file with the hazirlanacak array
function generateHazirlanacaklarPdf(hazirlanacaklar){
  var doc = jsPDF('p', 'pt');
  doc.setFontSize(14);
  var col = ["Adım", "Hazırlanacaklar"];
  var rows = [];
  var options = {            
    margin: { horizontal: 5 },
    bodyStyles: { valign: 'top' },
    styles: { overflow: 'linebreak',rowPageBreak: 'auto',minCellHeight:20,fontSize:7},
    
    headStyles: {
        fillColor: [51, 122, 183],
        textColor: [255],
        halign: 'center'
    }, 
             
    theme: 'grid'
};
  for (var i = 0; i < hazirlanacaklar.length; i++) {
      var temp = [i+1, hazirlanacaklar[i]];
      rows.push(temp);
  }
  doc.autoTable(col, rows,options);
  doc.save('hazirlanacaklar.pdf');
}
// generate pdf file with the ormanİlaveTedbirleri array
function generateOrmanTedbirPdf(ormanİlaveTedbirleri){
  var doc = jsPDF('p', 'pt');
  doc.setFontSize(14);
  var col = ["Adım", "Orman İlave Tedbirleri"];
  var rows = [];
  var options = {            
    margin: { horizontal: 5 },
    bodyStyles: { valign: 'top' },
    styles: { overflow: 'linebreak',rowPageBreak: 'auto',minCellHeight:20,fontSize:7},
    
    headStyles: {
        fillColor: [51, 122, 183],
        textColor: [255],
        halign: 'center'
    }, 
             
    theme: 'grid'
};
  for (var i = 0; i < ormanİlaveTedbirleri.length; i++) {
      var temp = [i+1, ormanİlaveTedbirleri[i]];
      rows.push(temp);
  }
  doc.autoTable(col, rows,options);
  doc.save('ormanIlaveTedbirleri.pdf');
}

  let adims = [
    (adim1 = "bir katalanı 2.000 m2 den büyük mü?"),
    (adim2 ="Toplam kapalı kullanım alanı 10.000m2’den büyük imalathane, atölye, depo, otel, motel, sağlık, toplanma veya eğitim binası mı?"), //evet ise belge oluştur
    (adim3 = "orman içinde veya bitişiğinde mi?"),
    (adim4 = "rafineri mi?"),
    (adim5 = "İtfaiye araçlarının binaya yaklaşabildiği sonnoktadan binanın dış cephesindeki herhangi bir noktaya olan yatay uzaklık 45m’den fazla mı?"), //evet ise yapılacaklar listesine ekle
    (adim6 = "fosil yakıtlı elektrik üretim tesisi mi?"),
    (adim7 = "bina ile orman arazisi arasındaki eğim %40 dan fazla mı?"),
    (adim8 = "500 MW üzeri elektrik üretim tesisi mi?"),
    (adim9 = "binaya 500 m mesafede kendiliğinden yetişen orman örtüsü var mı?"),
    (adim10 ="Binaya 300 m mesafede kendiliğinden doğal yetişen orman örtüsü var mı?"),
    (adim11 = "2.000 m2 den büyük endüstriyel tesis mi?"),
    (adim12 = "2.000 m2 den büyük depolama amaçlı tesis mi?"),
    (adim13 ="Binaya 500 m mesafede parsel sınırı dışında 50m’den daha geniş karayolu, akarsu ve benzeri yangının ilerlemesini kesecek bir engel mevcut mu?"),
    adim14='Binaya 300 m mesafede parsel sınırı dışında 50m’den daha geniş karayolu, akarsu ve benzeri yangının ilerlemesini kesecek bir engel mevcut mu?',
    (adim15 = "arazinin eğimi %40 ile %55 arasında mı?"), //evet ise belge oluştur orman için ilave tedbire gerekli
    (adim16 = "arazinin eğimi %55 den fazla mı?"), //evet ise belge oluştur orman için ilave tedbire gerekli
    (adim17 = "arazinin eğimi %0 ile %20 arasında mı?"), //evet ise belge oluştur orman için ilave tedbire gerekli
    (adim18 = "arazinin eğimi %20 ile %30 arasında mı?"), //evet ise belge oluştur.orman için ilave tedbire gerekli
    (adim19 = "Arazinin eğimi %30 ile %40 arasında mı?"), //evet ise belge oluştur orman için ilave tedbire gerekli
    (adim20 = "yapı çelik kostrüksiyon mu?"),
    (adim21 = "çelik yapı alanı 5000 m2 den küçük tek katlı yapı mı?"),
    (adim22 = "binanın başka bir bina ile ortak duvarı mevcut mu?"),
    (adim23 = "çelik sıcağa karşı yalıtılmış mı?"), //hayır ise yapılacaklar listesine ekle
    (adim24 = "diğer bina ile arasında yangına en az 90 dakika dayanıklı duvar var mı?"), //hayır ise yapılacaklar listesine ekle
    (adim25 = "yapıda merkezi kazan dairesi var mı?"),
    (adim26 ="kazan dairesi binanın diğer kısımlarından yangına 120 dakika dayanıklı duvar ve yangına 90 dakika dayanıklı kapı ile ayrılmış mı"), //hayır ise yapılacaklar listesine ekle
    (adim27 = "yapıda kapalı otopark var mı?"),
    (adim28 ="otopark binanın diğer kısımlarından yangına 60 dakika dayanıklı duvar ve yangına 30 dakika dayanıklı kapı ile ayrılmış mı?"), //hayır ise yapılacaklar listesine ekle
    (adim29 = "yapıda ana elektrik dağıtım odası mevcut mu?"),
    (adim30 ="ana elektrik dağıtım odası binanın diğer kısımlarından yangına 60 dakika dayanıklı duvar ve yangına 30 dakika dayanıklı kapı ile ayrılmış mı?"), //hayır ise yapılacaklar listesine ekle
    (adim31 = "bina içinde orta gerilim merkezi mevcut mu?"),
    (adim32 ="orta gerili odası binanın diğer kısımlarından yangına 60 dakika dayanıklı duvar ve yangına 30 dakika dayanıklı kapı ile ayrılmış mı?"), //hayır ise yapılacaklar listesine ekle
    (adim33 = "bina içinde trafo var mı?"),
    (adim34 ="trafo odası binanın diğer kısımlarından yangına 120 dakika dayanıklı duvar ve yangına 90 dakika dayanıklı kapı ile ayrılmış mı?"), //hayır ise yapılacaklar listesine ekle
    (adim35 = "binada jeneratör odası var mı?"),
    (adim36 ="trafo odası binanın diğer kısımlarından yangına 120 dakika dayanıklı duvar ve yangına 90 dakika dayanıklı kapı ile ayrılmış mı?"), //hayır ise yapılacaklar listesine ekle
    (adim37 ="bakılan bina bina yüksekliği 30,50 m den fazla olan konut binası mı?"),
    (adim38 ="bina 30,50 m yükseklikten sonra en fazla 3 katta bir ayrı zonlara ayrılmış mı?"), //hayır ise yapılacaklar listesine ekle
    (adim39 ="bakılan bina, bina yüksekliği 21,50 m den fazla olan konut harici bir bina mı?"),
    (adim40 ="bina 21,50 m yükseklikten sonra en fazla 3 katta bir ayır zonlara ayrılmış mı?"), //hayır ise yapılacaklar listesine ekle
    (adim41 = "yapıda atrium var mı?"),
    (adim42 ="bakılan binada yürütülen faaliyet yüksek tehlike sınıfından mı?"), //ev ise yapılması gerekenlere artrium kapat ekle
    (adim43 = "atrium alanı 90 m2 den büyük mü?"), //ev ise yapılması gerekenlere ekle
    (adim44 = "bakılan yapının bina yüksekliği 21.50 m den fazla mı?"),
    (adim45 = "bakılan binanın yapı yüksekliği 30,50 m den fazla mı?"),
    (adim46 ="yapıda çöp, haberleşme, evrak ve teknik donanım gibi düşey tesisat şaft veya bacaları mevcut mu?"),
    (adim47 ="Çöp, haberleşme, evrak ve teknik donanım gibi,düşey tesisat şaft ve baca duvarlarının yangına en az 120 dakika vekapaklarının en az 90 dakika dayanıklı ve duman sızdırmaz özellikte mi?"), //hayır ise yapılacaklar listesine ekle
    (adim48 ="döşemeyi delen su, elektrik, havalandırma, ısıtma ve benzeri bir tesisat var mı?"), //evet ise yapılacaklar listesine ekle
    (adim49 = "bina yüksekliği 28,50 m den fazla mı?"),
    (adim50 = "dış cephe en az zor yanıcı malzemeden mi?"), //hayır ise yapılacaklar listesine ekle
    (adim51 = "dış cephe kaplaması var mı?"),
    (adim52 ="zemin kotundan itibaren 1,5 m mesafede hiç yanmaz malzeme ile tesis edilmiş mi?"), //hayır ise yapılacaklar listesine ekle
    (adim53 ="binanın altlı üstü iki katının pencere gibi boşlukları arasında düşeyde en az 1 m yüksekliğinde yangına dayanıklı yapı malzemeleri ile dolu yüzey oluşturulmuş mu?"),
    (adim54 ="iki katın pencere gibi korunumsuz boşluklarının cephe iç kısmına en çok 2 m aralıklarla cepheye enfazla 1.5 m mesafede yağmurlama başlıkları yerleştirilmiş mi?"), //hayır ise yapılacaklar listesine ekle
    (adim55 = "bakılan binanın bina yüksekliği 6,5 m den fazla mı?"),
    (adim56 ="pencere ve benzeri boşlukların yan kenarları en az 15 cm üst kenarları ise en az 30 cm eninden hiç yanmaz malzeme ile tesis edilmiş mi?"), //hayır ise yapılacaklar listesine ekle
    (adim57 ="binanın bitişiğinde farklı yüksekliğe sahip bir bina mevcut mu?"),
    (adim58 ="alçak binanın çatı hizasındaki yüksek bina katının dış cephe kaplaması hiç yanmaz malzemeden mi?"), //hayır ise yapılacaklar listesine ekle
    (adim59 = "bina orman alanı içinde veya bitişiğinde mi?"),
    (adim60 = "binanın tüm dış cephesi hiç yanmaz malzemeden mi?"), //hayır ise yapılacaklar listesine ekle
    (adim61 ="balkon, çıkma, baca, teras ve benzeri eklentileri hiç yanmaz malzemeden mi tesis edilmiş?"), //hayır ise yapılacaklar listesine ekle
    (adim62 = "kapı ve pencere doğramaları yangına 30 dakika dayanıklı mı?"), //hayır ise yapılacaklar listesine ekle
    (adim63 ="kapı ve penceredeki camlar çift cam mı? ilave olarak da kırılmaz yada yangına 30 dakika dayanıklı cam mı?"), //hayır ise yapılacaklar listesine ekle
    (adim64 ="binanın çatı kaplamalarının, catı deresi, baca kenarı, yağmur oluğu ve borusu gibi malzemeleri hiç yanmaz malzemeden mi tesis edilmiş?"), //hayır ise yapılacaklar listesine ekle
    (adim65 = "çatı taşıyıcı sistemi hiç yanmaz malzemeden mi tesis edilmiş?"), //hayır ise yapılacaklar listesine ekle
    (adim66 ="çatı kaplamaları altında kalan kısım en az zor alevlenici malzemeden mi?"), //hayır ise yapılacaklar listesine ekle
    (adim67 ="iç duvarlarda ısı ve ses yalıtımı ve benzeri bir kaplama var mı?"),
    (adim68 ="iç duvar kaplaması yapılan alan kapasitesi 100 kişiden fazla olan sinema,tiyatro, konferans salonu ve düğün salonu gibi bir kullanım alanı mı?"), //evet ise yapılacaklar listesine ekle
    (adim69 = "binanın bina yüksekliği 21,50 m den fazla mı?"), //evet ise yapılacaklar listesine ekle
    (adim70 = "binanın yapı yüksekliği 30,50 m den fazla mı?"), //evet ise yapılacaklar listesine ekle
    (adim71 = "işyerinde çalışan sayısı 50 kişiden fazla mı?"), //evet ise yapılacaklar listesine ekle
  ];

  //graph data structure
  let graph = {
    adim1: [adim2, adim2],
    adim2: [adim3, adim3],
    adim3: [adim5, adim4],
    adim4: [adim6, adim7],
    adim6: [adim8, adim7],
    adim8: [adim11, adim7],
    adim11: [adim12, adim7],
    adim7: [adim10, adim9],
    adim10:[adim5,adim14],
    adim9: [adim5, adim13],
    adim14: [adim17, adim5],
    adim13: [adim15, adim5],
    adim15:[adim16,adim5],
    adim16:[adim5,adim5],
    adim17: [adim18, adim5],
    adim18: [adim19, adim5],
    adim19: [adim7, adim5],
    adim5: [adim20, adim20],
    adim20: [adim22, adim21],
    adim21: [adim23, adim22],
    adim22: [adim25, adim24],
    adim23:[adim22,adim22],
    adim24: [adim25, adim25],
    adim25: [adim27, adim26],
    adim26: [adim27, adim27],
    adim27: [adim29, adim28],
    adim28: [adim29, adim29],
    adim29: [adim31, adim30],
    adim30: [adim31, adim31],
    adim31: [adim33, adim32],
    adim32: [adim33, adim33],
    adim33: [adim35, adim34],
    adim34: [adim35, adim35],
    adim35: [adim37, adim36],
    adim36: [adim37, adim37],
    adim37: [adim39, adim38],
    adim38: [adim41, adim41],
    adim39: [adim41, adim40],
    adim40: [adim41, adim41],
    adim41: [adim44, adim42],
    adim42: [adim43, adim44],
    adim43: [adim44, adim44],
    adim44: [adim45, adim46],
    adim45: [adim48, adim46],
    adim46: [adim48, adim47],
    adim47: [adim48, adim48],
    adim48: [adim49, adim49],
    adim49: [adim51, adim50],
    adim50: [adim53, adim53],
    adim51: [adim55, adim52],
    adim52: [adim55, adim55],
    adim53: [adim54, adim55],
    adim54: [adim55, adim55],
    adim55: [adim57, adim56],
    adim56: [adim57, adim57],
    adim57: [adim59, adim58],
    adim58: [adim59, adim59],
    adim59: [adim67, adim60],
    adim60: [adim67, adim61],
    adim61: [adim62, adim62],
    adim62: [adim63, adim63],
    adim63: [adim64, adim64],
    adim64: [adim65, adim65],
    adim65: [adim66, adim66],
    adim66: [adim67, adim67],
    adim67: [adim71, adim68],
    adim68: [adim69, adim69],
    adim69: [adim70, adim70],
    adim70: [adim71, adim71],
  };

  const [adim, setAdim] = useState(adims[0]);
  const [current, setCurrent] = useState("adim1");
  const [IsOpen, setIsOpen] = useState(false);

  const handleClick = (number, e) => {
   // debugger
    if(current !== 'adim71'){

    let selected = graph[current][number] ?? "boş";
    let temp = adims.indexOf(selected) + 1;
    console.log(temp);
    documentMethod(current, e.target.innerText);

    setCurrent(`adim${temp}`);
    setAdim(selected);
    }
    else{
      if(hazirlanacak.length > 0){ generateHazirlanacaklarPdf(hazirlanacak);}
      if(yapilacaklar.length > 0){ 
        //remove duplicate values
        let unique = [...new Set(yapilacaklar)];
        generateYapilacaklarPdf(unique);
      }
      if(ormanİlaveTedbirleri.length > 0){generateOrmanTedbirPdf(ormanİlaveTedbirleri);}

       hazirlanacak.length =0
       yapilacaklar.length =0
       ormanİlaveTedbirleri.length =0
      setCurrent('adim1');
      setAdim(adims[0]);
      alert("PDFler oluşturuldu");
      setIsOpen(false)
    }
  };

  return (
    <div className={styles.container}>
      <h2>Yönetmeliğin 1. ve 2.Kısmı</h2>
      {
        IsOpen===false ? ( <div onClick={()=>{setIsOpen(!IsOpen)}} className={styles.startButton}>
          <div className={styles.start}>Belge Oluşturmaya Başla</div>
  
        </div>
        ) : <>
        <div className={styles.question}>
        <div>{adim.toUpperCase()}</div>
      </div>
      <div className={styles.answers}>
        <div className={styles.answer1}>
          <div
            onClick={(e) => {
              handleClick(1, e);
            }}
          >
            Evet
          </div>
        </div>
        <div className={styles.answer2}>
          <div
            onClick={(e) => {
              handleClick(0, e);
            }}
          >
            Hayır
          </div>
        </div>
      </div>
      <div className={styles.docs}>
        <div className={styles.hazirlanacak}>
         <h3> Hazırlanacak Evraklar</h3>
          {hazirlanacak.map((item, index) => {
            return (
              <div key={index} className={styles.hazir}>
                <div>{index+1}) {item}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.yapilacaklar}>
          <h3>Yapılacaklar Listesi</h3>
          {yapilacaklar.map((item, index) => {
            return (
              <div key={index} className={styles.yapilacak}>
                <div>{index+1}) {item}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.orman}>
          <h3>Orman için Ekstra Tedbirler</h3>
          {ormanİlaveTedbirleri.map((item, index) => {
            return (
              <div key={index} className={styles.ormanTedbir}>
                <div>{index+1}) {item}</div>
              </div>
            );
          })}
        </div>
      </div>
        </>
          
      }
     
      
    </div>
  );
};

export default Question;
