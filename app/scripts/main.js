// Handle form switcheroo
var radios = Array.prototype.slice.call(document.querySelectorAll('[name=coming]'));

radios.forEach(function(radio) {
  radio.addEventListener('change', function() {
    if (document.getElementById('coming').checked) {
      document.querySelector('.mailing-list').classList.remove('mailing-list--not-coming');
      document.querySelector('.mailing-list__form').setAttribute('action', '//wedding.us14.list-manage.com/subscribe/post?u=92a3d372e3589c053904d922b&amp;id=ba09a53b27');
    } else {
      document.querySelector('.mailing-list').classList.add('mailing-list--not-coming');
      document.querySelector('.mailing-list__form').setAttribute('action', 'https://formspree.io/gavyn.mckenzie@gmail.com');
    }
  });
});


