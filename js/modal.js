"use strict";function modal(){document.querySelector(".footer__list-link").addEventListener("click",function(i){i.preventDefault(),createModal()})}function createModal(){document.body.insertAdjacentHTML("afterbegin",'\n  <div class="privacy">\n        <div class="privacy__close">Close</div>\n        <div class="privacy__inner">\n          <div class="privacy__upper">\n            <h1 class="privacy__title">Privacy</h1>\n            <p class="privacy__subtitle">Hi there! You must be concerned about your privacy if you\'re reading this message. Your time is valuable so we\'ll keep it simple.         </p>\n          </div>\n          <div class="privacy__information">\n            <div class="privacy__information-ul">\n              <div class="privacy__information-list"> \n                <p class="privacy__information-text">\n                   We collect your email address and no other information from you.</p>\n              </div>\n              <div class="privacy__information-list"> \n                <p class="privacy__information-text">\n                   We\'ll use this information by adding you to our list of interested customers, send you occasional newsletters that include an opt-out link, and let you know when our service is ready to use.</p>\n              </div>\n              <div class="privacy__information-list"> \n                <p class="privacy__information-text">\n                   We promise not to transfer your information to a 3rd party service that are not directly required for us to perform business.                            </p>\n              </div>\n              <div class="privacy__information-list"> \n                <p class="privacy__information-text">\n                   Every email we send will include a link to opt out of any future communication. You can also contact hello@oxi.ai directly if you wish for your data to be 100% deleted.</p>\n              </div>\n            </div>\n          </div>\n          <footer class="privacy__footer">\n            <p class="privacy__footer-text">\n              That\'s all for now! This policy may be changed in the future, but we realize that you\'re paying us with your\n               attention and it\'s our goal to respect that transaction.\n            </p>\n          </footer>\n        </div>\n      </div>\n  ');var i=document.querySelector(".privacy__close"),n=document.querySelector(".privacy");i.addEventListener("click",function(){n.remove()})}modal();