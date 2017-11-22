let arr_name = ["Himanshu","Rahul","Radhika","Geetu","Ashima","Harsimar"];
let arr_roll = [54,92,86,14,26,47];
let arr_passingyear = [2019,2020,2021,2022,2023,2024];
let arr_stream = ["CSE","ME","ECE","CSE","ME","USA"];


$(document).ready(function($) {
  $(document).on('submit', '#submit-form', function(event) {
    event.preventDefault();
  });
});
function display()
{

  var t_reference = document.getElementById('t_body');
  var tbody = document.getElementsByTagName('tbody');

  for(let i=0;i<arr_name.length;i++)
  {
      let n = document.createElement("tr");
      let n1 = document.createElement("td");
      n1.innerHTML = arr_name[i];
      n.appendChild(n1);

      let n2 = document.createElement("td");
      n2.innerHTML = arr_roll[i];
      n.appendChild(n2);

      let n4 = document.createElement("td");
      n4.innerHTML = arr_passingyear[i];
      n.appendChild(n4);

      let n5 = document.createElement("td");
      n5.innerHTML = arr_stream[i];
      n.appendChild(n5);

      let n3 = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      input.className = "check";
      n3.appendChild(input);
      n.appendChild(n3);


      t_reference.appendChild(n);
  }
}
function item_display()
{

  let t_reference = document.getElementById('t_body');


  var name = document.getElementById("name").value;
  arr_name.push(name);


  var roll = document.getElementById('roll').value;
  arr_roll.push(roll);

  var passingyear = document.getElementById('passingyear').value;
  arr_passingyear.push(passingyear);

  var stream = document.getElementById('stream').value;
  arr_stream.push(stream);

      let n = document.createElement("tr");
      let n1 = document.createElement("td");
      n1.innerHTML = name;
      n.appendChild(n1);

      let n2 = document.createElement("td");
      n2.innerHTML = roll;
      n.appendChild(n2);

      let n4 = document.createElement("td");
      n4.innerHTML = passingyear;
      n.appendChild(n4);

      let n5 = document.createElement("td");
      n5.innerHTML = stream;
      n.appendChild(n5);

      let n3 = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      input.className = "check";
      n3.appendChild(input);
      n.appendChild(n3);

      t_reference.appendChild(n);



  document.getElementById('name').value=" ";
  document.getElementById('roll').value=" ";
  document.getElementById('passingyear').value=" ";
  document.getElementById('stream').value=" ";
}


function delete_data()
{
  let t_reference = document.getElementById('t_body');
  var checked = document.getElementsByClassName("check");
  if(checked.length==0)
  {
    alert("No data");
  }
  for(let i=0;i<checked.length;)
  {
    if(checked[i].checked == true)
    {
      t_reference.removeChild(checked[i].parentElement.parentElement);

    }
    else {
      i++;
    }
  }
}
function edit_data()
{
  let t_reference = document.getElementById('t_body');
  var checked = document.getElementsByClassName("check");


  var update_name = document.getElementById("updatename");
  var update_roll = document.getElementById("updateroll");
  var update_passingyear = document.getElementById("updatepassingyear");
  var update_stream = document.getElementById("updatestream");

  for(let i=0;i<checked.length;i++)
  {
    if(checked[i].checked == true)
    {
      update_name.value = checked[i].parentElement.parentElement.childNodes[0].innerHTML;
      update_roll.value = checked[i].parentElement.parentElement.childNodes[1].innerHTML;
      update_passingyear.value = checked[i].parentElement.parentElement.childNodes[2].innerHTML;
      update_stream.value = checked[i].parentElement.parentElement.childNodes[3].innerHTML;

    }

  }

}

function update_data()
{
  let t_reference = document.getElementById('t_body');
  var checked = document.getElementsByClassName("check");

  var count=0;
  var update_name = document.getElementById("updatename");
  var update_roll = document.getElementById("updateroll");
  var update_passingyear = document.getElementById("updatepassingyear");
  var update_stream = document.getElementById("updatestream");

  for(let i=0;i<checked.length;i++)
  {
    if(checked[i].checked == true)
    {
      //count++;
      checked[i].parentElement.parentElement.childNodes[0].innerHTML = update_name.value;
      checked[i].parentElement.parentElement.childNodes[1].innerHTML  = update_roll.value ;
      checked[i].parentElement.parentElement.childNodes[2].innerHTML  = update_passingyear.value ;
      checked[i].parentElement.parentElement.childNodes[3].innerHTML = update_stream.value;
      document.getElementById("updatename").value=" ";
      document.getElementById("updateroll").value=" ";
      document.getElementById("updatepassingyear").value=" ";
      document.getElementById("updatestream").value=" ";
      alert("Data Updated Successfully");
    }
  }
/*  if(count==0)
  {
    alert("Select Something");
  }
  else if(count>1)
  {
    alert("You can select only one data at a time");
  }
  else {
    checked[i].parentElement.parentElement.parentElement.childNodes[0].innerHTML = update_name.value;
    checked[i].parentElement.parentElement.parentElement.childNodes[1].innerHTML  = update_roll.value ;
    checked[i].parentElement.parentElement.parentElement.childNodes[2].innerHTML  = update_passingyear.value ;
    document.getElementById("updatename").value=" ";
    document.getElementById("updateroll").value=" ";
    document.getElementById("updatepassingyear").value=" ";
    alert("Data Updated Successfully");
  }

*/
}
