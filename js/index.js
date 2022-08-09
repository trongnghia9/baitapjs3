//Ngày hôm qua
function ngayHomQua(){
    var ngay = Number(document.getElementById("day").value);
    var thang = Number(document.getElementById("month").value);
    var nam = Number(document.getElementById("year").value);
    var yesterday = "";

    switch (thang) {
        // các tháng có 31 ngày
        case 1:
            if(ngay == 1){
                yesterday = (ngay = 31) + "/" + (thang = 12) + "/" + (--nam);
            }else{
                yesterday = (--ngay) + "/" + thang + "/" + nam;
            }
            break;
        case 3:
            if(ngay == 1){
                yesterday = (ngay = 28) + "/" + (--thang) + "/" + nam;
            }else{
                yesterday = (--ngay) + "/" + thang + "/" + nam;
            }
            break;
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if(ngay == 1){
                yesterday = (ngay = 30) + "/" + (--thang) + "/" + nam;
            }else{
                yesterday = (--ngay) + "/" + thang + "/" + nam;
            }
            break;
        case 2:
            if(ngay == 1){
                yesterday = (ngay = 31 ) + "/" + (--thang) + "/" + nam;
            }else{
                yesterday = (--ngay) + "/" + thang + "/" + nam;
            }
            break;
        //  các tháng có 30 ngày
        case 4:
        case 6:
        case 9:
        case 11:
            if(ngay == 1){
                yesterday = (ngay = 31 ) + "/" + (--thang) + "/" + nam;
            }else{
                yesterday = (--ngay) + "/" + thang + "/" + nam;
            }
            break;
    }
    document.getElementById("txtResult").innerHTML = yesterday;
}
document.getElementById("btnNgayHomQua").onclick = ngayHomQua;
// ngày mai
function ngayMai(){
    var ngay = Number(document.getElementById("day").value);
    var thang = Number(document.getElementById("month").value);
    var nam = Number(document.getElementById("year").value);
    var tinhNgayMai = "";
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if(ngay == 31){
                tinhNgayMai = (ngay = 1) + "/" + (++thang) + "/" + nam;
            }else{
                tinhNgayMai = (++ngay) + "/" + thang + "/" + nam;
            }
            break;
        case 12:
            if(ngay == 31){
                tinhNgayMai = (ngay = 1) + "/" + (thang = 1) + "/" + (++nam);
            }else{
                tinhNgayMai = (++ngay) + "/" + thang + "/" + nam;
            }
            break;
        case 2:
            if(ngay == 28){
                tinhNgayMai = (ngay = 1) + "/" + (++thang) + "/" + nam;
            }else{
                tinhNgayMai = (++ngay) + "/" + thang + "/" + nam;
            }
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            if(ngay == 30){
                tinhNgayMai = (ngay = 1) + "/" + (++thang) + "/" + nam;
            }else{
                tinhNgayMai = (++ngay) + "/" + thang + "/" + nam;
            }
            break;
    }
    document.getElementById("txtResult").innerHTML = tinhNgayMai;
}
document.getElementById("btnNgayMai").onclick = ngayMai;

function tinhNgay(){
    var thang = Number(document.getElementById("month1").value);
    var nam = Number(document.getElementById("year1").value);
    var result = "";
    switch (thang){
        case 1:
        case 3:
        case 5:
        case 7:
        case 10:
        case 12:
            // if(thang > 12)
            result = "Tháng " + thang + " năm " + nam + " có 31 ngày";    
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result = "Tháng " + thang + " năm " + nam + " có 30 ngày";    
            break;
        case 2:
            if(nam % 4 == 0 && nam / 100 != 0){
                result = "Tháng " + thang + " năm " + nam + " có 29 ngày"; 
            }
            else{
                result = "Tháng " + thang + " năm " + nam + " có 28 ngày";
            }
            break;
        default:
            alert("Vui lòng nhập tử tháng 1-12 nhé!");
            break;

    }
    document.getElementById("txtResult1").innerHTML = result;
}
document.getElementById("btnTinhNgay").onclick = tinhNgay;

function docSo(){
    var number = Number(document.getElementById("numberInput").value);
    var a = Math.floor(number%10) ;
    var b = Math.floor((number/10)%10);
    var c = Math.floor(number/100);
    // a số đơn vị
    // b số hàng chục
    // c số hàng trăm

    // điều kiện khi số có 2 chữ số 
    if(number < 100 || number > 999){
        alert("Nhập lại số đi ba!")
    }
    else{
        switch (c) {
            case 1: c = "Một trăm";
             break;
            case 2: c = "Hai trăm";
            break;
            case 3: c ="Ba trăm";
              break;
            case 4: c ="Bốn trăm";
             break;
            case 5: c ="Năm trăm";
             break;
            case 6: c ="Sáu trăm";
             break;
            case 7: c ="Bảy trăm";
             break;
            case 8:c ="Tám trăm";
             break;
            case 9:c = "chín trăm";
            break;
        }
    }
    // in ra chử "lẻ" nếu hàng chục bằng không
    if(b % 10 == 0 && a != 0){
        b = "lẻ";
    }else{
        switch (b) {
            case 1: b = "mười";
             break;
            case 2: b= "hai mươi";
             break;
            case 3: b="ba mươi";
             break;
            case 4:b= "bốn mươi";
             break;
            case 5: b="năm mươi";
             break;
            case 6: b="sáu mươi";
             break;
            case 7: b="bảy mươi";
             break;
            case 8:b= "tám mươi";
             break;
            case 9: b="chín mươi";
            break;
        }
    }
    // in ra hàng đơn vị
    switch (a){
        case 1: a ="một";
         break;
        case 2:  a = "hai";
         break;
        case 3: a = "ba";
         break;
        case 4:  a = "bốn";
         break;
        case 5:  a = "năm";
         break;
        case 6:  a = "sáu";
         break;
        case 7:  a = "bảy";
         break;
        case 8:  a = "tám";
         break;
        case 9:  a = "chín";
         break;
    }
    document.getElementById("txtResult2").innerHTML = c +" "+ b + " "+ a ;
}
document.getElementById("btnDocSo").onclick = docSo;

function tinhToaDo(){

    var toaDoTruongX = Number(document.getElementById("truongHocX").value);
    var toaDoTruongy = Number(document.getElementById("truongHocY").value);

    var toaDoX1 = Number(document.getElementById("nhapXy1").value);
    var toaDoy1 = Number(document.getElementById("nhapX1").value);
    var tenSV1 = document.getElementById("ten1").value;

    var toaDoX2 = Number(document.getElementById("nhapXy2").value);
    var toaDoy2 = Number(document.getElementById("nhapX2").value);
    var tenSV2 = document.getElementById("ten2").value;

    var toaDoX3 = Number(document.getElementById("nhapXy3").value);
    var toaDoy3 = Number(document.getElementById("nhapX3").value);
    var tenSV3 = document.getElementById("ten3").value;

    var doanThangSV1 = tinhD(toaDoTruongX,toaDoTruongy,toaDoX1,toaDoy1);
    var doanThangSV2 = tinhD(toaDoTruongX,toaDoTruongy,toaDoX2,toaDoy2);
    var doanThangSV3 = tinhD(toaDoTruongX,toaDoTruongy,toaDoX3,toaDoy3);

    var ketQua = "";

    // a b c
    // abc
    // nếu a < c = > acb  //  abc , acb , cab ,     bac ,bca,cba
    // cab
    // ba nếu c > a = bac
    // ngươc lại c < a = bca
    // cba

    if(doanThangSV1 < doanThangSV2 )
    {
        if(doanThangSV2 < doanThangSV3)
        ketQua = "Sinh viên xa trường nhất " + " " + tenSV3;
        else if(doanThangSV2 > doanThangSV3){
            ketQua = "Sinh viên xa trường nhất " + " " + tenSV2
        }else{
            ketQua = "Sinh viên xa trường nhất " + " " + tenSV2
        }
    }

    else{
        if(doanThangSV2 < doanThangSV1 && doanThangSV1 < doanThangSV3 ){
                ketQua = "Sinh viên xa trường nhất " + " " + tenSV3;
            }else if(doanThangSV1 > doanThangSV3){
                ketQua = "Sinh viên xa trường nhất " + " " + tenSV1;
            }else{
                ketQua = "Sinh viên xa trường nhất " + " " + tenSV1;
            }
        }
    document.getElementById("txtResult3").innerHTML = ketQua;
}
document.getElementById("tinhDuongThangD").onclick = tinhToaDo;

function tinhD(x1,y1,x2,y2){
    var d = 0;
    d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
    return d;
}


