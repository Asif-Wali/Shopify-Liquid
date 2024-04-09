// filtering through sidebar
{
function toggleCategory() {
    const checkboxDiv = document.getElementById("categoryCheckbox");
    checkboxDiv.classList.toggle("hidden");
}

const categoryToggle = document.getElementById("categoryCheckboxSwitch");
categoryToggle.addEventListener("click", toggleCategory);



function toggleConditions() {
    const checkboxDiv = document.getElementById("conditionsCheckbox");
    checkboxDiv.classList.toggle("hidden");
}

const ConditionsToggle = document.getElementById("conditionsCheckboxSwitch");
ConditionsToggle.addEventListener("click", toggleConditions);



function toggleConcerns() {
    const checkboxDiv = document.getElementById("concernsCheckbox");
    checkboxDiv.classList.toggle("hidden");
}

const ConcernsToggle = document.getElementById("concernsCheckboxSwitch");
ConcernsToggle.addEventListener("click", toggleConcerns);

function toggleRange() {
    const checkboxDiv = document.getElementById("RangeCheckbox");
    checkboxDiv.classList.toggle("hidden");
}

const RangeToggle = document.getElementById("RangeCheckboxSwitch");
RangeToggle.addEventListener("click", toggleRange);

function toggleAccordianOptions(){
    const AccordianDiv = document.getElementById("SortAccordianOptions");
    AccordianDiv.classList.toggle("hidden");

}

const SortToggle=document.getElementById("SortAccordian");
SortToggle.addEventListener("click",toggleAccordianOptions);
}
// showsidedrawer
{
function showsidefilter(){
    let filter=document.getElementById("filterdrawer")
    filter.style.display="block";
}
let sidefilterbutton=document.getElementById("sidefilterbutton");
sidefilterbutton.addEventListener("click", showsidefilter);



function closesidefilter(){
    console.log("closefunctioncalled")
    let filter=document.getElementById("filterdrawer")
    filter.style.display="none";
}
let closefilterDrawerbutton=document.getElementById("closeDrawer");
closefilterDrawerbutton.addEventListener("click", closesidefilter);

// filter through drawer 

function DrawertoggleCategory() {
    const DrawercheckboxDiv = document.getElementById("DrawercategoryCheckbox");
    DrawercheckboxDiv.classList.toggle("hidden");
}

const DrawercategoryToggle = document.getElementById("DrawercategoryCheckboxSwitch");
DrawercategoryToggle.addEventListener("click", DrawertoggleCategory);



function DrawertoggleConditions() {
    const DrawercheckboxDiv = document.getElementById("DrawerconditionsCheckbox");
    DrawercheckboxDiv.classList.toggle("hidden");
}

const DrawerConditionsToggle = document.getElementById("DrawerconditionsCheckboxSwitch");
DrawerConditionsToggle.addEventListener("click", DrawertoggleConditions);



function DrawertoggleConcerns() {
    const DrawercheckboxDiv = document.getElementById("DrawerconcernsCheckbox");
    DrawercheckboxDiv.classList.toggle("hidden");
}

const DrawerConcernsToggle = document.getElementById("DrawerconcernsCheckboxSwitch");
DrawerConcernsToggle.addEventListener("click", DrawertoggleConcerns);

function DrawertoggleRange() {
    const DrawercheckboxDiv = document.getElementById("DrawerRangeCheckbox");
    DrawercheckboxDiv.classList.toggle("hidden");
}

const DrawerRangeToggle = document.getElementById("DrawerRangeCheckboxSwitch");
DrawerRangeToggle.addEventListener("click", DrawertoggleRange)
}
