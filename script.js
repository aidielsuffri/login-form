function login() {
    let password = document.getElementById("password").value;
    let uname = document.getElementById("uname").value;
  
    let NumberReq = /(?=.*[0-9])/;
    let SymbolReq = /(?=.*[#,_^!@*&])/;
    
    if (password.length < 12) {
      alert("harap maaf, kata laluan anda tidak mencukupi 12 huruf")
    }
  
    else if (uname < 7) {
      alert("harap maaf, nama pengguna anda tidak mencukupi 7 huruf")
    }
  
    else if (!NumberReq.test(password)) {
      alert("kata laluan anda harus mempunyai sekurang kurangnya 1 number")
    }
  
    else if (!SymbolReq.test(password)) {
      alert("kata laluan anda harus mempunyai sekurang kurangnya 1 simbol")
    }
  
    else {
      alert("LOGIN SUCCESFULLY");
    }
  
  }