function modal(){
  let openBtn = document.querySelector('.footer__list-link');

  openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    createModal();
  })
  
}
modal()

function createModal(){
  let content = `
  <div class="privacy">
        <div class="privacy__close">Close</div>
        <div class="privacy__inner">
          <div class="privacy__upper">
            <h1 class="privacy__title">Privacy</h1>
            <p class="privacy__subtitle">Hi there! You must be concerned about your privacy if you're reading this message. Your time is valuable so we'll keep it simple.         </p>
          </div>
          <div class="privacy__information">
            <div class="privacy__information-ul">
              <div class="privacy__information-list"> 
                <p class="privacy__information-text">
                   We collect your email address and no other information from you.</p>
              </div>
              <div class="privacy__information-list"> 
                <p class="privacy__information-text">
                   We'll use this information by adding you to our list of interested customers, send you occasional newsletters that include an opt-out link, and let you know when our service is ready to use.</p>
              </div>
              <div class="privacy__information-list"> 
                <p class="privacy__information-text">
                   We promise not to transfer your information to a 3rd party service that are not directly required for us to perform business.                            </p>
              </div>
              <div class="privacy__information-list"> 
                <p class="privacy__information-text">
                   Every email we send will include a link to opt out of any future communication. You can also contact hello@oxi.ai directly if you wish for your data to be 100% deleted.</p>
              </div>
            </div>
          </div>
          <footer class="privacy__footer">
            <p class="privacy__footer-text">
              That's all for now! This policy may be changed in the future, but we realize that you're paying us with your
               attention and it's our goal to respect that transaction.
            </p>
          </footer>
        </div>
      </div>
  `
  document.body.insertAdjacentHTML('afterbegin', content);
  let closeBtn = document.querySelector('.privacy__close'),
  modal = document.querySelector('.privacy');
  
  closeBtn.addEventListener("click", function(){
    modal.remove()
  })
  
}