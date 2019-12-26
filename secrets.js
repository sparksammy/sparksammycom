var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('q')) {
      document.getElementById('quote').innerHTML = '"This aint Google you silly goose." -- Sparksammy, 2019'
    }

    if (urlParams.has('notfd')) {
      location.href = '/not-fd.html'
    }