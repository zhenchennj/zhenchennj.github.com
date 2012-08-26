(function(){
    var imgs = getElementsByTag('sousuo', 'img');
    $('close').onclick = function() {
        $('detail').style.display = 'none';
    }
    if (imgs) {
        var height = Math.ceil(imgs.length/4) * 160 +100;
        $('detail').style.height = height + 'px';
        for (var i = 0; i < imgs.length; i++ ) {
            imgs[i].onclick = function() {
                var src = this.getAttribute('url');
                var content = $('content');
                var detail = $('detail');
                $('mainbox').style.top = ( 50 + Math.max(document.body.scrollTop,document.documentElement.scrollTop)) + 'px';
                detail.style.display = 'block';
                content.innerHTML = '';
                var img = document.createElement('img');
                img.onload = function() {
                    var img = this;
                    var w = img.width;
                    var h =  img.height;
                    while( w >800 || h > 500 ) {
                        w *= 0.9;
                        h *= 0.9;
                    }
                    img.width = w;
                    img.height = h;
                    content.style.width = 'auto';
                    content.style.height = 'auto';
                }
                img.setAttribute('src', src);
                content.appendChild(img);            
           }
           imgs[i].src = imgs[i].getAttribute('url');
           imgs[i].width='200';
           imgs[i].height='150';
        }
    }
    function getElementsByTag(node, tagname) {
        return  $(node).getElementsByTagName(tagname);
    } 
    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : id;
    }
}());        
