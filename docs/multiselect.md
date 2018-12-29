else if(jsonContent.message.quick_replies[messIndex].type == "TermsAndConditions"){


                var div = document.createElement('div');
               div.innerHTML = `<div id="multiselect" class="modal">                                    
               <div class="modal-content">
               <div class="modal-header">
               <h2 class="modal-header-title">Select your channels</h2>
               <span class="modal-close">&times;</span>
               </div>
               <div class="multiselect_wrapper">
                <div class="multiselect_container">
                  <div id="multiselect_content" class="multiselect_content">
                    <form>
                      <div class="multiselect--filter">
                        <input type="text" id="multiselect--filter" class="multiselect--filter-input" placeholder="Filter"/>
                      </div>
                      <ul class="multi-selected" id="ul">
                      </ul>
                    </form>
                  </div>


                  <div class="multiselect_footer">
                    <h4>Please choose your choice of channels.</h4>
                    <div class="multiselect_buttons">
                      <button id="multiselect_btn__agree" disabled="true" class="multiselect_btn multiselect_btn__agree" ><span>Confirm</span></button>
                    </div>
                  </div>
                </div>
               </div>
               <div class="modal-footer">
               <h3 class="modal-footer-title"></h3>
               </div>
               </div>

               </div>`
               
              var selectedList = []

              document.getElementsByClassName('idelivr-panel')[0].appendChild(div);
               
              // seatBooking(seatbook_json);

              var modal = document.getElementById("multiselect");
              
              modal.style.display = "block";
              
              function openSeat(){
                modal.style.display = "block";
              }

              console.log("Modal"); 
              var modal = document.getElementById('multiselect');
              // var btnDisAgree = document.getElementById('btn__disagree');
              var btnAgree = document.getElementById('multiselect_btn__agree');
              var span = document.getElementsByClassName("modal-close")[0];
              
              multiselect(selectedList);
                  // When the user clicks on <span> (x), close the modal
                  // span.onclick = function() {
                  //   console.log("SOPAN", span)
                  //   modal.style.display = "none";
                  // } 

                  btnAgree.onclick = function() {

                     modal.style.display = "none";
                      console.log(selectedList)
                    self.saveQuickMessage("Agreed","Agreed");
                 }

                 // btnDisAgree.onclick = function() {
                 //     modal.style.display = "none";
                 //   self.saveQuickMessage("Disagreed","Disagreed");
                 // }

                  // When the user clicks anywhere outside of the modal, close it
                  // window.onclick = function(event) {
                  //   if (event.target == modal) {
                  //     modal.style.display = "none";
                  //   }
                  // }
              }


            }
