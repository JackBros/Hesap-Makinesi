var _buttonlar = document.getElementsByTagName("button"),
    _uzunluk = _buttonlar.length,
    i = 0,
    _sonuç = document.getElementById("sonuç"),
    _sonDeger = "";

for(i = 0; i < _uzunluk; i++){
    _buttonlar[i].onclick = hesapla;
}

function hesapla(){
    var _deger = this.innerHTML;
    if(_deger == "AC"){
        _sonuç.value = "";
        _sonDeger = "";
        return;
    }
    if(_deger == "="){
        try{
            var _sonucDeger = eval(_sonuç.value.replace(/^0+/, ''));
            _sonuç.value = _sonucDeger;
            _sonDeger = "";
        }catch(e){
            _sonuç.value = "0";
        }
        return;
    }
    if (!isNaN(parseInt(_deger))) {
        _sonuç.value += _deger;
        _sonDeger = _deger;
    } else if ("+-*/".includes(_deger) && !"+-*/".includes(_sonDeger)) {
        _sonuç.value += _deger;
        _sonDeger = _deger;
    }
}
