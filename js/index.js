// Bai 1
function sapXep() {
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    var num3 = +document.getElementById('num3').value;

    if (num1 <= num2){
        if ( num2 <= num3){
            document.getElementById('resultHandle').innerHTML = `
            <div>
                <p>${num1}, ${num2}, ${num3}</p>
            </div>
            `;
        }
        else if (num2 >= num3 && num1 <= num3) {
            document.getElementById('resultHandle').innerHTML = `
            <div>
                <p>${num1}, ${num3}, ${num2}</p>
            </div>
            `;
        }
        else {
            document.getElementById('resultHandle').innerHTML = `
            <div>
                <p>${num3}, ${num1}, ${num2}</p>
            </div>
            `;
        }
        
    }
    else if (num2 <= num1){
        if (num2 >= num3){
            document.getElementById('resultHandle').innerHTML = `
            <div>
                <p>${num3}, ${num2}, ${num1}</p>
            </div>
            `;
        }
        else if (num2 <= num3 && num1 <= num3){
            document.getElementById('resultHandle').innerHTML = `
            <div>
                <p>${num2}, ${num1}, ${num3}</p>
            </div>
            `;
        }
        else {
            document.getElementById('resultHandle').innerHTML = `
            <div>
                <p>${num2}, ${num3}, ${num1}</p>
            </div>
            `;
        }
    }

}

// Bai 2
function greeting() {
    var user = document.getElementById('user');
    if (user.value == 'B'){
        document.getElementById('greetingResult').innerHTML = `
            <div>
                <p>Xin chào Ba</p>
            </div>
            `;
    }
    else if (user.value == 'M'){
        document.getElementById('greetingResult').innerHTML = `
            <div>
                <p>Xin chào Mẹ</p>
            </div>
            `;
    }
    else if (user.value == 'A'){
        document.getElementById('greetingResult').innerHTML = `
            <div>
                <p>Xin chào Anh Trai</p>
            </div>
            `;
    }
    else if( user.value == 'E') {
        document.getElementById('greetingResult').innerHTML = `
            <div>
                <p>Xin chào Em Gái</p>
            </div>
            `;
    }
    else {
        document.getElementById('greetingResult').innerHTML = `
            
            `;
    }
}

// Bai 3
function demSo() {
    var evenCount = 0;
    var oddCount = 0;
    var n1 = +document.getElementById('n1').value;
    var n2 = +document.getElementById('n2').value;
    var n3 = +document.getElementById('n3').value;

    if (n1 % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }

    if (n2 % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }

    if (n3 % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
    document.getElementById('countingHandle').innerHTML = `
            <div>
                <p>Số lẻ: ${evenCount}</p>
                <p>Số chẵn: ${oddCount}</p>
            </div>
            `;
}

// Bai 4
function triangle() {
    var a = +document.getElementById('a').value;
    var b = +document.getElementById('b').value;
    var c = +document.getElementById('c').value;
    var tamGiacCan = 'Tam giác cân';
    var tamGiacDeu = 'Tam giác đều';
    var tamGiacVuong = 'Tam giác vuông';
    var tamGiacThuong = 'Tam giác thường';
     if (a === b && b === c){
        document.getElementById('triangleHandle').innerHTML = `
            <div>
                <p>Đây là: ${tamGiacDeu}</p>
            </div>
            `;
     }
     else if (a === b || b === c || a === c) {
        document.getElementById('triangleHandle').innerHTML = `
            <div>
                <p>Đây là: ${tamGiacCan}</p>
            </div>
            `;
     }
     else if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2) ||
     Math.pow(b,2) + Math.pow(c,2) == Math.pow(a,2) ||
     Math.pow(a,2) + Math.pow(c,2) == Math.pow(b,2)) {
        document.getElementById('triangleHandle').innerHTML = `
            <div>
                <p>Đây là: ${tamGiacVuong}</p>
            </div>
            `;
     }
     else {
        document.getElementById('triangleHandle').innerHTML = `
            <div>
                <p>Đây là: ${tamGiacThuong}</p>
            </div>
            `;
     }
}

