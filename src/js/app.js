import '../scss/app.scss';

// Your JS Code goes here
const btn = document.getElementById('menu-toggle');
const cls = { open: 'open', close: 'close' };
let btnClass = cls.open;

btn.addEventListener('click', () => {
  if (btn.classList.contains(cls.open)) {
    btn.classList.remove(btnClass);
    btnClass = cls.close;
  } else if (btn.classList.contains(cls.close)) {
    btn.classList.remove(btnClass);
    btnClass = cls.open;
  }

  btn.classList.add(btnClass);
});
