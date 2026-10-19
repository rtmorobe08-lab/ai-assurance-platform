
(function(){
  var KEY = 'aurion:' + location.pathname;
  function all(el){ return Array.prototype.slice.call(el); }
  function save(k, v){ try { localStorage.setItem(KEY + ':' + k, v); } catch(e){} }
  function load(k){ try { return localStorage.getItem(KEY + ':' + k); } catch(e){ return null; } }
  function bind(el){
    var k = el.getAttribute('data-k');
    if(!k) return;
    var v = load(k);
    if(v !== null){ el.value = v; }
    el.addEventListener('input', function(){ save(k, el.value); flashSaved(); });
  }
  var savedTimer = null;
  function flashSaved(){
    var s = document.querySelector('.saved'); if(!s) return;
    s.textContent = 'Saved locally'; clearTimeout(savedTimer);
    savedTimer = setTimeout(function(){ s.textContent = ''; }, 1500);
  }
  document.addEventListener('DOMContentLoaded', function(){
    all(document.querySelectorAll('[data-k]')).forEach(bind);
    // default dates
    all(document.querySelectorAll('input[data-today]')).forEach(function(i){
      if(!i.value){ var d = new Date(); i.value = d.toISOString().slice(0,10); save(i.getAttribute('data-k')||'date', i.value); }
    });
    // print button
    var pb = document.getElementById('printBtn');
    if(pb) pb.addEventListener('click', function(){ window.print(); });
    // clear button
    var cb = document.getElementById('clearBtn');
    if(cb) cb.addEventListener('click', function(){
      if(!confirm('Clear all entries on this form? This cannot be undone.')) return;
      all(document.querySelectorAll('[data-k]')).forEach(function(el){
        el.value = '';
        try { localStorage.removeItem(KEY + ':' + el.getAttribute('data-k')); } catch(e){}
      });
    });
    // editable tables: add-row buttons
    all(document.querySelectorAll('button[data-add]')).forEach(function(b){
      b.addEventListener('click', function(){
        var tbl = document.getElementById(b.getAttribute('data-add'));
        if(!tbl) return;
        var body = tbl.querySelector('tbody');
        var proto = body.rows[0];
        var row = body.insertRow(-1);
        for(var c = 0; c < proto.cells.length; c++){
          var cell = row.insertCell(-1);
          var src = proto.cells[c].querySelector('input,select,textarea');
          if(src){
            var el = src.cloneNode(true);
            el.value = (el.tagName === 'SELECT') ? el.options[0] ? el.options[0].value : '' : '';
            if(el.tagName === 'SELECT'){ el.selectedIndex = 0; }
            var k = el.getAttribute('data-k');
            if(k && el.hasAttribute('data-k')){ el.setAttribute('data-k', k + ':' + Date.now()); }
            cell.appendChild(el);
          } else { cell.innerHTML = '&nbsp;'; }
        }
      });
    });
    // number tables: auto row numbers handled at render time
  });
})();
