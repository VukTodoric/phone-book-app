var phone = [];

var formName = document.getElementsByName('name')[0],
    formLastName = document.getElementsByName('lastName')[0],
    formTelephone = document.getElementsByName('telephone')[0],
    search = document.getElementsByName('search')[0],
    searchBtn = document.getElementsByName('searchBtn')[0],
    addToDoBtn = document.getElementById('addToDoBtn'),
    editBody = document.getElementById('editBody'),
    back = document.getElementsByName('back')[0];


    back.addEventListener('click',createTable);
    addToDoBtn.addEventListener('click',phoneBook);
    searchBtn.addEventListener('click',searchTable);


 function createTable() {
   var text = "";
   for (var i = 0; i < phone.length; i++) {

   text +=  `<tr>
                <td>${phone[i].name}</td>
                <td>${phone[i].lastName}</td>
                <td>${phone[i].telephone}</td>
                <td><button id="${i}" class = "btn btn-danger btn-sm delete ">&nbsp;Delete&nbsp;</button></td>
            </tr> `
   }

   editBody.innerHTML = text;

   var deleteBtns = document.getElementsByClassName('delete');

   for (var i = 0; i < deleteBtns.length; i++) {
       deleteBtns[i].addEventListener('click',deletePhoneNumber);
   }
}


 function searchTable() {

  var filter = search.value.toUpperCase();
  var tr = document.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    tdName = tr[i].getElementsByTagName("td")[0];
    tdLastName = tr[i].getElementsByTagName("td")[1];
    tdTelephone = tr[i].getElementsByTagName("td")[2];
    if (tdName || tdLastName || tdTelephone) {
      if (tdName.innerHTML.toUpperCase().indexOf(filter) > -1 || tdLastName.innerHTML.toUpperCase().indexOf(filter) > -1 || tdTelephone.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
    }
   }


   function phoneBook() {
      var newPhone = {
        name : formName.value,
        lastName : formLastName.value,
        telephone : formTelephone.value
      }
      phone.push(newPhone);
   createTable();
    }


    function deletePhoneNumber() {
      var r = confirm("Are you sure you want to DELETE this phone contact ?!");
      if (r == true) {
          phone.splice(this.id,1);
            createTable();
      } else {
          createTable();
      }
    }
