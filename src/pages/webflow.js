function isCalendlyEvent (e) {
  return e.data.event && e.data.event.indexOf ('calendly') === 0;
}

let isReady = false;

const saving = window.addEventListener ('message', function (e) {
  if (isCalendlyEvent (e)) {
    console.log (e.data);
    if (e.data.event === 'calendly.event_scheduled') {
      isReady = true;
      //   document.getElementById("checkbox-2").checked = true;
    } else {
      isReady = false;
      //     document.getElementById("checkbox-2").checked = false;
    }
  }
});

// Send event information to Google Analytics account
const button = document.getElementById ('CTA2');

button.addEventListener (
  'click',
  gtag ('event', 'open', {
    event_category: 'Lead Gen Form',
    event_label: 'meeting request',
  })
);

const submit = document.getElementById ('submit');

const errorFunc = function () {
  gtag ('event', 'error', {
    event_category: 'Lead Gen Form',
    event_label: 'meeting request',
  });
};

const form = document.getElementById ('lead-gen');
const fullName = document.getElementById ('fullName');
const email2 = document.getElementById ('email2');
const company = document.getElementById ('company2');
const website = document.getElementById ('website2');
const jobTitle = document.getElementById ('jobTitle');
const description = document.getElementById ('description2');
const howHear = document.getElementById ('how-did-you-hear');

const formChecker = function () {
  if (
    form.value == '' ||
    fullName.value == '' ||
    email2.value == '' ||
    company.value == '' ||
    website.value == '' ||
    jobTitle.value == '' ||
    description.value == '' ||
    email2.value.includes ('@') == false ||
    howHear.value == ''
  ) {
    console.log ('false');
    return false;
  } else {
    console.log ('true');
    return true;
  }
};

submit.addEventListener ('click', function (e) {
  console.log (e);
  if (formChecker ()) {
    console.log ('sending submit event');
    gtag ('event', 'submit', {
      event_category: 'Lead Gen Form',
      event_label: 'meeting request',
      value: 'product-page',
    });
  } else if (!formChecker ()) {
    errorFunc ();
    console.log ('sending error message');
  }
});

//blur backgrounnd when modal is shown. remove when it closes.
const grayDiv = document.getElementById ('gray');
const cta = document.getElementById ('CTA2');
const xout = document.getElementById ('xout');

cta.addEventListener ('click', e => {
  console.log (e);
  grayDiv.classList.add ('open');
  grayDiv.classList.remove ('blur');
});

submit.addEventListener ('click', e => {
  console.log (e);
  grayDiv.classList.remove ('open');
  grayDiv.classList.add ('zero-vis');
});

xout.addEventListener ('click', e => {
  console.log (e);
  grayDiv.classList.remove ('open');
  grayDiv.classList.add ('zero-vis');
});

shopHome = document.getElementById ('shop-click');

const swtichBiz = () => {
  sessionStorage.setItem ('mode', 'shopper');
  console.log ('resetting storeage to shopper');
};

//Code to make the aapointment required. Checkbox might need to be added
//back on the form.
/* const sButton = document.querySelector(".reg-checker");
 console.log(sButton);
 sButton.addEventListener('click', 
   function(e) {
   console.log(e)
    if (isReady) {
      console.log(e.data);
     document.getElementById("checkbox-2").checked = true;
      console.log(true)
    } else {
document.getElementById("checkbox-2").checked = false;
    console.log(false);
    alert("Please make an appointment");
  }
  }
  
);
*/
const part2 = document.getElementById ('part2');
const btn6 = document.getElementById ('button6');

btn6.addEventListener ('click', e => {
  if (!formChecker ()) {
    alert ('Please fill out all the fields');
  } else if (formChecker) {
    part2.classList.add ('show2');
  }
});
