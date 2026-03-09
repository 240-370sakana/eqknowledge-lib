function calc(f){ f.z.value=(1.- Math.exp( Math.pow(10,(eval(f.a.value)+eval(f.b.value)
            *(eval(f.mm.value)-eval(f.m.value))))*(Math.pow(eval(f.t.value)+eval(f.s.value)
            +eval(f.c.value),1-eval(f.p.value))-Math.pow(eval(f.s.value)
            +eval(f.c.value),1-eval(f.p.value)))/(eval(f.p.value)-1)))*100.;}
        function calc(f){f.z.value=2.68+1.72*(Math.log10((10*((3/2)**(2/3)))*eval(f.arv.value)))}