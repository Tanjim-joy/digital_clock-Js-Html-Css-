setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = h >= 12 ? 'PM' : 'AM';
  // let dt = Date();

  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');
  // let ddtt = document.getElementById('dt');

  if (h > 12) {
    h = h - 12;
  }

  h = (h < 10) ? '0' + h : h;
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;

  let hh_dots = document.querySelector('.h_dots');
  let mm_dots = document.querySelector('.m_dots');
  let ss_dots = document.querySelector('.s_dots');

  let hour = document.getElementById('hour').innerHTML = h + "<br><span>Hour</span>";
  let min = document.getElementById('min').innerHTML = m + "<br><span>Minute</span>";
  let sce = document.getElementById('sce').innerHTML = s + "<br><span>Second</span>";
  let ampm = document.getElementById('m').innerHTML = ap;
  // let datetimes = document.getElementById('dt').innerHTML = dt;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hh_dots.style.transform = `rotate(${h * 30}deg)`;
  mm_dots.style.transform = `rotate(${m * 6}deg)`;
  ss_dots.style.transform = `rotate(${s * 6}deg)`;

}, 1000)




