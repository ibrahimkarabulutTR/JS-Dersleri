let ogrenci = {
  ad: 'İbrahim',
  soyad: 'Karabulut',
  eposta: 'i.karrabulut@gmail.com',
  sinif: 12,
  dersler: ['Matematik', 'Fizik', 'Kimya']
}

console.log(ogrenci)
console.log(ogrenci.ad)
console.log(ogrenci['dersler'])
console.log(ogrenci.dersler[2])
console.log(ogrenci.sinif)
ogrenci.sinif = 25
console.log(ogrenci.sinif)
console.log(typeof ogrenci)


let ogrenci = {
  ad: 'İbrahim',
  soyad: 'Karabulut',
  eposta: 'i.karrabulut@gmail.com',
  sinif: 12,
  dersler: ['Matematik', 'Fizik', 'Kimya'],
  durum: [
    {
      isim: 'İbrahim',
      puan: 15
    },
    {
      isim: 'Yusuf',
      puan: 75
    },
    {
      isim: 'Nisanur',
      puan: 85
    }
  ],
  print(){
    this.dersler.forEach((ders, sira)=>{
      console.log(`${sira}: ${ders}`)
    })
  },
  printdizi(){
    this.durum.forEach(durumobje=>{
      console.log(durumobje.isim," -> ", durumobje.puan)
    })
  },
  // bu şekilde this çalışmıyor
  login: () => {
    console.log(ogrenci.ad+" giriş yaptı -> []")
  },
  logout: () => {
    console.log(`${ogrenci.ad} çıkış yaptı  <- []`)
  }
}

ogrenci.login()
ogrenci.print()
ogrenci.printdizi()
ogrenci.logout()

const sinif = [
  {
    isim: 'İbrahim',
    puan: 15
  },
  {
    isim: 'Yusuf',
    puan: 75
  },
  {
    isim: 'Nisanur',
    puan: 85
  }
]