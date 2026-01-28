const faq_title =$( '.faq-item_title');
const faq_content =$(" .faq-item_content")


faq_title.click( function()  {

  const this_title = $(this);
  const this_content = $(this).parent().find(faq_content);

  this_content.slideToggle();

faq_content.not(this_content).slideUp();


  // faq_content. slideToggle();
} );

// الاسئلة 



$(document).ready(function () {
  $('#search').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('#book-list li').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
// للبحث






 
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// تسجيل الدخول

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});











