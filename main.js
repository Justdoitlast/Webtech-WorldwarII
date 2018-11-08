var spanElements = document.getElementsByTagName('h1');

for (var i = 0; i < spanElements.length; i++) {
    spanElements[i].style.color = 'orange';
}


// Create an object that contains options in the first list as the key, then put the array list of what will be displayed in the second list.
const departmentEmployeeMap = {
  1939: ["โปรดเลือก...", "กันยายน", "ตุลาคม","พฤศจิกายน","ธันวาคม"],
  1940: ["โปรดเลือก...", "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
  1941: ["โปรดเลือก...", "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
  1942: ["โปรดเลือก...", "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน"],
  1943: ["โปรดเลือก...", "มกราคม", "กุมภาพันธ์", "มีนาคม"],
  1944: ["โปรดเลือก...", "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ธันวาคม"],
  1945: ["โปรดเลือก...", "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน"]
};

let departmentList = document.getElementById("departmentList");
let employeeList = document.getElementById("employeeList");
let submit = document.getElementById("btnSubmit");
let errorNoDepartment = document.getElementById("errorNoDepartment");

departmentList.addEventListener("change", function() {
  // Clear second select list
  employeeList.length = 0;
  for (let i in departmentEmployeeMap[departmentList.value]) {
    let op = document.createElement("option");
    // set its value
    op.value = departmentEmployeeMap[departmentList.value][i];
    // set the display label
    op.text = departmentEmployeeMap[departmentList.value][i];
    // append it to B
    employeeList.appendChild(op);
  }
});

function myFunction() {
    var x = document.getElementById("departmentList").value
    var y = document.getElementById("employeeList").value
    if (x == "empty") {
        document.getElementById("valid1").innerHTML = "*กรุณาเลือกปีที่ต้องการ";
    }
    if (y == "" || y == "โปรดเลือก..."){
        document.getElementById("valid2").innerHTML = "*กรุณาเลือกเดือนที่ต้องการ";
    }
    if (x == "1939") {
      if (y=="กันยายน") {
        location.href = "page1.html";
      }
      if (y=="ตุลาคม") {
        location.href = "page1-october.html";
      }
      if (y=="พฤศจิกายน") {
        location.href = "page1-november.html";
      }
      if (y=="ธันวาคม") {
        location.href = "page1-december.html";
      }
    }
    if (x == "1940") {
      if (y=="มกราคม") {
        location.href = "page2-january.html";
      }
      if (y=="กุมภาพันธ์") {
        location.href = "page2-february.html";
      }
      if (y=="มีนาคม") {
        location.href = "page2-march.html";
      }
      if (y=="เมษายน") {
        location.href = "page2-april.html";
      }
      if (y=="พฤษภาคม") {
        location.href = "page2-may.html";
      }
      if (y=="มิถุนายน") {
        location.href = "page2-june.html";
      }
      if (y=="กรกฎาคม") {
        location.href = "page2-july.html";
      }
      if (y=="สิงหาคม") {
        location.href = "page2-august.html";
      }
      if (y=="กันยายน") {
        location.href = "page2-september.html";
      }
      if (y=="ตุลาคม") {
        location.href = "page2-october.html";
      }
      if (y=="พฤศจิกายน") {
        location.href = "page2-november.html";
      }
      if (y=="ธันวาคม") {
        location.href = "page2-december.html";
      }
    }
    if (x == "1941") {
      if (y=="มกราคม") {
        location.href = "page3-january.html";
      }
      if (y=="กุมภาพันธ์") {
        location.href = "page3-february.html";
      }
      if (y=="มีนาคม") {
        location.href = "page3-march.html";
      }
      if (y=="เมษายน") {
        location.href = "page3-april.html";
      }
      if (y=="พฤษภาคม") {
        location.href = "page3-may.html";
      }
      if (y=="มิถุนายน") {
        location.href = "page3-june.html";
      }
      if (y=="กรกฎาคม") {
        location.href = "page3-july.html";
      }
      if (y=="สิงหาคม") {
        location.href = "page3-august.html";
      }
      if (y=="กันยายน") {
        location.href = "page3-september.html";
      }
      if (y=="ตุลาคม") {
        location.href = "page3-october.html";
      }
      if (y=="พฤศจิกายน") {
        location.href = "page3-november.html";
      }
      if (y=="ธันวาคม") {
        location.href = "page3-december.html";
      }
    }
    if (x == "1942") {
      if (y=="มกราคม") {
        location.href = "page4-january.html";
      }
      if (y=="กุมภาพันธ์") {
        location.href = "page4-february.html";
      }
      if (y=="มีนาคม") {
        location.href = "page4-march.html";
      }
      if (y=="เมษายน") {
        location.href = "page4-april.html";
      }
      if (y=="พฤษภาคม") {
        location.href = "page4-may.html";
      }
      if (y=="มิถุนายน") {
        location.href = "page4-june.html";
      }
      if (y=="กรกฎาคม") {
        location.href = "page4-july.html";
      }
      if (y=="สิงหาคม") {
        location.href = "page4-august.html";
      }
      if (y=="กันยายน") {
        location.href = "page4-september.html";
      }
      if (y=="ตุลาคม") {
        location.href = "page4-october.html";
      }
      if (y=="พฤศจิกายน") {
        location.href = "page4-november.html";
      }
    }
    if (x == "1943") {
      if (y=="มกราคม") {
        location.href = "page5-january.html";
      }
      if (y=="กุมภาพันธ์") {
        location.href = "page5-february.html";
      }
      if (y=="มีนาคม") {
        location.href = "page5-march.html";
      }
    }
    if (x == "1944") {
      if (y=="มกราคม") {
        location.href = "page6-january.html";
      }
      if (y=="กุมภาพันธ์") {
        location.href = "page6-february.html";
      }
      if (y=="มีนาคม") {
        location.href = "page6-march.html";
      }
      if (y=="เมษายน") {
        location.href = "page6-april.html";
      }
      if (y=="พฤษภาคม") {
        location.href = "page6-may.html";
      }
      if (y=="มิถุนายน") {
        location.href = "page6-june.html";
      }
      if (y=="กรกฎาคม") {
        location.href = "page6-july.html";
      }
      if (y=="สิงหาคม") {
        location.href = "page6-august.html";
      }
      if (y=="กันยายน") {
        location.href = "page6-september.html";
      }
      if (y=="ธันวาคม") {
        location.href = "page6-december.html";
      }
    }
    if (x == "1945") {
      if (y=="มกราคม") {
        location.href = "page7-january.html";
      }
      if (y=="กุมภาพันธ์") {
        location.href = "page7-february.html";
      }
      if (y=="มีนาคม") {
        location.href = "page7-march.html";
      }
      if (y=="เมษายน") {
        location.href = "page7-april.html";
      }
      if (y=="พฤษภาคม") {
        location.href = "page7-may.html";
      }
      if (y=="มิถุนายน") {
        location.href = "page7-june.html";
      }
      if (y=="กรกฎาคม") {
        location.href = "page7-july.html";
      }
      if (y=="สิงหาคม") {
        location.href = "page7-august.html";
      }
      if (y=="กันยายน") {
        location.href = "page7-september.html";
      }
    }
}

