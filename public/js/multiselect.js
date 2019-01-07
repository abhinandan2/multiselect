// 'Abhinandan Shah - abhioxic',
function multiselect(selectedList) {

var json = [
 {
   title: 'Zee Infotainment Pack',
   code: 'DUMMY',
   price: 5,
 },{
   title: 'Fox life HD',
   code: 'DUMMY',
   price: 15,
 },{
   title: 'MTV Beats HD',
   code: 'DUMMY',
   price: 10,
 }
 ,{
   title: 'NGC Music HD',
   code: 'DUMMY',
   price: 5,
 },{
   title: 'TLC HD World',
   code: 'DUMMY',
   price: 10,
 },{
   title: 'Travel XP HD',
   code: 'DUMMY',
   price: 19,
 },{
   title: 'Baby tv HD',
   code: 'DUMMY',
   price: 9,
 },{
   title: 'CNBC PRIME HD',
   code: 'DUMMY',
   price: 15,
 },{
   title: 'Nick HD +',
   code: 'DUMMY',
   price: 25,
 },{
   title: 'Axn HD',
   code: 'DUMMY',
   price: 15,
 },{
   title: 'Colors Infinity HD',
   code: 'DUMMY',
   price: 5,
 },{
   title: 'Comedy Central HD',
   code: 'DUMMY',
   price: 20,
 },{
   title: 'MN+ HD',
   code: 'DUMMY',
   price: 10,
 },{
   title: 'ROMEDY NOW HD',
   code: 'DUMMY',
   price: 10,
 },{
   title: 'Sony PIX HD',
   code: 'DUMMY',
   price: 5,
 },{
   title: 'Star Movies HD',
   code: 'DUMMY',
   price: 25,
 },{
   title: 'Star Movies Select HD',
   code: 'DUMMY',
   price: 15,
 },{
   title: 'Sony MAX',
   code: 'DUMMY',
   price: 25,
 },{
   title: 'Zee Cinema',
   code: 'DUMMY',
   price: 25,
 },{
   title: 'Star Gold',
   code: 'DUMMY',
   price: 25,
 },
 // {
 //   title: 'UTV Movies',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'UTV Action',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'ZEE BOLLYWOOD',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Zee Action ',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Movies OK',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: '& Pictures',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Sony MAX 2',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Star Movies',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Romedy Now ',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: '&FLIX',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Sony PIX',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Warner Brothers',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Movies Now',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'MNX',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Colors',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Star Plus',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Zee TV',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'STAR BHARAT',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Sony SAB TV',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'UTV Bindass',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: '& TV',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'DISCOVERY JEET ',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'AXN',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Star World',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'ZEE Café',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Comedy Central',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Colors Infinity',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Cartoon Network',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'MIRROR NOW',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Hungama',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Times Now',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'NICK',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'REPUBLIC TV',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Nick Junior',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'DISNEY',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'CNBC TV 18',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Disney XD',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Disney Junior',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'SONY YAY',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'CNBC BAZAAR',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'ET Now',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'BABY TV SD',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Discovery Kids',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Zee Business',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'MTV',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'VH1',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'CNBCAwaaz',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Aljazeera',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'JINVANI',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'France 24',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'SANSKRITI TV',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'PTC News',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'PTC Punjabi',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'NEWS18 PUN/HAR HIMACHAL',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Stv Haryana News',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: '9X Tashan',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Discovery ',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'MH-1 (SD)',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Ptc Chakde',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'NEWS 18 URDU',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Zee Salaam',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'CHANNEL WIN',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Colors Gujarati',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Discovery  Turbo',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Discovery  Science',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'EPIC TV',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'History tv 18',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'GEMPORIA',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'FYI TV 18',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Fox life',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Travel XP',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'TLC',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Living Foodz',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'Nat Geo',
 //   code: 'DUMMY',
 //   price: 25,
 // },{
 //   title: 'ABP News',
 //   code: 'DUMMY',
 //   price: 25,
 // }
]

 var node = document.getElementById("ul");
 json.forEach((currentValue, index) => {
  var li = document.createElement("li");
  li.classList.add("multiselect--li")
   if(index == 0){
     li.classList.add("multiselect--bouquet")
      li.innerHTML = `<label name="` + currentValue.title + `" class="multiselect--label input-group"><input  type="checkbox" class="multiselect--checkbox" name="` + currentValue.title + `" value="` + currentValue.code + `"><span class="multiselect--title">` + currentValue.title +  `</span><span class="multiselect--price">₹ ` + currentValue.price + `</span></input>
         <button class="input-group-append multiselect__btn-collapse" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-plus"></i></button></label>
         <div class="collapse" id="collapseExample">
         <ul">
            <li class="multiselect--li-bouquet"><label name="Zee life HD" class="multiselect--label-bouquet"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">Zee life HD</span></label></li>
            <li class="multiselect--li-bouquet"><label name="Fox news HD" class="multiselect--label-bouquet"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">Zee News HD</span></label></li>
         </ul></div>
         `
      node.appendChild(li);
      return;
   }
  li.innerHTML = `<label name="` + currentValue.title + `" class="multiselect--label"><input  type="checkbox" class="multiselect--checkbox" name="` + currentValue.title + `" value="` + currentValue.code + `"><span class="multiselect--title">` + currentValue.title +  `</span><span class="multiselect--price">₹ ` + currentValue.price + `</span></input></label>`
  node.appendChild(li);
 })
 var li = document.getElementsByClassName("multiselect--li");
 $('#multiselect--filter').on('input', function() { 
     console.log();
     var filter = $(this).val();
     for(var i = 0; i < li.length; i++) { 
        if(li[i].childNodes[0].getAttribute('name').toUpperCase().indexOf(filter.toUpperCase()) > -1){
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
 });
  $(".multiselect--checkbox").change(function() {
      if(this.checked) {
        this.parentElement.classList.add("selected");
        selectedList.push(this.name);
      }
      else {
        this.parentElement.classList.remove("selected")
        selectedList.pop(this.name)
      }
      if(selectedList < 1){
        $("#multiselect_btn__agree").prop('disabled', true);
        $("#multiselect_btn__agree").prop('textContent', "Select channels");
      }
      else {
        $("#multiselect_btn__agree").prop('disabled', false);
        $("#multiselect_btn__agree").prop('textContent', "Confirm " + selectedList.length + " channel(s).");
      }
  });
 $(".multiselect__btn-collapse").click(function() {
   console.log("BTN COLLAPSE");
   $(this).toggleClass("collapse-open")
 })

};
