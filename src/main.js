// import React from 'react';

(() => {
  // alert('hi there');
  // const btn = document.querySelector('a-btn');
  // btn.addEventListener('click', alter('hi there'));

  setTimeout(() => {
    const btn = document.querySelector('a-btn');
    if (btn) {
      btn.addEventListener('click', () => alert('hi there'));
    }
  }, 2000);
})();
