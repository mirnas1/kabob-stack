(function(){
    const container = document.getElementById('kabob-container');
    const pushBtn   = document.getElementById('push-btn');
    const popBtn    = document.getElementById('pop-btn');
    const input     = document.getElementById('value-input');
  
    // color palette for kabobs
    const palette = [
      '#f1c40f','#e67e22','#c0392b',
      '#9b59b6','#2980b9','#27ae60'
    ];
  
    pushBtn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) return;
      const idx = container.querySelectorAll('.segment').length;
      const seg = document.createElement('div');
      seg.className = 'segment';
      seg.textContent = val;
      seg.style.background = palette[idx % palette.length];
      container.appendChild(seg);
      input.value = '';
    });
  
    popBtn.addEventListener('click', () => {
      const segments = container.querySelectorAll('.segment');
      if (segments.length) {
        container.removeChild(segments[segments.length - 1]);
      }
    });
  
    // drag-and-drop for arrows
    let dragItem = null, offsetX = 0, offsetY = 0;
    document.querySelectorAll('.arrow').forEach(arrow => {
      arrow.addEventListener('mousedown', e => {
        dragItem = arrow;
        offsetX = e.clientX - arrow.offsetLeft;
        offsetY = e.clientY - arrow.offsetTop;
        e.preventDefault();
      });
    });
    document.addEventListener('mousemove', e => {
      if (dragItem) {
        dragItem.style.left = (e.clientX - offsetX) + 'px';
        dragItem.style.top  = (e.clientY - offsetY) + 'px';
      }
    });
    document.addEventListener('mouseup', () => { dragItem = null; });
  })();
  