function attachScript(path, callback) {
  
}


function attachCSS() {
	
}





var qCur = 0, qOn = 0, sOn = 0, qfOn = 0, qd = 0, l = 0, qa = 0, qfCur = -1, newSearch = 0;
// var qArr is in langpack

reqs = []; res = [];
friends_l = [];
friends_arr = [];
floaded = false;

function attachScript(id, c) {
 var i, new_id = c.substr(c.indexOf('/')+1, c.indexOf('.')-c.indexOf('/')+2).replace(/[\/\.]/g, '_');
 var newreqs = [];
 for (reqnum in reqs) {
  req = reqs[reqnum];
  if (req) {
   if (req.running == 0) {
    ge('req'+req.num).parentNode.removeChild(ge('req'+req.num));
    reqs[reqnum] = null;
   } else {
    newreqs[reqnum] = req;
   }
  }
 }
 reqs = newreqs;
 document.getElementsByTagName('head')[0].appendChild(
  ce('script', {id: id, type: 'text/javascript', src: ((!/^http:\/\//i.test(c) && !/^\//i.test(c)) ? base_domain : '') + c + (css_versions[new_id] ? ('?' + css_versions[new_id]) : '')})
 );
}


function destroy() {
 if (reqs[this.num]) {
  reqs[this.num].running = 0;
 }
}


function addCss(c) {
  var new_id = c.substr(c.indexOf('/')+1, c.indexOf('.')-c.indexOf('/')-1)+'_css';
  if (!ge(new_id)) {
    document.getElementsByTagName("head")[0].appendChild(
      ce('link', {type: 'text/css', rel: 'stylesheet', href: base_domain + c + (css_versions[new_id] ? ('?' + css_versions[new_id]) : ''), id: new_id, media: 'screen'})
    );
  }
}
