// xuất số nguyên
function xuatsonguyen() {
    var songuyen1 = document.getElementById ('songuyen1').value;
    var songuyen2 = document.getElementById ('songuyen2').value;
    var songuyen3 = document.getElementById ('songuyen3').value;
    var ketqua = 0;
    
    


if (songuyen1 < songuyen2 && songuyen2 < songuyen3 ) {


    var ketqua = songuyen1 + songuyen2 + songuyen3 ;
    document.getElementById('xuatso').innerHTML=ketqua;
}

else if (songuyen1 < songuyen3 && songuyen3 < songuyen2 ) {


    var ketqua = songuyen1 + songuyen3 + songuyen2 ;
    document.getElementById('xuatso').innerHTML=ketqua;
}

else if (songuyen2 < songuyen3 && songuyen2 < songuyen1 ) {


    var ketqua = songuyen2 + songuyen3 + songuyen1 ;
    document.getElementById('xuatso').innerHTML=ketqua;
}

else if (songuyen2 < songuyen1 && songuyen1 < songuyen3 ) {


    var ketqua = songuyen2 + songuyen1 + songuyen3 ;
    document.getElementById('xuatso').innerHTML=ketqua;
}

else if (songuyen3 < songuyen2 && songuyen2 < songuyen1 ) {


    var ketqua = songuyen3 + songuyen2 + songuyen1 ;
    document.getElementById('xuatso').innerHTML=ketqua;
}

else {


    var ketqua = songuyen3 + songuyen1 + songuyen2 ;
    document.getElementById('xuatso').innerHTML=ketqua.toLocaleString();
}

}
document.getElementById ('xuatsonguye').onclick=xuatsonguyen;


// chÀO hỏi thành viên trong gia đình.
function chaohoi() {
    var ten = document.getElementById('ten').value;
    var ba = 'nghĩa';
    var me = 'cúc';
    var anh = 'xuân';
    var em = 'triết';
    

    if (ten==ba && ba=='nghĩa') {
       document.getElementById('chaoban').innerHTML="chào ba nghĩa";
        
    } else if (ten==me && me=='cúc') {
        document.getElementById('chaoban').innerHTML="chào mẹ cúc";
    }else if (ten==anh && anh=='xuân') {
        document.getElementById('chaoban').innerHTML="chào anh xuân";
    }
    else if (ten==em && em=='triết') {
        document.getElementById('chaoban').innerHTML="chào em triết";
    } else {
        document.getElementById('chaoban').innerHTML="tên không đúng xin nhập lại";
    }
    

}
document.getElementById('chaoo').onclick=chaohoi;



//nhập số nguyên xuất ra số chẳn lẻ.
function xuatchanle() {
    var songuyen1 = document.getElementById ('songuyen11').value;
   
    if ( songuyen1% 2==0) {
        document.getElementById('solechan').innerHTML='số chẳn'
    }else {
        document.getElementById('solechan').innerHTML='số lẻ' 
    }   

}
document.getElementById('xuatchanle').onclick=xuatchanle;


// tính 3 cạnh tam giác.
function tinhtamgiac() {
  var a = document.getElementById('tamgiacvuong').value;
  var b = document.getElementById('tamgiaccan').value;
  var c = document.getElementById('tamgiacdeu').value;
  
  if (a==3 && b==4 && c==5) {
    document.getElementById('tamgiacgi').innerHTML='tam giác vuông';
  }else if (a==2&& b==2 && c==1) {
    document.getElementById('tamgiacgi').innerHTML='tam giác cân';
  } else if (a==3&& b==3 && c==3 ) {
    document.getElementById('tamgiacgi').innerHTML='tam giác đều';
  }else {
    document.getElementById('tamgiacgi').innerHTML='tam giác thường';
  }
}
document.getElementById('tamgiac').onclick=tinhtamgiac;
