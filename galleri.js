const gallerier = document.querySelectorAll('.galleri-kategori');

gallerier.forEach((galleri) => {
  const slider = galleri.querySelector('.galleri-slider');
  const btnVenstre = galleri.querySelector('.venstre');
  const btnHoejre = galleri.querySelector('.hoejre');

  // Venstre-knap
  btnVenstre.addEventListener('click', () => {
    slider.scrollBy({ left: -400, behavior: 'smooth' });
  });

  // Højre-knap
  btnHoejre.addEventListener('click', () => {
    slider.scrollBy({ left: 400, behavior: 'smooth' });
  });
});

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }

        const img = document.createElement('img')
        img.src = image.src
        img.id = 'lightbox-billede';
        lightbox.appendChild(img);

        const closeBtn = document.createElement('div');
        closeBtn.id = 'luk-lightbox';
        closeBtn.innerHTML = '&times;';
        lightbox.appendChild(closeBtn);

        closeBtn.addEventListener('click', e => {
            lightbox.classList.remove('active');
        });
    });
});


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active')
});
