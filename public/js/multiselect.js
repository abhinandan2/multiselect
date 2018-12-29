// Abhinandan Shah - abhioxic
function multiselect() {

   var json = [
      {
        title: "Asus",
        code: "AS",
        price: 200,
      },
      {
        title: "Bsus",
        code: "BS",
        price: 300,
      },
      {
        title: "Dsus",
        code: "DS",
        price: 100,
      },
   ]
 var selectedList = []
 var node = document.getElementById("ul");
 json.forEach((currentValue, index) => {
  var li = document.createElement("li");
  li.innerHTML = `<label name="` + currentValue.title + `" class="multiselect--li"><input on type="checkbox" class="multiselect--checkbox" name="` + currentValue.title + `" value="` + currentValue.code + `"><span>` + currentValue.title +  `</span><span> ` + currentValue.price + `</span></input></label>`
  node.appendChild(li);
 })
 var label = document.getElementsByClassName("multiselect--label");
 $('#multiselect--filter').on('input', function() { 
     console.log();
     var filter = $(this).val();
     for(var i = 0; i < label.length; i++) { 
        if(label[i].getAttribute('name').toUpperCase().indexOf(filter.toUpperCase()) > -1){
          label[i].style.display = "";
        } else {
          label[i].style.display = "none";
        }
      }
 });
  $(".multiselect--checkbox").change(function() {
      if(this.checked) {
        debugger;
      }
  });
 

};
