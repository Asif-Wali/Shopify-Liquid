
    // SearchpanelToggle
    {
    function showSearchPanel() {
      let SearchPanel = document.getElementById("SearchPanel");
          SearchPanel.style.display="block"
    }
    
    let SearchPanelButton=document.getElementById("showSearchPanel");
    SearchPanelButton.addEventListener("click", showSearchPanel)
    
    function hideSearchPanel() {
      let SearchPanel = document.getElementById("SearchPanel");
          SearchPanel.style.display="none"
    }
    
    let hideSearchPanelButton=document.getElementById("closeSearchPanel");
    hideSearchPanelButton.addEventListener("click", hideSearchPanel);
    }
    // header sidebar
    {
    
    function showHeaderSidebar(){
      let headersidebar = document.getElementById("headersidebar");
      headersidebar.style.display="block"
    }
    
    
    
    
    
    let showHeaderSidebarButton=document.getElementById("showHeaderSidebar");
    showHeaderSidebarButton.addEventListener("click", showHeaderSidebar);
    
    
    function hideHeaderSidebar(){
      let headersidebar = document.getElementById("headersidebar");
      headersidebar.style.display="none"
    }
    
    
    
    let hideHeaderSidebarButton=document.getElementById("closeHeaderSidebar");
    hideHeaderSidebarButton.addEventListener("click", hideHeaderSidebar);
    
    }
    //  profilemodal
    {
    function showProfileModal(){
      const profilemodal = document.getElementById("profilemodal");
      profilemodal.style.display="block";
    
    }
    
    let showProfilemodalButton=document.getElementById("profilemodalswitch");
    
    showProfilemodalButton.addEventListener("click", showProfileModal)
    
    function hideProfileModal() {
      var profileModal = document.getElementById('profilemodal');
      profileModal.style.display='none';
    }
    
    let hideProfilemodalButton=document.getElementById("profilemodal");
    
    hideProfilemodalButton.addEventListener("click", hideProfileModal)
    }
    // to prevent closing of the modal of inside div
    function keepModalOpen(event) {
      event.stopPropagation(); 
    }
    // header side drawer toggle
    {
      // face options
      function ToggleFaceOptions(){
          let FaceDiv=document.getElementById("faceOptions");
          if(FaceDiv.style.display === "none" || FaceDiv.style.display === ""){
              FaceDiv.style.display = "block";
              let button=document.getElementById("faceoptionsToggle");
              button.innerText="-"
              document.getElementById("BodyOptions").style.display="none"
              document.getElementById("bodyoptionsToggle").innerText="+"
      
              document.getElementById("HairOptions").style.display="none"
              document.getElementById("hairoptionsToggle").innerText="+"
              document.getElementById("MiniOptions").style.display="none"
              document.getElementById("minioptionsToggle").innerText="+"
              document.getElementById("ShopConcernOptions").style.display="none"
              document.getElementById("shopConcernOptionsToggle").innerText="+"
          }
          else{
              FaceDiv.style.display = "none";
              let button=document.getElementById("faceoptionsToggle");
              button.innerText="+";
          }
      
          }
      
      
      
      let faceToggle=document.getElementById("faceoptionsToggle");
      faceToggle.addEventListener("click", ToggleFaceOptions)
      
      // hairoptions
      
      function ToggleHairOptions(){
          let HairDiv=document.getElementById("HairOptions");
          if(HairDiv.style.display === "none" || HairDiv.style.display === ""){
              HairDiv.style.display = "block";
              let button=document.getElementById("hairoptionsToggle");
              button.innerText="-"
              document.getElementById("faceOptions").style.display="none"
              document.getElementById("faceoptionsToggle").innerText="+"
              document.getElementById("BodyOptions").style.display="none"
              document.getElementById("bodyoptionsToggle").innerText="+"
              document.getElementById("MiniOptions").style.display="none"
              document.getElementById("minioptionsToggle").innerText="+"
              document.getElementById("ShopConcernOptions").style.display="none"
              document.getElementById("shopConcernOptionsToggle").innerText="+"
          }
          else{
              HairDiv.style.display = "none";
              let button=document.getElementById("hairoptionsToggle");
              button.innerText="+";
          }
      
          }
      
      
      
      let HairToggle=document.getElementById("hairoptionsToggle");
      HairToggle.addEventListener("click", ToggleHairOptions)
      
      
      // body options
      
      function ToggleBodyOptions(){
          let BodyDiv=document.getElementById("BodyOptions");
          if(BodyDiv.style.display === "none" || BodyDiv.style.display === ""){
              BodyDiv.style.display = "block";
              let button=document.getElementById("bodyoptionsToggle");
              button.innerText="-"
              document.getElementById("faceOptions").style.display="none"
              document.getElementById("faceoptionsToggle").innerText="+"
              document.getElementById("HairOptions").style.display="none"
              document.getElementById("hairoptionsToggle").innerText="+"
              document.getElementById("MiniOptions").style.display="none"
              document.getElementById("minioptionsToggle").innerText="+"
              document.getElementById("ShopConcernOptions").style.display="none"
              document.getElementById("shopConcernOptionsToggle").innerText="+"
          }
          else{
              BodyDiv.style.display = "none";
              let button=document.getElementById("bodyoptionsToggle");
              button.innerText="+";
          }
      
          }
      
      
      
      let BodyToggle=document.getElementById("bodyoptionsToggle");
      BodyToggle.addEventListener("click", ToggleBodyOptions)
      
      // Mini Options
      
      
      function ToggleMiniOptions(){
          let MiniDiv=document.getElementById("MiniOptions");
          if(MiniDiv.style.display === "none" || MiniDiv.style.display === ""){
              MiniDiv.style.display = "block";
              let button=document.getElementById("minioptionsToggle");
              button.innerText="-"
              document.getElementById("faceOptions").style.display="none"
              document.getElementById("faceoptionsToggle").innerText="+"
              document.getElementById("HairOptions").style.display="none"
              document.getElementById("hairoptionsToggle").innerText="+"
              document.getElementById("BodyOptions").style.display="none"
              document.getElementById("bodyoptionsToggle").innerText="+"
              document.getElementById("ShopConcernOptions").style.display="none"
              document.getElementById("shopConcernOptionsToggle").innerText="+"
          }
          else{
              MiniDiv.style.display = "none";
              let button=document.getElementById("minioptionsToggle");
              button.innerText="+";
          }
      
          }
      
      
      
      let MiniToggle=document.getElementById("minioptionsToggle");
      MiniToggle.addEventListener("click", ToggleMiniOptions)
      
      
      
          // shop by concern
      
      function ToggleShopConcernOptions(){
          let ShopConcernDiv=document.getElementById("ShopConcernOptions");
          if(ShopConcernDiv.style.display === "none" || ShopConcernDiv.style.display === ""){
              ShopConcernDiv.style.display = "block";
              let button=document.getElementById("shopConcernOptionsToggle");
              button.innerText="-"
              document.getElementById("faceOptions").style.display="none"
              document.getElementById("faceoptionsToggle").innerText="+"
              document.getElementById("HairOptions").style.display="none"
              document.getElementById("hairoptionsToggle").innerText="+"
              document.getElementById("BodyOptions").style.display="none"
              document.getElementById("bodyoptionsToggle").innerText="+"
              document.getElementById("MiniOptions").style.display="none"
              document.getElementById("minioptionsToggle").innerText="+"
      
      
          }
          else{
              ShopConcernDiv.style.display = "none";
              let button=document.getElementById("shopConcernOptionsToggle");
              button.innerText="+";
          }
      
          }
      
      
      
      let ShopConcernToggle=document.getElementById("shopConcernOptionsToggle");
      ShopConcernToggle.addEventListener("click", ToggleShopConcernOptions)
      
    }
    
    function toggleCartSideBar() {
      const CartSideBar = document.getElementById("CartSideBar");
      CartSideBar.classList.toggle("hidden");
    }

    const CartSideBarToggleButton = document.getElementById("CartSideBarToggleButton");
    CartSideBarToggleButton.addEventListener("click", toggleCartSideBar);

    const CartSideBarCloseButton = document.getElementById("CartSideBarCloseButton");
    CartSideBarCloseButton.addEventListener("click", toggleCartSideBar);