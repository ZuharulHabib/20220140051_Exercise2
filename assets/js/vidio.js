function showVideo(url) {
    const videoBackground = document.getElementById('video-background');
    videoBackground.src = url;
    videoBackground.style.display = 'block';
    videoBackground.play();

    Swal.fire({
      html: `
        <div id="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
          <iframe id="video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <button id="pauseBtn" style="margin-top: 10px;">Pause</button>
        <button id="closeBtn" style="margin-top: 10px;">Close</button>
      `,
      showConfirmButton: false,
      width: '800px',
      padding: '3em',
      background: '#fff',
      allowOutsideClick: true,
      customClass: {
        popup: 'video-popup'
      },
      didOpen: () => {
        // Jika popup dibuka, tambahkan listener untuk tombol pause
        document.getElementById('pauseBtn').addEventListener('click', function() {
          var iframe = document.getElementById('video');
          var videoSrc = iframe.src;
          iframe.src = '';
          iframe.src = videoSrc;
        });

        // Jika popup dibuka, tambahkan listener untuk tombol close
        document.getElementById('closeBtn').addEventListener('click', function() {
          closeVideo();
        });
      },
      willClose: () => {
        // Saat popup ditutup, sembunyikan video latar belakang
        videoBackground.pause();
        videoBackground.style.display = 'none';
      }
    });
  }

  // Fungsi untuk menutup popup
  function closeVideo() {
    Swal.close();
  }

  // Fungsi untuk menampilkan video dengan click1 sampai click4
  function click1() {
    showVideo('./assets/y2mate.com - 7  Orange MV Your Lie In April Live Action_720pFH.mp4');
  }

  function click2() {
    showVideo('./assets/y2mate.com - 好きだから ユイカMV_480p.mp4');
  }

  function click3() {
    showVideo('./assets/y2mate.com - YOASOBIあの夢をなぞって Official Music Video_1080p.mp4');
  }

  function click4() {
    showVideo('./assets/y2mate.com - Kimi no Suizou wo TabetaiAMV I Like You So Much Youll Know It  Ysabelle Cuevas_v720P.mp4');
  }